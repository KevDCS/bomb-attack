var section = document.getElementById("shuffle-cards");

for (var i = section.children.length; i >= 0; i--) {
	section.appendChild(section.children[(Math.random() * i) | 0]);
}
