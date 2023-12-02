let i = 0;

function loopWithDelay() {
    setTimeout(() => {
        document.querySelector('.loading h2 span').innerHTML = i;
        i++;
        if (i < 101) {
            loopWithDelay();
        }
    }, 10)   
}

window.addEventListener('DOMContentLoaded', () => {
    loopWithDelay();
})