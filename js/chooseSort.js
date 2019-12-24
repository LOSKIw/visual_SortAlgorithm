function initNumChoose() {

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
    
    sort_choose(numArr);

    animation(oUl);

}

function sort_choose(numArr) {

    let resArr = numArr.slice(),

        len = resArr.length,

        temp,

        sortOk;

    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>repeat(numOfElements-1)times</p>\
        <p>&nbsp&nbsp&nbsp&nbspset the first unsorted element as min</p>\
        <p>&nbsp&nbsp&nbsp&nbspfor each of the unsorted elements</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspif element < currentMin</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspset element as new min</p>\
        <p>&nbsp&nbsp&nbsp&nbspswap min with first unsorted position</p>';
    this.pushArr(resArr.slice(), -1 , -1 , -1 , -1 , 3 , 1);

    for (let i = 0 ; i <= len - 1 ; i++) {

        let min=i;
        this.pushArr(resArr.slice(), min , -1 , -1 , i-1 , 1 , 2);

        this.pushArr(resArr.slice(), min , -1 , -1 , i-1 , 1 , 3);
        for (let j = i + 1 ; j <= len - 1 ; j++) {
            this.pushArr(resArr.slice(),min , j , -1 , i-1  , 1 , 4);
            if(resArr[j]<resArr[min]){
                min=j;
                this.pushArr(resArr.slice(), min , -1 , -1 , i -1 , 1 , 5);
            }

        }
        if(min!=i){
            this.pushArr(resArr.slice(), i , min , -1 , i -1 , 2 , 6);
            temp = resArr[i];
            resArr[i] = resArr[min];
            resArr[min] = temp;
        }

    }
    this.pushArr(resArr.slice(), -1 , -1 , -1 , len , 1 , 6);
}

function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}
