# Testimonials Grid Section

Solução para o desafio [Testimonials Grid Section](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7) do Frontend Mentor (categoria Junior).

🔗 [Link do desafio](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)

## Visão geral

Grid de depoimentos responsivo, construído com HTML5 semântico e CSS3 (Flexbox no mobile, CSS Grid no desktop), seguindo abordagem **mobile-first**. Usado como estudo de CSS Grid em layouts assimétricos e aprofundamento em acessibilidade (headings, atribuição de citações).

### Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Custom Properties, Flexbox, CSS Grid, Media Queries)
- Mobile-first workflow

## Decisões técnicas

### 1. `<blockquote>` sem `<q>` aninhado

A primeira versão tinha `<q>` dentro de `<blockquote>`. [Escreva aqui: o que você observou sobre aspas duplicadas, ou o motivo real pelo qual optou por manter só `<blockquote><p class="quote">`, sem `<q>`.]

### 2. `<article>` em vez de `<div>` para cada card

Cada depoimento é conteúdo autocontido — faz sentido isolado do resto da página (nome, foto, citação completa). Por isso, cada card usa `<article>` em vez de `<div>` genérica, seguindo a recomendação da [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) sobre conteúdo "distribuível/reutilizável de forma independente".

### 3. `<figure>` + `<figcaption>` para atribuição de citação

[Escreva aqui: por que usar figure/figcaption, o problema de duplicar o nome visualmente já que ele aparece no topo do card, e a solução com a classe `.visually-hidden` — nome presente no DOM para leitores de tela, sem duplicação visual.]

### 4. Hierarquia de headings e `<h1>` oculto

O validador W3C apontou dois avisos: `<article>` sem heading próprio, e o documento inteiro sem nenhum `<h1>`. [Escreva aqui: por que cada card ganhou um `<h2>` a partir do texto de destaque já existente, e por que foi adicionado um `<h1 class="visually-hidden">` no topo da página mesmo sem título visível no design.]

### 5. Bug resolvido: posicionamento no CSS Grid

**Problema:** [Escreva aqui: o que você tentou primeiro (`grid-template-columns: 3`) e o que esperava que acontecesse]

**Causa:** [Escreva aqui: a diferença entre uma propriedade que define a estrutura de colunas de um *container* de grid (`grid-template-columns`) e uma propriedade que posiciona um *item* dentro do grid pai (`grid-column`)]

**Solução:** [Escreva aqui: o ajuste final, `grid-column: 3`, e por que essa é a forma correta de fazer um item ocupar uma posição específica sem precisar redefinir a estrutura do grid inteiro]

## Responsividade

Abordagem mobile-first, com breakpoint em `50rem` (800px). No mobile, os cards ficam empilhados via Flexbox (`flex-direction: column`). No desktop, o container vira um `display: grid` de 4 colunas por 2 linhas, com cada card posicionado explicitamente via `grid-column`/`grid-row` para reproduzir o layout assimétrico do design (alguns cards ocupando 2 colunas, um ocupando 2 linhas).

## O que foi testado

- HTML validado sem erros no [W3C Markup Validator](https://validator.w3.org/)
- Avisos do validador investigados e corrigidos (não apenas ignorados) — hierarquia de headings e ausência de `<h1>`
- Posicionamento do Grid verificado no DevTools, incluindo depuração de uma propriedade CSS aplicada incorretamente
- Breakpoint testado redimensionando a viewport manualmente

## Autor

- Frontend Mentor - [@Douglas2903](https://www.frontendmentor.io/profile/Douglas2903)
- GitHub - [@Douglas2903](https://github.com/Douglas2903)