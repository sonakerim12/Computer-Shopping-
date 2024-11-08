let form = document.querySelector("form");
let button = document.querySelector("#btn1");
let inputs = document.querySelectorAll("input");

inputs.forEach(input=>{
    input.addEventListener("keyup",()=>{
        let trueMessage = input.nextElementSibling;
        let falseMessage = input.nextElementSibling.nextElementSibling;
        if (input.checkValidity()) {
            trueMessage.style.display = "block";
            falseMessage.style.display = "none"
        }else{
            trueMessage.style.display = "none";
            falseMessage.style.display = "block"
        }
    })
})

button.addEventListener("click",(event)=>{
    event.preventDefault();
    if(form.checkValidity()){
        addNewUser();
        form.reset(); 
    }else{
        console.log("Form valid deyil");
    }
})

function checkUserFromLocalStorage() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users
}

function addNewUser() {
    let newUser = {};
    inputs.forEach(input => {
        newUser[input.name] = input.value
    });
    let users = checkUserFromLocalStorage();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User Elave edildi" , newUser);
}