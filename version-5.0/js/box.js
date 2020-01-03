        window.onload=init;
		function init() {
			var o=document.getElementById('box');
			var speed=15;
			var timer;
			o.onmouseenter=function(){
				clearInterval(timer);
				timer=setInterval(moveRight,50);
			};
			o.onmouseleave=function(){
				clearInterval(timer);
				timer=setInterval(moveLeft,50);
			};
			function moveRight(){
				var l=o.offsetLeft;
				if(l>=0){
					clearInterval(timer);
				}else{
					o.style.left=l+speed+'px';
				}
			}
			function moveLeft(){			
				var l=o.offsetLeft;			
				if(l<=-150){
					clearInterval(timer);
				}else{
					o.style.left=l-speed+'px';	
				}
			}
		}