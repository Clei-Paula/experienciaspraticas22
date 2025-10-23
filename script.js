console.log("✅ JS carregado com sucesso!");
alert("O JavaScript está funcionando!");
/ ==========================
// MENU HAMBURGER RESPONSIVO
// ==========================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-nav .menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('show');
});

// ==========================
// FORMULÁRIO DE DOAÇÃO (SIMULAÇÃO)
// ==========================
const formDoacao = document.getElementById('formDoacao');
const donationResult = document.getElementById('donationResult');

formDoacao.addEventListener('submit', function(e) {
  e.preventDefault();
  const valor = document.getElementById('valor').value;
  if (!valor) return;
  
  showToast(`Doação de R$ ${valor} simulada com sucesso! Obrigado!`, 'success');

  formDoacao.reset();
});

// ==========================
// TOASTS / ALERTS DINÂMICOS
// ==========================
const toastContainer = document.createElement('div');
toastContainer.id = 'toast-container';
toastContainer.style.position = 'fixed';
toastContainer.style.bottom = '20px';
toastContainer.style.right = '20px';
toastContainer.style.zIndex = '9999';
toastContainer.style.display = 'flex';
toastContainer.style.flexDirection = 'column';
toastContainer.style.gap = '8px';
document.body.appendChild(toastContainer);

function showToast(message, type='success') {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '8px';
  toast.style.color = 'white';
  toast.style.minWidth = '200px';
  toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s, transform 0.3s';
  toast.style.transform = 'translateY(20px)';

  if (type === 'success') toast.style.background = '#2a7f62';
  if (type === 'error') toast.style.background = '#e74c3c';

  toastContainer.appendChild(toast);

  // Aparecer
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // Desaparecer após 3s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}

// ==========================
// PREENCHE FORMULÁRIO DE VOLUNTARIADO
// ==========================
document.querySelectorAll('button[data-project]').forEach(button => {
  button.addEventListener('click', e => {
    const project = button.getAttribute('data-project');
    const mensagem = document.getElementById('mensagem');
    if (mensagem && project) {
      mensagem.value = `Interesse no projeto: ${project}`;
      mensagem.focus();
    }
  });
});
