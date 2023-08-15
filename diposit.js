document.getElementById('deposit-submit').addEventListener('click', function(){

const totalDeposits = document.getElementById('text-deposit');
const text = totalDeposits.value;
const totalDepositsString = parseFloat(text);




const total = document.getElementById('total-deposit');
const totalDepositsForMony = total.innerText
const totalMainString = parseFloat(totalDepositsForMony);

const totalsMonyInDeposit = totalMainString + totalDepositsString;

total.innerText = totalsMonyInDeposit;

const balanceField = document.getElementById('total-balance');
const balanceTotals = balanceField.innerText;
const previousBalanceTotal = parseFloat(balanceTotals);

const currentBalanceTotal = previousBalanceTotal + totalDepositsString;

balanceField.innerText = currentBalanceTotal;


 
totalDeposits.value = '';

})