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

    let changeCopy = change
    for(let i = currencyUnit.length - 1; i >= 0; i--){

        let cidNumber = cid[i][1];
        let currencyUnitNumber = currencyUnit[i][1];
        let currencyUnitName = currencyUnit[i][0]

        if(cidNumber < currencyUnitNumber) continue
        while(changeCopy >= currencyUnitNumber){
            if(!changeUnit[currencyUnitName]){
                changeUnit[currencyUnitName] = 0
            }
            changeUnit[currencyUnit[i][0]] += currencyUnitNumber
            // changeUnit.push(currencyUnitValue)
            changeCopy = Number((changeCopy - currencyUnitNumber).toFixed(2))
        }
    }
    const changeUnitSum = Object.values(changeUnit).reduce((a,b)=> a + b, 0)

    if(changeUnitSum < change){
        changeDueContainer.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`
        return
    }

   renderChangeUnit(changeUnit)
    takeMoneyFromRegister()
    updateCid(cid)
}

function takeMoneyFromRegister(){
    for(let i = 0; i < cid.length; i++){
        if(changeUnit.hasOwnProperty(cid[i][0])){
            cid[i][1] = Number((cid[i][1] - changeUnit[cid[i][0]]).toFixed(2))
        }
    }
}

function updateCid(arr){
    cidMoney.innerHTML = ''
    let name = ''
    arr.forEach((item)=> {
        switch(item[0]){
            case 'PENNY' : 
                name = 'Pennies';
                break;
            case 'NICKEL' : 
                name = 'Nickels';
                break;
            case 'DIME' : 
                name = 'Dimes';
                break;
            case 'QUARTER' : 
                name = 'Quarters';
                break;
            case 'ONE' : 
                name = 'Ones';
                break;
            case 'FIVE' : 
                name = 'Fives';
                break;
            case 'TEN' : 
                name = 'Tens';
                break;
            case 'TWENTY' : 
                name = 'Twenties';
                break;
            case 'ONE HUNDRED' : 
                name = 'Hundreds';
                break;
        }
        
        cidMoney.innerHTML += `
        <p>${name}: &#36;${item[1]}`
    })
}

function renderChangeUnit(obj){
    changeDueContainer.innerHTML = '';
    changeDueContainer.innerHTML = `<h3>Status: OPEN</h3>`
    for(let key in obj){
        changeDueContainer.innerHTML += `
        <p>${key}: &#36;${obj[key]}</p>`
    }
}


purchaseBtn.addEventListener('click', ()=>{
getChange(price, cashInput.value)

})

console.log(changeUnit)
console.log(cid)