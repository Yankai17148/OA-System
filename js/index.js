$(document).ready(function() {
	
	//main
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['首页', '功能优势', '客户案例', '安全保障','联系我们'],
		css3: true,
		afterRender: function(){
			$("#page1 h1").addClass('active');
		},
		afterLoad: function(anchorLink, index){
			if (index == 2) {
				$('#row1').animate({
					'opacity':1,
					'top':0
				}, 400);
				$('#row2').delay(400).animate({
					'opacity':1,
					'top': 0
				}, 400);
			};
			if (index == 4) {
				$('.sec-item, .sec-reg').addClass('action');
			};
		}
	});
	//function
	$(".function-row").find('.function-item:last').css({'margin-right':0});
	$('.function-item').hover(function(){
		$(this).find('.fucntion-content').stop().animate({
			'bottom': 0
		}, 200)
	}, function(){
		$(this).find('.fucntion-content').stop().animate({
			'bottom': -180
		}, 200)
	});
	//map
	var aDiv = $(".customer-wrap").find(".customer-item"),
	cIndex = 0,
	timer = null;
	timer = setInterval(function(){
		startFocus();
	},3000);
	function startFocus(){
		cIndex++;
		cIndex = cIndex > aDiv.size()-1 ? 0 :cIndex;
		aDiv.eq(cIndex).addClass('onPos').css({'z-index':20}).siblings('.customer-item').removeClass('onPos').css({'z-index':-1});
	};
	$('.text-item .c-text:nth-child(2n)').css({'margin-right':0});
});