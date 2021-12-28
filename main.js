let NameInput = document.querySelector(".name");
let LastInput = document.querySelector(".last");
let AgeInput = document.querySelector(".age");
let Submit = document.querySelector(".btn");
let part = document.querySelector(".part");
let turn = document.querySelector(".turnnam");
let tb = document.querySelector(".tt");
let persons = [];
let nup;
Submit.addEventListener('click' , function(){
    const person = {
        name:NameInput.value,
        Last:LastInput.value,
        age:AgeInput.value
    }
    if (person.name !== '' && person.Last !== '' && person.age !== '') {
        persons.push(person);
        part.innerHTML += `
        <div class="user">
            <p class="ufname">${NameInput.value+" "+LastInput.value}</p>
            <p class="uage">${AgeInput.value}</p>
        </div>`;
        NameInput.value = '';
        LastInput.value = '';
        AgeInput.value = '';
        console.log(persons);
        nup = persons.length;
        console.log(nup);
        turn.innerHTML = persons[0].name;
    };
});
let dice = document.querySelector(".dice");
function rand() {
return Math.floor(Math.random()* 6) + 1;
};
let i = 0;
tb.addEventListener('click' , function() {
    dice.innerHTML = rand();
    console.log (persons[i].name +" "+ dice.innerHTML);
    i++;
    if (i == nup) { i = 0; };
    turn.innerHTML = persons[i].name;
});
let step = document.querySelector(".stepone");
let start = document.querySelector(".start");
start.addEventListener('click' , function() {
    step.classList.add("hide");
})