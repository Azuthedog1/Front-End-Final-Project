$(document).ready(function() {
	//main page


	//page 1


	//page2


	//page 3
	$(".imgCal").slideDown("slow");

	//toggle calenders
	$("#springtext").click(function(){
		$("#springcal").slideToggle();
		});
	$("#summertext").click(function(){
		$("#summercal").slideToggle();
		});
	$("#falltext").click(function(){
		$("#fallcal").slideToggle();
		});
	$("#wintertext").click(function(){
		$("#wintercal").slideToggle();
		});

	//toggle seasons
	$("#spring").click(function(){
		$(".spring").slideToggle();
		});
	$("#summer").click(function(){
		$(".summer").slideToggle();
		});
	$("#fall").click(function(){
		$(".fall").slideToggle();
		});
	$("#winter").click(function(){
		$(".winter").slideToggle();
		});

	$(".imgCal").click(function(){
		alert("Are you sure you want to go to this page?")
	})
});
