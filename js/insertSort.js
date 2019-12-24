function initNumInsert() {

    var numArr = [];

    //获取排序数字的个数

    var num = document.getElementById("form-control").value;

    var numArray = document.getElementById("num-input");

    numArr.length = 0;

    numArray.value = '';

    for (var i = 0; i < num; i++) {

        numArr.push(randomGet(1, 50));

        numArray.value = numArr;

    }

    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];

    init(numArr,oUl);
    
    sort_insert(numArr);

    animation(oUl);

}

function sort_insert(numArr) {

    let pNodes = document.getElementById('text');
    pNodes.innerHTML="\
        <p>mark first element as sorted</p>\
        <p>for each unsorted element X</p>\
        <p>&nbsp&nbsp&nbsp&nbsp'extract' the element X</p>\
        <p>&nbsp&nbsp&nbsp&nbspfor j = lastSortedIndex down to 0</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspif current element j > X</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspmove sorted element to the right</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbreak loop and insert X here</p>";
    
    

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
