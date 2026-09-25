const animais = [
    { nome: "Thor", status: "disponivel", classe: "badge-disponivel", imagem: "img/gato velho.png", descricao: "Thor é carinhoso e está procurando uma família para chamar de sua." },
    { nome: "Luna", status: "adocao", classe: "badge-adocao", imagem: "img/luna.png", descricao: "Luna é tranquila e está esperando por um novo lar." },
    { nome: "Bob", status: "urgente", classe: "badge-urgente", imagem: "img/gato adocao.png", descricao: "Bob precisa de uma família responsável e de um novo lar." }
];

export function criarTemplateAnimal(animal) {
    const status = { disponivel: "Disponível", adocao: "Em adoção", urgente: "Urgente" };
    return 
        <article class="animal-card" data-status="${animal.status}">
            <img src="${animal.imagem}" alt="${animal.nome}, animal para adoção">
            <h3>${animal.nome}</h3>
            <span class="badge ${animal.classe}">${status[animal.status]}</span>
            <p>${animal.descricao}</p>
            <a href="#fila-adocao" class="botao-adotar" data-animal="${animal.nome.toLowerCase()}">Quero adotar</a>
        </article>;
}

export function inicializarAnimais() {
    const container = document.querySelector(".animais");
    if (!container) return;

    container.innerHTML = animais.map(criarTemplateAnimal).join("");

    document.querySelectorAll(".filtro").forEach(botao => {
        botao.addEventListener("click", () => {
            document.querySelectorAll(".filtro").forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");
            const filtro = botao.dataset.filtro;
document.querySelectorAll(".animal-card").forEach(card => {
                card.style.display = filtro === "todos" || card.dataset.status === filtro ? "" : "none";
            });
        });
    });

    const select = document.getElementById("animal");
    document.querySelectorAll(".botao-adotar").forEach(botao => {
        botao.addEventListener("click", () => {
            if (select) select.value = botao.dataset.animal;
            document.getElementById("fila-adocao")?.scrollIntoView({ behavior: "smooth" });
        });
    });
}