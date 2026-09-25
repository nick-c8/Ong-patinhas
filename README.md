ONG Patinhas 🐾
Site institucional da ONG Patinhas, desenvolvido como projeto acadêmico de Desenvolvimento Web. O objetivo é apresentar as ações da organização, divulgar animais para adoção e facilitar o cadastro de pessoas interessadas em ajudar.

📌 Apresentação do projeto
A ONG Patinhas é uma aplicação web voltada à proteção animal. O site reúne informações sobre resgate, cuidados veterinários, alimentação, adoção responsável e lar temporário.

Também disponibiliza formulários para cadastro de colaboradores e para demonstrar interesse na adoção de animais.

✨ Funcionalidades
Navegação dinâmica em formato SPA (Single Page Application).
Apresentação dos projetos da ONG.
Exibição de animais disponíveis para adoção.
Filtros por situação dos animais.
Formulário de interesse em adoção.
Formulário para cadastro de pessoas interessadas em ajudar.
Validação dos formulários.
Mensagens visuais de sucesso, erro e aviso.
Uso de localStorage para armazenamento local.
Menu responsivo.
Layout adaptado para diferentes tamanhos de tela.
Textos alternativos nas imagens.
🛠️ Tecnologias utilizadas
HTML5
Utilizado para estruturar o conteúdo, a navegação, as seções e os formulários.

CSS3
Utilizado para estilização, sistema visual, responsividade, CSS Grid, Flexbox e estados de feedback.

JavaScript ES6
Utilizado para interatividade, navegação da SPA, eventos, filtros, validação dos formulários e armazenamento local.

JavaScript Modules
O código é dividido em módulos usando import e export, separando as responsabilidades da aplicação.

LocalStorage
Utilizado para manter informações armazenadas no navegador após o recarregamento da página.

📂 Estrutura do projeto
ONG Patinhas/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── img/
│   └── imagens dos animais e da ONG
└── js/
    ├── app.js
    ├── menu.js
    ├── animais.js
    ├── formularios.js
    └── storage.js
Responsabilidade dos módulos JavaScript
app.js: inicialização da aplicação e navegação da SPA.
menu.js: comportamento do menu de navegação.
animais.js: dados, cards e filtros dos animais.
formularios.js: eventos e validação dos formulários.
storage.js: armazenamento e recuperação de dados no localStorage.
🚀 Como executar
O projeto utiliza HTML, CSS e JavaScript puro e não possui dependências externas obrigatórias.

Baixe ou clone o repositório.
Mantenha a estrutura das pastas.
Abra o index.html no navegador.
Também pode ser utilizado um servidor local, como o Live Server no Visual Studio Code.

Não há comando obrigatório de npm install, pois não foram utilizadas bibliotecas ou frameworks externos.

🧪 Testes e validação
Foram realizadas verificações de:

Navegação entre as seções.
Validação dos formulários.
Campos obrigatórios.
Mensagens de feedback.
Filtros dos animais.
Persistência com localStorage.
Responsividade.
Funcionamento dos módulos JavaScript.
Validação do HTML pelo W3C Validator.
Não foi configurado um framework automatizado de testes nem uma etapa de build.

♿ Acessibilidade
Foram aplicadas práticas de acessibilidade, incluindo:

Textos alternativos nas imagens.
Estrutura HTML organizada.
Associação entre label e campos dos formulários.
Estados visuais de sucesso, erro e aviso.
Contraste entre textos e fundos.
Navegação adaptada para telas menores.
Layout responsivo.
📱 Responsividade
O projeto utiliza CSS Grid e Flexbox para adaptar a interface.

Telas pequenas: cards em 1 coluna.
Telas intermediárias: cards em 2 colunas.
Telas maiores: cards em 3 colunas.
O menu também é adaptado para dispositivos móveis.

🔀 Versionamento
O projeto utiliza Git e GitHub para controle de versão.

Foram utilizadas:

Branch main.
Branch develop.
Branch feature/acessibilidade.
Issues para acompanhamento de tarefas.
Pull Requests para revisão e integração.
Release v1.0.0 para registrar a primeira versão estável.
A Issue #3 --- melhorias de acessibilidade registra as melhorias de acessibilidade.

O Pull Request #2 --- Melhorias de acessibilidade index.html documenta a proposta e revisão das alterações feitas na branch feature/acessibilidade antes da integração com develop.

📋 Organização do desenvolvimento
A divisão do JavaScript em módulos facilita a manutenção e mantém cada arquivo responsável por uma funcionalidade.

Issues são utilizadas para registrar tarefas e Pull Requests para documentar e revisar alterações antes do merge.

📄 Licença
Este projeto foi desenvolvido para fins acadêmicos como parte das atividades de Desenvolvimento Web.

👩💻 Projeto acadêmico
ONG Patinhas 🐾

Projeto desenvolvido para aplicar conhecimentos de HTML5, CSS3, JavaScript, responsividade, acessibilidade e versionamento com Git/GitHub.
