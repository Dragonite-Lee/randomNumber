inputValue = document.querySelector(".maxNum");
btn = document.querySelector(".btn");
showRandomNum = document.querySelector(".randomNum");

function randomNum() {
    let randomRangeValue = Number(inputValue.value) + 1;
    let randomNum = Math.floor(Math.random() * randomRangeValue);
    showRandomNum.innerHTML = randomNum;
}

btn.addEventListener("click", randomNum);