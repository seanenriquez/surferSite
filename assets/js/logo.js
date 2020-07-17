const logo = document.querySelector(".logo-svg")


logo.addEventListener("mouseover", function() {
	let randomDeg = Math.round(Math.random() * 60) - 30 
	this.style.transform = `rotate(${randomDeg}deg)`
})

logo.addEventListener("mouseout", function() {
	this.style.transform = "rotate(0deg)"
})