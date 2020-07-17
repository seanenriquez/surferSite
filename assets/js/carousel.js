var carousel = document.querySelector(".header-carousel");
var slides = document.querySelectorAll(".carousel-slide");
var rightNav = document.querySelector(".right-nav");
var leftNav = document.querySelector(".left-nav");
var slideState = 0;
var automaticSlide = true;
var slideNumDisplay = document.querySelector(".nav-current-num");

slideNumDisplay.innerHTML = 1;
document.querySelector(".nav-max-num").innerHTML = slides.length;

slides.forEach(function (slide, i) {
	//if slide isn't the first slide, set opaicty to 0 and move to the right of the document, display none
	if (i >= 1) {
		slide.style.opacity = 0;
		slide.style.display = "none";
	}
});

function moveNavRight() {
	//fade out and move slide to left
	slides[slideState].style.opacity = 0;
	slides[slideState].style.transform = "translateX(-120%)";
	setTimeout(function (e) {
		slideNumDisplay.innerHTML++;
		//remove display so it doesnt create in DOM blocks, translate so that it's in position to look as if it's comming from the right side
		slides[slideState].style.display = "none";
		//update state, if state is greater than the amount of slides, slide reset to 0
		slideState++;
		if (slideState >= slides.length) {
			slideState = 0;
			slideNumDisplay.innerHTML = 1;
		}
		//display next slide
		slides[slideState].style.transform = "translateX(120%)";
		slides[slideState].style.display = "grid";
		setTimeout(function (e) {
			//animate slide that was just displayed
			slides[slideState].style.transform = "translateX(0%)";
			slides[slideState].style.opacity = 1;
		}, 50);
	}, 350);
}

function moveNavLeft() {
	//fade out and move slide to left
	slides[slideState].style.opacity = 0;
	slides[slideState].style.transform = "translateX(120%)";
	setTimeout(function (e) {
		slideNumDisplay.innerHTML--;
		//remove display so it doesnt create in DOM blocks, translate so that it's in position to look as if it's comming from the right side
		slides[slideState].style.display = "none";
		//update state, if state is greater than the amount of slides, slide reset to 0
		slideState--;
		if (slideState < 0) {
			slideState = slides.length - 1;
			slideNumDisplay.innerHTML = slides.length;
		}
		//display next slide
		slides[slideState].style.transform = "translateX(-120%)";
		slides[slideState].style.display = "grid";
	}, 400);

	setTimeout(function (e) {
		//animate slide that was just displayed
		slides[slideState].style.transform = "translateX(0%)";
		slides[slideState].style.opacity = 1;
	}, 450);

}

rightNav.addEventListener("click", function (e) {
	moveNavRight();
});

leftNav.addEventListener("click", function (e) {
	moveNavLeft();
});




if(automaticSlide) {
	let startAutomaticSlide = setInterval(function () {
		moveNavRight();
	}, 8000);



carousel.addEventListener("mouseover", function() {
	clearInterval(startAutomaticSlide)
});

carousel.addEventListener("mouseout", function() {
	startAutomaticSlide = setInterval(function () {
		moveNavRight();
	}, 8000);
   });
}
