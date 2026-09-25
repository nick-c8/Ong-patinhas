const CHAVE_CADASTROS = "ongPatinhasCadastros";

export function obterCadastros() {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
    } catch {
        return [];
    }
}

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();
    cadastros.push({ ...cadastro, data: new Date().toLocaleString("pt-BR") });
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
}