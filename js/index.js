
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
    
    
    eleTop1=$('.about').offset().top;
    eleTop2=$('.case').offset().top;
    eleTop3=$('.plan').offset().top;
    eleTop4=$('.comment').offset().top;
    eleTop5=$('.history').offset().top;
    
    if((currentScroolTop+$(window).height())>=eleTop1 ){
    
        $('.about-btn').parent().addClass('active').siblings().removeClass('active');
    }
    if((currentScroolTop+$(window).height())>=eleTop2){
        $('.case-btn').parent().addClass('active').siblings().removeClass('active');
    }
    if((currentScroolTop+$(window).height())>=eleTop3){
        $('.plan-btn').parent().addClass('active').siblings().removeClass('active');
    }
    if((currentScroolTop+$(window).height())>=eleTop4){
        $('.comment-btn').parent().addClass('active').siblings().removeClass('active');
    }
    if((currentScroolTop+$(window).height())>=eleTop5){
        $('.history-btn').parent().addClass('active').siblings().removeClass('active');
    }
    
};

// 
$('.headerban-nav-left li a').on('click',function(){
    var mapId=$(this).attr('data-map');
    var mapTop=$('.'+mapId).offset().top-45;
    $('html,body').animate({scrollTop: mapTop},300);  
    $(this).parent().addClass('active').siblings().removeClass('active');
 })
