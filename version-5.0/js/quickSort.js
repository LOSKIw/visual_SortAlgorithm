function initNumQuick(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];

    this.Arr = [];
    
    sort_quick(numArr);
    return this.Arr;
}

function initQuickText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>for each (unsorted) partition</p>\
        <p>&nbsp&nbsp&nbsp&nbspset middle element as pivot</p>\
        <p>&nbsp&nbsp&nbsp&nbspfor every i < pivot and j > pivot</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfind min i fullfill A[i]>A[pivot]</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfind max j fullfill A[i]&ltA[pivot]</p>\
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspswap(i, storeIndex); storeIndex++</p>\
        <p>set leftside and rightside as new partition</p>';
}

function swap(items, firstIndex, secondIndex){
    //交换数据
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    
}


function partition(resArr, left, right) {
    var pivot = resArr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    this.pushArr(resArr.slice(), pivot , -1 , left - 1 , right , 1 , 2);
    while (i <= j) {
        this.pushArr(resArr.slice(), i , j , left - 1 , right , 1 , 3);
        while (resArr[i] < pivot) {
            this.pushArr(resArr.slice(), i , j , left - 1 , right , 1 , 4);
            i++;
        }
        while (resArr[j] > pivot) {
            this.pushArr(resArr.slice(), i , j , left - 1 , right , 1 , 5);
            j--;
        }
        if (i <= j) {
            this.pushArr(resArr.slice(), i , j , left - 1 , right , 2 , 6);
            swap(resArr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(resArr, left, right) {
    var index;
    if (resArr.length > 1) {
        this.pushArr(resArr.slice(), -1 , -1 , left - 1 , right , 1 , 1);
        index = partition(resArr, left, right);
        if (left < index - 1) {
            this.pushArr(resArr.slice(), -1 , -1 , left - 1 , index - 1 , 1 , 7);
            quickSort(resArr, left, index - 1);
        }
        if (index < right) {
            this.pushArr(resArr.slice(), -1 , -1 , index - 1 , right , 1 , 7);
            quickSort(resArr, index, right);
        }

    }
    return resArr;
}


function sort_quick(numArr)
{
    let resArr = numArr.slice();
    len = resArr.length;
    quickSort( resArr, 0, resArr.length - 1 );
    this.pushArr(resArr.slice(), -1 , -1 , 0 - 1 , resArr.length - 1 , 1 , 7);
}


function pushArr() {
    this.Arr.push(Array.prototype.slice.call(arguments));
}
