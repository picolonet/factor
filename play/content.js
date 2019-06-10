// content.js

var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);
$( document ).ready(function() {
		$("a[href^='http']").each(function(index) {
				console.log( index + ": " + $( this ).attr("href"));
				});
		doDialog();
		});

var div = document.createElement('div');
document.body.appendChild(div);
div.className = 'play-chatbot';
div.setAttribute("style", "color:red; border: 1px solid blue;");

function doDialog() {
	$( "#dialog" ).dialog({
		dialogClass: "no-close",
		buttons: [{ text: "OK",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
		]
	});
}

function browserActionCallback(tab ) {
	doDialog();
}


