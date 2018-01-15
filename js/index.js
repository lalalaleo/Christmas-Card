// Created by Leo.Hu on 2016.12.22.

// 坐标位置排放
$(document).ready(function () {
	var documentWidth = $(document).width();
	var documentHeight = $(document).height();
	var marginLeft = ($(document).width() - $("#tree").width()) / 2;
	var blessingMarginLeft = ($(document).width() - $("#blessing").width()) / 2;
	var blessingMarginTop = ($(document).height() - $("#tree").height() - $("#blessing").height());
	var mailMarginLeft = ($(document).width() * 0.6 + $("#deer").width() - 100);
	var mailMarginTop = ($("#deer").height() + 20);
	var postcardMarginLeft = ($(document).width() - $("#postCard").width()) / 2;
	var postcardMarginTop = ($(document).height() - $("#postCard").height())/2;

	function sizeElement (argument) {													//初始化元素的位置
		$("#tree").css("margin-left",marginLeft+"px");
		$("#blessing").css("margin-left",blessingMarginLeft+"px");
		$("#blessing").css("margin-top",blessingMarginTop+"px");
		$("#mail").css("margin-left",mailMarginLeft);
		$("#mail").css("margin-top",mailMarginTop);
		$("#postCard").css("margin-left",postcardMarginLeft+"px");
		$("#postCard").css("marginTop",$(document).height()+"px");
		$("#paper").css("marginTop",postcardMarginTop+20+"px");
	}

	sizeElement();

	try {
		$("#tree").animate({															//[圣诞树]淡入
			opacity: 1
		},5000,function () {
			$("#gift").animate({														//[礼物]淡入
				opacity: 1
			},3000,function () {
				$("#blessing").animate({												//[圣诞快乐]淡入
					opacity: 1
				},2000,function () {
					$("#deer").animate({												//[麋鹿]淡入
					opacity: 1
				},1000,function () {
						
						$("#deer").animate({											//[麋鹿]上升、左移、透明度减小
							top:-20,
							left:-0.1*documentWidth,
							opacity:0.9
						},1200, "linear",function () {
							$("#deer").css("transform","rotate("+(-7.5)+"deg)");
							$("#deer").animate({										//[麋鹿]上升、左移、透明度减小
								top:-5,
								left:-0.22*documentWidth,
								opacity:0.8
							},1200, "linear",function () {
								$("#deer").css("transform","rotate("+(-15)+"deg)");
								$("#deer").animate({									//[麋鹿]下落、左移、透明度减小
									top:-20,
									left:-0.35*documentWidth,
									opacity:0.6
								},1200, "linear",function () {
									$("#deer").css("transform","rotate("+(-22.5)+"deg)");
									$("#deer").animate({								//[麋鹿]下落、左移、透明度减小
										top:0,
										left:-0.5*documentWidth,
										opacity:0.4
									},1200, "linear",function () {
										$("#deer").css("transform","rotate("+(-30)+"deg)");
										$("#deer").animate({							//[麋鹿]下落、左移、淡出
											top:100,
											left:-0.65*documentWidth,
											opacity:0
										},1200,"linear");
									});
								});
							});
						});
						

						$("#mail").css("opacity","1");									//[信封]出现
						$("#mail").animate({											//[信封]掉落
							top: $(document).height()
						},5000,function () {
							$("#postCard").animate({									//[贺卡]从底部出现
								'margin-top': postcardMarginTop
							},3000);	
						});

						$("#postCard").click(function () {								//[贺卡]点击下落
							$("#paper").css("opacity","1");
							$("#postCard").animate({
								'margin-top':documentHeight
							},3000);
						});

						$("#paper").click(function () {									//[信纸]点击，切换卡片
							if($("#paper img").attr("src")=="./image/paper.png"){
								$("#paper img").fadeOut();								//[信纸]淡出
								$("#paper img").attr("src","./image/card.png");
								$("#paper img").fadeIn();								//[信纸]淡入
							}
							else{
								$("#paper img").fadeOut();								//[信纸]淡出
								$("#paper img").attr("src","./image/paper.png");
								$("#paper img").fadeIn();								//[信纸]淡入
							}
						})
						$.fn.breathe();
					});
				});
			});
		});
		
	} catch(e) {
		console.log(e);
	}

});

// 呼吸效果:圣诞树、礼物
(function($){
	$.fn.breathe = function () {

		var breathe1 = setInterval(function () {
			$("#tree").animate({
				opacity: 0.4
			},5000,'linear',function(){
				$("#tree").animate({opacity: 1},5000);
			});
		},10000);

		var breathe2 = setInterval(function () {
			$("#gift").animate({
				opacity: 0.4
			},3000,'linear',function(){
				$("#gift").animate({opacity: 1},3000);
			});
		},6000);

	}
})(jQuery);

$(window).resize(function () {															//屏幕改变时，调整元件位置
	sizeElement();
});