function initbinsertSort(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];
    this.Arr = [];
    sort_binsert(numArr);
    return this.Arr;
}

function initbinText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>&nbsp&nbspfor(i=1;i < arr.length;i++){</p>\
		<p>&nbsp&nbsp&nbsp&nbsplow=0;hight=i-1;</p>\
		<p>&nbsp&nbspwhile(low < =high){</p>\
		<p>&nbsp&nbsp&nbsp&nbspm=parseInt((low+high)/2);</p>\
		<p>&nbsp&nbsp&nbsp&nbspif(arr[i] < arr[m]) <br/> &nbsp&nbsp&nbsp&nbsp&nbsphigh=m-1; <br>&nbsp&nbsp&nbsp&nbspelse<br>&nbsp&nbsp&nbsp&nbsp&nbsplow=m+1;</p>\
		<p>&nbsp&nbsp&nbsp&nbspfor(j=i-1;j > =high+1 ; --j) <br> &nbsp&nbsp&nbsp&nbsp&nbspswap ( arr[j] ,arr[j+1]);</p>\
		<p>&nbsp&nbsp&nbsp&nbsp}</p>';
		
}

function binsertSort(resarr)
{
	let i,j,m,low,high;
	this.pushArr(resarr.slice(), -1 , -1 , -1 , -1 , 3 , 1);
	for(i=1;i<=resarr.length-1;i++)
	{
		this.pushArr(resarr.slice(), -1 , -1 , i-1 , i , 1 , 3);
		low=0;high=i-1;
		while(low<=high)
		{
			m=parseInt((low+high)/2);
			this.pushArr(resarr.slice(), m, i , low-1 , high , 1 , 5);
			if(resarr[i]<resarr[m])
				high=m-1;
			else
				low=m+1;
		}
		for(j=i-1;j>=high+1;--j)
		  {   this.pushArr(resarr.slice(), j, j+1 , low , high , 2 , 6);
			  var temp=resarr[j+1];
			  resarr[j+1]=resarr[j];
			  resarr[j]=temp;
		  }
	}
	this.pushArr(resarr.slice(), -1 , -1 , -1 , resarr.length-1 , 1 , 6);
}

function sort_binsert(numArr)
{
  let resarr=numArr.slice();
  binsertSort(resarr);
  this.pushArr(resarr.slice(), -1 , -1 , -1 , resarr.length - 1 , 1 , 1);
}

function pushArr(){
    this.Arr.push(Array.prototype.slice.call(arguments));
}
