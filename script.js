// Revolver imagen en cada refresh del browser

// var section = document.getElementById("shuffle-cards");

// for (var i = section.children.length; i >= 0; i--) {
// 	section.appendChild(section.children[(Math.random() * i) | 0]);
// }

// Rotar la imagen al hacerle click

const Cards = [...document.querySelectorAll(".card")];

Cards.forEach((card) => {
	card.addEventListener("click", () => {
		card.classList.toggle("selected");
	});
});

console.log(Cards);
