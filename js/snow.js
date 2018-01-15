// Created by Leo.Hu on 2016.12.22.

(function($){
	$.fn.snow = function(){
		var $snow = $('<div id="snowbox" />').html('&#9679;'),									//Unicode字符 &#9679 ：  ●
		documentHeight 	=  $(document).height(),												//网页高
		documentWidth	=  $(document).width(),													//网页宽
		datas = {
			minSize		: 2,																	//雪花最小尺寸
			maxSize		: 30,																	//雪花最大尺寸
			newOn		: 300,																	//密集程度（循环生成雪花的时间周期）
			snowColor	: "#FFFFFF",															//雪花颜色
			endPositionTop: documentHeight,														//掉落的水平线（垂直高度）
			speed : 10																			//速度
		}

		var interval= setInterval( function(){													//循环生成雪花
			var startPositionLeft = Math.random() * documentWidth,								//雪花生成开始位置（水平）
			startOpacity = 0.5 + Math.random(),													//雪花透明度
			endPositionTop = documentHeight,													//掉落的水平线（垂直高度）
			endPositionLeft = startPositionLeft - 500 + Math.random() * 500,					//掉落的水平线（水平）
			sizeSnow = datas.minSize + Math.random() * datas.maxSize,							//雪花尺寸
			durationFall = documentHeight * datas.speed + Math.random() * datas.speed * 200;	//下落速度

			$snow.clone().appendTo('body').css({												//生成雪花（克隆）
				left: startPositionLeft,														//水平位置
				opacity: startOpacity,															//透明度
				'font-size': sizeSnow,															//大小
				color: datas.snowColor															//颜色
			}).animate({
				top: endPositionTop,															//掉落
				left: endPositionLeft,															//水平偏移
				opacity: 0.2    																//透明度
			},durationFall,'linear',function(){
				$(this).remove()																//落到'地面'移除雪花
			});

		}, datas.newOn);
    };
})(jQuery);

$(function(){
    $.fn.snow();
});