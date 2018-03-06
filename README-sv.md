# Frontend-guide 

Det här är en samling riktlinger för gränssnittsutveckling till digitala tjänster från Kungliga Biblioteket. Syftet med dokumentet är att:

- tyddliggöra koden för flera utvecklare och göra den lättare att underhålla.
- stödja och underlätta utveckling av återanvändbara komponenter.
- stödja och underlätta utveckling av tillgänglighetsanpassat gränssnitt.
- reducera risk att gränsnitt "går sönder" vid ändringar.


Repot innehåller beskrivningar av metoder för namngivning med [SUIT CSS](https://suitcss.github.io), setup för anpassning av [Twitter Bootstrap](https://github.com/twbs/bootstrap) samt generering av en stilguide enligt [KSS](https://github.com/kneath/kss) genom [KSS-node](https://github.com/kss-node/kss-node).


## Standarder, teknik och verktyg
**Teknik**
- [node.js](https://nodejs.org/download/)

**Verktyg**
- [KSS](https://github.com/kneath/kss)
- [KSS-node](https://github.com/kss-node/kss-node)
- [Grunt](https://gruntjs.com/)
- [Less](http://lesscss.org/)

**Ramverk**
- [Twitter Bootstrap](https://github.com/twbs/bootstrap)

**Namnkonventioner**
- [SUIT CSS](https://suitcss.github.io)

## Installation

1. Ladda ner och installera [node.js](https://nodejs.org/download/).

2. Installera grunt-cli:

        $ npm install -g grunt-cli

3. Navigera till repot och installera node-paket:

        $ npm install


## Anpassning av stilguiden

I mappen `custom/` skapar du egna regler utöver bootstraps egna. Öppna `variables.less` och testa att ändra på något.
För att lägga till en fil i genereringen öppnar du filen `custom.less` och lägger till

    @import 'filename.less';

### Riktlinjer för kod

#### Namngivning med SUIT CSS

Namnge komponenter/element med [namnkonventionen SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) som bas, exempel:

````
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
````

- Underelement eller delar som hör ihop med komponenten får sina namn med huvudklassens namn som bas. En komponents delar namnges bara en nivå neråt, oavsett om de i DOM:en inbördes kan ligga djupare nästlat i varandra:
```
/* Gör så här */
.MainNav
    .MainNav-list
    .MainNav-listItem
    .MainNav-link

/* Gör INTE så här */
.MainNav
    .MainNav-list
    .MainNav-list-listItem
    .MainNav-list-listItem-link
```
- Använd prefixet `.js-` vid namngivning för att skilja styling ifrån JavaScript-funktioner. Exempel:

````
<figure class="Thumbnail js-openGallery">
    <img class="Thumbnail-image" />
    <caption class="Thumbnail-caption>
</figure>
````
I detta fall ges klassen `.Thumbnail` styling medan vi binder JS till klassen `.js-openGallery`. Genom att aldrig styla `.js-`-prefixade klasser eller binda JS till klasser med styling har vi minimerat risken att gränssnittet går sönder vid framtida ändringar.

#### KSS

När du lägger till en ny komponent eller en ny modifierare för en komponent så ska denna dokumenteras enligt KSS-syntaxen som går att läsa om [här](http://warpspire.com/kss/syntax/). Detta för att stilguiden ska kunna generera en vy över den nya komponenten/regeln.

Kortfattat går det ut på att ange namn, beskrivning, modifierare samt önskad position i dokumentationen.

##### Exempel

1. Skapa två nya modifierare för klassen `.Card`:

**LESS**

    .Card {
    /* Card default styles */

      &--danger {
        background-color: lighten(@brand-danger,15%);
        color: darken(@brand-danger,35%);
      }

      &--success {
        background-color: lighten(@brand-success,25%);
        color: darken(@brand-success,25%);
      }
    }

**CSS**

    .Card {
        /* Card default styles */
    }

    .Card--danger {
        background-color: lighten(@brand-danger,15%);
        color: darken(@brand-danger,35%);  
    }

    .Card--success {
        background-color: lighten(@brand-success,25%);
        color: darken(@brand-success,25%);   
    }

2. Lägg till följande kommentar ovanför koden:

```
/*
Skinning of cards

Skins for different purposes

.Card--danger    - Card skin to use when we want to convey some kind of danger
.Card--success   - Card skin to use when we want to convey some kind of success

Markup:
<div class="Card {{modifier_class}}">
    <h1>Card</h1>
    <p>Description</p>
</div>

Styleguide 6.1.4
*/
```

Detta kommer att generera en vy likt denna:

![img](https://dl.dropboxusercontent.com/u/2316209/Screenshot%202015-06-03%2016.24.39.png)


##### Bygga KSS i Windows-miljö

KSS-generatorn har problem med pathnames när man bygger i Windows-miljö. För tillfället behöver du implementera [dessa ändringarna](https://github.com/igor-dv/grunt-kss/commit/c23f26a2499fdeac2e9ca9a313771b2b6c7f8043) för att dokumentationen ska genereras.


## Bygga stilmall och stilguide

För att bygga din LESS till CSS samt uppdatera dokumentationen behöver du köra:

    $ grunt

Vill du bygga automatiskt vid varje ändring kan du köra:

    $ grunt watch

För att granska stilguiden lokalt kan du starta watch och servering samtidigt med:

    $ grunt serve

Stilguiden går då att se på: [http://localhost:8500/build/](http://localhost:8500/build/)

## Användning av stilmallen i projekt

Den byggda css-filen `kb-style.css` hamnar i mappen `build/css/`. Detta är filen du inkluderar i din tjänst.