# Frontend-guide
Riktlinjer och exempel för användning vid gränssnittsutveckling hos KB.

Repot innehåller setup för anpassning av [Twitter Bootstrap](https://github.com/twbs/bootstrap) samt generering av en stilguide enligt [KSS](https://github.com/kneath/kss) genom [KSS-node](https://github.com/kss-node/kss-node).

## Installation

Ladda ner och installera [node.js](https://nodejs.org/download/).

Installera grunt-cli

    npm install -g grunt-cli

Bootstrap-temat och dokumentationen ligger för närvarande i mappen _styles_. Navigera dit och installera node-paketen

    npm install


## Anpassning av Bootstrap

I mappen _custom_ skapar du egna regler utöver bootstraps egna. Öppna variables.less och testa att ändra på något.
För att lägga till en fil i genereringen öppnar du filen _custom.less_ och lägger till

    @import 'filename.less';

För att bygga dina less-filer till css behöver du gå till styles-mappen och köra

    grunt
    
Detta startar även en _grunt watch_ som lyssnar efter ändringar i koden och bygger CSS-filen automatiskt.

I mappen _preview_ finns _preview.html_ där du kan se hur dina ändringar påverkar stilmallen. Om du har en _grunt watch_ igång så uppdateras sidan automatiskt när du sparar ändringar i koden.

### Kod-riktlinjer

Om du lägger till en regel som inte redan finns reglerad i _variables.less_ så bör du ange den som en less-variabel och lägga till motsvarande variabel i _variables.less_. Detta gör att anpassningsbarheten i projektet bibehålls och att strukturen hålls ren.

Exempel:
Jag vill redigera navbar-klassens border-width. Jag kollar i _variables.less_ om där redan finns en variabel att redigera. Eftersom det inte finns det så skapar jag en fil i custom-mappen som heter _navbar.less_, inkluderar den i _custom.less_

    @import 'navbar.less';
    
I _navbar.less_ anger jag

    .navbar {
        border-width: @navbar-border-width;
    }
I _variables.less_ letar jag upp om det finns andra ställen där navbar-klassen regleras och lägger till

    @navbar-border-width: 1px;
>Om klassen inte har några andra variabler över huvud taget bör du skapa en ny sektion längst ner i filen där du kommenterar vilken klass det handlar om och lägger in variabeln.

Du har nu gjort din anpassning och samtidigt sett till att variabeln finns tillgänglig för framtida anpassning.

## Anpassning dokumentationen

...

## Användning av stilmallen

Den byggda css-filen _kb-style.css_ hamnar i mappen _build_. Detta är filen du inkluderar i din tjänst.
