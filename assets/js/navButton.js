const navButton = document.querySelector('.navigation-hamburger')
const navLinks = document.querySelector('.navigation-links')
const navBar = document.querySelector('nav')
const foldHeight = window.innerHeight 
navButton.addEventListener("click", (e) => {
	console.log(navLinks.style.display)
	e.preventDefault()
 navLinks.style.display === "none" ? navLinks.style.display = "flex" : navLinks.style.display = "none" 
})

window.addEventListener("scroll", (e) => {
	if(document.documentElement.scrollTop > foldHeight) {
		navBar.style.height = '3vw'
	} else {
		navBar.style.height = '5vw'
	}

});	