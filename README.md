# Landing Page - Meu Nome Ok

Landing page para captação de leads focada em resolver problemas de empréstimos consignados.

## 🚀 Características

- **Validação de WhatsApp em tempo real** - Verifica se o número existe na plataforma
- **Design responsivo moderno** - Funciona perfeitamente em desktop e mobile
- **Sistema SPA** - Navegação fluida com página de agradecimentos
- **Integração CRM** - Captura automática de leads
- **Proteção contra spam** - Prevenção de envios duplicados
- **Notificações em tempo real** - Toast notifications de casos de sucesso

## 🛠️ Tecnologias

- **Vite** - Build tool moderna e rápida
- **Vanilla JavaScript** - SPA com roteamento customizado
- **CSS Moderno** - Animações e transições fluidas
- **API WhatsApp** - Validação de números em tempo real

## 📦 Instalação

```bash
npm install
```

## 🔧 Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📱 Funcionalidades

### Página Principal (/)
- Hero section com formulário de captura
- Seção de benefícios
- Depoimentos com fotos dos clientes
- Galeria de resultados
- Vídeos testimoniais
- FAQ completo
- CTA final

### Página de Agradecimentos (/obrigado)
- Confirmação de envio
- Vídeo de boas-vindas
- Próximos passos
- Depoimentos em destaque
- CTA para redes sociais

### Validações
- **Nome**: Apenas letras e acentos
- **Email**: Validação de formato
- **WhatsApp**: Validação em tempo real via API (formato brasileiro: 11999999999)

## 🔒 Segurança

- Dados protegidos com LGPD
- SSL/TLS encryption
- Validação de entrada sanitizada
- Prevenção contra XSS

## 📊 Analytics

- Tracking de conversões
- Eventos de interação
- Métricas de engajamento

## 🌐 Deploy

Configurado para deploy automático no Netlify com redirects SPA.