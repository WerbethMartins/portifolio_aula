const form = document.getElementById('formulario_contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Montar mensagem
    const texto = `Novo contato de %0Anome: ${nome}%A0E-mail: ${email}%A0Mensagem: ${mensagem}`;
    const numero = '5547991845578';
    // const link = `https://wa.me/${numero}?text=${texto}`;

    const link = isMobile() ? `https://web.whatsapp.com/send?android=${numero}&text=${texto}` : 
    `https://api.whatsapp.com/send?android=${numero}&text=${texto}`;

    window.open(link, '_blank');
});

const isMobile = () => {
    return /Android|Iphone|iPad|iPod|Opera Mini|IEMobile|blackBarry/i.test(navigator.userAgent);
}