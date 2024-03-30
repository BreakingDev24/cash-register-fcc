//VARIABLES
const changeDueContainer = document.getElementById('change-due');
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const chidMoney = document.getElementById('cid-money');

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


let changeUnit = [];

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

    changeUnit = []

    let change = Number((input - price).toFixed(2))

    for(let i = currencyUnit.length - 1; i >= 0; i--){
        while(change >= currencyUnit[i][1]){
            changeUnit.push(currencyUnit[i][1])
            change = Number((change - currencyUnit[i][1]).toFixed(2))
        }
    }
}

getChange(3, '5.54')
console.log(changeUnit)