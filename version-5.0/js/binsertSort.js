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
        <p>for every gap</p>';
}

function binsertSort(resarr)
{
	let i,j,m,low,high;
	this.pushArr(resarr.slice(), -1 , -1 , -1 , -1 , 3 , 1);
	for(i=1;i<=resarr.length-1;i++)
	{
		this.pushArr(resarr.slice(), -1 , -1 , i-1 , i , 1 , 1);
		low=0;high=i-1;
		while(low<=high)
		{console.log(low);
		console.log(high);
			m=parseInt((low+high)/2);
			this.pushArr(resarr.slice(), m, i , low-1 , high , 1 , 1);
			if(resarr[i]<resarr[m])
				high=m-1;
			else
				low=m+1;
		}
		for(j=i-1;j>=high+1;--j)
		  {   this.pushArr(resarr.slice(), j, j+1 , low , high , 2 , 1);
			  var temp=resarr[j+1];
			  resarr[j+1]=resarr[j];
			  resarr[j]=temp;
		  }
	}
	this.pushArr(resarr.slice(), -1 , -1 , -1 , resarr.length-1 , 1 , 1);
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
