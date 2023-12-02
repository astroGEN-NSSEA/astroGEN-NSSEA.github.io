let cursor = document.querySelector('.cursor');
let first_service_h1 = new SplitType('.first-service h1');
let second_service_h1 = new SplitType('.second-service h1');
let third_service_h1 = new SplitType('.third-service h1');

window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:1000, fill:'forwards'});
});

document.querySelector('.footer').addEventListener('mouseover', () => {
    cursor.style.background = 'black';
});

document.querySelector('.footer').addEventListener('mouseleave', () => {
    cursor.style.background = '#FFE0B9';
});

document.querySelector('.menu .nav-links').addEventListener('mouseover', () => {
    cursor.style.background = 'black';
});

document.querySelector('.menu .nav-links').addEventListener('mouseleave', () => {
    cursor.style.background = '#FFE0B9';
});

document.querySelectorAll('.services .image').forEach(service => {
    service.addEventListener('mouseover', () => {
        cursor.querySelector('h1 span').innerHTML = 'VIEW';
        cursor.style.width = '8vw';
        cursor.style.height = '8vw';
        service.querySelector('.overlay').style.opacity = 1;
        let i = 0;
        service.querySelectorAll('h1 .line').forEach(line => {
            line.querySelectorAll('.char').forEach(word => {
                word.style.transform = 'translateY(0)';
                word.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
    })

    service.addEventListener('mouseleave', () => {
        cursor.querySelector('h1 span').innerHTML = '';
        cursor.style.width = '2vw';
        cursor.style.height = '2vw';
        service.querySelector('.overlay').style.opacity = 0;
        let i = 0;
        service.querySelectorAll('h1 .line').forEach(line => {
            line.querySelectorAll('.char').forEach(word => {
                word.style.transform = 'translateY(150%)';
                word.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
    })
})