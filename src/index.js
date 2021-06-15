import cipher from './cipher.js';

function butencode() {
    let password1 = document.querySelector('#senha1')
    let offset = Number(password1.value)
  //  console.log(offset)

    let mensage = document.querySelector('textarea').value
  //  console.log(mensage)   
    
    let result = cipher.encode(offset, mensage)
  //  console.log(result)

    let res = document.querySelector('div#res')
    res.innerHTML = result

}

const button1 = document.getElementById("bot1")
console.log(button1)
button1.addEventListener('click', butencode)

function butdecode() {
    let password1 = document.querySelector('#senha1')
    let offset = Number(password1.value)
  //  console.log(offset)

    let mensage = document.querySelector('textarea').value
   // console.log(mensage)   
    
    let result = cipher.decode(offset, mensage)
   // console.log(result)

    let res = document.querySelector('div#res')
    res.innerHTML = result
}

const button2 = document.getElementById("bot2")
console.log(button2)
button2.addEventListener('click', butdecode)







console.log(cipher);