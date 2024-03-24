const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 1; i <= 500; i++) {
    const div = document.createElement('div');
    div.classList = 'square';
    container.append(div);
};

const getRandom = () => {
    return colors[Math.floor(Math.random() * colors.length)]
};

const addColor = (bg) => {
    const color = getRandom();
    bg.style.background = color;
};

const removeColor = (bg) => {
    bg.style.background = '#1d1d1d';
};

container.addEventListener('mouseover', (e) => {
    const element = e.target;
    if (element.classList.contains('square')) {
        addColor(element)
    };
});

container.addEventListener('mouseout', (e) => {
    const element = e.target;
    if (element.classList.contains('square')) {
        removeColor(element)
    };
});


