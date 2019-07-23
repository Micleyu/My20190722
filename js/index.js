
//导航固定
function navFixed() {
    var nav = document.getElementById('headerban-nav');
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrolltop > 495 || scrolltop==495) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    }else{
        nav.style.position = "relative";

    }
}

window.onscroll = function(){
    navFixed();
    var currentScroolTop=document.documentElement.scrollTop || document.body.scrollTop;
    
    
        // eleTop1=$('.about').offset().top;
        // eleTop2=$('.case').offset().top;
        // eleTop3=$('.plan').offset().top;
        // eleTop4=$('.comment').offset().top;
        // eleTop5=$('.history').offset().top;
        
        // if((currentScroolTop)>=eleTop1-$(window).height() ){
        //     $('.about-btn').parent().addClass('active').siblings().removeClass('active');
        // }
        // if((currentScroolTop)>=eleTop2-$(window).height()){
        //     $('.case-btn').parent().addClass('active').siblings().removeClass('active');
        // }
        // if((currentScroolTop)>=eleTop3-$(window).height()){
        //     $('.plan-btn').parent().addClass('active').siblings().removeClass('active');
        // }
        // if((currentScroolTop)>=eleTop4-$(window).height()){
        //     $('.comment-btn').parent().addClass('active').siblings().removeClass('active');
        // }
        // if((currentScroolTop)>=eleTop5-$(window).height()){
        //     $('.history-btn').parent().addClass('active').siblings().removeClass('active');
        // }
    
};

// 
$('.headerban-nav-left li a').on('click',function(){
    var mapId=$(this).attr('data-map');
    var mapTop=$('.'+mapId).offset().top-45;
    $('html,body').animate({scrollTop: mapTop},300);  
    $(this).parent().addClass('active').siblings().removeClass('active');
 })
