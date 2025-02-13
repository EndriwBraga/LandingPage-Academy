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

Também não estava rolando para esquerda, tive que mudar a função do touchend, problema resolvido.

**Primeiro Carrosel Finalizado. 12/02/2025 13:01** 

