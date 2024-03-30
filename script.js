//VARIABLES
const changeDueContainer = document.getElementById('change-due');
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cidMoney = document.getElementById('cid-money');

//start value

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];


let changeUnit = {};

//get change

function getChange(price, input){
    const currencyUnit=[
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.1],
        ['QUARTER', 0.25],
        ['DOLLAR', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['HUNDRED', 100],
    ]

    if(input < price){
        alert('Customer does not have enough money to purchase the item')
        return
    }
    if(input === price){
        alert('No change due - customer paid with exact cash')
        return
    };

    changeUnit = {}

    let change = Number((input - price).toFixed(2))

    for(let i = currencyUnit.length - 1; i >= 0; i--){

        let cidNumber = cid[i][1];
        let currencyUnitNumber = currencyUnit[i][1];
        let currencyUnitName = currencyUnit[i][0]

        if(cidNumber < currencyUnitNumber) continue
        while(change >= currencyUnitNumber){
            if(!changeUnit[currencyUnitName]){
                changeUnit[currencyUnitName] = 0
            }
            changeUnit[currencyUnit[i][0]] += currencyUnitNumber
            // changeUnit.push(currencyUnitValue)
            change = Number((change - currencyUnitNumber).toFixed(2))
        }
    }

   
    takeMoneyFromRegister()
}

function takeMoneyFromRegister(){
    for(let i = 0; i < cid.length; i++){
        if(changeUnit.hasOwnProperty(cid[i][0])){
            cid[i][1] = Number((cid[i][1] - changeUnit[cid[i][0]]).toFixed(2))
        }
    }
}

//TO DO
//aggiungi somma change unit 
//controlla se la somma è minore del change
//commit takeMoneyFromRegister
//aggiungi render

getChange(3, '5.54')
console.log(changeUnit)
console.log(cid)