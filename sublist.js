const fname = document.getElementById('name');
const email = document.getElementById('Email');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Clicked');

    let ebody = `
    <b>Name: </h1>${Name.value}
    <br>
    <b>Email: </h1>${email.value} 
    <br> 
    `
   
   
    Email.send({
        SecureToken : "7f97f3d4-27e3-4ec8-8bd5-465d176c82e7",
        To : 'fearlessmindc@gmail.com',
        From : "fearlessmindc@gmail.com",
        Subject : "Email testing from" + Email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
    }) ;