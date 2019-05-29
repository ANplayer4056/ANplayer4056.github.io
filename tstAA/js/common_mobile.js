// @ts-ignore
$(".nav").on('click','img',function () {
    // @ts-ignore
    var index = $(this).index();
    var url;
    if(index == 0){
        url ='index.html';
    }else if(index == 1){
        url ='product.html';
    }
    window.location.href = url;
});
// @ts-ignore
$('.mask_close').on('click',function () {
    // @ts-ignore
    $('.mask').hide();
    // @ts-ignore
    $('#video_con').html('');
    // @ts-ignore
    $('.container').show();
});
// @ts-ignore
$('.chanpins div:not(.close),#shiwan,#shiwan_mask,#dianji').on('click',function () {
    window.location.href = 'http://demo.icrown.tw/cocos/';
});