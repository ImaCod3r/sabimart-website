# Sabimart

Website institucional da **Sabimart** — empresa angolana de serviços de tecnologia com centro de formação próprio em Cabinda. O site apresenta os serviços da empresa, o centro de formação e os canais de contacto.

> _Tech que resolve. Formação que transforma._

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build e servidor de desenvolvimento
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização
- [Lucide React](https://lucide.dev/) — ícones
- [ESLint](https://eslint.org/) — linting

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada).

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando           | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento com hot reload    |
| `npm run build`   | Verifica os tipos e gera o build de produção em `dist` |
| `npm run preview` | Serve localmente o build de produção                   |
| `npm run lint`    | Executa o ESLint em todo o projeto                     |

## Estrutura do projeto

```
src/
├── assets/          # Logo e imagens
├── components/
│   ├── Navbar.tsx          # Navegação fixa com menu mobile
│   ├── Hero.tsx            # Secção principal com efeito typewriter
│   ├── About.tsx           # Quem somos
│   ├── Services.tsx        # Serviços de TI oferecidos
│   ├── TrainingCenter.tsx  # Cursos do centro de formação
│   ├── WhyUs.tsx           # Diferenciais da empresa
│   ├── FinalCta.tsx        # Chamada final para ação
│   ├── Contacts.tsx        # Contactos e localização
│   ├── Footer.tsx          # Rodapé
│   ├── Button.tsx          # Botão reutilizável (primário/secundário)
│   ├── Reveal.tsx          # Animação de entrada ao rolar a página
│   └── TypewriterText.tsx  # Texto com efeito de digitação
├── App.tsx          # Composição das secções da página
├── main.tsx         # Ponto de entrada da aplicação
└── index.css        # Estilos globais e configuração do Tailwind
```

O site é uma _single page_ com navegação por âncoras (`#quem-somos`, `#servicos`, `#centro-de-formacao`, `#contactos`) e scroll suave entre as secções.

## Serviços apresentados

- Suporte e Manutenção de TI
- Redes e Infraestrutura
- Desenvolvimento de Software / Web
- Venda de Equipamentos e Consumíveis de TI
- Consultoria Tecnológica
- Segurança Informática

## Build de produção

```bash
npm run build
```

Os ficheiros otimizados são gerados na pasta `dist`, prontos para serem publicados em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).
