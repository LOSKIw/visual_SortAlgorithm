function initNumBubble(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];
    
    sort_bubble(numArr);
    return this.Arr;
}

function initBubbleText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>do{</p>\
        <p>&nbsp&nbsp&nbsp&nbspswapped = false;</p>\
        <p>&nbsp&nbspfor(i = 1 to LastUnsortedElement-1)</p>\
        <p>&nbsp&nbspif(leftElement > rightElement){</p>\
        <p>&nbsp&nbsp&nbsp&nbspswap(leftElement, rightElement);</p>\
        <p>&nbsp&nbsp&nbsp&nbspswapped = true;}</p>\
        <p>&nbsp&nbsp&nbsp}while(swapped)</p>';
}

function sort_bubble(numArr) {

    let resArr = numArr.slice(),

        len = resArr.length,

        temp,

        sortOk;
    
    this.pushArr(resArr.slice(), -1 , -1 , -1 , -1 , 3 , 1);
    for (let i = 0; i < len - 1; i++) {
        this.pushArr(resArr.slice(), -1 , -1 , len - 1 - i , len - 1 , 2 , 2);
        sortOk = true;
        this.pushArr(resArr.slice(), -1 , -1 , len - 1 - i , len - 1 , 2 , 3);
        for (let j = 0; j < len - i - 1; j++) {
            
            temp = resArr[j];
            this.pushArr(resArr.slice(), j , j + 1 , len - 1 - i , len - 1 , 1 , 4);
            if (resArr[j + 1] < resArr[j]) {

                this.pushArr(resArr.slice(), j , j + 1 , len - 1 - i , len - 1 , 2 , 5);

                temp = resArr[j];

                resArr[j] = resArr[j + 1];

                resArr[j + 1] = temp;

                this.pushArr(resArr.slice(), j , j + 1 , len - 1 - i , len - 1 , 1 , 6);

                sortOk = false;

            }

            

        }

        if (sortOk == true) {

            this.pushArr(resArr.slice(), -1 , -1 , -1 , len - 1 , 1 , 7);

            break;

        }

    }
}

//生成动画的元素存储
function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}
