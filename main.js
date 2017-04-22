/**
 * 绘制三角形
 * 
 * 
 */
var triangle = {};
var treeNode = document.getElementById('treeNode');
var html = '';

var width = 400;//每一组的宽度
var height = 900;//每一组的高度
var xNum = 3;//每一水平方向染色体的个数
var topHeight = 40;//距离顶部的高度
var r = 10;//圆圈的半径
var circleNum = 8;//每一行需要放置圆圈的个数
var circleRow = 3;//需要放置圆圈的排数
var circleRowSpan = 5;//每一组之间的间隔
var gyHeight = 30;//每个基因的高度
var gyWidth = 10;//每个基因的宽度
var lineLength = 60;//线条长度
var rstlength = tree.length;
for(var i=0; i<rstlength; i++){
	var eachRst = tree[i].children;//每一组染色体数据
	var rst = {};
	rst.x= 20+width*(i%xNum);
	var length = eachRst.length;
	var allHeight = r*length*2*circleRow+circleRowSpan;//圆圈和每组圆圈间距排成的总高度
	var allGenHeight = gyHeight*length;//因子的总高度
	for(var k=0;k<length;k++){
		var gyY = topHeight+Math.floor(i/xNum)*height+allHeight/2-allGenHeight/2+gyHeight*k;
		html += '<rect x="'+rst.x+'" y="'+gyY+'" width="'+gyWidth+'" height="'+gyHeight+'" style="fill:'+eachRst[k].color+';stroke-width:1;stroke:#eee;"/>';
		var eachYZ = eachRst[k].children;//每一组因子
		var yzlength = eachYZ.length;
		var circlex = rst.x+lineLength+gyWidth;
		var circley = topHeight+r*k*2*circleRow+Math.floor(i/xNum)*height+circleRowSpan*k;
		html += '<line x1="'+(rst.x+gyWidth)+'" y1="'+(gyY+gyHeight/2)+'" x2="'+circlex+'" y2="'+circley+'" style="stroke:rgb(99,99,99);stroke-width:1"/>';
		for(var j=0;j<yzlength;j++){
			if(j<circleNum){
				if(eachYZ[j].type == 'circle'){
					html += '<circle onclick="clickYZ('+eachYZ[j].id+',\''+eachYZ[j].type+'\','+eachYZ[j].value+')" cx="'+circlex+'" cy="'+circley+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
				}else if(eachYZ[j].type == 'triangle'){
					var x1 = circlex-Math.sqrt(3)/2*r;
					var x2 = circlex+Math.sqrt(3)/2*r;
					var x3 = circlex;
					var y1 = circley-r/2;
					var y2 = circley-r/2;
					var y3 = circley+r;
					html += '<polygon points="'+x1+','+y1+' '+x2+','+y2+' '+x3+','+y3+'" onclick="clickYZ('+eachYZ[j].id+',\''+eachYZ[j].type+'\','+eachYZ[j].value+')" style="fill:'+eachYZ[j].color+';"/>';
				}
				circlex = circlex+2*r;
			}else{
				//顶部高度+半径*（本组个数+前面组的个数）+染色体组高度
				var circley2 = topHeight+r*(2*(Math.floor(j/circleNum))+k*2*circleRow)+Math.floor(i/xNum)*height+circleRowSpan*k;
				var circlex2 = rst.x+lineLength+gyWidth+2*r*(j%circleNum);
				if(eachYZ[j].type == 'circle'){
					html += '<circle onclick="clickYZ('+eachYZ[j].id+',\''+eachYZ[j].type+'\','+eachYZ[j].value+')" cx="'+circlex2+'" cy="'+circley2+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
				}else if(eachYZ[j].type == 'triangle'){
					var x21 = circlex2-Math.sqrt(3)/2*r;
					var x22 = circlex2+Math.sqrt(3)/2*r;
					var x23 = circlex2;
					var y21 = circley2-r/2;
					var y22 = circley2-r/2;
					var y23 = circley2+r;
					html += '<polygon points="'+x21+','+y21+' '+x22+','+y22+' '+x23+','+y23+'" onclick="alert(222)" style="fill:'+eachYZ[j].color+';"/>';
				}
			}
			
		}
		
	}
	
}
treeNode.innerHTML = html;


//点击
function clickYZ(id,type,value){
	alert(id+":"+type+":"+value);
}


//放大缩小
var treeNode = $('#treeNode');
function zoom(type){
	var viewBox = treeNode.attr('viewBox');
	var viewBoxArray = viewBox.split(" ");
	var x1 = parseInt(viewBoxArray[0]);
	var y1 = parseInt(viewBoxArray[1]);
	var x2 = parseInt(viewBoxArray[2]);
	var y2 = parseInt(viewBoxArray[3]);
	if(type == 'zoomin'){
		var newx1 = x1+(x2-x1)/4;
		var newy1 = y1+(y2-y1)/4;
		var newx2 = x2-(x2-x1)/4;
		var newy2 = y2-(y2-y1)/4;
	}else if(type == 'zoomout'){
		var newx1 = x1-(x2-x1)/2;
		var newy1 = y1-(y2-y1)/2;
		var newx2 = x2+(x2-x1)/2;
		var newy2 = y2+(y2-y1)/2;
	}else if(type == 'reset'){
		var newx1 = 0;
		var newy1 = 0;
		var newx2 = 1200;
		var newy2 = 800;
	}
	treeNode.attr('viewBox',newx1+" "+newy1+" "+newx2+" "+newy2);
	if(newx1>-1&&newy1>-1){
		
	}else{
		//alert('已经缩到最小了！');
	}
}


//平移
var drag = false;
treeNode.mousedown(function(){
  drag = true;
  treeNode.css({"cursor":"move"});
});

treeNode.click(function(){

});
treeNode.mouseup(function(){
  drag = false;
  treeNode.css({"cursor":"default"});
});

var pageXTemp = 0;
var pageYTemp = 0;
treeNode.mousemove(function(e){
	if(drag){
		var viewBox = treeNode.attr('viewBox');
		var viewBoxArray = viewBox.split(" ");
		var x1 = parseInt(viewBoxArray[0]);
		var y1 = parseInt(viewBoxArray[1]);
		var x2 = parseInt(viewBoxArray[2]);
		var y2 = parseInt(viewBoxArray[3]);
		var doX = 4;
		var doY = 4;
		if(pageXTemp<e.pageX){
			doX = -doX;
		}
		if(pageYTemp<e.pageY){
			doY = -doY;
		}
		pageXTemp = e.pageX;
		pageYTemp = e.pageY;
		var newx1 = x1+doX;
		var newy1 = y1+doY;
		var newx2 = x2+doX;
		var newy2 = y2+doY;
		treeNode.attr('viewBox',newx1+" "+newy1+" "+newx2+" "+newy2);
	}
});


//滚轮缩放
var scrollFunc=function(e){
var direct=0;
e=e || window.event;
if(e.wheelDelta){//IE/Opera/Chrome
	var viewBox = treeNode.attr('viewBox');
	var viewBoxArray = viewBox.split(" ");
	var x1 = parseInt(viewBoxArray[0]);
	var y1 = parseInt(viewBoxArray[1]);
	var x2 = parseInt(viewBoxArray[2]);
	var y2 = parseInt(viewBoxArray[3]);
	if(e.wheelDelta>0){
		var newx1 = x1+(x2-x1)/4;
		var newy1 = y1+(y2-y1)/4;
		var newx2 = x2-(x2-x1)/4;
		var newy2 = y2-(y2-y1)/4;
	}else{
		var newx1 = x1-(x2-x1)/2;
		var newy1 = y1-(y2-y1)/2;
		var newx2 = x2+(x2-x1)/2;
		var newy2 = y2+(y2-y1)/2;
	}
	
	if(newx1>-1&&newy1>-1){
		treeNode.attr('viewBox',newx1+" "+newy1+" "+newx2+" "+newy2);
	}else{
		//alert('已经缩到最小了！');
	}
}else if(e.detail){//Firefox

 }
}

/*注册事件*/
if(document.addEventListener){
   document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

