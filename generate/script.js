const body = document.querySelector('body');
const btn = document.querySelector('button');

const getRandom = (() => {
    return Math.floor(Math.random() * 256)
});

btn.addEventListener('click', () => {
    body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
});

