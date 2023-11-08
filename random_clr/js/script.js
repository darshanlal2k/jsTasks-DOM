const btn = document.getElementById('btn');
const color = document.getElementById('color');
const Colors = ["red","green","blue","orange","violet","pink"];

function colorchange(){
    
    const randomNumber = getrandomNumber();
   
    document.body.style.backgroundColor = Colors[randomNumber];
    color.textContent = Colors[randomNumber];
}
function getrandomNumber(){
   return Math.floor(Math.random() * Colors.length);
}

