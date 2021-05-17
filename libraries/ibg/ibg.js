function ibg() {
    let ibg = document.querySelectorAll('.ibg');

    function backgroundImg(imgCont, tag, atr) {
        imgCont[i].style.backgroundImage = 'url(' + imgCont[i]
            .querySelector(tag)
            .getAttribute(atr) + ')';
    }

    for (var i = 0; i < ibg.length; i++) {
        ibg[i].style.height = getComputedStyle(ibg[i]).height;
        if(ibg[i].querySelector('img')) {
            backgroundImg(ibg,'img','src');
            // if(ibg[i].style.height === '') {
            //     ibg[i].style.height = getComputedStyle(ibg[i]).height;
            //     ibg[i].style.height = 100 + 'px';
            // }
        }
    }
}

ibg();
