/*
调用入口
choice：当前调用算法
1：冒泡
*/
function initArr() {

    var numArr = [];

    //获取排序数字的个数

    var num = document.getElementById("form-control").value;
    if(num>10){
        return ;
    }
    var numArray = document.getElementById("num-input");

    numArr.length = 0;

    numArray.value = '';

    for (var i = 0; i < num; i++) {

        numArr.push(randomGet(1, 50));

        numArray.value = numArr;

    }

    return numArr;

}

function preArr(){
    var numArray = document.getElementById("num-input").value;
    
    if(numArray==""){
        return ;
    }
    var numArr = [];
    var arr = numArray.split(',');
    for(var i = 0; i<arr.length; i++) {
        numArr.push(parseFloat(arr[i]));
    }
    
    return numArr;
}

//柱表初始化
function init(numArr,oUl) {

    let html = "";

    numArr.map((item) => {

        html += '<li class="" style="height: ' + item * 10 + 'px"><p>' + item + '</p></li>';

    });

    oUl.innerHTML = html;

}


/*
动画分步存储
arr整体数组，
num1左操作数，
num2右操作数，
index1有序区间左端，
index2有序区间右端，
flag操作，1比较，2交换，3其他
oUI网页对应区域
line代码高亮行(数组？)
*/
function sortDom(arr, num1 , num2 , index1 , index2 , flag , oUl , line) {

    let i,
        html = "",
        className = "",
        heap = "";

    let pNodes = document.getElementById('text').getElementsByTagName('p');
    for(let cur=0;cur<pNodes.length;cur++){
        pNodes[cur].style.color="Black";
    }
    pNodes[line-1].style.color="Red";
    
    for( i = 0 ; i <= arr.length - 1 ; i++){
        if( flag == 3 ){
            className = "";
        }
        else if( flag == 2||flag == 5 ){
            if( i == num1 ){
                className = " swapRight";
            }
            else if( i == num2 ){
                className = " swapLeft";
            }
            else if( i > index1 && i <= index2 ){
                className = "completed";
            }
            else{
                className = "";
            }
        }
        else if( flag == 1||flag == 4 ){
            if( i == num1 || i == num2 ){
                className = " compare";
            }
            else if(i > index1 && i <= index2 ){
                className = "completed";
            }
            else{
                className = "";
            }
        }
        if(flag == 4 || flag == 5){
            draw(arr,250,110,flag,num1,num2,index1,index2);
        }
        else html += '<li class="' + className + '" style="height: ' + arr[i] * 10 + 'px"><p>' + arr[i] + '</p></li>';
    }

    oUl.innerHTML = html;
    document.getElementById("num-out").value = arr;
}

//运行动画
function animation(oUl,arr) {

    let Arr = arr;

    //清空

    clearInterval(this.timer);

    this.timer = setInterval(function(){

        if (Arr.length > 0) {

            this.sortDom(Arr[0][0], Arr[0][1], Arr[0][2], Arr[0][3] , Arr[0][4] , Arr[0][5] , oUl , Arr[0][6]);
            if(Arr[0][5]==2){
                $(".swapRight").animate({left: '+'+(Arr[0][2]-Arr[0][1])*60+'px'},  (2001-document.getElementById("speed").value));
                $(".swapLeft").animate({right: '+'+(Arr[0][2]-Arr[0][1])*60+'px'},  (2001-document.getElementById("speed").value));
            }
            if(Arr[0][5]==5){
                let up=document.getElementsByClassName("heapdown")[0],
                    down=document.getElementsByClassName("heapup")[0];
                y1=up.offsetTop;
                y2=down.offsetTop;
                x1=up.offsetLeft;
                x2=down.offsetLeft;
                $(".heapdown").animate({top: y2},  (2001-document.getElementById("speed").value)/2);
                $(".heapup").animate({top: y1},  (2001-document.getElementById("speed").value)/2);
                $(".heapdown").animate({left: x2},  (2001-document.getElementById("speed").value)/2);
                $(".heapup").animate({left: x1},  (2001-document.getElementById("speed").value)/2);
            }
            Arr.shift();

        } else {

            clearInterval(this.timer);
            let e=document.getElementById('play');
            e.setAttribute("value","play");
        }

    }, (2001-document.getElementById("speed").value));
    
}

function stop(){
    if(this.timer!=null){
        clearInterval(this.timer);
    }
}

function stepAnimation(oUl,arr) {
    let Arr = arr;
    if (Arr.length > 0) {

        this.sortDom(Arr[0][0], Arr[0][1], Arr[0][2], Arr[0][3] , Arr[0][4] , Arr[0][5] , oUl , Arr[0][6]);
        if(Arr[0][5]==2||Arr[0][5]==5){
            $(".swapRight").animate({left: '+'+(Arr[0][2]-Arr[0][1])*60+'px'}, "slow"); 
            $(".swapLeft").animate({right: '+'+(Arr[0][2]-Arr[0][1])*60+'px'}, "slow"); 
        }
        if(Arr[0][5]==5){
            let up=document.getElementsByClassName("heapdown")[0],
                down=document.getElementsByClassName("heapup")[0];
            y1=up.offsetTop;
            y2=down.offsetTop;
            x1=up.offsetLeft;
            x2=down.offsetLeft;
            $(".heapdown").animate({top: y2}, "300"); 
            $(".heapup").animate({top: y1}, "300"); 
            $(".heapdown").animate({left: x2}, "300"); 
            $(".heapup").animate({left: x1}, "300"); 
        }
        Arr.shift();

    }
    return Arr;

}

//产生一组随机数
function randomGet(a, b) {

    var result = Math.random() * (b - a) + a;

    return result >> 0;

}

//生成动画的元素存储
function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}