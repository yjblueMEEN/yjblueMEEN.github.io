window.onload = function () {

    var gTT = document.getElementById('goToTop');
    var mContents = document.getElementById('main_contents');

    var bGG = document.getElementById('background');
    var tGG2 = document.getElementById('toggle2');
    var hAM = document.getElementById('ham');

    window.scrollTo(0, 1);
    window.scrollTo(0, -1);


    hAM.onclick = function () {
        tGG2.checked = false;
    };

    gTT.onclick = function () {
        window.scrollTo({
            top: 0, left: 100, behavior: 'smooth'
        });
    };

    document.addEventListener('scroll', function () {
        if (mContents.offsetTop === mContents.getBoundingClientRect().top)
            gTT.style.opacity = 0;
        else if (mContents.offsetTop != mContents.getBoundingClientRect().top)
            gTT.style.opacity = 1;

        bGG.style.opacity = 1 - (mContents.offsetTop - mContents.getBoundingClientRect().top) / 300;
        bGG.style.top = -(mContents.offsetTop - mContents.getBoundingClientRect().top) * 0.5 + "px";
    });

    // 3단 구성 용 
    var type2 = document.getElementById('type2_wrap');
    var first_h = document.getElementById('first_1');
    var second_h = document.getElementById('second_2');
    var third_h = document.getElementById('third_3');

    // 셋 중 큰 수를 반환 (그냥 여기서는 first_h)
    if (window.innerWidth > 700) {
        type2.style.height = first_h.offsetHeight + 'px';
    }

    window.onresize = function () {        
        // 3단 구성 용  
        if (window.innerWidth > 700) {
            // 셋 중 큰 수를 반환 (그냥 여기서는 first_h)
            type2.style.height = first_h.offsetHeight + 'px';
        }
        else
            type2.style.height = first_h.offsetHeight + second_h.offsetHeight + third_h.offsetHeight + 'px';
    };
};