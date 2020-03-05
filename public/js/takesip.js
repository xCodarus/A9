'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("oi");
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("yes");
	initializeInfo();
	$.get('user', updateImage);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function updateImage(result) {
	console.log(result);
	var countNumber = result["growth"];
	var projectHTML = "<img src='../images/Cup" + countNumber + ".png' style='width:40%' ... />";
	$('.sip-tracker').html(projectHTML);
}

function initializeInfo() {
	$('#infoForm').submit(function(e) {
		e.preventDefault();
		ga('create', 'UA-158765349-3', 'auto');
		ga('send', 'event', 'help', 'click');
		alert("Drink 8 cups of water a day to grow your plant! Each drink applies to every friend on your friend's list.");
	});
}