


   // Initially hide quizSection1
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('quizSection1').style.display = 'none';
        });


    // Function to show quiz section and hide button section when a level button is clicked
    function showQuiz(level) {
        document.getElementById('buttonSection').style.display = 'none';
        document.getElementById('quizSection1').style.display = 'none';
        document.getElementById('quizSection2').style.display = 'none';
        document.getElementById('quizSection3').style.display = 'none';
        document.getElementById(`quizSection${level}`).style.display = 'block';
    }


   // Timer functionality
   let seconds2 = 0;
    let minutes2 = 0;
    let interval2 = null; // Променлива за съхранение на setInterval

    function startTimer2() {
        clearInterval(interval2); // Изчистваме предишния интервал, ако има такъв
        seconds2 = 0;
        minutes2 = 0;
        interval2 = setInterval(updateTimer2, 1000); // Стартираме нов интервал
    }

    function updateTimer2() {
        seconds2++;
        if (seconds2 >= 60) {
            seconds2 = 0;
            minutes2++;
        }

        let formattedMinutes2 = minutes2 < 10 ? `0${minutes2}` : minutes2;
        let formattedSeconds2 = seconds2 < 10 ? `0${seconds2}` : seconds2;

        document.getElementById('timer2').innerText = `Време: ${formattedMinutes2}:${formattedSeconds2}`;
    }

    // При зареждане на страницата, стартирайте таймера
    window.onload = function() {
        startTimer2(); // Инициализираме новия таймер
    };
    
    setInterval(updateTimer2, 1000);
    // Quiz submission and result calculation
    document.getElementById('submit2').addEventListener('click', function() { // changed 'submit' to 'submit2'
        const correctAnswers = {
                q1: 'd',
                q2: 'c',
                q3: 'b',
                q4: 'a',
                q5: 'a'
            };


        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let questionId in correctAnswers) {
            const correctAnswer = correctAnswers[questionId];
            const userAnswer = userAnswers2[questionId]; // changed 'userAnswers' to 'userAnswers2'

            if (userAnswer === correctAnswer) {
                score++;
            }
        }

        document.getElementById('results2').innerText = `Вашият резултат: ${score} от ${totalQuestions}. Време: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        // Unlock the next level if the quiz is passed
        if (score === totalQuestions) {
            if (currentLevel === 1) {
                document.getElementById('level2').disabled = false;
                document.getElementById('level2').classList.remove('locked-button');
                document.getElementById('level2').classList.add('blue-button');
            } else if (currentLevel === 2) {
                document.getElementById('level3').disabled = false;
                document.getElementById('level3').classList.remove('locked-button');
                document.getElementById('level3').classList.add('blue-button');
            }
            document.getElementById(`quizSection${currentLevel}`).style.display = 'none';
            document.getElementById('buttonSection').style.display = 'inline';
        }
        else {
            document.getElementById('retry2').style.display = 'inline'; // changed 'retry' to 'retry2'
            document.getElementById('submit2').style.display = 'none'; // changed 'submit' to 'submit2'
            document.getElementById('timer').style.display = 'none';
        }
    });

    // Set up level buttons to show the quiz and set the current level
     currentLevel = 1;

    document.getElementById('level1').addEventListener('click', function() {
        currentLevel = 1;
        showQuiz(1);
    });

    document.getElementById('level2').addEventListener('click', function() {
        if (!this.disabled) {
            currentLevel = 2;
            showQuiz(2);
        }
    });

    document.getElementById('level3').addEventListener('click', function() {
        if (!this.disabled) {
            currentLevel = 3;
            showQuiz(3);
        }
    });

    // Initially hide quizSection1
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('quizSection1').style.display = 'none';
    });

    


    // Function to show quiz section and hide button section when a level button is clicked
    function showQuiz(level) {
        document.getElementById('buttonSection').style.display = 'none';
        document.getElementById('quizSection1').style.display = 'none';
        document.getElementById('quizSection2').style.display = 'none';
        document.getElementById('quizSection3').style.display = 'none';
        document.getElementById(`quizSection${level}`).style.display = 'block';
    }

   // Timer functionality
let seconds3 = 0;
let minutes3 = 0;
let interval3 = null; // Променлива за съхранение на setInterval

function startTimer3() {
    clearInterval(interval3); // Изчистваме предишния интервал, ако има такъв
    seconds3 = 0;
    minutes3 = 0;
    interval3 = setInterval(updateTimer3, 1000); // Стартираме нов интервал
}

function updateTimer3() {
    seconds3++;
    if (seconds3 >= 60) {
        seconds3 = 0;
        minutes3++;
    }

    let formattedMinutes3 = minutes3 < 10 ? `0${minutes3}` : minutes3;
    let formattedSeconds3 = seconds3 < 10 ? `0${seconds3}` : seconds3;

    document.getElementById('timer3').innerText = `Време: ${formattedMinutes3}:${formattedSeconds3}`;
}

// При зареждане на страницата, стартирайте таймера
window.onload = function() {
    startTimer3(); // Инициализираме новия таймер
};
setInterval(updateTimer3, 1000);
// Quiz submission and result calculation
document.getElementById('submit3').addEventListener('click', function() {
   const correctAnswers = {
                q1: 'a,
                q2: 'a',
                q3: 'c',
                q4: 'd',
                q5: 'b'
            };


    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let questionId in correctAnswers) {
        const correctAnswer = correctAnswers[questionId];
        const userAnswer = userAnswers3[questionId]; // Промених 'userAnswers2' на 'userAnswers3'

        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    document.getElementById('results3').innerText = `Вашият резултат: ${score} от ${totalQuestions}. Време: ${minutes3}:${seconds3 < 10 ? '0' + seconds3 : seconds3}`;
        // Unlock the next level if the quiz is passed
        if (score === totalQuestions) {
            if (currentLevel === 1) {
                document.getElementById('level2').disabled = false;
                document.getElementById('level2').classList.remove('locked-button');
                document.getElementById('level2').classList.add('blue-button');
            } else if (currentLevel === 2) {
                document.getElementById('level3').disabled = false;
                document.getElementById('level3').classList.remove('locked-button');
                document.getElementById('level3').classList.add('blue-button');
            }
            else if (currentLevel === 3) {
                window.location.href="http://naturaldisastersquiz-bg.free.nf/completed.html";
            }
            document.getElementById(`quizSection${currentLevel}`).style.display = 'none';
            document.getElementById('buttonSection').style.display = 'inline';
        }
        else {
            document.getElementById('retry3').style.display = 'inline'; // changed 'retry' to 'retry2'
            document.getElementById('submit3').style.display = 'none'; // changed 'submit' to 'submit2'
            document.getElementById('timer3').style.display = 'none';
        }
    });

    // Set up level buttons to show the quiz and set the current level
     currentLevel = 1;

    document.getElementById('level1').addEventListener('click', function() {
        currentLevel = 1;
        showQuiz(1);
    });

    document.getElementById('level2').addEventListener('click', function() {
        if (!this.disabled) {
            currentLevel = 2;
            showQuiz(2);
        }
    });

    document.getElementById('level3').addEventListener('click', function() {
        if (!this.disabled) {
            currentLevel = 3;
            showQuiz(3);
        }
    });

    // Initially hide quizSection1
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('quizSection1').style.display = 'none';
    });
    function f() {
            sessionStorage.setItem('buttonClicked', 'true'); // Запазваме в sessionStorage, че бутона е натиснат
            location.reload(); // Презареждаме страницата
        }

        // Функция за бутона за третото ниво
        function f2() {
            sessionStorage.setItem('buttonClicked2', 'true'); // Запазваме в sessionStorage, че бутона е натиснат
            location.reload(); // Презареждаме страницата
        }

        // Проверяваме, когато страницата е заредена
        window.onload = function() {
            var buttonClicked = sessionStorage.getItem('buttonClicked');
            var buttonClicked2 = sessionStorage.getItem('buttonClicked2');

            var level2Button = document.getElementById('level2');
            var level3Button = document.getElementById('level3');

            if (buttonClicked === 'true' && level2Button) {
                level2Button.disabled = false;
                level2Button.style.backgroundColor = "#2196F3";
            }

            if (buttonClicked2 === 'true' && level3Button) {
                level3Button.disabled = false;
                level3Button.style.backgroundColor = "#2196F3";
                level2Button.disabled = false;
                level2Button.style.backgroundColor = "#2196F3";
            }

            sessionStorage.removeItem('buttonClicked');
            sessionStorage.removeItem('buttonClicked2');
        };
     
