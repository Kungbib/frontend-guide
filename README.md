# Frontend-guide
Riktlinjer och exempel för användning vid gränssnittsutveckling hos KB.


## Bootstrap-mall

### Installation

Ladda ner och installera [node.js](https://nodejs.org/download/).

Installera grunt-cli

    npm install -g grunt-cli

Bootstrap-mallen bor i mappen _styles_. Navigera dit och installera node-paketen

    npm install


### Anpassning

I mappen _custom_ skapar du egna regler utöver bootstraps egna. Öppna variables.less och testa att ändra på något.
För att lägga till en fil i genereringen öppnar du filen _custom.less_ och lägger till

    @import 'filename.less';

För att bygga dina less-filer till css behöver du gå till styles-mappen och köra

    grunt

I mappen _preview_ finns en HTML-fil där du kan se hur dina ändringar påverkar stilmallen.

### Användning

Den byggda css-filen _custom.css_ hamnar i mappen _build_. Detta är filen du inkluderar i din tjänst.
