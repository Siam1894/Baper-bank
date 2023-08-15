document.getElementById('withdraw-submit').addEventListener('click', function(){
    

   const total = document.getElementById('text-withdraw');
   const withdrawField = total.value;
   const totalWithdrawElement = parseFloat(withdrawField);


   total.value = '';

    if(isNaN(totalWithdrawElement)){
        alert('ada number na namber dee')
        return;
    }

    const withdraws = document.getElementById('total-withdraw');
    const Amounts = withdraws.innerText;
    const AmountTotal = parseFloat(Amounts); 
    


    const totalBalanceWithdraw = document.getElementById('total-balance');
    const WithdrawTotal = totalBalanceWithdraw.innerText;
    const finish = parseFloat(WithdrawTotal);

   

    if(totalWithdrawElement > finish){
        alert('baper banke ato taka nai..!')
        return;
    }

    const AmountOfWithdraw = AmountTotal + totalWithdrawElement ;

    withdraws.innerText = AmountOfWithdraw; 


    const allTotal = finish - totalWithdrawElement;


    totalBalanceWithdraw.innerText = allTotal;




    
 
  
})