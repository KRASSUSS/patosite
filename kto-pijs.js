let lista = document.getElementById("lista").getElementsByTagName("li");

function handleClick() {
let rand = Math.floor(Math.random()*lista.length);
	for (let i=0; i<lista.length; i++) {
		if (i === rand) {
			lista[i].style.textDecoration = "underline";
		} else {
			lista[i].style.textDecoration = "none";
}
	}
}

let button = document.getElementById("kto-pije");
button.onClick = handleClick();
