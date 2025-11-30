let objs = [];
let nextW = randWeight();
let angle = 0;

const PLANK_W = 400;
const PLANK_H = 15;
const MAX_A = 30;

const plank = document.querySelector('#plank');
const lDisp = document.querySelector('#lW');
const rDisp = document.querySelector('#rW');
const nDisp = document.querySelector('#next');
const aDisp = document.querySelector('#angle');
const logP = document.querySelector('#log');
const resetBtn = document.querySelector('#resetBtn');


function randWeight() { return Math.floor(Math.random() * 10) + 1; }

const randColor = () => {
    const c = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e'];
    return c[Math.floor(Math.random() * c.length)];
};