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
function sortDomheap(arr, num1 , num2 , index1 , index2 , flag , oUl , line) {

    let i,
        html1 = "",
        className = "";

    let pNodes = document.getElementById('text').getElementsByTagName('p');
    for(let cur=0;cur<pNodes.length;cur++){
        pNodes[cur].style.color="Black";
    }
    pNodes[line-1].style.color="Red";
    
    for( i = 0 ; i <= arr.length - 1 ; i++){
        if( flag == 3 ){
            className = "";
        }
        else if( flag == 2 ){
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
        else if( flag == 1 ){
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
        html1 += '<li class="' + className + '" style="height: ' + arr[i] * 10 + 'px"><p>' + arr[i] + '</p></li>';
    }

    oUl.innerHTML = html1;
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
                $(".swapRight").animate({left: '+'+(Arr[0][2]-Arr[0][1])*60+'px'}, "slow"); 
                $(".swapLeft").animate({right: '+'+(Arr[0][1]-Arr[0][2])*60+'px'}, "slow"); 
            }
            Arr.shift();

        } else {

            clearInterval(this.timer);

        }

    }, 1000);

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
        if(Arr[0][5]==2){
            $(".swapRight").animate({left: '+'+(Arr[0][2]-Arr[0][1])*60+'px'}, "slow"); 
            $(".swapLeft").animate({right: '+'+(Arr[0][2]-Arr[0][1])*60+'px'}, "slow"); 
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