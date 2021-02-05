const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circle.length) {
        currentActive = circle.length;
    }
    console.log(currentActive);


    update();

})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();

})


function update() {
    circle.forEach((circle, index) => {
        if (index < currentActive) {
            console.log(index)
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    console.log(actives.length, circle.length);
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}