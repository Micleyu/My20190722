
//导航固定
function navFixed() {
    var nav = document.getElementById('headerban-nav');
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrolltop > 495 || scrolltop==495) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    }else{
        nav.style.position = "static";
    }
}

window.onscroll = function(){
    navFixed()
};

// 
$('.headerban-nav-left li a').on('click',function(){
    var mapId=$(this).attr('data-map');
    var mapTop=$('.'+mapId).offset().top-45;
    $('html,body').animate({scrollTop: mapTop},300);  
 })
