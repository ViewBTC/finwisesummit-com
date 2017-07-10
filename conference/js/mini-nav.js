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