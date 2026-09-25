import { inicializarMenu } from "./menu.js";
import { inicializarAnimais } from "./animais.js";
import { inicializarFormularios } from "./formularios.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    inicializarAnimais();
    inicializarFormularios();
});