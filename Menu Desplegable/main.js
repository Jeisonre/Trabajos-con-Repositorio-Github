const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const topar = document.querySelector('#topar');
const topar1 = document.querySelector('#topar1');
const topar2 = document.querySelector('#topar2');
const topar3 = document.querySelector('#topar3');
const topar4 = document.querySelector('#topar4');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})

topar.addEventListener('click', () => {
    nav.classList.remove("visible");
})
topar1.addEventListener('click', () => {
    nav.classList.remove("visible");
})
topar2.addEventListener('click', () => {
    nav.classList.remove("visible");
})
topar3.addEventListener('click', () => {
    nav.classList.remove("visible");
})
topar4.addEventListener('click', () => {
    nav.classList.remove("visible");
})