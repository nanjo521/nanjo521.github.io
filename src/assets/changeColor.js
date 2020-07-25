
// JS实现头部透明变黑色
window.onscroll = function () {
    var header = document.getElementById("nav");
    var fixed = window.pageYOffset || document.documentElement.scrollTop;
    console.log(fixed);
    if (fixed < 100) {
        header.style.background = "transparent"
    } else {
        header.style.background = "#17A2B8"
    }
}

window.onload = function () {
    var text = document.getElementById('text');
    var s = document.getElementById('show');
    var i = 0;
    var timer = setInterval(function () {
        s.innerHTML = text.innerHTML.substring(0, i);
        i++;
        if (s.innerHTML == text.innerHTML) {
            clearInterval(timer);
        }
    }, 100);
}

