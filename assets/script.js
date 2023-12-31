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
    const slidesContainer = document.querySelector(".banner-img");

    const tagLineElement = document.querySelector("#banner p")

    if (index >= slides.length) {
      slideIndex = 0;
    }
    if (index < 0) {
      slideIndex = slides.length - 1;
    }
    slidesContainer.setAttribute("src",`./assets/images/slideshow/${slides[slideIndex].image}`)
    tagLineElement.innerHTML = slides[slideIndex].tagLine;

    removeDotsSelected();
}

function removeDotsSelected(){
	const dots = document.querySelectorAll(".dot")
	dots.forEach(dot=> dot.classList.remove("dot_selected"))
	dots[slideIndex].classList.add("dot_selected")
}

