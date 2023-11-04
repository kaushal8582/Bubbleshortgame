var timer = 30;
var score = 0;
var ranhit = 0;

function scoreIncrease() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function newHit() {
    ranhit = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").textContent = ranhit;
}

function getTimer() {

    var timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer
        } else {
            clearInterval(timeint);
            document.querySelector('#pbtm').innerHTML = `
            <div class="gameover">
            <h3>Game Over</h3>
            <h2>Score : <span>${score}</span></h2>
            <div id="play"> 
                <i class="fa-solid fa-play"></i>
            </div>
        </div>`;
            document.querySelector("#pannel").style.backgroundColor = "#515050"
            document.querySelector("#newhit").textContent = "0";
        }
    }, 1000);
}

function createBubble() {
    var cluter = "";

    for (var i = 1; i <= 207; i++) {
        let rn = Math.floor(Math.random() * 10)
        cluter += ` <div class="bubble">${rn}</div>`
    }

    document.querySelector('#pbtm').innerHTML = cluter;
}

function clickHit() {
    document.querySelector("#pbtm").addEventListener("click", (dets) => {
        var bvalue = (Number(dets.target.textContent));
        if (bvalue === ranhit) {
            scoreIncrease();
            newHit();
            createBubble();
        }
    })
}

function restart() {
    createBubble();
    getTimer();
    newHit();
}

document.addEventListener("click", (event) => {
    if (event.target.matches("#play i")) {
        document.querySelector("#pannel").style.backgroundColor = "#ffffff"
        score = 0;
        document.querySelector("#score").textContent = score;
        timer = 30
        document.querySelector("#timer").textContent = timer
        restart();
    }


})



createBubble();
getTimer();
newHit();
clickHit();