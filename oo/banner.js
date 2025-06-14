var ban = document.querySelector('.banp');
var upper = document.querySelector('.upper');
var drop = document.querySelector('.drop');
var cont = document.querySelector('.middle-center');
var pcarr = ['b2.png', 'b1.png', 'b3.jpg', 'b4.jpg', 'b5.jpg'];
var t = 0;
var ls = document.querySelectorAll('.btn li');
var progressBar = document.querySelector('.progress-bar');

function cut() {
    ban.src = 'image/' + pcarr[t];
    for (let i = 0; i < ls.length; i++) {
        ls[i].className = '';
    }
    ls[t].className = 'active';
    updateProgressBar();
}

updateProgressBar();

let timer = setInterval(function () {
    t++;
    if (t > pcarr.length - 1)
        t = 0;
    cut();
}, 5000)

drop.onclick = function () {
    t++;
    if (t > pcarr.length - 1)
        t = 0;
    cut();
}

upper.onclick = function () {
    t--;
    if (t < 0)
        t = pcarr.length - 1;
    cut();
}

cont.onmouseover = function () {
    clearInterval(timer);
}

cont.onmouseout = function () {
    timer = setInterval(function () {
        t++;
        if (t > pcarr.length - 1)
            t = 0;
        cut();
    }, 5000)
}

for (let i = 0; i < ls.length; i++) {
    ls[i].onclick = function () {
        t = i;
        console.log(t);
        cut();
    }
}

function updateProgressBar() {
    var progressPercentage = ((t + 1) / pcarr.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}
