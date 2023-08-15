document.getElementById('Btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('email-submit');
    const  email = emailField.value;

    const passField = document.getElementById('pass-submit');
    const password = passField.value;

    if(email === 'soon@father.com' && password === 'bap.pola'){
        window.location.href = 'bank.html';

    }
    else{
        alert('Password bhuilla gesos mara kha')
    }



})