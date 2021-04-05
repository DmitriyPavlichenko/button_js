function printResult(numberSequence, sumOdd) {
    document.getElementById("sequence").innerHTML = "Your sequence: " + numberSequence;
    document.getElementById("sum").innerHTML = "Sum of odd numbers: " + sumOdd;
}

let button = document.querySelector("button");
button.onclick = function () {
    let step;
    while(true) {
        step = prompt('Write step: ', '5');
        if (step > 1 && step <= 15) {
            alert("All is right. Result is near...");
            break;
        } else {
            alert("Invalid input! Try again");
        }
    }

    let numberSequence = "";
    let sumOdd = 0;
    let currentNumb;
    for (let i = 1; i <= step; i++) {
        currentNumb = (i * i * i) * Math.pow(3, (2 * i));
        if (currentNumb % 2 !== 0) {
            numberSequence += currentNumb.toString().fontcolor("red") + " ";
            sumOdd += currentNumb;
            continue;
        }
        numberSequence += currentNumb + " ";
    }

    printResult(numberSequence, sumOdd);
}