$(document).ready(function(){
	$(".box img").draggable({
		helper:'clone',
		revert:'invalid',
	});
	
	$(".fruit-box").droppable({
		accept:'.fruit',
		drop:function(event,ui){
			console.log(ui);
      $(".fruit-box").append(ui.draggable);
		}
	});

		$(".flower-box").droppable({
		accept:'.flower',
		drop:function(event,ui){
      $(".flower-box").append(ui.draggable);
		}
	});
});
