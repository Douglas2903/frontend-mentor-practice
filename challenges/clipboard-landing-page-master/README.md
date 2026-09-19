# Clipboard Landing Page

Solução para o desafio [Clipboard Landing Page](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cceb32483abb4f27c98uUX9) do Frontend Mentor (categoria Newbie).

🔗 [Link do desafio](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cceb32483abb4f27c98uUX9)

## Visão geral

Landing page responsiva construída com HTML5 semântico e CSS3 (Flexbox), seguindo abordagem **mobile-first**. O projeto foi usado como estudo aprofundado de semântica HTML e acessibilidade, além de fundamentos de responsividade com Flexbox.

### Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Custom Properties, Flexbox, Media Queries)
- Mobile-first workflow

## Decisões técnicas

### 1. Hierarquia de headings corrigida

Na primeira versão, os títulos "Quick Search", "iCloud Sync" e "Complete History" estavam marcados como `<h2>`, no mesmo nível hierárquico do título da seção anterior ("Keep track of your snippets"). Isso quebrava a árvore de acessibilidade do documento: esses três itens são **detalhes** do conceito anterior, não seções novas e independentes.

Corrigido para `<h3>`, respeitando a relação pai/filho (`h2` → `h3`) e mantendo uma estrutura de outline coerente, testada via extensão HeadingsMap no Chrome.

### 2. Links de download: `<button>` → `<a>`

Os botões "Download for iOS/Mac" estavam originalmente marcados como `<button type="button">`. Como a ação real desses elementos é **navegar** para outro destino (loja de aplicativos), e não executar uma ação em JavaScript na própria página, a tag semanticamente correta é `<a>`.

A distinção segue a recomendação da [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#usage_notes): `<button>` para ações que alteram o estado da página atual; `<a>` para navegação, ainda que estilizada visualmente como botão via CSS.

### 3. Ícones sociais: SVG inline + acessibilidade

Os ícones do footer (Facebook, Twitter, Instagram) foram implementados como **SVG inline** (código `<svg>` direto no HTML) em vez de `<img src="icon.svg">`. Essa escolha foi necessária para permitir que o CSS controlasse a cor do ícone dinamicamente no estado `:hover`/`:focus` — algo que não é possível quando o SVG é carregado via `src` de uma `<img>`, pois o navegador o trata como uma imagem opaca, sem acesso ao atributo `fill` interno via CSS externo.

Como os links ficaram sem nenhum texto visível (só o ícone), cada `<a>` recebeu um `aria-label` (ex: `aria-label="Facebook"`) para dar um nome acessível ao link para leitores de tela. O `<svg>` interno recebeu `aria-hidden="true"`, evitando que ele seja anunciado novamente de forma redundante — o nome já foi definido no elemento pai.

Todos os links externos usam `rel="noopener noreferrer"` junto com `target="_blank"`, prevenindo o problema de segurança conhecido como **tabnabbing** (a página aberta ganhando acesso ao `window.opener` da aba original).

### 4. Bug resolvido: cor do ícone não mudava no `:hover`

**Problema:** ao tentar mudar a cor dos ícones sociais no hover com `.social-medias-box a:hover { fill: var(--green-500); }`, nada acontecia visualmente.

**Causa:** a propriedade `fill` estava sendo aplicada no elemento `<a>` (pai), mas quem efetivamente precisa dela é o elemento `<path>` (dentro do `<svg>`, dois níveis abaixo). Diferente de `color` em texto, `fill` não é herdado automaticamente de forma que sobrescreva o atributo `fill` inline já presente no `<path>` do arquivo SVG original.

**Solução:** o seletor foi ajustado para mirar o `<path>` diretamente:
```css
.social-medias-box a:hover svg path,
.social-medias-box a:focus svg path {
    fill: var(--green-500);
}
```

### 5. Removida regra de seletor de elemento genérico (`div`)

Durante o desenvolvimento, havia uma regra `div { display: flex; flex-direction: column; gap: 1rem; }` aplicada globalmente a **todas** as divs da página, mesmo as que já tinham classes com layout próprio. Isso criava dependência implícita: várias seções "herdavam" comportamento de uma regra genérica sem isso estar explícito em nenhuma classe.

A regra foi removida e substituída por uma classe específica (`.workflow-section-div`), aplicada apenas onde o comportamento era de fato necessário — eliminando efeito colateral invisível para futuras manutenções.

## Responsividade

Abordagem mobile-first, com breakpoint único em `48rem` (768px) para o layout desktop. Unidade `rem` escolhida em vez de `px` no breakpoint para respeitar configurações de zoom/fonte do usuário no navegador.

Principais mudanças no breakpoint desktop:
- Seções `computer-section` e `clipboard-section` passam de layout empilhado (`column`) para lado a lado (`row`)
- Imagem de fundo do header trocada para a versão desktop
- Botões de download passam a ficar lado a lado

## O que foi testado

- Breakpoints testados manualmente redimensionando a viewport no navegador (não apenas nos tamanhos "óbvios")
- Estados de `:hover` e `:focus` verificados em todos os elementos interativos (links, ícones sociais)
- HTML validado sem erros no [W3C Markup Validator](https://validator.w3.org/)
- Hierarquia de headings verificada com a extensão HeadingsMap

## Autor

- Frontend Mentor - [@Douglas2903](https://www.frontendmentor.io/profile/Douglas2903)
- GitHub - [@Douglas2903](https://github.com/Douglas2903)