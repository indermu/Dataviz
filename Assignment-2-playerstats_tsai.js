
var playerData;

$(document).ready(function() {
	getData();
});

function getData() {
	$.getJSON("js/Assignment 1 baseball player_Tsai.json", function(data,error) {
		playerData=data;
		
		drawStuff();
	});
	
	
function drawStuff() {
	
	var playerName = playerData.name;
	var playerTeam = playerData.club;
	var playerStats = playerData.stats;
	var lastSeasonIndex = playerStats.length -1;
	
	var lastSeasonStats = playerData.stats[lastSeasonIndex];
	var lastSeasonHomeRuns = lastSeasonStats.HR;
	var lastSeasonYear = lastSeasonStats.year;
	var lastSeasonTeam = lastSeasonStats.club;

$(".chart").append("<h1>"+playerName+"</h1>");
$(".chart").append("<h3>"+playerTeam+"</h3>");
$(".chart").append("<p>In "+lastSeasonYear+", "+playerName+" hit "+lastSeasonHomeRuns+" home runs for the "+lastSeasonTeam);
	
	console.log (playerData);
	$(".chart").html(playerData.name);
	
	$.each(playerData.stats, function (i, item) {
		$(".chart").append ("<p>"+item.AVG+"</p>");
	});
	
}



}