/**mini nav**/
function mininav() {
    $('#navigation').toggle();
    if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
    }else{
        $(this).addClass('is-active');
        $('#navigation').toggle();
    }


    if( $('#topnav').hasClass('bg-active')){
        $('#topnav').removeClass('bg-active');
    }else{
        $('#topnav').addClass('bg-active');
    }
}



/**mini nav end**/


var screen_w=window.innerWidth;
if(screen_w>991){
    $('.sl-language').mouseenter(function () {
        $('.review-old').slideDown(300);
        $('.review-old').addClass('active')
    })

    $('.sl-language').mouseleave(function () {
        $('.review-old').slideUp(200);
    })

}

// load common footer begin

$(".load-footer").load("common/footer.html");
// $(".load-header").load("common/header.html");

// load common footer end


// $('body').addClass('zhlang');


 // 判断当前是否是移动端访问
$(function(){
    if(navigator.userAgent.match(/mobile/i)) {

        $('body a').attr('target','_self');

    }
});