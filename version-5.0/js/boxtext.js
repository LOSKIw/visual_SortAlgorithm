function initboxInsertText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>直接插入排序基本操作就是将一个数据插入到已经排好序的有序数据中从而得到一个新的有序数据.<br>稳定性:不稳定<br>时间:O(n^2)<br>空间:O(1)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxChooseText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>简单选择排序是一种简单直观的排序算法.<br><br>&nbsp&nbsp稳定性:不稳定<br>&nbsp&nbsp时间复杂度O(n^2)<br>&nbsp&nbsp空间复杂度:O(1)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxHeapText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>堆排序的堆是一个近似完全二叉树的结构,并同时满足堆积的性质<br><br>稳定性:不稳定<br>时间复杂度O(nlogn)<br>空间复杂度:O(nlogn)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxQuickText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>快速排序是对冒泡排序的一种改进,通过一趟排序将要排序的数据分割成独立的两部分.<br>稳定性:不稳定<br>时间:O(nlogn2)<br>空间:O(nlogn2)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxRadixText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>基数排序是透过键值的部份资讯,将要排序的元素分配至某些“桶”中,藉以达到排序的作用.<br>稳定性:不稳定<br>时间:O(d(n+rd))<br>空间:O(n+rd)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxshellText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>希尔排序是插入排序的一种.也称缩小增量排序,是直接插入排序算法的一种更高效的改进版本.<br>&nbsp&nbsp稳定性:不稳定<br>&nbsp&nbsp时间复杂度O(n^1.3)<br>&nbsp&nbsp空间复杂度:O(1)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxBubbleText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>冒泡排序算法的名字由来是因为越大的元素会经由交换“浮”到数列的顶端.<br><br>&nbsp&nbsp稳定性:稳定<br>&nbsp&nbsp时间复杂度O(n^2)<br>&nbsp&nbsp空间复杂度:O(1)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

function initboxbinText()
{
	let pNodes1 = document.getElementById('box');
	pNodes1.innerHTML='\
        <p>折半插入排序是对排序算法的一种改进,在查找时使用折半查找.<br><br>&nbsp&nbsp稳定性:稳定<br>&nbsp&nbsp时间复杂度O(n^2)<br>&nbsp&nbsp空间复杂度:O(1)</p>\
        <span><img style="position: absolute; top: 35px;left: 7px" src="arrow_white_right.png" alt=""/></span>\
		';
}

/*if (no=="冒泡排序"){
								initBubbleText();
								initboxBubbleText();
								this.Arr=initNumBubble(this.arr);
							}
把各函数添加到对应的js文件里*/