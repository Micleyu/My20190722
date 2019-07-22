
// 锚点
$('.headerban-nav-left li a').on('click',function(){
    var mapId=$(this).attr('data-map');
    var mapTop=$('.'+mapId).offset().top-45;
    $('html,body').animate({scrollTop: mapTop},300);  
 })
