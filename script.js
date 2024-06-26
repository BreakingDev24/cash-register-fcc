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
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100],
    ]

    if(input < price){
        alert('Customer does not have enough money to purchase the item')
        return
    }
    if(input == price){
        changeDueContainer.innerHTML = `<p>No change due - customer paid with exact cash</p>`
        return
    };

    changeUnit = {}

    let change = Number((input - price).toFixed(2))

    let changeCopy = change
    for(let i = currencyUnit.length -1; i >= 0; i--){
        let currencyUnitNumber = currencyUnit[i][1];
        let currencyUnitName = currencyUnit[i][0]
        let cidNumber = cid[i][1];

        // console.log(cidNumber)
        
        console.log(changeCopy >= currencyUnitNumber, changeCopy, currencyUnitNumber)
        while(changeCopy >= currencyUnitNumber && cidNumber >= currencyUnitNumber){

            if(!changeUnit[currencyUnitName]){
                changeUnit[currencyUnitName] = 0
            }
            changeUnit[currencyUnit[i][0]] += currencyUnitNumber

            changeCopy = Number((changeCopy - currencyUnitNumber).toFixed(2))
            cidNumber = Number((cidNumber - currencyUnitNumber).toFixed(2))
            
        }
        cid[i][1] = cidNumber
    }
    console.log(cid);
    
    const changeUnitSum = Object.values(changeUnit).reduce((a,b)=> a + b, 0).toFixed(2)
    console.log(changeUnitSum);
    console.log(change);
    if(changeUnitSum < change){
        changeDueContainer.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`
        return
    }
    console.log(changeUnit)

    const totalCid = cid.reduce((acc, currentArray) => {
        currentArray.forEach(item => {
            if(typeof item === 'number'){
                acc += item
            }
        });
        return acc
    }, 0)

    console.log(totalCid, 'total cid')


    
    updateCid(cid)
    renderChangeUnit(changeUnit, totalCid)
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

function renderChangeUnit(obj, drawer){
    changeDueContainer.innerHTML = '';
    changeDueContainer.innerHTML = `<h3>${drawer === 0 ? 'Status: CLOSED' : 'Status: OPEN<'}/h3>`
    for(let key in obj){
        changeDueContainer.innerHTML += `
        <p>${key}: &#36;${obj[key]}</p>`
    }
}


purchaseBtn.addEventListener('click', ()=>{
getChange(price, cashInput.value)

})

