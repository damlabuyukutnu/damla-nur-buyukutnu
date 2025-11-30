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

function calcSizes(w) { return 20 + w*3; }

function calcTorques() {
    let lT = 0, rT = 0;
    objs.forEach(o => {
        const t = o.w * Math.abs(o.d);
        o.d < 0 ? lT += t : rT += t;
    });
    return {lT, rT};
}

function calcAngle() {
    const {lT, rT} = calcTorques();
    let a = (rT - lT)/10;
    return Math.max(-MAX_A, Math.min(MAX_A, a));
}

function totalWeights() {
    let l = 0, r = 0;
    objs.forEach(o => o.d < 0 ? l += o.w : r += o.w);
    return {l,r};
}

function updateStats() {
    const {l,r} = totalWeights();
    lDisp.textContent = l + ' kg';
    rDisp.textContent = r + ' kg';
    nDisp.textContent = nextW + ' kg';
    aDisp.textContent = angle.toFixed(1) + '°';
}

function updateTilt() {
    angle = calcAngle();
    plank.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

function addLog(w,d,s) {
    const item = document.createElement('div');
    item.className = 'log-item ' + s;
    item.textContent = `🟡 ${w}kg dropped on ${s} side at ${Math.round(Math.abs(d))}px`;
    logP.insertBefore(item, logP.firstChild);
    while(logP.children.length > 10) logP.removeChild(logP.lastChild);
}

function renderObj(o) {
    const el = document.createElement('div');
    el.className = 'weight-object';
    el.id = 'o-' + o.id;
    const size = calcSizes(o.w);
    el.style.width = el.style.height = size + 'px';
    el.style.backgroundColor = o.c;
    el.textContent = o.w + 'kg';
    const x = PLANK_W/2 + o.d;
    el.style.left = (x - size/2) + 'px';
    el.style.bottom = PLANK_H + 'px';
    plank.appendChild(el);
}

function renderAll() {
    plank.querySelectorAll('.weight-object').forEach(e => e.remove());
    objs.forEach(renderObj);
}

function handleClick(e) {
    const rect = plank.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const d = clickX - PLANK_W/2;
    const side = d < 0 ? 'left' : 'right';
    const newObj = {id: Date.now(), w: nextW, d, c: randColor()};
    objs.push(newObj);
    addLog(newObj.w, newObj.d, side);
    renderObj(newObj);
    updateTilt();
    nextW = randWeight();
    updateStats();
    saveState();
}

plank.addEventListener('click', handleClick);