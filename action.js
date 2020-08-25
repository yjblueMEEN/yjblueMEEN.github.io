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

		bGG.style.opacity = 1 - (mContents.offsetTop - mContents.getBoundingClientRect().top)/300;
		bGG.style.top = -(mContents.offsetTop - mContents.getBoundingClientRect().top)*0.5 + "px";
    });

// 2? ?? ?? ??
    var type1 = document.getElementById('type1_wrap');
    var right_h = document.getElementById('right_h');
    var left_h = document.getElementById('left_h');

    var type15 = document.getElementById('type15_wrap');
    var right_h15 = document.getElementById('right_h15');
    var left_h15 = document.getElementById('left_h15');

    // ? ? ? ?? ??
    if (window.innerWidth > 500) {
        if (right_h.offsetHeight > left_h.offsetHeight)
            type1.style.height = right_h.offsetHeight + 'px';
        else
            type1.style.height = left_h.offsetHeight + 'px';
    }

    if (window.innerWidth > 500) {
        if (right_h15.offsetHeight > left_h15.offsetHeight)
            type15.style.height = right_h15.offsetHeight + 'px';
        else
            type15.style.height = left_h15.offsetHeight + 'px';
    }

    window.onresize = function () {
// 2? ?? ?
        // ? ? ? ?? ??
        if (window.innerWidth > 500) {
            if (right_h.offsetHeight > left_h.offsetHeight)
                type1.style.height = right_h.offsetHeight + 'px';
            else
                type1.style.height = left_h.offsetHeight + 'px';
        }
        else
            type1.style.height = left_h.offsetHeight + right_h.offsetHeight + 'px';

        if (window.innerWidth > 500) {
            if (right_h15.offsetHeight > left_h15.offsetHeight)
                type15.style.height = right_h15.offsetHeight + 'px';
            else
                type15.style.height = left_h15.offsetHeight + 'px';
        }
        else
            type15.style.height = left_h15.offsetHeight + right_h15.offsetHeight + 'px';
    };



};