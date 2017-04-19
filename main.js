/**
 * 绘制三角形
 * 
 * 
 */
var triangle = {};
var treeNode = document.getElementById('treeNode');
var html = '';
var width = 200;
var length = tree.length;
for(var i=0;i<length;i++){
	var x = 20+width*(i+1);
	var length = tree[i].children.length;
	var height = 10;
	for(var k=0;k<length;k++){
		var y = 120+height*(k+1);
		html += '<rect x="'+x+'" y="'+y+'" width="20" height="'+height+'" style="fill:#91C7AF;stroke-width:1;stroke:#eee;"/>';
		var children = tree[i].children[k].children;
		var length = children.length;
		var first = 0;
		for(var j=0;j<length;j++){
			var circlex = x+100+(j+1)*10;
			first = circlex;
			html += '<circle cx="'+circlex+'" cy="'+y+'" r="5" fill="#C33531"/>';
		}
		html += '<line x1="'+x+'" y1="'+y+'" x2="'+circlex+'" y2="'+y+'" style="stroke:rgb(99,99,99);stroke-width:1"/>';
	}
	
}
treeNode.innerHTML = html;