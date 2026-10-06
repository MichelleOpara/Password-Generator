let pswrdOneEl = document.getElementById("Pswrd_one")
let pswrdTwoEl = document.getElementById("Pswrd_two")
let pswrdButtonEl = document.getElementById("password-btn")
let lengthEL = document.getElementById("length")
let rangeEl = document.getElementById("range")
let Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Lcase = "abcdefghijklmnopqrstuvwxyz"
let numb = "0123456789"
let symb = "!@#$%^&*_,-."
let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_,-."

//check boxes

let UcaseEl = document.getElementById("uppercase")
let LcaseEl = document.getElementById("lowercase")
let numbEl = document.getElementById("numbers")
let symbEl = document.getElementById("symbols")

rangeEl.addEventListener('input' , function(){
    lengthEL.textContent = "Length: " + rangeEl.value
})



function generatePassword() {
    let checkedChar = ""

    if (UcaseEl.checked){ //element.property
        checkedChar += Ucase
    }
    if(LcaseEl.checked){
        checkedChar += Lcase
    } 
    if(numbEl.checked){
        checkedChar += numb
    }
    if(symbEl.checked){
        checkedChar += symb
    }
    if(checkedChar === ""){
        alert("Tick at least one ")
        return
    }


    let rangeValue = parseInt(rangeEl.value)
    
    function password(){
        let passwordValue = ""
        for(let i = 0; i < rangeValue; i++){
            let randomIndex = Math.floor(Math.random()* checkedChar.length)
            passwordValue += checkedChar[randomIndex]   
        }
        return passwordValue
    }
   pswrdOneEl.textContent = password()
   pswrdTwoEl.textContent = password()
}

function copyToClipboard(element){
    let copiedPswrd = element.textContent
    if (copiedPswrd === "" || copiedPswrd ==="Password 1" || copiedPswrd === "Password 2"){
        return
    }else{
        navigator.clipboard.writeText(copiedPswrd)
        alert('Copied: ' + copiedPswrd)
    }
}
function copyOne(){
    copyToClipboard(pswrdOneEl)
}
function copyTwo(){
    copyToClipboard(pswrdTwoEl)
}
