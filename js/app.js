let color = document.getElementById('color');
let colorCode = document.getElementById('code')


let getcolor = () => {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#"+ randomNumber.toString(16);
    
    color.style.background = randomCode;
    colorCode.innerText = randomCode;
}


document.getElementById('btn').addEventListener('click',getcolor)