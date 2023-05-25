
var button = document.getElementById("stone-image");
button.addEventListener('click', Click);

var woodPick = document.getElementById("pickaxe-wood-img");
woodPick.addEventListener('click', (evt) => BuyItem("woodpick"));

var moneyText = document.getElementById("money");

var money = 0;
var moneyMultiplyer = 1;
var earningsPerSecond = 0;

//store items
var woodpicks = 0;

setInterval(Update, 100);

function Update(){
    money = money + earningsPerSecond;
    UpdateMoney();
}

function Click(){
    console.log("click")
    money += 1 * moneyMultiplyer;
    UpdateMoney();
}

function UpdateMoney(){
    switch(money){
        case money < 1000: 
            moneyText.innerHTML = "Money: " + money.toFixed(2); 
            break;

        case money < 1000000:
            moneyText.innerHTML = "Money: " + money;
            break;
                     
        case money < 1000000000:
            moneyText.innerHTML = "Money: " + money + "K";
            break;

        case money < 1000000000000:
            moneyText.innerHTML = "Money: " + money + "M";
            break;

        case money < 1000000000000000:
            moneyText.innerHTML = "Money: " + money + "G";
            break;

        default:
            moneyText.innerHTML = "Money: " + money.toFixed(2);
            break;
    }
}

function BuyItem(item){
    console.log("bought" + item);
    switch (item){
        case "woodpick":
            woodpicks++;
            earningsPerSecond += 0.05;
            document.getElementById("pickaxe-wood").innerHTML = "Pickaxes: " + woodpicks;
            break;
    }
}