let form = document.querySelector('#form');
let pass = document.querySelector('#pass');
let conPass = document.querySelector('#conPass');
let error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    errorMess()

    if(pass.value.length <= 5){
        errorMess('password must be at least 6 characters')
    }else  if(pass.value !== conPass.value){
        errorMess('passwords do not match')
    }
    else{
        alert('ok password')
    }

})

const errorMess = (text) => {
    if(text == null){
        error.classList.remove('action')
    }else{
        error.classList.add('action')
        error.innerHTML = text
    }
}