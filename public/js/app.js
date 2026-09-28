const usuarios = [
    {
        id: 1,
        nome: "Chef Marco Bianchi",
        usuario: "chef1",
        email: "chef1@saepchef.com",
        senha: "123456",
        imagem: "chef1.jpg",
        tipo: "chef"
    },
    {
        id: 4,
        nome: "Mariana Costa",
        usuario: "usuario1",
        email: "usuario1@gmail.com",
        senha: "123456",
        imagem: "usuario1.jpg",
        tipo: "comum"
    }
];


const modalLogin = document.querySelector("#modalLogin");
const formLogin = document.querySelector("#formLogin");
function abrirLogin() {
    modalLogin.classList.remove("escondido");
}
function fecharLogin() {
    modalLogin.classList.add("escondido");
    formLogin.reset();
}
document.querySelector("#botaoLogin")
    .addEventListener("click", abrirLogin);
document.querySelector("#fecharLogin")
    .addEventListener("click", fecharLogin);
document.querySelector("#cancelarLogin")
    .addEventListener("click", fecharLogin);


function entrar(evento) {
    evento.preventDefault();
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");
    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.querySelector("#erroEmail").textContent = "";
    document.querySelector("#erroSenha").textContent = "";
    document.querySelector("#erroLogin").textContent = "";
    if (!formato.test(email.value.trim())) {
        document.querySelector("#erroEmail").textContent =
            "E-mail inválido ou vazio.";
        return;
    }
    if (!senha.value.trim()) {
        document.querySelector("#erroSenha").textContent =
            "A senha é obrigatória.";
        return;
    }
    const encontrado = usuarios.find((usuario) =>
        usuario.email === email.value.trim() &&
        usuario.senha === senha.value
    );
    if (!encontrado) {
        document.querySelector("#erroLogin").textContent =
            "Usuário não encontrado ou senha incorreta";
        return;
    }
    usuarioAtual = encontrado;
    fecharLogin();
    atualizarCabecalho();
}
formLogin.addEventListener("submit", entrar);
