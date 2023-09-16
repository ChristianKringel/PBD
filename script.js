function redirecionarParaNavegacao() {
    window.location.href = 'main.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui, incluindo a adição de eventos
    document.getElementById('btn-login').addEventListener('click', function () {
    // Simular uma autenticação bem-sucedida aqui
    // Se o login for bem-sucedido, redirecione para a página de navegação
    var loginBemSucedido = true; // Colocar a lógica real de autenticação aqui

    if (loginBemSucedido) {
        redirecionarParaNavegacao();
    } else {
        alert('Login falhou. Verifique suas credenciais.');
    }
});
});