function initNumshell(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];
    this.Arr = [];
    shellSort(this.numArr);
    return this.Arr;
}

function initshellText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>for every gap</p>\
		<p>&nbsp&nbsp&nbsp&nbspfor each i fullfill i-gap > 0</p>\
		<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspif A[i] < A[i-gap]</p>\
		<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspswap(A[i],A[i-gap])</p>\
		<p>&nbsp&nbsp&nbsp&nbspgap = gap / 2</p>';
}

function shellSort2(resArr) {
	let len = resArr.length;
	this.pushArr(resArr.slice(), -1 , -1 , -1 , -1 , 1 , 1);
	for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
		this.pushArr(resArr.slice(), -1 , -1 , -1 , -1 , 1 , 2);
		for (var i = fraction; i < len; i++) {
			for (var j = i - fraction; j >= 0 && resArr[j] > resArr[fraction + j]; j -= fraction) {
				this.pushArr(resArr.slice(), j , fraction + j , -1 , -1 , 1 , 3);
				this.pushArr(resArr.slice(), j , fraction + j , -1 , -1 , 2 , 4);
				var temp = resArr[j];
				resArr[j] = resArr[fraction + j];
				resArr[fraction + j] = temp;
			}
		}
	}
	this.pushArr(resArr.slice(), -1 , -1 , -1 , resArr.length-1 , 2 , 5);
}
 
 function shellSort(arr)
 {
	let resArr = arr.slice();
	len = resArr.length;
	shellSort2(resArr);
 }
	 

function pushArr() {
    this.Arr.push(Array.prototype.slice.call(arguments));
}