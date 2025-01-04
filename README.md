# Bootstrap Utils DOM

Este pacote fornece utilitários e funções relacionadas ao DOM, que facilitam a manipulação de elementos HTML, eventos, e componentes. Ele foi projetado para ser usado com o **Bootstrap** e outros projetos que necessitam de funcionalidades de manipulação do DOM, como ativar triggers, sanitizar HTML e gerenciar componentes dinâmicos.

## Instalação

Para instalar o pacote, você pode usar o npm:

```bash
npm install bootstrap-utils-dom
```

Ou, se você preferir usar diretamente no HTML, basta incluir o arquivo compilado:

```html
Copiar código
<script src="dist/bootstrap-utils-dom.umd.js"></script>
```

## Como Usar

### Usando como Módulo ES (ESM)
Se você estiver usando um bundler (como Webpack, Rollup, etc.), pode importar as funções diretamente:

Copiar código
```javascript
import { Dom, Util } from 'bootstrap-utils-dom';

console.log(Dom);  // Acessa as exportações de Dom
console.log(Util); // Acessa as exportações de Util

// Usando uma função do Util
const sanitizedHTML = Util.sanitizeHtml('<div><a href="javascript:void(0)">Click me</a></div>', {});
console.log(sanitizedHTML);
```

### Usando no Navegador com UMD
Se você não estiver usando um bundler e deseja usar diretamente no navegador, pode usar o arquivo UMD:

Copiar código
```html
<script src="dist/bootstrap-utils-dom.umd.js"></script>
<script>
  window.addEventListener('load', () => {
    console.log(BootstrapUtilsDom.Util); // Verifique se o objeto Util foi carregado corretamente
    console.log(BootstrapUtilsDom.Dom); // Verifique se o objeto Dom foi carregado corretamente

    // Testando uma função, exemplo 'sanitizeHtml'
    const sanitizedHTML = BootstrapUtilsDom.Util.sanitizeHtml('<div><a href="javascript:void(0)">Click me</a></div>', {});
    console.log(sanitizedHTML);
  });
</script>
```

## Funções Disponíveis

### Dom

* data: Manipulação de dados DOM.
* eventHandler: Manipulação de eventos DOM.
* manipulator: Manipulação de atributos e classes DOM.
* selectorEngine: Ferramenta de busca e seleção de elementos.

## Util

* backdrop: Manipulação de backdrop para componentes.
* sanitizeHtml: Função para sanitizar HTML, removendo elementos e atributos indesejados.
* enableDismissTrigger: Função que ativa um "dismiss trigger" para componentes como alertas.
* config: Função de configuração para os componentes.
* focusTrap: Controle de foco em componentes modais e outros.
* scrollBar: Manipulação de barras de rolagem.
* swipe: Função para detectar gestos de swipe.
* templateFactory: Função para criar templates dinâmicos.

## Contribuindo

Sinta-se à vontade para fazer contribuições! Abra uma issue ou envie um pull request com melhorias, correções ou novos recursos.

* Fork o repositório.
* Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
* Faça suas alterações.
* Commit suas mudanças (git commit -am 'Adiciona nova feature').
* Envie para a branch principal (git push origin feature/nome-da-feature).
* Abra um Pull Request.