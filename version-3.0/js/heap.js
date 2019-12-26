function initNumHeap(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];
    
    sort_heap(numArr);
    return this.Arr;
}

function initHeapText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>shift heap</p>\
        <p>for (i = 0; i < A.length; i++)</p>\
        <p>&nbsp&nbsp&nbsp&nbspExtractMax()</p>\
        <p>&nbsp&nbsp&nbsp&nbspshift heap</p>';
}

function draw(list,x,y){
    this.arr=list;
    let len=this.arr.length,
        temp=1,
        html="",
        nodeList=new Array(len),
        xList=new Array(len),
        yList=new Array(len);
    let changeH=parseInt(Math.log(len)/Math.log(2));
    if(len==0){
        return ;
    }
    else{
        let temp='<div class="node" style="left:+'+(x)+'px;top:+'+(y)+'px">'+this.arr[0]+'</div>';
        let panel = document.getElementById("panel");
        panel.innerHTML=temp;
        html += temp;
        nodeList[0]=temp;
        let a=document.getElementById("root");
        xList[0]=x;
        yList[0]=y;
    }
    
    for(let i=1;i<len/2;i++){
        let x=xList[i-1],
            y=yList[i-1];
        for(let j=0;j<2;j++){
            if(2*i+j<=len){
                
                let newy=parseInt(Math.log(2*i+j)/Math.log(2));
                tempH=changeH-newy+1;
                let newx=x-tempH*20*(1-2*j);
                xList[2*i+j-1]=newx;
                let temp='<div class="node" style="left:+'+(newx)+'px;top:+'+(yList[0]+(newy)*20)+'px">'+this.arr[2*i+j-1]+'</div>';
                nodeList[2*i+j-1]=temp;
                html += temp;
            }
        }
        
    }
    
    var panel = document.getElementById("panel");
    panel.innerHTML=html;
}

function clearPanel(){
    let panel = document.getElementById("panel");
    panel.innerHTML="";
}


function swapHeap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp; 
}
  
// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设 结点 i 以下的子堆已经是一个大顶堆，shiftDown函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。后面
// 将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 shiftDown操作，所以就满足了结点 i 以下的子堆已经是一大
//顶堆
function shiftDown(A, i, length, flag) {
    let temp = A[i]; // 当前父节点
    this.pushArr(A.slice(), i , -1 , -1 , -1 , 1 , flag*flag);
    // j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for(let j = 2*i+1; j<length; j = 2*j+1) {
        temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
        if(j+1 < length && A[j] < A[j+1]) { 
            j++;   // 找到两个孩子中较大的一个，再与父节点比较
        }
        this.pushArr(A.slice(), i , j , -1 , -1 , 1 , flag*flag);
        if(temp < A[j]) {
            this.pushArr(A.slice(), i , j , -1 , -1 , 2 , flag*flag);
            swapHeap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
            i = j;  // 交换后，temp 的下标变为 j
        } else {
            break;
        }
    }
}
  
  // 堆排序
function sort_heap(A) {
    this.pushArr(A.slice(), -1 , -1 , -1 , -1 , 1 , 1);
    // 初始化大顶堆，从第一个非叶子结点开始
    for(let i = Math.floor(A.length/2-1); i>=0; i--) {
        shiftDown(A, i, A.length,1);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for(let i = Math.floor(A.length-1); i>0; i--) {
        this.pushArr(A.slice(), 0 , i , i , A.length-1 , 2 , 3);
        swapHeap(A, 0, i); // 根节点与最后一个节点交换
        shiftDown(A, 0, i,2); // 从根节点开始调整，并且最后一个结点已经为当
                            // 前最大值，不需要再参与比较，所以第三个参数
                            // 为 i，即比较到最后一个结点前一个即可
    }
    this.pushArr(A.slice(), -1 , -1 , i , A.length-1 , 1 , 4);
}

//生成动画的元素存储
function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}