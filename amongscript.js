$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#p1").click(function(){
		$(".disappear").hide();
	});
	$("#p1").dblclick(function(){
		$(".disappear").show();
	});
});
