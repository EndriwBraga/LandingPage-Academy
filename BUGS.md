```javascript
Decidi criar este arquivo no final do projeto, pois ele tem se tornado cada vez mais desafiador. A partir de agora, vou registrar os bugs e as soluções que eu encontrar, já que no futuro pretendo conectar o projeto a um banco de dados e, possivelmente, adicionar uma página de login única.
```

**Possivel melhoria, porem não prioridade. - 11/02/2024**
__const cardWidth = 268 + 32;__ // Possivel melhoria, descobrir como fazer para pegar automaticamento o tamanho do card + o tamanho do gap em vez de eu proporcionar as larguras.

**Bug Resolvido - 12/02/2024 às 7:50**
Corrigi um bug que ocorria no carrossel "Explore o Programa" da página. Na lógica anterior, ao chegar no slide 9, os slides 10 e 11, que não existiam, apareciam erroneamente. Ajustei a lógica para que, ao chegar no slide 9, o carrossel retorne ao slide 1 (índice 0).

**Novo Bug - 12/02/2024 às 7:58**
Na versão mobile não aparece o ultimo slide antes de resetar, irei ter que mudar a lógica da função update carrosel, por que quando eu pego 900 px de width na pagina, eu mudo no CSS
para 2 slides, e isso está impactando na função.


```javascript
function getMaxIndex() {
  return window.innerWidth <= 900 ? totalCards - 2 : totalCards - 3;
}

Tive que implementar essa parte no código para pegar a largura da tela com window.innerWidth, ela em si esta retornando se a tela tem menos que 900 pixel, tem 2 card no carrosel, se tem mais que isso tem 3. Isso foi definido no CSS. Total cards é 9, então no console.log ele imprimi 6 ou 7.