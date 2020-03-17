var room_choice = 0;
var index = 0;
var pages = [
    {
        title:"",
        info:"A crime just happened in this mansion! You must use your super sleuthing skills to find the criminal!",
        mainimg:"../svg/house.svg",
        room1:"none",
        room2:"none",
        room3:"none",
        room4:"none",
        room5:"none",
        selec1:"../svg/blank.svg",
        selec2:"../svg/blank.svg",
        selec3:"../svg/blank.svg",
        selec4:"../svg/blank.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"block",
        footerbtn2:"none",
    },
    {
        title:"",
        info:"There are 5 rooms with one character in each room. Follow the clues to find out who's in each room and find the criminal!",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/blank.svg",
        selec2:"../svg/blank.svg",
        selec3:"../svg/blank.svg",
        selec4:"../svg/blank.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"block",
        footerbtn2:"none",
    },
    {
        title:"CLUE 1",
        info:"The bunny is in the room diagonal from the dog. Which room is bunny in?",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/blank.svg",
        selec2:"../svg/blank.svg",
        selec3:"../svg/blank.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"none",
        footerbtn2:"none",
    },
    {
        title:"CLUE 2",
        info:"Mouse is not on the first or second floor. Which room is mouse in?",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/blank.svg",
        selec2:"../svg/blank.svg",
        selec3:"../svg/bunny.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"none",
        footerbtn2:"none",
    },
    {
        title:"CLUE 3",
        info:"Raccoon is one floor below mouse. Which room is raccoon in?",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/mouse.svg",
        selec2:"../svg/blank.svg",
        selec3:"../svg/bunny.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"none",
        footerbtn2:"none",
    },
    {
        title:"",
        info:"Select the remaining room to see who the criminal is!",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/mouse.svg",
        selec2:"../svg/racoon.svg",
        selec3:"../svg/bunny.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/blank.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"none",
        footerbtn2:"none",
    },
    {
        title:"HOORAY!",
        info:"You found the criminal by using a type of logic called 'deductive reasoning'! Now you must put evil hamster in jail!",
        mainimg:"../svg/house.svg",
        room1:"block",
        room2:"block",
        room3:"block",
        room4:"block",
        room5:"block",
        selec1:"../svg/mouse.svg",
        selec2:"../svg/racoon.svg",
        selec3:"../svg/bunny.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/hamster-good.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"none",
        footerbtn2:"block",
    },
    {
        title:"OOPS!",
        info:"You chose the wrong room. Try again!",
        mainimg:"../svg/blank.svg",
        room1:"none",
        room2:"none",
        room3:"none",
        room4:"none",
        room5:"none",
        selec1:"../svg/mouse.svg",
        selec2:"../svg/racoon.svg",
        selec3:"../svg/bunny.svg",
        selec4:"../svg/dog.svg",
        selec5:"../svg/hamster-good.svg",
        footericon:"../svg/detecticat.svg",
        footerbtn:"../svg/try-again.svg",
        footerbtn2:"none",
    }
];

console.log(window, pages, pages[1].info);


function nextPage(){
    if(index < 2){
        index++;
    }
    update();
}
console.log(index);

function bunnyRoom(){
    if (room_choice === 0){
        index++;
        room_choice = 1;
    }
    update();
}

function mouseRoom(){
    if (room_choice === 1){
        index++;
        room_choice = 2;
    }
    update();
}

function raccoonRoom(){
    if (room_choice === 2){
        index++;
        room_choice = 3;
    }
    update();
}

function hamsterRoom(){
    if (room_choice === 3){
        index++;
        room_choice = 4;
    }
    update();
}

function update(){
    document.querySelector(".subhead").innerText = pages[index].title;
    document.querySelector(".description").innerText = pages[index].info;
    document.querySelector(".main_img_content").src = pages[index].mainimg;
    document.querySelector("#room_1").style.display = pages[index].room1;
    document.querySelector("#room_2").style.display = pages[index].room2;
    document.querySelector("#room_3").style.display = pages[index].room3;
    document.querySelector("#room_4").style.display = pages[index].room4;
    document.querySelector("#room_5").style.display = pages[index].room5;
    document.querySelector("#selection_1").src = pages[index].selec1;
    document.querySelector("#selection_2").src = pages[index].selec2;
    document.querySelector("#selection_3").src = pages[index].selec3;
    document.querySelector("#selection_4").src = pages[index].selec4;
    document.querySelector("#selection_5").src = pages[index].selec5;
    document.querySelector(".cat_icon").src = pages[index].footericon;
    document.querySelector(".foot_btn").style.display = pages[index].footerbtn;
    document.querySelector(".foot_btn2").style.display = pages[index].footerbtn2;
}

update();
