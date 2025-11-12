# 💼 Desafio Frontend Júnior — Profile Card

Este projeto foi desenvolvido como parte do processo seletivo para **Desenvolvedor Frontend Júnior**.
O objetivo é criar um **Card de Perfil interativo** baseado no design fornecido no Figma.

## 🎯 Objetivo

Implementar um componente de card com:
- Foto de perfil
- Nome e cargo
- Contadores (seguidores, seguindo, projetos)
- Botões **Seguir** e **Mensagem**
- Interatividade no botão “Seguir”

## 🧩 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Jest](https://jestjs.io/)
- [Next Testing Library](https://nextjs.org/docs/pages/guides/testing/jest)

## ⚙️ Funcionalidades

- Clique em **Seguir** muda o estado para **Seguindo**
- Cor e ícone do botão são alterados dinamicamente
- Contador de seguidores é atualizado em tempo real
- Persistência de estado com `localStorage`
- Layout totalmente **responsivo**
- Fidelidade ao design original do [Figma](https://www.figma.com/design/JO0vsAS75zlc0Vrx0tA5WZ/Untitled?node-id=0-1&t=8UDm9Y2PkOhwYS6a-1)

## 🚀 Como executar localmente

```bash
# Clonar o repositório
git clone https://github.com/daianaadepaula/profile-card.git

# Entrar no diretório
cd profile-card

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

## 🧪 Testes

```bash
# Executar os testes
npm run test
```

Eles validam:

* Renderização dos componentes
* Comportamento do botão “Seguir”
* Persistência de estado no localStorage

## ♿ Acessibilidade

* Uso de aria-label e aria-pressed nos botões.
* Foco visível ao navegar via teclado (focus:ring).

## 🌐 Deploy

A aplicação está hospedada na [Vercel](https://profile-card-b6hygu2vy-daianaadepaulas-projects.vercel.app/)

## ✉️ Contato

Feito com 💜 por Daiana de Paula
[LinkedIn](https://www.linkedin.com/in/daianadepaula/) | [GitHub](https://github.com/daianaadepaula)
