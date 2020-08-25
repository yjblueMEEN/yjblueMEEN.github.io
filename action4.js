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

 // 좌우 구성 위한 type4
        var type4_wrap = document.getElementById('type4_wrap');
        var type4_img = document.getElementById('type4_img');
        var type4_explain = document.getElementById('type4_explain');
    // 좌우 구성 위한 type5
        var type45wrap = document.getElementById('type5_wrap');
        var type5_img = document.getElementById('type5_img');
        var type5_explain = document.getElementById('type5_explain');

            type4_explain.style.height = type4_img.offsetHeight + 'px';
            type4_wrap.style.height = type4_img.offsetHeight + 'px';

            type5_explain.style.height = type5_img.offsetHeight + 'px';
            type5_wrap.style.height = type5_img.offsetHeight + 'px';

            window.onresize = function () {
                type4_explain.style.height = type4_img.offsetHeight + 'px';
                type4_wrap.style.height = type4_img.offsetHeight + 'px';

                type5_explain.style.height = type5_img.offsetHeight + 'px';
                type5_wrap.style.height = type5_img.offsetHeight + 'px';
            };   
};