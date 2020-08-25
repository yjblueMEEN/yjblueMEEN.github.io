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
// 좌우 구성 위한 
            var type3 = document.getElementById('type3_wrap');
            var type3_img = document.getElementById('type3_img');
            var type3_explain = document.getElementById('type3_explain');
 
            if(window.innerWidth > 500)
               type3.style.height = type3_img.offsetHeight + 'px';
        

            window.onresize = function () {
                // 좌우 구성 위한
                if(window.innerWidth > 500){
                    type3.style.height = type3_img.offsetHeight + 'px';
                    }
                else
                    type3.style.height = type3_img.offsetHeight + type3_explain.offsetHeight + 'px';
            };
};