/**
 * 绘制三角形
 * 
 * 
 */
var triangle = {};
var treeNode = document.getElementById('treeNode');
var html = '';
var width = 200;//每一组的宽度
var length = tree.length;
for(var i=0;i<length;i++){
	var eachRst = tree[i].children;//每一组染色体数据
	var rst = {};
	rst.x= 20+width*(i+1);
	var length = eachRst.length;
	var gyHeight = 10;//每个基因的高度
	var gyWidth = 20;//每个基因的宽度
	for(var k=0;k<length;k++){
		var gyY = 120+gyHeight*(k+1);
		html += '<rect x="'+rst.x+'" y="'+gyY+'" width="'+gyWidth+'" height="'+gyHeight+'" style="fill:#91C7AF;stroke-width:1;stroke:#eee;"/>';
		var eachYZ = eachRst[k].children;//每一组因子
		var length = eachYZ.length;
		var first = 0;
		var circlex = rst.x+100+gyWidth;console.log(circlex,rst.x+gyWidth);
		html += '<line x1="'+(rst.x+gyWidth)+'" y1="'+(gyY+gyHeight/2)+'" x2="'+circlex+'" y2="'+gyY+'" style="stroke:rgb(99,99,99);stroke-width:1"/>';
		for(var j=0;j<length;j++){
			html += '<circle cx="'+circlex+'" cy="'+gyY+'" r="5" fill="'+eachYZ[j].color+'"/>';
			circlex = circlex+(j+1)*10;
		}
		
	}
	
}
treeNode.innerHTML = html;