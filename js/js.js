/**
 * Created by Administrator on 2016/8/22.
 */
var mainNode=document.getElementById('main');
var lisNode=mainNode.getElementsByTagName('li');
var middleDivNode=document.getElementById('middleDiv');
var middleImgNode=middleDivNode.getElementsByTagName('img')[0];
var boardNode=middleDivNode.getElementsByTagName('span')[0];//蓝色的画布
var bigImgNode=document.getElementById('bigImg');//大图

for( var i=0;i<lisNode.length;i++) {
    lisNode[i].onmouseover = function () {
        for (var j = 0; j < lisNode.length; j++) {
            lisNode[j].className = '';
        }
        var smallImgSrc = this.getElementsByTagName('img')[0].src;
        this.className = 'main_imgCur';
        middleImgNode.src = smallImgSrc.substring(0, smallImgSrc.length - 5) + 'm.jpg';
        bigImgNode.src = smallImgSrc.substring(0, smallImgSrc.length - 5) + 'b.jpg';
    }
}

    middleDivNode.onmouseenter = function () {
        boardNode.style.display = '';
        bigImgNode.parentNode.style.display = '';

    }

    middleDivNode.onmouseleave = function () {
        boardNode.style.display = 'none';
        bigImgNode.parentNode.style.display = 'none';

    }

    middleDivNode.onmousemove = function (e) {//鼠标移动的事件
        var event = window.event || e;
        var pageX = event.pageX;//得到鼠标与网页左上角的坐标X；
        var pageY = event.pageY;//得到鼠标与网页左上角的坐标Y；
        var middleDivNodeX = middleDivNode.offsetLeft + middleDivNode.parentNode.offsetLeft;
        //表示得到div与父节点的水平距离；
        var middleDivNodeY = middleDivNode.offsetTop + middleDivNode.parentNode.offsetTop;
        //表示得到div与父节点的垂直距离；
        var X = pageX - middleDivNodeX;//鼠标相对左上角的坐标X；
        var Y = pageY - middleDivNodeY;//鼠标相对左上角的坐标Y；

        // console.log(X, Y);
        var boardNodeWidth = boardNode.clientWidth;//得到画布的宽度；
        var boardNodeHeight = boardNode.clientHeight;//得到画布的高度；
        var middleDivNode_X=middleDivNode.clientWidth;//div的可视宽度
        var middleDivNode_Y=middleDivNode.clientHeight;//divde可视高度；


        boardNode.style.left = (X - boardNodeWidth / 2) + 'px';//蓝色画布左上角离图片的距离；
        boardNode.style.top = (Y - boardNodeHeight / 2) + 'px';
        //console.log(boardNode.style.left, boardNode.style.top)

        if (X<boardNodeWidth/2) {
            if (Y<boardNodeHeight/2){
                boardNode.style.left=0+'px';
                boardNode.style.top=0+'px';}
            else if (Y> middleDivNode_Y-boardNodeHeight/2) {
                boardNode.style.left=0+'px';
                boardNode.style.top = middleDivNode_Y-boardNodeHeight+'px';
            }
        }
        else if (X>=middleDivNode_X-boardNodeWidth/2){
            boardNode.style.left = middleDivNode_X-boardNodeWidth + 'px';
            if (Y<=boardNodeHeight/2){
                boardNode.style.top=0+'px';}
            else if (Y>=middleDivNode_Y-boardNodeHeight/2){
               boardNode.style.top = middleDivNode_Y-boardNodeHeight+'px'; }
        }


         if(Y>boardNodeHeight/2&&Y<middleDivNode_Y-boardNodeHeight/2) {
             if (X < boardNodeWidth / 2) {
                 boardNode.style.left = 0 + 'px';
             }
             else if (X > middleDivNode_X - boardNodeWidth / 2) {
                 boardNode.style.left = middleDivNode_X - boardNodeWidth + 'px';
             }
         }
             else if(X>boardNodeWidth / 2 && X<middleDivNode_X - boardNodeWidth/2) {
                 if (Y < boardNodeHeight / 2) {
                     boardNode.style.top = 0 + 'px';}
                 else if ( Y> middleDivNode_Y - boardNodeHeight / 2) {
                     boardNode.style.top = middleDivNode_Y - boardNodeHeight + 'px'; }
             }

      var bigAndmiddlescale=bigImgNode.clientWidth/middleDivNode_X;
      var boardNodeX=boardNode.offsetLeft;
      var booardNodeY=boardNode.offsetTop;
        bigImgNode.parentNode.scrollLeft=bigAndmiddlescale*boardNodeX;
        bigImgNode.parentNode.scrollTop=bigAndmiddlescale*booardNodeY;



    }




