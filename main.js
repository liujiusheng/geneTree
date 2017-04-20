/**
 * 绘制三角形
 * 
 * 
 */
var triangle = {};
var treeNode = document.getElementById('treeNode');
var html = '';
var width = 300;//每一组的宽度
var rstlength = tree.length;
for(var i=0; i<rstlength; i++){
	var eachRst = tree[i].children;//每一组染色体数据
	var rst = {};
	var topHeight = 50;
	rst.x= 20+width*i;
	var length = eachRst.length;
	var r = 10;
	var gyHeight = 10;//每个基因的高度
	var allHeight = r*length*4;
	var allGenHeight = gyHeight*length;
	var gyWidth = 20;//每个基因的宽度
	for(var k=0;k<length;k++){
		var gyY = topHeight+allHeight/4-allGenHeight/2+gyHeight*k;
		html += '<rect x="'+rst.x+'" y="'+gyY+'" width="'+gyWidth+'" height="'+gyHeight+'" style="fill:#91C7AF;stroke-width:1;stroke:#eee;"/>';
		var eachYZ = eachRst[k].children;//每一组因子
		var length = eachYZ.length;
		var circlex = rst.x+100+gyWidth;
		var circlex2 = rst.x+100+gyWidth;
		var y2 = topHeight+r*k*4;
		var y3 = topHeight+r*(k+1)*2;
		html += '<line x1="'+(rst.x+gyWidth)+'" y1="'+(gyY+gyHeight/2)+'" x2="'+circlex+'" y2="'+y2+'" style="stroke:rgb(99,99,99);stroke-width:1"/>';
		for(var j=0;j<length;j++){
			if(j<9){
				html += '<circle cx="'+circlex+'" cy="'+y2+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
				circlex = circlex+2*r;
			}else{
				html += '<circle cx="'+circlex2+'" cy="'+y3+'" r="'+r+'" fill="'+eachYZ[j].color+'"/>';
				circlex2 = circlex2+2*r;
			}
			
		}
		
	}
	
}
treeNode.innerHTML = html;