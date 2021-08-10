const resetButton = document.querySelector("#reset");
const startingLife = document.querySelector("#playTo");
const p1 = {
    score: 20,
    increase: document.querySelector("#p1Increase"),
    decrease: document.querySelector("#p1Decrease"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 20,
    increase: document.querySelector("#p2Increase"),
    decrease: p2Decrease = document.querySelector("#p2Decrease"),
    display: document.querySelector("#p2Display") 
}

let losingScore = 0;
let isGameOver= false;
let p1Score= 20;
let p2Score = 20;

startingLife.addEventListener("change", function(){
    p1Score = parseInt(this.value);
    p2Score = parseInt(this.value);
    p1Display.textContent = p1Score;
    p1.score= p1Score;
    p2Display.textContent = p2Score;
    p2.score=p2Score;
})

function increaseScore (player) {
    player.score += 1;
    player.display.textContent= player.score;
}

p1.increase.addEventListener("click", function(){
    increaseScore(p1);   
})

p2.increase.addEventListener("click", function(){
    increaseScore(p2);
})

function decreaseScore (player, opponent) {
    if (!isGameOver) {
        player.score -= 1;
        if (player.score === losingScore) {
            isGameOver = true;
            player.increase.disabled = true;
            player.decrease.disabled = true;
            opponent.increase.disabled = true;
            opponent.decrease.disabled=true;
            player.display.classList.add("has-text-danger");
            opponent.display.classList.add("has-text-success")
        } 
        player.display.textContent= player.score;
    }
}

p1Decrease.addEventListener("click", function(){
    decreaseScore(p1, p2)  
})

p2Decrease.addEventListener("click", function(){
    decreaseScore (p2, p1)
})

function reset () {
    isGameOver= false;
    for (let p of [p1, p2]) {
        p.score = 20;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-danger");
        p.display.classList.remove("has-text-success");
        p.increase.disabled=false;
        p.decrease.disabled=false;
    }
}

resetButton.addEventListener("click", function(){
    reset(); 
})

