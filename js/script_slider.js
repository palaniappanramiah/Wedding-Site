var ul;
var li_items; 
var li_count;
var img_number = 0;
var slider_width = 0;
var img_width;
var current = 0;
function init(){	
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	li_count = li_items.length;
	for (i = 0; i < li_count; i++){
			img_width = li_items[i].childNodes[0].clientWidth;
			slider_width += img_width;
			img_number++;
	}
	
	ul.style.width = parseInt(slider_width) + 'px';
	slider(ul);
}

function slider(){		
		animate({
			delay:17,
			duration: 3000,
			delta:function(p){return Math.max(0, -1 + 2 * p)},
			step:function(delta){
					ul.style.left = '-' + parseInt(current * img_width + delta * img_width) + 'px';
				},
			callback:function(){
				current++;
				if(current < li_count-1){
					slider();
				}
				else{
					var left = (li_count - 1) * img_width;					
					setTimeout(function(){goBack(left)},2000); 				
					setTimeout(slider, 4000);
				}
			}
		});
}
function goBack(left_limits){
	current = 0;	
	setInterval(function(){
		if(left_limits >= 0){
			ul.style.left = '-' + parseInt(left_limits) + 'px';
			left_limits -= img_width / 10;
		}	
	}, 17);
}
function animate(options){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / options.duration
		if(progress > 1){
			progress = 1;
		}
		var delta = options.delta(progress);
		options.step(delta);
		if (progress == 1){
			clearInterval(id);
			options.callback();
		}
	}, options.delay || 17);
}
window.onload = init;