function initNumRadix(arr) {
    this.numArr=arr;
    var oUl = document.getElementsByClassName("sort_li")[0];
    this.Arr = [];
    var x='';
    x='<div class="rline">0</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">1</div>'+'<p>&nbsp&nbsp</p>'
    +'<div class="rline">2</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">3</div>'+'<p>&nbsp&nbsp</p>'
    +'<div class="rline">4</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">5</div>'+'<p>&nbsp&nbsp</p>'
    +'<div class="rline">6</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">7</div>'+'<p>&nbsp&nbsp</p>'
    +'<div class="rline">8</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">9</div>';
    oUl.innerHTML=x;
    sort_radix(numArr,x);
    return this.Arr;
}

function initRadixText(){
    let pNodes = document.getElementById('text');
    pNodes.innerHTML='\
        <p>function radixSort</p>\
        <p>for (i = 0; i < maxDigit; i++)</p>\
        <p>&nbsp&nbspfor (j = 0; j < A.lenth; j++)</p>\
        <p>&nbsp&nbsp&nbsp&nbsp counter[bucket].push(A[j])</p>\
        <p>&nbsp&nbspfor (j = 0; j < counter.lenth; j++)</p>\
        <p>&nbsp&nbsp&nbsp&nbsp value=counter.array</p>\
        <p>return arr</p>'
    ;
}



function sort_radix(arr,x) {
    var Arrnum = arr;
    let a=Arrnum.length;

 //   alert(arr.length);
    let len = arr.length;
    let e=document.getElementsByClassName('sort_li')[0];
    var html='';
    var html1="";
  //  alert(len);
    for (let i = 0; i < len; i++) {
        html1 = html1 + '<div class=" rnode" style="  top:+250px; left:+'+(420+i*60)+'px ">' + arr[i] + '</div>' + '<p>&nbsp&nbsp</p>';
    }
    html=x+html1;
    e.innerHTML=html;


    var counter = [];

    var mod = 10;
    var dev = 1;
    for (var i = 0; i < 2; i++, dev *= 10, mod *= 10) {
        let Numarr=new Array(a);
        let ara;
        var value2=[];
        for(var j = 0; j < arr.length; j++) {
            this.pushArr(j,1,-1,Arrnum.slice(),3,-1,null);
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            let num=counter[bucket].length;
            counter[bucket].push(arr[j]);

            this.pushArr(j,2,bucket,Arrnum.slice(),4,num,null);
            let buck=bucket;
            if (Numarr[buck]==null){
                Numarr[buck]= [];
            }
            Numarr[buck].push(j);
            this.pushArr(j,3,bucket,Arrnum.slice(),4,-1,null);

        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            var b=counter.length;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                    var value1=Numarr[j].shift();
                    value2.push(value1);
                    this.pushArr(value1,4,-1,Arrnum.slice(),6,pos,null);
                    this.pushArr(value1,3,-1,Arrnum.slice(),6,pos,null);
                    arr[pos++] = value;
                    ara=arr;

                }
            }
            //document.getElementById("num-out").value = arr;
        }
        this.pushArr(value1,5,-1,ara,6,b,value2);  document.getElementById("num-out").value = arr;
    }
    return arr;

}
function  radix_animation(oUl,arr){
    let Arr = arr;
    var line=document.getElementsByClassName("rline"),
        node=document.getElementsByClassName("rnode");

    this.timer = setInterval(function(){

        var node1=[];
        if (Arr.length > 0) {

            if(Arr[0][1]==1){
                let p=Arr[0][0];
                node[p].setAttribute("id","isselect");
                let pNodes = document.getElementById('text').getElementsByTagName('p');
                for(let cur=0;cur<pNodes.length;cur++){
                    pNodes[cur].style.color="Black";
                }
                let line1=Arr[0][4];
                pNodes[line1-1].style.color="Red";

            }

            else if (Arr[0][1]==2){

                let buc=Arr[0][2];
                let num1=Arr[0][5];
                let x=line[buc].offsetLeft;
                let y=line[buc].offsetTop;
                let pNodes = document.getElementById('text').getElementsByTagName('p');
                $('#isselect').animate({
                    left:x-0.5,
                    top:y-30-num1*35-5
                },300);

                for(let cur=0;cur<pNodes.length;cur++){
                    pNodes[cur].style.color="Black";
                }
                let line1=Arr[0][4];
                pNodes[line1-1].style.color="Red";

            }
            else if (Arr[0][1]==3){
                var p=Arr[0][0];
                node[p].setAttribute("id","ismove");
                let pNodes = document.getElementById('text').getElementsByTagName('p');
                for(let cur=0;cur<pNodes.length;cur++){
                    pNodes[cur].style.color="Black";
                }
                let line1=Arr[0][4];
                pNodes[line1-1].style.color="Red";
            }
            else if (Arr[0][1]==4){
                var p=Arr[0][0];
                node[p].setAttribute("id","isselect");
                let w=Arr[0][5];
                $('#isselect').animate({
                    left:420+w*60,
                    top:250
                },300);
                let pNodes = document.getElementById('text').getElementsByTagName('p');
                for(let cur=0;cur<pNodes.length;cur++){
                    pNodes[cur].style.color="Black";
                }
                let line1=Arr[0][4];
                pNodes[line1-1].style.color="Red";
            }
            else if (Arr[0][1]==5){
                let arr=Arr[0][3];
                document.getElementById("num-out").value = arr;
                var arrr=Arr[0][6];
                var poss=0;
                var value2;

                        while ((value2 = arrr.shift()) != null) {
                            node1[poss++] = node[value2];
                        }

                for (let i=0;i<poss;i++){
                    node[i]=node1[i];

                }
                let pNodes = document.getElementById('text').getElementsByTagName('p');
                for(let cur=0;cur<pNodes.length;cur++){
                    pNodes[cur].style.color="Black";
                }
                let line1=Arr[0][4];
                pNodes[line1-1].style.color="Red";

            }
            Arr.shift();
        } else {

            clearInterval(this.timer);
            let er=document.getElementById('play');
            er.setAttribute("value","play");
        }

    }, (2001-document.getElementById("speed").value));

}

function finaly_radix(arr) {
    var Arrnum = arr;
    let a=Arrnum.length;
    var x='';
    x='<div class="rline">0</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">1</div>'+'<p>&nbsp&nbsp</p>'
        +'<div class="rline">2</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">3</div>'+'<p>&nbsp&nbsp</p>'
        +'<div class="rline">4</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">5</div>'+'<p>&nbsp&nbsp</p>'
        +'<div class="rline">6</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">7</div>'+'<p>&nbsp&nbsp</p>'
        +'<div class="rline">8</div>'+'<p>&nbsp&nbsp</p>'+'<div class="rline">9</div>';
    //   alert(arr.length);
    let len = arr.length;
    let e=document.getElementsByClassName('sort_li')[0];
    var html='';
    var html1="";
    //  alert(len);
    for (let i = 0; i < len; i++) {
        html1 = html1 + '<div class=" rnode" style="  top:+250px; left:+'+(420+i*60)+'px ">' + arr[i] + '</div>' + '<p>&nbsp&nbsp</p>';
    }
    html=x+html1;
    e.innerHTML=html;
    let pNodes = document.getElementById('text').getElementsByTagName('p');
    for(let cur=0;cur<pNodes.length;cur++){
        pNodes[cur].style.color="Black";
    }

    pNodes[6].style.color="Red";
}

function  step_radixanimation(oUl,arr){
    let Arr = arr;
    var line=document.getElementsByClassName("rline"),
        node=document.getElementsByClassName("rnode");
    var node1=[];
    if (Arr.length > 0) {

        if(Arr[0][1]==1){
            let p=Arr[0][0];
            node[p].setAttribute("id","isselect");
            let pNodes = document.getElementById('text').getElementsByTagName('p');
            for(let cur=0;cur<pNodes.length;cur++){
                pNodes[cur].style.color="Black";
            }
            let line1=Arr[0][4];
            pNodes[line1-1].style.color="Red";

        }

        else if (Arr[0][1]==2){

            let buc=Arr[0][2];
            let num=Arr[0][5];
            let x=line[buc].offsetLeft;
            let y=line[buc].offsetTop;
            $('#isselect').animate({
                left:x-0.5,
                top:y-30-num*35-5
            },300);
            let pNodes = document.getElementById('text').getElementsByTagName('p');
            for(let cur=0;cur<pNodes.length;cur++){
                pNodes[cur].style.color="Black";
            }
            let line1=Arr[0][4];
            pNodes[line1-1].style.color="Red";

        }
        else if (Arr[0][1]==3){
            var p=Arr[0][0];
            node[p].setAttribute("id","ismove");
            let pNodes = document.getElementById('text').getElementsByTagName('p');
            for(let cur=0;cur<pNodes.length;cur++){
                pNodes[cur].style.color="Black";
            }
            let line1=Arr[0][4];
            pNodes[line1-1].style.color="Red";
        }
        else if (Arr[0][1]==4){
            var p=Arr[0][0];
            node[p].setAttribute("id","isselect");
            let w=Arr[0][5];
            $('#isselect').animate({
                left:200+w*60,
                top:250
            },300);
            let pNodes = document.getElementById('text').getElementsByTagName('p');
            for(let cur=0;cur<pNodes.length;cur++){
                pNodes[cur].style.color="Black";
            }
            let line1=Arr[0][4];
            pNodes[line1-1].style.color="Red";
        }
        else if (Arr[0][1]==5){
            let arr=Arr[0][3];
            document.getElementById("num-out").value = arr;
            var arrr=Arr[0][6];
            var poss=0;
            var value2;

            while ((value2 = arrr.shift()) != null) {
                node1[poss++] = node[value2];
            }

            for (let i=0;i<poss;i++){
                node[i]=node1[i];

            }
            let pNodes = document.getElementById('text').getElementsByTagName('p');
            for(let cur=0;cur<pNodes.length;cur++){
                pNodes[cur].style.color="Black";
            }
            let line1=Arr[0][4];
            pNodes[line1-1].style.color="Red";


        }
        Arr.shift();
    }
    return Arr;


}
//生成动画的元素存储
function pushArr() {

    this.Arr.push(Array.prototype.slice.call(arguments));

}