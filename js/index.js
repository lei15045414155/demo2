$('.header .logo').hover(function() {
	$('.header .logo a').animate({
		'background-position': -55
	}, 300)
}, function() {
	$('.header .logo a').animate({
		'background-position': 0
	}, 300)
});

function hover() {
	var flag
	$('.header .nav>ul>.sub').hover(function() {
		if(flag) {
			$(this).find('.nav-sub').stop(true).delay(100).show()
		} else {
			$(this).find('.nav-sub').stop(true).delay(100).slideDown()
		}
		$(this).addClass('acti').siblings().removeClass('acti')
		if($(this).attr('data-index')==$(this).index()){
			flag = true
		}
		else{
			flag = false
		}
	}, function() {
		if(flag) {
			$(this).find('.nav-sub').stop(true).delay(100).hide()
		} else {
			$(this).find('.nav-sub').stop(true).delay(100).slideUp()
		}
	});
}
hover()

$('.sercah-txt').focus(function() {
	$('.posit').hide()
	$('.sercah-txt').css('border-color', '#ff6700');
	$('.sercah button').css('border-color', '#ff6700');
});
$('.sercah-txt').blur(function() {
	$('.posit').show()
	$('.sercah-txt').css('border-color', '#e0e0e0');
	$('.sercah button').css('border-color', '#e0e0e0');
});

$('.meau .sub').hover(function() {
	$(this).addClass('ac1')
	$(this).find('.meau-wrap').stop(true).delay(100).show()
}, function() {
	$(this).removeClass('ac1')
	$(this).find('.meau-wrap').stop(true).delay(100).hide()
})

function rotationChart() {
	var num = 0;
	var timer;
	$('.btn-list li').click(function() {
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.img-list .item').eq($(this).index()).addClass('ac').siblings().removeClass('ac');
		num = $(this).index()
	})

	function autoPlay() {
		timer = setInterval(function() {
			num++;
			$('.btn-list li').eq(num).addClass('ac').siblings().removeClass('ac');
			$('.img-list .item').eq(num).addClass('ac').siblings().removeClass('ac');
			if(num >= $('.btn-list li').size() - 1) {
				num = -1
			}
		}, 2000)
	};
	autoPlay()
	$('.swiper').hover(function() {
		clearInterval(timer)
	}, function() {
		autoPlay()
	});
	$('.swiper .icon-fanhui').click(function() {
		num--;
		if(num === -1) {
			num = $('.btn-list li').size() - 1
		}
		$('.btn-list li').eq(num).addClass('ac').siblings().removeClass('ac');
		$('.img-list .item').eq(num).addClass('ac').siblings().removeClass('ac');
	})
	$('.swiper span').hover(function() {
		$(this).addClass('act')
	}, function() {
		$(this).removeClass('act')
	})
	$('.swiper .icon-gengduo').click(function() {
		num++;
		if(num === $('.btn-list li').size()) {
			num = 0
		}
		$('.btn-list li').eq(num).addClass('ac').siblings().removeClass('ac');
		$('.img-list .item').eq(num).addClass('ac').siblings().removeClass('ac');
	})
}
rotationChart()

function time() {
	var s = 20;
	var m = 01;
	var hour = 6;
	var timer = setInterval(function() {
		s--;
		if(s === -1) {
			s = 59;
			m--;
			if(m == -1) {
				m = 59;
				hour--;
			}
		}
		if(s < 10) {
			sec = '0' + s
		} else {
			sec = s
		}
		if(m < 10) {
			min = '0' + m
		} else {
			min = m
		}
		if(hour < 10) {
			h = '0' + hour
		} else {
			h = hour
		}
		$('.time .hour').html(h);
		$('.time .minute').html(min);
		$('.time .second').html(sec);
	}, 1000)
}
time()

function moveIn(obj, goodWrap) {
	obj.hover(function() {
		$(this).addClass('ac').siblings().removeClass('ac')
		goodWrap.eq($(this).index()).removeClass('hd').siblings().addClass('hd')
	})
}
moveIn($('.jiadian .btn1-list li'), $('.jiadian .goods-wrap'));
moveIn($('.minds .btn1-list li'), $('.minds .goods-wrap'));
moveIn($('.periphery .btn1-list li'), $('.periphery .goods-wrap'));

function content(btn, obj) {
	$('.cont-wrap .item').hover(function() {
		$(this).find('.btn-wrap').show()
	}, function() {
		$(this).find('.btn-wrap').hide()
	})
	
	
	$(btn).each(function(){
		var num = 0
		var that = $(this)
		$(this).on('click',function(ev){
			var ev = $(ev.target)
			if (ev.hasClass('icon-gengduo')){
				if(num == that.find('.btn-list1 li').size() - 1) {
					return
				}
				num++;
				that.find('.btn-list1 li').eq(num).addClass('ac').siblings().removeClass('ac');
				that.find(obj).animate({
					left: -296 * num
				}, 500)
			}
			else if (ev.hasClass('icon-fanhui')){
				if(num < 1) {
					return
				}
				num--;
				that.find('.btn-list1 li').eq(num).addClass('ac').siblings().removeClass('ac');
				that.find(obj).animate({
					left: -296 * num
				}, 500)
			}
		})
	})
	$('.cont-wrap .item .iconfont').hover(function() {
		$(this).addClass('ac')
	}, function() {
		$(this).removeClass('ac')
	})
}
content('.books', '.box-list1')
content('.miui', '.box-list2')
content('.game', '.box-list3')
content('.apply', '.box-list4')

$('.asideList li').click(function() {
	var t = $('.region').eq($(this).index()).offset().top;
	$('html,body').animate({
		'scrollTop': t-50
	}, 500)
})

$(window).scroll(function() {
	var scrTop = $(window).scrollTop();
	if(scrTop > 300) {
		$('.asideList').stop().slideDown(100)
	} else {
		$('.asideList').stop().slideUp(100)
	}
	$('.region').each(function(index) {
		if($(this).offset().top - $(window).scrollTop() < 400) {
			$('.asideList li').eq(index).addClass('ac').siblings().removeClass('ac')
		}
	})
})

$(window).scroll(function() {
	var scrTop = $(window).scrollTop();
	if(scrTop > 300) {
		$('.return').stop().slideDown(100)
	} else {
		$('.return').stop().slideUp(100)
	}
	$('.return').click(function(){
		$('html').stop().animate({'scrollTop':0},500)
	})
})