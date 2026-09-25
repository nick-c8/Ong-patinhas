import { salvarCadastro } from "./storage.js";

function aplicarMascara(input, tipo) {
    if (!input) return;

    input.addEventListener("input", () => {
        let valor = input.value.replace(/\D/g, "");

        if (tipo === "cpf") {
            valor = valor.substring(0, 11);
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }

        if (tipo === "telefone") {
            valor = valor.substring(0, 11);
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        }

        if (tipo === "cep") {
            valor = valor.substring(0, 8);
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        }

        input.value = valor;
    });
}

function configurarFormulario(id, mensagemId, tipo) {
    const form = document.getElementById(id);
    const mensagem = document.getElementById(mensagemId);
    if (!form || !mensagem) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const dados = Object.fromEntries(new FormData(form).entries());
        dados.tipo = tipo;
        salvarCadastro(dados);

        mensagem.textContent = tipo === "adocao"
            ? "Cadastro feito com sucesso! 🐾 Você entrou na fila de adoção."
            : "Cadastro realizado com sucesso! 🐾 Obrigado por querer ajudar a ONG Patinhas.";

        mensagem.classList.add("mostrar");
        form.reset();
        setTimeout(() => mensagem.classList.remove("mostrar"), 5000);
    });
}

export function inicializarFormularios() {
    aplicarMascara(document.getElementById("cpf"), "cpf");
    aplicarMascara(document.getElementById("telefone"), "telefone");
    aplicarMascara(document.getElementById("cep"), "cep");
configurarFormulario("form-adocao", "mensagem-sucesso", "adocao");
    configurarFormulario("form-ajudar", "mensagem-ajuda", "ajuda");
}
