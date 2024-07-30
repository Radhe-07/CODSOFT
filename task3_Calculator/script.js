var input1 = "";
var input2 = "";
const display = document.getElementById("dis");

var counter = 0;

var series = 0;

function addToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = " ";
   
}

function backspace(){
    dis.value = dis.value(dis.value.toString().slice(0,-1));
}

for (let i = 0; i < 9; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        input = i+1;
        input1 += input.toString();
        console.log(input1);
        
    });
    
};



document.getElementById("plus").addEventListener("click", function ()
{
    input1 += "+";
});

document.getElementById("sub").addEventListener("click", function ()
{
    input1 += "-";
});

document.getElementById("multiply").addEventListener("click", function ()
{
    input1 += "*";
});

document.getElementById("div").addEventListener("click", function ()
{
    input1 += "/";
});


document.getElementById("enter_key").addEventListener("click", function (){
    console.log(eval(input1));
    input2 =input1;
    clearDisplay();
    addToDisplay(eval(input2));
});