var P1 = Math.floor(Math.random()*6 + 1), P2 = Math.floor(Math.random()*6 + 1);

document.querySelector(".img1").setAttribute("src","images/dice"+ P1 +".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ P2 +".png");

function trowDice(){
    if(P1>P2)
        document.querySelector("h1").innerHTML = "🚩Player One wins";
    else if(P1<P2)
        document.querySelector("h1").innerHTML = "Player Two wins🚩";
    else
        document.querySelector("h1").innerHTML = "Draw!";
}

trowDice();