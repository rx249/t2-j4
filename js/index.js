const hint = document.getElementById("hint");
const check_button = document.getElementById("check-button");
const user_input = document.getElementById("user-input");
const count_guess = document.getElementById("chance-count");

let guess_number = Math.floor(Math.random() * 100) + 1;
let count_chance = 0;
let game_over = false;
check_button.addEventListener("click" , compare);

function compare() {

    

    if(game_over)

        {
            game_over = false;
            count_chance = 0;
            check_button.innerText = "Check";
            guess_number = Math.floor(Math.random() * 100) + 1;
            hint.innerText = "I'm waiting for you!";
            count_guess.innerText = count_chance;
            user_input.disabled=false;
            return;
        }

        let user_number = parseInt(user_input.value);
        count_chance++;
        count_guess.innerText = count_chance;

        



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
    user_input.value = "";
    user_input.focus();
}
    
