$(document).ready(function() {
	//main page


	//page 1


	//page2


	//page 3
	//toggle calenders
	$("#springtext").click(function(){
		$("#springcal").toggle();
		});
	$("#summertext").click(function(){
		$("#summercal").toggle();
		});
	$("#falltext").click(function(){
		$("#fallcal").toggle();
		});
	$("#wintertext").click(function(){
		$("#wintercal").toggle();
		});

	//toggle seasons
	$("#spring").click(function(){
		$(".spring").toggle();
		});
	$("#summer").click(function(){
		$(".summer").toggle();
		});
	$("#fall").click(function(){
		$(".fall").toggle();
		});
	$("#winter").click(function(){
		$(".winter").toggle();
		});
});
