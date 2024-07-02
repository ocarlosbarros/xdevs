const btn_forward = document.getElementById('btn-forward');

let count = 0;

btn_forward.addEventListener('click', () => {
    console.log(count++);
});