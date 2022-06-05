const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('.alert-container');
 
btnEl.addEventListener('click',()=>{
    createPassword();
})

function createPassword(){
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const passwordLength = 14;
    let password = '';
    for(let i = 0; i<passwordLength; i++){
        password+=chars[Math.floor(Math.random()*chars.length)];
    }
    inputEl.value = password;
    alertContainerEl.innerText = `${password} copied`
     
}

copyIconEl.addEventListener('click',()=>{
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove('active');
        setTimeout(()=>{
            alertContainerEl.classList.add('active');
        },2000)
    }
})

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}

