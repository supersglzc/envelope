
var aparted = false;

$("#open").click(function(){

	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^10000祝李天航第二十个圣诞节快乐！<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十二月之前，我本以为我的2020年就要这样结束了^300没想到的是^200今年最大的惊喜让时光老人放到了最后^600也就是你^600和你聊天的时间总是过得那么快^200是你让我第一次知道我也可以每天和女生聊这么这么多却一点都不烦^600也是你第一次让我知道喜欢一个人真的会感到自卑^200从小我就一直认为我是最厉害的^400哪怕我去了国外最好的大学^400认识斯坦福麻省理工等等的同学^400我依然认为他们都不如我^400但是在第一次跟你出来玩之后^400我怕我自己不够高^400怕我自己不够帅^400怕我自己没法让你开心^400怕你不想再搭理我<br><br><p style='float:right; display:block; width:110px;'>^1000ジョージ^200より</p>"",
			"アビー^200ちゃん<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;バレンタインデーは^300いつも^200寒いよね、^600でも、^600手を^200繋いでいると、^600暖か^200くなるよ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どんなに^300寒い夜も、^600君と^300二人でいれば、^600ちっとも^300寒くない！<br><br><p style='float:right; display:block; width:110px;'>^1000ジョージ^200より</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});

		$('#open').find("span").eq(0).css('background-position', "0 -150px");

		aparted = true;

		var music = document.getElementById('music2');
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1");
		}
	}

});

function playPause()
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');

    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1");
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2");
    }
}


window.onload = function ()
{

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });

	var lastTouchEnd = 0;

	document.addEventListener('touchend',function (event) {

		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;

	}, false);

	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');

}
