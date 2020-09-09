// select elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

// setup our canvas for drawing
// make a variable called height and width from same properties on canvas.

const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on canvas



ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;



ctx.beginPath();// start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({key}) {
    //increment the hue
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values depending on what the user did

    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
            default:
                break;
    }

    switch (key) {
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
            default:
                break;
    }

    switch (key) {
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
            default:
                break;
    }

    switch (key) {
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
            default:
                break;
    }


    ctx.lineTo(x, y);
    ctx.stroke();
}

//write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();  
        draw({ key: e.key})
    }        
}

//clean /shke function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
        console.log('done shaking');
    }, {once:true});
}

shakebutton.addEventListener('click', clearCanvas);

//listen for arrows keys
window.addEventListener('keydown', handleKey);