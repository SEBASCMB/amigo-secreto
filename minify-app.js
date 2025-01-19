(() => {
	const e = [],
		t = document.getElementById("amigo"),
		r = document.getElementById("listaAmigos"),
		n = document.getElementById("resultado");
	document.querySelector(".button-add").addEventListener("click", () => {
		const r = t.value.trim();
		if ("" === r) {
			alert("Por favor, ingresa un nombre valido.");
			return;
		}
		if (e.includes(r)) {
			alert("Este nombre ya ha sido agregado.");
			return;
		}
		e.push(r), (t.value = ""), a();
	}),
		document.querySelector(".button-draw").addEventListener("click", () => {
			if (0 === e.length) {
				alert("La lista esta vacia. Por favor, agrega nombres primero.");
				return;
			}
			const t = Math.floor(Math.random() * e.length),
				r = e[t];
			n.innerHTML = `El amigo secreto es: <strong>${r}</strong>`;
		});
	const a = () => {
		for (const t of ((r.innerHTML = ""), e)) {
			const n = document.createElement("li");
			(n.textContent = t), r.appendChild(n);
		}
	};
})();
