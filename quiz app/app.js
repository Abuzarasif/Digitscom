function submit() {
    let score = 0;

    // question 1
    let answer1 = document.getElementById('rightone1');
    let answer2 = document.getElementById('q1-1');
    let answer3 = document.getElementById('q1-3');
    let answer4 = document.getElementById('q1-4');
    if (rightone1.checked === true) {
        score++;
    }
    // question 2
    let answer5 = document.getElementById('rightone2');
    let answer6 = document.getElementById('q2-2');
    let answer7 = document.getElementById('q2-3');
    let answer8 = document.getElementById('q2-4');
    if (rightone2.checked === true) {
        score++;
    }
    // question 3
    let answer9 = document.getElementById('rightone3');
    let answer10 = document.getElementById('q3-2');
    let answer11 = document.getElementById('q3-3');
    let answer12 = document.getElementById('q3-4');
    if (rightone3.checked === true) {
        score++;
    }
    // question 4
    let answer13 = document.getElementById('rightone4');
    let answer14 = document.getElementById('q4-1');
    let answer15 = document.getElementById('q4-2');
    let answer16 = document.getElementById('q4-4');
    if (rightone4.checked === true) {
        score++;
    }
    // question 5
    let answer17 = document.getElementById('rightone5');
    let answer18 = document.getElementById('q5-1');
    let answer19 = document.getElementById('q5-2');
    let answer20 = document.getElementById('q5-4');
    if (rightone5.checked === true) {
        score++;
    }

    // question 6
    let answer21 = document.getElementById('rightone6');
    let answer22 = document.getElementById('q6-2');
    let answer23 = document.getElementById('q6-3');
    let answer24 = document.getElementById('q6-4');
    if (rightone6.checked === true) {
        score++;
    }

    // question 7
    let answer25 = document.getElementById('q7-1');
    let answer26 = document.getElementById('q7-2');
    let answer27 = document.getElementById('rightone7');
    let answer28 = document.getElementById('q7-4');
    if (rightone7.checked === true) {
        score++;
    }

    // question 8
    let answer29 = document.getElementById('rightone8');
    let answer30 = document.getElementById('q8-1');
    let answer31 = document.getElementById('q8-2');
    let answer32 = document.getElementById('q8-4');
    if (rightone8.checked === true) {
        score++;
    }

    // question 9
    let answer33 = document.getElementById('rightone9');
    let answer34 = document.getElementById('q9-2');
    let answer35 = document.getElementById('q9-3');
    let answer36 = document.getElementById('q9-4');
    if (rightone9.checked === true) {
        score++;
    }

    // question 10
    let answer37 = document.getElementById('rightone10');
    let answer38 = document.getElementById('q10-2');
    let answer39 = document.getElementById('q10-3');
    let answer40 = document.getElementById('q10-4');
    if (rightone10.checked === true) {
        score++;
    }


    alert("your score is " + score);
}