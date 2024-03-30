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
    if(input < price){
        alert('Customer does not have enough money to purchase the item')
        return
    }
    if(input === price){
        alert('No change due - customer paid with exact cash')
        return
    }

}
