var button = document.getElementById("car-image");
button.addEventListener('click', click);

var moneyText = document.getElementById("money");

var money = 0;
var moneyMultiplyer = 1;
var EarningsPerSecond = 0;

function click(){
    console.log("click")
    money += 1 *moneyMultiplyer;
    moneyText.innerHTML = "Money: " + money;
}
