// const canvas = document.getElementById('canvas'); // grab the canvas
// const increaseBtn = document.getElementById('increase');//grab the increase button
// const decreaseBtn = document.getElementById('decrease');//grab the decrease button
// const sizeEL = document.getElementById('size');// grab the span element to determmine the size of the pen
// const colorEl = document.getElementById('color'); // grab the color picker to change the color
// const clearEl = document.getElementById('clear'); // grab the x button to clear the pagr

// const ctx = canvas.getContext('2d');// grab the canva context API

// let size = 10 // determine the initiAL size of the pen
// let isPressed = false// will act as a switch to for mousemove
// let color = 'black' // here we add the first color 
// let x // here we declare  the X value of the mouse click> vertical
// let y//here we declare the y value of the mouse click > horizontal 

// //!step 1 
// canvas.addEventListener('mousedown', (e) => {// here we add an event listener on the canvas when on click
//     isPressed = true// here we change the value of isPressed let to true so it can evaluate as condition during mousemove.

//     x = e.offsetX // here we initialise the x from the global scope variable with the event object offset x value
//     y = e.offsetY// here we initialise the y the global scope variable with the event object offset x value

// })
// //* step 3 
// canvas.addEventListener('mouseup', (e) => { // here we add an event listener for when the mouse moves up to stop the move
//     isPressed = false// here we change the isPressed value to false in order to stop the evalution condition

//     x = undefined //here we change the x and y value to undefine in ordr to stop drawing the line 
//     y = undefined
// })

// //? step 2
// canvas.addEventListener('mousemove', (e) => {// here we add an evetn listener when the mouse clicked and on moove
//     if (isPressed) { // here we change the value from false to true when on mousedown so we can evaluate to true and execute the code below 
//         const x2 = e.offsetX // here we declared and initialised the x2 & y2 offset value while the mouse is down and on moove 
//         const y2 = e.offsetY

//         drawCircle(x2, y2)// here we pass the x2 and y2 on move values to the drawCircle function and draw the initial circle       
//         drawLine(x, y, x2, y2) // here we pass the  the x.y and x2,y2 values to draw the line in the drawLine function x and y refers to the current postion and x2 and y2 refer to the next move to position

//         x = x2 // here we change the x value from the initial mousedown value which is on step 1 to the value of the x2 and y2 in order to achive the mouseve move function and use it as previous reference step 
//         y = y2

//     }
// })

// //@ step 4
// increaseBtn.addEventListener('click', () => {// here we an event listener at the increase button in order to increase thwe value of the width
//     size += 5 // her we add plus 5 to the size of the increase as a first step on the listener
//     if (size > 50) {// here we evaluate the condition that if the sie of the line is more than 50 the i want to change the value of 50> to to 50 
//         size = 50
//     }

//     upddateSizeOnScreen()// here we cal the function in order to update the size on the screen

//     decreaseBtn.addEventListener('click', () => { // here we add the event listener on the decrease button to decrease the value of the line
//         size -= 5// here we take 5 off from the size of the line
//         if (size < 5) {// here we evaluate the sixe less than 5 then set the value of the size to fine a a minimum
//             size = 5
//         }
//         upddateSizeOnScreen()//here we cal the function in order to update the size on the screen
//     })


//     colorEl.addEventListener('change', (e) => color = e.target.value)
//     // here we add event lisnter on the color picker, that on change I want to grab the value of the selected color
//     // and once we grabb it then we assing it to the color variable as in the new slection of color to draw

//     clearEl.addEventListener('click', () => {/// here we add an event listener  on the x button 
//         ctx.clearRect(0, 0, canvas.width, canvas.height);// once we clike the x button then the spcial ctx method we reset and cleat the cnavas
//     })// here we clear by adding the values 0,0, and reassinging the values widht and heignt of the canvas 

//     function drawCircle(x, y) {// this is the function of the drawcircle and we pass the global variable of x and y which have been initialized on step when on mouse down
//         ctx.beginPath();// this is a special API canvas function to start the drawing
//         ctx.arc(x, y, size, 0, Math.PI * 2)// here we crete the cricle
//         ctx.fillStyle = color/// here we add the intial color
//         ctx.fill()// here we add the the fill in the circle
//     }
//     //! x1 , y1 => coordination to move to the next point 
//     //* x2, y2 => Line to > draws the actual line

//     function drawLine(x1, y1, x2, y2) {// this fucntion draws the line and takes four arguments 2 for the intial position and 2 for the moove to position 
//         ctx.beginPath()
//         ctx.moveTo(x1, y1)// here we define the move to position
//         ctx.lineTo(x2, y2)// here we define the line to position
//         ctx.strikeStyle = color
//         ctx.lineWidth = size * 2
//         ctx.stroke()
//     }

//     function upddateSizeOnScreen() {// here we create the function to update the size on the screen 
//         sizeEL.innerText = size// here we assinging the updated size on the innerHtml element so we can inform the control on the screnn
//     }

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))