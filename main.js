let NameInput = document.querySelector(".name");
let LastInput = document.querySelector(".last");
let AgeInput = document.querySelector(".age");
let Submit = document.querySelector(".btn");
let part = document.querySelector(".part");
let persons = [];
Submit.addEventListener('click' , function(){
    const person = {
        name:NameInput.value,
        Last:LastInput.value,
        age:AgeInput.value
    }
    persons.push(person);
    part.innerHTML += `
    <div class="user">
        <p class="ufname">${NameInput.value+" "+LastInput.value}</p>
        <p class="uage">${AgeInput.value}</p>
    </div>`;
    NameInput.value = '';
    LastInput.value = '';
    AgeInput.value = '';
})