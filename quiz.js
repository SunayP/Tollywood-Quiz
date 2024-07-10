const questions = document.querySelectorAll('.questions');
const btns = document.querySelectorAll('.btn');
const next_btn = document.getElementById("next");
const score = document.getElementById("score");
let myScore = 0;

questions.forEach(question => {
    question.style.display = "none";
});

let questionNumber = 0;

function startQuiz() {
    btns.forEach(ans => {
        ans.disabled = false;
    })
    if (questionNumber < questions.length) {
        questions[questionNumber].style.display = "block";
    }
}

function updateScore() {
    score.textContent = `Score: ${myScore}`;
}

function removePrev() {
    next_btn.style.display = "none";
    questions[questionNumber].style.display = "none";
}

btns.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.value === "correct") {
            myScore += 1;
            answer.classList.toggle("corrected");
        } else {
            answer.classList.toggle("incorrected");
            btns.forEach(ans => {
                if (ans.value === "correct") {
                    ans.classList.toggle("corrected");
                    return true;
                }
            });
        }
        btns.forEach(ans => {
            ans.disabled = true;
        })
        
        answer.style.pointerEvents = "none";
        next_btn.style.display = "block";
    });

});

next_btn.addEventListener('click', () => {
    
    if (questionNumber < questions.length) {
        removePrev();
        questionNumber++;
        if (questionNumber < questions.length) {
            startQuiz();
        } else {
            score.textContent = `Final Score: ${myScore}`;
        }
    }
    btns.forEach(ans => {
        ans.classList.remove("corrected", "incorrected");
    });
    answer.classList.remove("corrected", "incorrected");
})
startQuiz();