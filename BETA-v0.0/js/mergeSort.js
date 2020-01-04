function initNumMerge(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];

    sort_merge(numArr);
    return this.Arr;
}

function initMergeText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML="\
        <p>slice A into part fullfill len=1</p>\
        <p>for each adjacent part {</p>\
        <p>&nbsp&nbsp&nbsp&nbspmerge them and sort</p>\
        <p>&nbsp&nbsp&nbsp&nbsplen *= 2</p>";
}

function sort_merge(numArr){
    let resArr = numArr.slice(),

        len = resArr.length;
    
    let m=1;
    this.pushArr(resArr.slice(), -1 , -1 , -1 , -1 , 1 , 1);
    while(m<len){
        resArr=mergepass(resArr,len,m);
        m=m*2;
    }
    this.pushArr(resArr.slice(), -1 , -1 , -1 , len , 1 , 4);
}

function mergepass(arr,n,len){
    let first=0,
        last=first+2*len-1;
    while(first+len<=n){
        last=first+2*len-1
        if(last>n){
            last=n;
        }
        
        arr=merge(arr,first,last,len);
        first=last+1;
    }
    return arr;
}

function merge(numArr,a,b,n) {

    let resArr = numArr.slice(),

        len = resArr.length,

        temp,

        temp1;

    this.pushArr(resArr.slice(), -1 , -1 , a-1 , b , 1 , 2);
    for( let i = a; i < a+n ; i++){
        let j = i+n;
        temp = resArr[j];
        for( ; j-1 >= i && temp < resArr[j-1] ; j-- ){
            
            this.pushArr(resArr.slice(), j-1 , j , a-1 , b , 1 , 3);
            this.pushArr(resArr.slice(), j-1 , j , a-1 , b , 2 , 3);

            temp1=resArr[j];
            resArr[j]=resArr[j-1];
            resArr[j-1]=temp1;
            
        }
    }

    return resArr;
}


function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}
