function initNumInsert(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];

    sort_insert(numArr);
    return this.Arr;
}

function initInsertText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML="\
        <p>mark first element as sorted</p>\
        <p>for each unsorted element X {</p>\
        <p>&nbsp&nbsp&nbsp&nbsp'extract' the element X</p>\
        <p>&nbspfor j = lastSortedIndex down to 0{</p>\
        <p>&nbsp&nbsp&nbsp&nbspif current element j > X</p>\
        <p>&nbsp&nbsp&nbspmove sorted element to the right}</p>\
        <p>&nbsp&nbsp&nbsp&nbspbreak loop and insert X here<br>&nbsp&nbsp}</p>";
}

function sort_insert(numArr) {

    let resArr = numArr.slice(),

        len = resArr.length,

        temp,

        temp1;

    this.pushArr(resArr.slice(), -1 , -1 , -1 , 0 , 1 , 1);
    this.pushArr(resArr.slice(), -1 , -1 , -1 , 0 , 1 , 2);
    for( let i = 1; i < len ; i++){
        temp = resArr[i];
        this.pushArr(resArr.slice(), i , -1 , -1 , i-1 , 1 , 3);
        this.pushArr(resArr.slice(), i , -1 , -1 , i-1 , 1 , 4);
        let j;
        for(j = i-1 ; j >= 0 && temp < resArr[j] ; j-- ){

            this.pushArr(resArr.slice(), j , j+1 , -1 , i , 1 , 5);
            this.pushArr(resArr.slice(), j , j+1 , -1 , i , 2 , 6);

            temp1=resArr[j];
            resArr[j]=resArr[j+1];
            resArr[j+1]=temp1;

        }
        this.pushArr(resArr.slice(), j+1 , -1 , -1 , i , 1 , 7);
    }

    this.pushArr(resArr.slice(), -1 , -1 , -1 , len-1 , 1 , 7);

}

function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}
