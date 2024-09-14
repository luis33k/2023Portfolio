window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 800)
}

document.addEventListener('DOMContentLoaded', function(event) {
    
	document.querySelector('body').style.opacity = 1

})

function toggleDropdown() {
	var dropdown = document.getElementById("myDropdown");
	dropdown.classList.toggle("open");
}

// Close the dropdown menu when the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.menu-icon')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('open')) {
				openDropdown.classList.remove('open');
			}
		}
	}
}

function sendEmail() {
    // Get values from the form
	var emailAddress = 'lgornes@broward.edu';
	var subject = document.getElementById('subject').value;
	var body = document.getElementById('body').value;
	
	// Create the mailto link
	var mailtoLink = 'mailto:' + emailAddress;
	if (subject) {
		mailtoLink += '?subject=' + encodeURIComponent(subject);
	}
	if (body) {
		if (subject) {
			mailtoLink += '&body=' + encodeURIComponent(body);
		} else {
			mailtoLink += '?body=' + encodeURIComponent(body);
		}
	}
	// Open the mailto link in a new tab
	window.open(mailtoLink, '_blank');
}