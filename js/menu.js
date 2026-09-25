export function inicializarMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("aberto");
        const aberto = nav.classList.contains("aberto");
        menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("aberto"));
    });
}