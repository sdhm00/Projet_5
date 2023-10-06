const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideIndex = 0
showSlides(slideIndex)

let arrowLeft = document.getElementById("prev").addEventListener("click", () => {
	showSlides ((slideIndex -=1))
})

let arrowRight = document.getElementById("next").addEventListener("click", () => {
	showSlides ((slideIndex +=1))
})

function showSlides(index) {
	const slides = document.getElementsByClassName("banner-img");
	
	if (index >= slides.length) {
	  slideIndex = 0;
	}
	if (index < 0) {
	  slideIndex = slides.length - 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slides[slideIndex].style.display = "block";
}
