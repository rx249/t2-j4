const hint = document.getElementById("hint");
const check_button = document.getElementById("check-button");
const user_input = document.getElementById("user-input");
const count_guess = document.getElementById("chance-count");

let guess_number = Math.floor(Math.random() * 100) + 1;
let count_chance = 0;
check_button.addEventListener("click" , compare);

function compare() {
    let user_number = parseInt(user_input.value);

    if(game_over)
    {
        count_chance = 0;

    }


    if(user_number > guess_number)
    {
        hint.innerText = "Enter a Lower Number";
    }
    else if (user_number < guess_number)
    {
        hint.innerText = "Enter a Bigger Number";
    }
    else if (user_number == guess_number)
    {
        hint.innerText = "correct You Found The Secret";
        game_over = true
    }
    console.log(user_number);
    
    if(game_over)
    {
        check_button.innerText = "play again!";
        user_input.disabled=true;

    }


}
