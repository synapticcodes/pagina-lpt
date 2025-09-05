import './style.css'

// Router simples para SPA
class Router {
  constructor() {
    this.routes = {};
    this.currentPath = window.location.pathname;
    window.addEventListener('popstate', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    this.currentPath = window.location.pathname;
    const handler = this.routes[this.currentPath] || this.routes['/'];
    if (handler) {
      handler();
    }
  }

  init() {
    this.handleRoute();
  }
}

// Instanciar router
const router = new Router();
window.router = router;

// Função para renderizar página principal
function renderMainPage() {
document.querySelector('#app').innerHTML = `
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-logo">
          <img src="/logo.png" alt="Meu Nome Ok" class="logo" />
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1>Como parar os descontos do consignado e recuperar sua renda — análise gratuita em 3 passos</h1>
            
            <p class="subtitle">Se você é aposentado, pensionista ou funcionário público e está vendo seu salário ir embora antes de cair, este é o seu porquê para agir agora: mostrar, sem juridiquês, onde os bancos estão te cobrando a mais, parar descontos indevidos e reduzir o que você paga. Nós explicamos o que vai acontecer, quando e por quê — passo a passo, em linguagem simples, com advogados OAB especializados em Direito do Consumidor e Bancário.</p>

            <!-- Mini Prova Social -->
            <div class="social-proof-mini">
              <span>⭐ Nota 4,9 no Google Reviews (2.000+ avaliações verificadas)</span>
              <span>🏆 RA 1000 no Reclame Aqui</span>
              <span>👥 30.000+ clientes atendidos</span>
              <span>🥇 6× consecutivas como a melhor empresa do ramo no país</span>
            </div>

            <!-- Form CTA -->
            <div class="cta-form">
              <form id="leadForm" data-crm-form>
                <div class="form-group">
                  <input type="text" id="fullName" name="name" placeholder="Nome completo" required>
                </div>
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder="E-mail" required>
                </div>
                <div class="form-group">
                  <input type="tel" id="whatsapp" name="phone" placeholder="WhatsApp (ex: 11999999999)" maxlength="11" pattern="[0-9]{11}" required>
                </div>
                <button type="submit" class="cta-button">Quero minha análise gratuita</button>
              </form>
              
              <p class="trust-text">Dados 100% seguros & LGPD. Não compartilhamos suas informações. Criptografia de nível bancário. SSL Certificado • Segurança Premium.</p>
            </div>
          </div>
          
          <div class="hero-image">
            <img src="/hero-image.jpg" alt="Aposentado sorrindo sentado no sofá" />
          </div>
        </div>
      </div>
    </section>

    <!-- Media Mentions -->
    <section class="media-mentions">
      <div class="container">
        <div class="media-logos">
          <a href="https://valor.globo.com/patrocinado/pressworks/noticia/2024/12/24/lawtech-reduz-dividas-de-emprestimos-consignados-assegura-indenizacoes-de-ate-6-digitos-e-tornase-a-principal-salvacao-para-consumidores-endividados.ghtml" target="_blank">Valor Econômico</a>
          <a href="https://egobrazil.ig.com.br/o-maior-escritorio-juridico-do-brasil-que-esta-mudando-o-jogo-para-devedores-de-consignados/" target="_blank">Portal IG</a>
          <a href="https://revistapegn.globo.com/conteudo-de-marca/pressworks/noticia/2024/12/lawtech-reduz-dividas-de-emprestimos-consignados-assegura-indenizacoes-de-ate-6-digitos-e-tornase-a-principal-salvacao-para-consumidores-endividados.ghtml" target="_blank">Globo.com</a>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <div class="container">
        <h2>O que você ganha com nossa análise</h2>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <h3>💰 Mais dinheiro no seu bolso</h3>
            <p>Redução de juros e parcelas para recuperar o controle do orçamento da família.</p>
          </div>
          
          <div class="benefit-item">
            <h3>💸 Salário sem surpresas</h3>
            <p>Suspensão de descontos indevidos para dar previsibilidade no fim do mês.</p>
          </div>
          
          <div class="benefit-item">
            <h3>⚖️ Indenização quando houver abuso</h3>
            <p>Se houver abuso comprovado, buscamos os valores que são de direito conforme a lei.</p>
          </div>
          
          <div class="benefit-item">
            <h3>📖 Explicado sem juridiquês</h3>
            <p>Você entende cada passo do processo: o que vai acontecer, quando e por quê.</p>
          </div>
          
          <div class="benefit-item">
            <h3>📋 Plano simples (3 passos)</h3>
            <p>Análise gratuita → Plano sob medida → Execução com acompanhamento humano e transparente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <h2>O que nossos clientes dizem</h2>
        
        <div class="testimonials-grid">
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/Ana Costa.jpg" alt="Ana Costa" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Reduzi minha parcela e parei de sofrer com os descontos. Atendimento impecável."</p>
            <span class="author">Ana Costa</span>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/Evaristo Neto.jpg" alt="Evaristo Neto" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Eu já não acreditava mais. Em poucos meses, minha renda voltou ao normal."</p>
            <span class="author">Evaristo Neto</span>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/Gilberto Moraes.jpg" alt="Gilberto Moraes" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Descobriram cobranças que eu nem sabia que existiam. Recomendo sem medo."</p>
            <span class="author">Gilberto Moraes</span>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/Janete Silva.jpg" alt="Janete Silva" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Equipe séria, me explicaram tudo. Hoje durmo tranquila."</p>
            <span class="author">Janete Silva</span>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/João Santos.jpg" alt="João Santos" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Voltamos a respirar. Pedir a análise foi a melhor decisão."</p>
            <span class="author">João Santos</span>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-header">
              <img src="/Maria Helena.jpg" alt="Maria Helena" class="testimonial-photo" />
              <div class="stars">★★★★★</div>
            </div>
            <p>"Profissionais de confiança. Resultado acima do esperado."</p>
            <span class="author">Maria Helena</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Before/After -->
    <section class="before-after">
      <div class="container">
        <h2>A transformação que você pode ter</h2>
        <div class="comparison">
          <div class="before">
            <h3>Antes</h3>
            <img src="/before-image.jpg" alt="Professor aposentado preocupado com boletos" />
            <p>Descontos indevidos comprometendo a renda</p>
          </div>
          <div class="after">
            <h3>Depois</h3>
            <img src="/after-image.jpg" alt="Pessoa aliviada e tranquila" />
            <p>Renda recuperada e tranquilidade familiar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Catalog -->
    <section class="results-catalog">
      <div class="container">
        <h2>Resultados Reais dos Nossos Clientes</h2>
        
        <div class="results-grid">
          <div class="result-item">
            <img src="/Resultado 1 Catálogo.png" alt="Resultado 1 - Caso de sucesso" />
            <p>Redução significativa de parcelas consignadas</p>
          </div>
          
          <div class="result-item">
            <img src="/Resultado 2 Catálogo.png" alt="Resultado 2 - Caso de sucesso" />
            <p>Suspensão de desconto indevido</p>
          </div>
          
          <div class="result-item">
            <img src="/Resultado 3 Catálogo.png" alt="Resultado 3 - Caso de sucesso" />
            <p>Indenização por abuso bancário</p>
          </div>
          
          <div class="result-item">
            <img src="/Resultado 4 Catálogo.png" alt="Resultado 4 - Caso de sucesso" />
            <p>Recuperação de renda mensal</p>
          </div>
          
          <div class="result-item">
            <img src="/Resultado 5 Catálogo.png" alt="Resultado 5 - Caso de sucesso" />
            <p>Renegociação exitosa de dívidas</p>
          </div>
          
          <div class="result-item">
            <img src="/Resultado 7 Catálogo.png" alt="Resultado 7 - Caso de sucesso" />
            <p>Proteção contra novos descontos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Testimonials -->
    <section class="video-testimonials">
      <div class="container">
        <h2>Veja os depoimentos reais</h2>
        
        <div class="videos-grid">
          <iframe id="panda-afd35ee7-3477-4f15-9456-2b3af4e50f4c"
                  src="https://player-vz-e80a8275-32a.tv.pandavideo.com.br/embed/?v=afd35ee7-3477-4f15-9456-2b3af4e50f4c"
                  style="border:none;"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowfullscreen
                  width="720"
                  height="360"
                  fetchpriority="high"></iframe>
          
          <iframe id="panda-d09bc440-eefa-4391-99a8-cdb58a695b7c"
                  src="https://player-vz-e80a8275-32a.tv.pandavideo.com.br/embed/?v=d09bc440-eefa-4391-99a8-cdb58a695b7c"
                  style="border:none;"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowfullscreen
                  width="720"
                  height="360"
                  fetchpriority="high"></iframe>

          <iframe id="panda-945c386d-4e8a-4cee-9eda-114131d5ada1" 
                  src="https://player-vz-e80a8275-32a.tv.pandavideo.com.br/embed/?v=945c386d-4e8a-4cee-9eda-114131d5ada1" 
                  style="border:none;" 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  allowfullscreen=true 
                  width="720" 
                  height="360" 
                  fetchpriority="high"></iframe>
          
          <iframe id="panda-6c4832c8-53ab-4ae1-bfd0-b6b8db3d9257" 
                  src="https://player-vz-e80a8275-32a.tv.pandavideo.com.br/embed/?v=6c4832c8-53ab-4ae1-bfd0-b6b8db3d9257" 
                  style="border:none;" 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  allowfullscreen=true 
                  width="720" 
                  height="360" 
                  fetchpriority="high"></iframe>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners">
      <div class="container">
        <h2>Trabalhamos com as principais instituições</h2>
        <div class="partners-list">
          <span>Banco do Brasil</span>
          <span>Caixa</span>
          <span>Bradesco</span>
          <span>Itaú</span>
          <span>Santander</span>
          <span>Banco BMG</span>
          <span>AgiBank</span>
          <span>Nubank</span>
          <span>C6 Bank</span>
          <span>Banco Pan</span>
          <span>Banco Daycoval</span>
          <span>Banco Mercantil</span>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="container">
        <h2>Perguntas Frequentes</h2>
        
        <div class="faq-items">
          <div class="faq-item">
            <h3>Funciona mesmo?</h3>
            <p>Sim. O objetivo é simples: parar descontos indevidos e reduzir o que você paga. Mostramos onde estão os abusos e o que faremos em cada etapa.</p>
          </div>
          
          <div class="faq-item">
            <h3>Já estou apertado. Vou precisar pagar agora?</h3>
            <p>Não. A análise inicial é gratuita para entender seu caso e orientar o melhor caminho.</p>
          </div>
          
          <div class="faq-item">
            <h3>Quanto tempo leva para ver resultado?</h3>
            <p>Suspender descontos indevidos pode acontecer rápido. Reduções e eventuais indenizações dependem da análise e prazos legais.</p>
          </div>
          
          <div class="faq-item">
            <h3>Já tentei antes e não funcionou. Por que agora funcionaria?</h3>
            <p>Cada contrato é diferente. Explicamos seu caso em detalhes, com base no que seus documentos mostram.</p>
          </div>
          
          <div class="faq-item">
            <h3>Meus dados ficam seguros?</h3>
            <p>Sim. LGPD, criptografia de nível bancário e SSL. Não compartilhamos seus dados.</p>
          </div>
          
          <div class="faq-item">
            <h3>Atendem minha cidade/estado?</h3>
            <p>Sim. Atendemos todo o Brasil com equipe remota e canais oficiais.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>Sua renda de volta e suas dívidas sob controle começam agora</h2>
        
        <form id="finalLeadForm" data-crm-form>
          <div class="form-group">
            <input type="text" name="name" placeholder="Nome completo" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="E-mail" required>
          </div>
          <div class="form-group">
            <input type="tel" name="phone" placeholder="WhatsApp (ex: 11999999999)" maxlength="11" pattern="[0-9]{11}" required>
          </div>
          <button type="submit" class="cta-button">Quero minha análise gratuita</button>
        </form>
        
        <p class="trust-text">Dados 100% seguros & LGPD. Não compartilhamos suas informações.</p>
        
        <!-- Social Proof Seals -->
        <div class="seals">
          <span>🏛️ OAB Certificado</span>
          <span>⭐ 4,9 estrelas no Google</span>
          <span>🏆 RA 1000 Reclame Aqui</span>
          <span>👥 30.000+ clientes</span>
          <span>🥇 6× consecutivas melhor empresa do ramo no país</span>
          <span>🔒 Site blindado</span>
          <span>🛡️ Dados 100% Seguros & LGPD</span>
          <span>🔐 SSL Certificado • Segurança Premium</span>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>© 2025 Meu Nome Ok — Todos os direitos reservados. Dados 100% Seguros & LGPD</p>
      <p>Seus dados são tratados com total confidencialidade e proteção conforme LGPD. Criptografia de nível bancário em todas as transmissões. SSL Certificado • Segurança Premium</p>
    </div>
  </footer>
`;

// Reinitializar funcionalidades após renderizar a página
setTimeout(() => {
  initializeMainPageFeatures();
}, 100);
}

// Duplicate submission prevention
function hasSubmittedBefore() {
  return localStorage.getItem('leadSubmitted') === 'true';
}

function markAsSubmitted() {
  localStorage.setItem('leadSubmitted', 'true');
}

function showAlreadySubmittedMessage() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.innerHTML = `
      <div style="text-align: center; padding: 30px; background: #f0f9ff; border-radius: 12px; border: 2px solid #3b82f6;">
        <h3 style="color: #1e40af; margin-bottom: 15px;">✅ Dados já recebidos!</h3>
        <p style="color: #1e40af; font-size: 1rem; line-height: 1.6;">
          Já recebemos seus dados, nossa atendente Vera Lúcia Nogueira irá brevemente entrar em contato com você via WhatsApp. Fique atento!
        </p>
      </div>
    `;
  });
}

// Notification toasts system
(function(){
  // Container de toasts (não-interativo para não bloquear a UX)
  let toastRoot = document.getElementById('toast-root');
  if(!toastRoot){
    toastRoot = document.createElement('div');
    toastRoot.id = 'toast-root';
    toastRoot.style.position = 'fixed';
    toastRoot.style.bottom = '16px';
    toastRoot.style.left = '16px'; // altere para 'right' se preferir
    toastRoot.style.display = 'flex';
    toastRoot.style.flexDirection = 'column';
    toastRoot.style.gap = '8px';
    toastRoot.style.zIndex = '2147483647';
    toastRoot.style.pointerEvents = 'none';
    document.body.appendChild(toastRoot);
  }

  const names = [
    'Francisca Cardoso','João Santos','Maria Helena','Ana Costa','Evaristo Neto','Gilberto Moraes','Janete Silva',
    'Paulo Carvalho','Sueli Andrade','Roberto Almeida','Jorge Lima','Heloísa Ribeiro'
  ];
  const cities = [
    ['Curitiba','PR'],['São Paulo','SP'],['Rio de Janeiro','RJ'],['Belo Horizonte','MG'],['Porto Alegre','RS'],
    ['Recife','PE'],['Fortaleza','CE'],['Campinas','SP'],['Niterói','RJ'],['Sorocaba','SP']
  ];

  function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  function createToast(){
    const [city, uf] = rand(cities);
    const name = rand(names);
    const wrapper = document.createElement('div');
    wrapper.style.pointerEvents = 'none';
    wrapper.style.maxWidth = '320px';
    wrapper.style.padding = '12px 14px';
    wrapper.style.borderRadius = '12px';
    wrapper.style.background = 'rgba(0,0,0,0.85)';
    wrapper.style.color = '#fff';
    wrapper.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
    wrapper.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
    wrapper.style.transition = 'transform .25s ease, opacity .25s ease';
    wrapper.style.opacity = '0';
    wrapper.style.transform = 'translateY(8px)';

    const title = document.createElement('div');
    title.textContent = 'Mais um caso vitorioso hoje!';
    title.style.fontWeight = '700';
    title.style.marginBottom = '4px';

    const text = document.createElement('div');
    text.textContent = `${name}, ${city} ${uf}, Se livrou hoje dos consignados com nossa ajuda`;
    text.style.fontWeight = '400';
    text.style.fontSize = '14px';

    wrapper.appendChild(title);
    wrapper.appendChild(text);
    toastRoot.appendChild(wrapper);

    requestAnimationFrame(()=>{
      wrapper.style.opacity = '1';
      wrapper.style.transform = 'translateY(0)';
    });

    setTimeout(()=>{
      wrapper.style.opacity = '0';
      wrapper.style.transform = 'translateY(8px)';
      setTimeout(()=> toastRoot.removeChild(wrapper), 300);
    }, 6800);
  }

  // Função para inicializar toasts
  function initToasts() {
    // Dispara uma notificação a cada 5s
    setInterval(createToast, 5000);
  }
  
  // Expor função globalmente
  window.initializeToasts = initToasts;
})();

// WhatsApp input filter and validation (Brazilian format: DDD + phone)
(function(){
  // Filter inputs to allow only numbers and limit to 11 digits (DDD + 9 digits)
  function setupPhoneInputs() {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    
    phoneInputs.forEach(input => {
      // Only allow numbers
      input.addEventListener('input', function(e) {
        // Remove non-numeric characters
        let value = this.value.replace(/\D/g, '');
        // Limit to 11 digits (DDD + 9 digits)
        if (value.length > 11) {
          value = value.substring(0, 11);
        }
        this.value = value;
        
        // Auto-validate when reaches 11 digits
        if (value.length === 11) {
          validateWhatsApp(this, value);
        } else {
          clearValidationMessage();
        }
      });

      // Prevent pasting non-numeric content
      input.addEventListener('paste', function(e) {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        const numericPaste = paste.replace(/\D/g, '').substring(0, 11);
        this.value = numericPaste;
        
        if (numericPaste.length === 11) {
          validateWhatsApp(this, numericPaste);
        }
      });

      // Prevent non-numeric key input
      input.addEventListener('keydown', function(e) {
        // Allow: backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true)) {
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
      });
    });
  }

  // Create or get validation result element
  function getResultElement() {
    let resultEl = document.getElementById('whatsapp-validation');
    if (!resultEl) {
      const forms = document.querySelectorAll('form[data-crm-form]');
      if (forms.length > 0) {
        resultEl = document.createElement('div');
        resultEl.id = 'whatsapp-validation';
        resultEl.style.marginTop = '10px';
        resultEl.style.fontSize = '0.9rem';
        resultEl.style.fontWeight = '600';
        resultEl.style.textAlign = 'center';
        resultEl.style.padding = '8px 12px';
        resultEl.style.borderRadius = '6px';
        resultEl.style.transition = 'all 0.3s ease';
        
        // Add after the first phone input
        const phoneInput = forms[0].querySelector('input[name="phone"]');
        if (phoneInput && phoneInput.parentNode) {
          phoneInput.parentNode.appendChild(resultEl);
        }
      }
    }
    return resultEl;
  }

  function clearValidationMessage() {
    const resultEl = getResultElement();
    if (resultEl) {
      resultEl.textContent = '';
      resultEl.style.display = 'none';
    }
  }

  function showValidationMessage(message, isSuccess = false) {
    const resultEl = getResultElement();
    if (resultEl) {
      resultEl.textContent = message;
      resultEl.style.display = 'block';
      if (isSuccess) {
        resultEl.style.color = '#059669';
        resultEl.style.backgroundColor = '#dcfce7';
        resultEl.style.border = '1px solid #bbf7d0';
      } else {
        resultEl.style.color = '#dc2626';
        resultEl.style.backgroundColor = '#fef2f2';
        resultEl.style.border = '1px solid #fecaca';
      }
    }
  }

  const API_URL = 'https://api.meunomeok.uk/chat/whatsappNumbers/Validador%20WhatsApp';
  const API_KEY = '95402d141aae763fb29ec457255604ff';

  function getFieldValue(form, names) {
    for (const n of names) {
      const el = form.querySelector(`[name="${n}"]`) || form.querySelector(`#${n}`);
      if (el) return (el.value || '').trim();
    }
    return '';
  }

  function validateWhatsApp(input, phone) {
    if (phone.length !== 11) {
      showValidationMessage('WhatsApp deve ter exatamente 11 dígitos (DDD + número)');
      input.dataset.validated = 'false';
      return;
    }

    showValidationMessage('Validando número...', false);

    // Convert to E.164 format for API (add country code 55)
    const e164Phone = '55' + phone;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': API_KEY },
      body: JSON.stringify({ numbers: [e164Phone] })
    }).then(async resp => {
      if(!resp.ok) throw new Error('Erro: '+resp.status);
      const data = await resp.json();
      const r = data && data[0];
      if(r && r.exists){
        showValidationMessage(`Válido! o Numero ${phone} existe no WhatsApp!`, true);
        input.dataset.validated = 'true';
        
        // PASSO 1: Enviar lead para Supabase após validação (preenchimento + validação)
        const form = input.closest('form[data-crm-form]');
        if (form && window.MeuNomeCRM?.sendLead) {
          const name = getFieldValue(form, ['name','nome','full_name','fullname']);
          const email = getFieldValue(form, ['email','e-mail','email_address']);
          const company = getFieldValue(form, ['company','empresa']);
          
          window.MeuNomeCRM.sendLead({
            name,
            email,
            phone,
            company,
            formId: form.id || form.name || 'lp_form',
            phoneValidated: true
          }).then(async response => {
            if (response.ok) {
              const result = await response.json();
              if (result.lead_id) {
                localStorage.setItem('lead_id', result.lead_id);
                console.log('Lead armazenado:', result.lead_id);
              }
            }
          }).catch(err => {
            console.warn('Erro ao armazenar lead:', err);
          });
        }
      } else {
        showValidationMessage(`❌ O número ${phone} NÃO existe no WhatsApp.`, false);
        input.dataset.validated = 'false';
      }
    }).catch(err => {
      showValidationMessage(`Falha na verificação: ${err.message}`, false);
      input.dataset.validated = 'false';
    });
  }

  // Form submission validation
  document.addEventListener('submit', function(e){
    const targetForm = e.target.closest('form[data-crm-form]');
    if(!targetForm) return;

    const phoneEl = targetForm.querySelector('[name="phone"]');
    if (!phoneEl) return;

    const phone = phoneEl.value.trim();
    
    // Check if phone has exactly 11 digits
    if (phone.length !== 11 || !/^\d{11}$/.test(phone)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      showValidationMessage('WhatsApp deve ter exatamente 11 dígitos (ex.: 11999999999)', false);
      phoneEl.focus();
      return;
    }

    // Check if phone was validated successfully
    if (phoneEl.dataset.validated !== 'true') {
      e.preventDefault();
      e.stopImmediatePropagation();
      showValidationMessage('Aguarde a validação do WhatsApp ou insira um número válido', false);
      return;
    }

    // If validation passed, prevent default form submission and handle redirect
    e.preventDefault();
    clearValidationMessage();
    
    // Manually send data to CRM and redirect
    const nameEl = targetForm.querySelector('[name="name"]');
    const emailEl = targetForm.querySelector('[name="email"]');
    
    const formData = {
      name: nameEl ? nameEl.value.trim() : '',
      email: emailEl ? emailEl.value.trim() : '',
      phone: phone
    };
    
    // PASSO 2: Enviar evento form_filled após submit (lead já foi enviado na validação)
    if (window.MeuNomeCRM && window.MeuNomeCRM.sendEvent) {
      window.MeuNomeCRM.sendEvent('form_filled');
    }
    
    // Mark as submitted and redirect
    setTimeout(() => {
      markAsSubmitted();
      
      // Redirecionar para página de agradecimentos
      if (window.router && typeof window.router.navigate === 'function') {
        window.router.navigate('/obrigado');
      } else {
        window.location.href = '/obrigado';
      }
    }, 300);
  }, false); // Usar false para rodar após o snippet do CRM

  // Function to be called when page is rendered
  window.setupPhoneInputs = setupPhoneInputs;
})();

// Name input filter (only letters, spaces and accents)
(function(){
  function setupNameInputs() {
    const nameInputs = document.querySelectorAll('input[name="name"]');
    
    nameInputs.forEach(input => {
      // Only allow letters, spaces, and accented characters
      input.addEventListener('input', function(e) {
        // Allow letters (a-z, A-Z), spaces, and accented characters (àáâãäçèéêëìíîïñòóôõöùúûüýÿ)
        let value = this.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
        this.value = value;
      });

      // Prevent pasting invalid content
      input.addEventListener('paste', function(e) {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        const filteredPaste = paste.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
        this.value = filteredPaste;
      });

      // Prevent invalid key input
      input.addEventListener('keydown', function(e) {
        // Allow: backspace, delete, tab, escape, enter, space
        if ([46, 8, 9, 27, 13, 32].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, up, down arrows
            (e.keyCode >= 35 && e.keyCode <= 40)) {
          return;
        }
        
        // Ensure that it is a letter or accented character
        const char = String.fromCharCode(e.keyCode);
        if (!/[a-zA-ZÀ-ÿ\u00f1\u00d1]/.test(char) && !e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
        }
      });

      // Handle character input for better compatibility
      input.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[a-zA-ZÀ-ÿ\u00f1\u00d1\s]/.test(char)) {
          e.preventDefault();
        }
      });
    });
  }

  // Function to be called when page is rendered
  window.setupNameInputs = setupNameInputs;
})();

// Função para inicializar todas as funcionalidades da página principal
function initializeMainPageFeatures() {
  // Verificar se já enviou antes
  if (hasSubmittedBefore()) {
    showAlreadySubmittedMessage();
    return;
  }

  // Configurar inputs
  if (window.setupPhoneInputs) {
    window.setupPhoneInputs();
  }
  if (window.setupNameInputs) {
    window.setupNameInputs();
  }
  
  // Configurar notificações toast
  if (window.initializeToasts) {
    window.initializeToasts();
  }
}

// Counter animation for thank you page
function animateCounter() {
  const counter = document.getElementById('thank-counter');
  if (!counter) return;

  const startNumber = 9845;
  let currentNumber = startNumber;
  
  setInterval(() => {
    currentNumber += Math.floor(Math.random() * 3) + 1; // Random increment between 1-3
    counter.textContent = `${currentNumber.toLocaleString('pt-BR')} clientes libertos das dívidas em 2025`;
  }, 30000); // Update every 30 seconds
}

// Instagram click tracking
function trackInstagramClick() {
  if (typeof window.MeuNomeCRM !== 'undefined' && window.MeuNomeCRM.sendEvent) {
    window.MeuNomeCRM.sendEvent('instagram_click');
  }
}

// Initialize thank you page features
function initThankYouPage() {
  // Only run on thank you page
  if (window.location.pathname.includes('/obrigado') || 
      document.querySelector('.thank-you-section')) {
    animateCounter();
  }
}

// Função para renderizar página de agradecimentos
function renderThankYouPage() {
  document.querySelector('#app').innerHTML = `
    <!-- Background Pattern -->
    <div class="fixed-bg-pattern"></div>
    
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="/Design_sem_nome__1_-removebg-preview.png" alt="Meu Nome Ok" class="logo" />
          </div>
          
          <div class="trust-badges">
            <span class="trust-badge">
              🛡️ Dados 100% Seguros
            </span>
            <span class="trust-badge">
              🏆 RA 1000 Reclame Aqui
            </span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <!-- Seção de Agradecimento -->
        <section class="thank-you-section">
          <div class="success-icon">
            ✅
          </div>
          
          <h1>Obrigado! Você deu o passo certo</h1>
          <p class="thank-you-subtitle">Você está mais próximo de recuperar seu salário e viver com tranquilidade</p>
          
          <!-- Contador Dinâmico -->
          <div class="counter-section">
            <div class="counter-card">
              <div class="counter-icon">👥</div>
              <div id="thank-counter" class="counter">
                <span id="counter-number">9.845</span> clientes libertos das dívidas em 2025
              </div>
            </div>
          </div>
        </section>

        <!-- Vídeo de Boas-Vindas -->
        <section class="video-section">
          <h2>Assista ao vídeo para entender como funciona</h2>
          <div class="video-container">
            <iframe id="panda-8795b366-a314-4f5f-82a6-e27353d53ac2" src="https://player-vz-e80a8275-32a.tv.pandavideo.com.br/embed/?v=8795b366-a314-4f5f-82a6-e27353d53ac2" style="border:none;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="100%" height="100%" fetchpriority="high"></iframe>
          </div>
        </section>

        <!-- Próximos Passos -->
        <section class="next-steps">
          <h2>O que acontece agora?</h2>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-icon">⏰</div>
              <div class="step-content">
                <h3>Aguarde nosso contato</h3>
                <p><strong>Em até algumas horas</strong>, nossa especialista Vera Lúcia Nogueira vai falar com você no WhatsApp informado.</p>
              </div>
            </div>
            
            <div class="step-card">
              <div class="step-icon">📱</div>
              <div class="step-content">
                <h3>Responda rapidamente</h3>
                <p><strong>Mantenha o celular por perto:</strong> responder rápido ajuda a recuperar sua renda mais depressa.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Depoimentos -->
        <section class="testimonials-mini">
          <h2>O que nossos clientes dizem</h2>
          <div class="testimonials-mini-grid">
            <div class="testimonial-mini">
              <div class="testimonial-mini-photo">
                <img src="/Ana Costa.jpg" alt="Ana Costa" />
              </div>
              <p>"Reduzi minha parcela e parei de sofrer com os descontos. Atendimento impecável."</p>
              <span class="testimonial-author">— Ana Costa</span>
            </div>
            
            <div class="testimonial-mini">
              <div class="testimonial-mini-photo">
                <img src="/Evaristo Neto.jpg" alt="Evaristo Neto" />
              </div>
              <p>"Eu já não acreditava mais. Em poucos meses, minha renda voltou ao normal."</p>
              <span class="testimonial-author">— Evaristo Neto</span>
            </div>
          </div>
        </section>

        <!-- CTA Instagram -->
        <section class="cta-section">
          <div class="cta-card">
            <h2>Conheça mais sobre nossa empresa</h2>
            <p>Acompanhe nosso trabalho e veja mais histórias de sucesso</p>
            
            <a href="https://www.instagram.com/meunome.ok/" target="_blank" class="cta-button" onclick="trackInstagramClick()">
              <span class="cta-icon">📷</span>
              Siga-nos no Instagram
              <span class="cta-arrow">→</span>
            </a>
          </div>
        </section>

        <!-- Mensagens de Apoio -->
        <section class="support-messages">
          <div class="message-box">
            <div class="message-icon">💬</div>
            <p>Aqui a conversa é simples e direta: mostramos onde os bancos cobram a mais e como parar isso.</p>
          </div>
          <div class="message-box">
            <div class="message-icon">🤝</div>
            <p>Sem prometer milagres: só trabalho sério, transparente e no seu tempo.</p>
          </div>
        </section>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2025 Meu Nome Ok — Todos os direitos reservados</p>
          
          <div class="footer-badges">
            <span class="trust-badge">🛡️ Dados 100% Seguros & LGPD</span>
            <span class="trust-badge">🔐 SSL Certificado • Segurança Premium</span>
          </div>
        </div>
      </div>
    </footer>
  `;
  
  // Inicializar funcionalidades específicas da página
  setTimeout(() => {
    animateCounter();
    initializeThankYouAnimations();
  }, 100);
}

// Função para inicializar animações da página de obrigado
function initializeThankYouAnimations() {
  // Animar elementos com entrada suave
  const animateElements = document.querySelectorAll('.success-icon, .thank-you-section h1, .thank-you-subtitle, .counter-card, .step-card, .testimonial-mini, .cta-card, .message-box');
  
  animateElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
  
  // Animar o ícone de sucesso com escala
  const successIcon = document.querySelector('.success-icon');
  if (successIcon) {
    setTimeout(() => {
      successIcon.style.transform = 'scale(1.1)';
      setTimeout(() => {
        successIcon.style.transform = 'scale(1)';
      }, 200);
    }, 500);
  }
  
  // Adicionar efeito hover aos cartões
  const hoverCards = document.querySelectorAll('.step-card, .testimonial-mini, .message-box');
  hoverCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Configurar rotas
router.addRoute('/', renderMainPage);
router.addRoute('/obrigado', renderThankYouPage);

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar router
  router.init();
  
  // Initialize features for the current page
  if (window.location.pathname === '/' || window.location.pathname === '') {
    // Check if user has already submitted
    if (hasSubmittedBefore()) {
      showAlreadySubmittedMessage();
      return;
    }
  }
});