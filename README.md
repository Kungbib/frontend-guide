# Frontend-guide
Riktlinjer och exempel för användning vid gränssnittsutveckling hos KB.

Repot innehåller setup för anpassning av [Twitter Bootstrap](https://github.com/twbs/bootstrap) samt generering av en stilguide enligt [KSS](https://github.com/kneath/kss) genom [KSS-node](https://github.com/kss-node/kss-node).

## Installation

- Ladda ner och installera [node.js](https://nodejs.org/download/).

- Installera grunt-cli

        npm install -g grunt-cli

- Navigera till repositoriet och installera node-paketen

        npm install


## Anpassning av stilguiden

I mappen _custom_ skapar du egna regler utöver bootstraps egna. Öppna variables.less och testa att ändra på något.
För att lägga till en fil i genereringen öppnar du filen _custom.less_ och lägger till

    @import 'filename.less';

### Kod-riktlinjer

#### KSS

När du lägger till en ny komponent eller en ny modifierare för en komponent så ska denna dokumenteras enligt KSS-syntaxen som går att läsa om [här](http://warpspire.com/kss/syntax/). Detta för att stilguiden ska kunna generera en vy över den nya komponenten/regeln.

Kortfattat går det ut på att ange namn, beskrivning, modifierare samt önskad position i dokumentationen.

##### Exempel

Här skapar jag 2 nya modifierare för klassen .card

    .card {
      &.card-danger {
        background-color: lighten(@brand-danger,15%);
        color: darken(@brand-danger,35%);
      }
      &.card-success {
        background-color: lighten(@brand-success,25%);
        color: darken(@brand-success,25%);
      }
    }

Sedan lägger jag följande kommentar ovanför koden

    /*
    Skinning of cards

    Skins for different purposes

    .card-danger    - Card skin to use when we want to convey some kind of danger
    .card-success   - Card skin to use when we want to convey some kind of success

    Markup:
    <div class="card {{modifier_class}}">
        <h1>Card</h1>
        <p>Description</p>
    </div>

    Styleguide 6.1.4
    */

Detta kommer att generera en vy likt denna:

![img](https://dl.dropboxusercontent.com/u/2316209/Screenshot%202015-06-03%2016.24.39.png)


## Bygga stilmall och stilguide

För att bygga din LESS till CSS samt uppdatera dokumentationen behöver du köra:

    $ grunt

Vill du bygga automatiskt vid varje ändring kan du köra:

    $ grunt watch

För att granska stilguiden lokalt kan du starta watch och servering samtidigt med:

    $ grunt serve

Stilguiden går då att se på: [http://localhost:8500/build/](http://localhost:8500/build/)

## Användning av stilmallen i projekt

Den byggda css-filen _kb-style.css_ hamnar i mappen _build/css_. Detta är filen du inkluderar i din tjänst.

## Kända problem

### Bygga KSS i Windows-miljö

KSS-generatorn har problem med pathnames när man bygger i Windows-miljö. För tillfället behöver du implementera [dessa ändringarna](https://github.com/igor-dv/grunt-kss/commit/c23f26a2499fdeac2e9ca9a313771b2b6c7f8043) för att dokumentationen ska genereras.
