// JavaScript source code
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
let num3 = document.querySelector('#num3').value;
let num4 = document.querySelector('#num4').value;

const przeliczButton = document.querySelector("#przelicz");
const sumLine = document.querySelector("#sum");
const avgLine = document.querySelector("#avg");
const minLine = document.querySelector("#min");
const maxLine = document.querySelector("#max");

const select = selector => document.querySelector(selector);

function przelicz() {
    select("#przelicz").addEventListener('click', () => {
        let sum = Math.sum(num1, num2, num3, num4);
        let avg = Math.avg(num1, num2, num3, num4);
        let min = Math.min(num1, num2, num3, num4);
        let max = Math.max(num1, num2, num3, num4);

        sumLine.innerText = sum;
        avgLine.innerText = avg;
        minLine.innerText = min;
        maxLine.innerText = max;
    })
}
