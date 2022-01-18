const settingForm = document.querySelector("#game_form");
const settingNum = document.querySelector("#setting_num");
const inputNum = document.querySelector("#input_num")

function onPlaySubmit(event){
    event.preventDefault();
    const maxNum = parseInt(settingNum.value,10);
    const guessNum = parseInt(inputNum.value,10);

    if (guessNum > maxNum || isNaN(guessNum) === true){
        alert("범위 내의 값을 입력해주세요!");
    }else{
        game(guessNum,maxNum);
    }
}

const result = document.querySelector("#result");
const chooseNum = document.querySelector("#choose_num");
const machineNum = document.querySelector("#machine_num");
const message = document.querySelector("#message");
const HIDDEN_CLASSNAME = "hidden";

function game(guess,random){
    result.classList.remove(HIDDEN_CLASSNAME);
    chooseNum.innerText = guess;
    const answer = Math.floor(Math.random()*(random+1));
    machineNum.innerText = answer;

    if (guess === answer){
        message.innerText = "You win!"
    }else{
        message.innerText = "You lost!"
    }
}

settingForm.addEventListener("submit",onPlaySubmit);
