document.querySelector('.event').addEventListener('click', function () {
    let num1 = Number(document.querySelector('.maths').value);
    let num2 = Number(document.querySelector('.python').value);
    let num3 = Number(document.querySelector('.chemistry').value);
    let num4 = Number(document.querySelector('.physics').value);
    let num5 = Number(document.querySelector('.dsd').value);
    let total = num1 + num2 + num3 + num4 + num5;
    let avg = total / 5;
    let maxMark = Math.max(num1, num2, num3, num4, num5);
    let minMark = Math.min(num1, num2, num3, num4, num5);
    document.querySelector('.totalMark').textContent = total;
    document.querySelector('.avgMark').textContent = avg;
    document.querySelector('.maxMark').textContent = maxMark;
    document.querySelector('.minMark').textContent = minMark;
    if (avg >= 90) {
        document.querySelector('.result').textContent="YAHHH YOU SCORED AN AVERAGE OF MORE THAN 90!!"
        document.querySelector('.content').style.backgroundColor = "#00FF00";
    }
    else if (80 <= avg && avg <= 89) {
        document.querySelector('.result').textContent = "SPLENDID YOU SCORED AN AVERAGE OF MORE THAN 80!!"
        document.querySelector('.content').style.backgroundColor = "#3498DB";
    }
    else if (70 <= avg && avg <= 79) {
        document.querySelector('.result').textContent = "YOU SCORED AN AVERAGE OF MORE THAN 70!! KEEP TRYING!!"
        document.querySelector('.content').style.backgroundColor = "#F8C471";
    }
    else if (60 <= avg && avg <= 69) {
        document.querySelector('.result').textContent = "YOU SCORED AVERAGE OF MORE THAN 60!! COULD BE BETTER!!"
        document.querySelector('.content').style.backgroundColor = "#D35400 ";
    }
    else if (50 <= avg && avg <= 59) {
        document.querySelector('.result').textContent = "YOU SCORED AVERAGE OF MORE THAN 50!! NEED IMPROVEMENT!!"
        document.querySelector('.content').style.backgroundColor = "#873600 ";
        document.querySelector('.content').style.Color = "white";
    }
    else {
        document.querySelector('.result').textContent = "YOU FAILED!! NEED IMPROVEMENT!!"
        document.querySelector('.content').style.backgroundColor = "black";
        document.querySelector('.content').style.color = "white";
    }
})
