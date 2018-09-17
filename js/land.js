/*
* @Author: hp
* @Date:   2018-08-24 10:58:21
* @Last Modified by:   hp
* @Last Modified time: 2018-08-24 10:58:58
*/

'use strict';
$('.bot').hover(function() {
			$('.coin').stop().slideDown();
		}, function() {
			$('.coin').stop().slideUp();
		});
		$('.top li').click(function(event) {
			var index=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('.warp>div').eq(index).stop().show().siblings('div').hide();
		});