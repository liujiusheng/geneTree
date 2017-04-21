/**
 * 绘制三角形
 * 
 * 
 */
var triangle = {};
var treeNode = document.getElementById('treeNode');
var html = '';

var width = 400;//每一组的宽度
var height = 400;//每一组的高度
var xNum = 3;//每一水平方向的个数
var topHeight = 40;//距离顶部的高度
var r = 5;//圆圈的半径
var circleNum = 18;//每一行需要放置圆圈的个数
var gyHeight = 30;//每个基因的高度
var gyWidth = 10;//每个基因的宽度
var lineLength = 60;//线条长度
var rstlength = tree.length;
for(var i=0; i<rstlength; i++){
	var eachRst = tree[i].children;//每一组染色体数据
	var rst = {};
	rst.x= 20+width*(i%xNum);
	var length = eachRst.length;
	var allHeight = r*length*4;
	var allGenHeight = gyHeight*length;
	for(var k=0;k<length;k++){
		var gyY = topHeight+Math.floor(i/xNum)*height+allHeight/2-allGenHeight/2+gyHeight*k;
		html += '<rect x="'+rst.x+'" y="'+gyY+'" width="'+gyWidth+'" height="'+gyHeight+'" style="fill:'+eachRst[k].color+';stroke-width:1;stroke:#eee;"/>';
		var eachYZ = eachRst[k].children;//每一组因子
		var yzlength = eachYZ.length;
		var circlex = rst.x+lineLength+gyWidth;
		var circlex2 = rst.x+lineLength+gyWidth;
		var circley2 = topHeight+r*k*4+Math.floor(i/xNum)*height;
		var circley3 = topHeight+r*(2+k*4)+Math.floor(i/xNum)*height;
		html += '<line x1="'+(rst.x+gyWidth)+'" y1="'+(gyY+gyHeight/2)+'" x2="'+circlex+'" y2="'+circley2+'" style="stroke:rgb(99,99,99);stroke-width:1"/>';
		for(var j=0;j<yzlength;j++){
			if(j<circleNum){
				if(eachYZ[j].type == 'circle'){
					html += '<circle onclick="clickYZ('+eachYZ[j].id+',\''+eachYZ[j].type+'\','+eachYZ[j].value+')" cx="'+circlex+'" cy="'+circley2+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
					circlex = circlex+2*r;
				}else if(eachYZ[j].type == 'triangle'){
					var x1 = circlex-Math.sqrt(3)/2*r;
					var x2 = circlex+Math.sqrt(3)/2*r;
					var x3 = circlex;
					var y1 = circley2-r/2;
					var y2 = circley2-r/2;
					var y3 = circley2+r;
					html += '<polygon points="'+x1+','+y1+' '+x2+','+y2+' '+x3+','+y3+'" onclick="alert(222)" style="fill:'+eachYZ[j].color+';"/>';
					circlex = circlex+2*r;
				}
				
			}else if((j==circleNum||j>circleNum)&&j<2*circleNum){
				if(eachYZ[j].type == 'circle'){
					html += '<circle onclick="clickYZ('+eachYZ[j].id+',\''+eachYZ[j].type+'\','+eachYZ[j].value+')" cx="'+circlex2+'" cy="'+circley3+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
					circlex2 = circlex2+2*r;
				}else if(eachYZ[j].type == 'triangle'){
					var x21 = circlex2-Math.sqrt(3)/2*r;
					var x22 = circlex2+Math.sqrt(3)/2*r;
					var x23 = circlex2;
					var y21 = circley3-r/2;
					var y22 = circley3-r/2;
					var y23 = circley3+r;
					html += '<polygon points="'+x21+','+y21+' '+x22+','+y22+' '+x23+','+y23+'" onclick="alert(222)" style="fill:'+eachYZ[j].color+';"/>';
					circlex2 = circlex2+2*r;
				}
			}
			
		}
		
	}
	
}
treeNode.innerHTML = html;


//点击
function clickYZ(id,type,value){
	console.log(id+":"+type+":"+value);
}