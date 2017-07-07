//mask弹层
$(function() {
	maskInit();

});


function Olick(zdyname,zdynamehide,aclose,content) {
	$(zdyname).click(function(){
		$(content).show();
		$(content).css('visibility','visible');
		maskInit();
	});
	$(zdynamehide).click(function(){
		$(content).hide();
		$(content).css('visibility','hidden');
	});
	$(aclose).click(function(){
		$(content).hide();
		$(content).css('visibility','hidden');
	});
}

function maskInit(){
	var window_h=$(window).height();
	var window_w=$(window).width();
	var Oleft= ($(window).width() - $(".zdy-box").outerWidth());
	var Oleftsize=(Oleft - window_w)/2;


	$(".zdy-box").css({
		position: "fixed",
		left: Oleftsize,
		top: ($(window).height() - $(".zdy-box").outerHeight())/2
	});

}