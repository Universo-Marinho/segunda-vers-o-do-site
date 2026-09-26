const cards = document.getElementById("cards");

const pesquisa = document.querySelector(".pesquisa input");
const botaoPesquisa = document.querySelector(".pesquisa button");

function moverDireita() {
    cards.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}

function moverEsquerda() {
    cards.scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

const animais = {
    "baleia azul": "animal.html?animal=baleia-azul",
    "tartaruga de pente": "animal.html?animal=tartaruga-de-pente",
    "raia diabo": "animal.html?animal=raia-diabo",
    "cavalo marinho": "animal.html?animal=cavalo-marinho",
    "foca monge do havaí": "animal.html?animal=foca-monge-do-havai",
    "vaquita": "animal.html?animal=vaquita",
    "peixe boi": "animal.html?animal=peixe-boi",
    "golfinho corcunda de taiwan": "animal.html?animal=golfinho-corcunda-de-taiwan",
    "tubarão martelo gigante": "animal.html?animal=tubarao-martelo-gigante",
    "enguia europeia": "animal.html?animal=enguia-europeia",
    "tubarão anjo": "animal.html?animal=tubarao-anjo",
    "estrela do mar girassol": "animal.html?animal=estrela-do-mar-girassol"
};

function pesquisarAnimal() {
    const texto = pesquisa.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    if (texto === "") {
        return;
    }

    const nomeEncontrado = Object.keys(animais).find(nome => {
        const nomeSemAcento = nome
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return nomeSemAcento.includes(texto);
    });

    if (nomeEncontrado) {
        window.location.href = animais[nomeEncontrado];
    } else {
        alert("Animal não encontrado.");
    }
}

botaoPesquisa.addEventListener("click", pesquisarAnimal);

pesquisa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pesquisarAnimal();
    }
});

