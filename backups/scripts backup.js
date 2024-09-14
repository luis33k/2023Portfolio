window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
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