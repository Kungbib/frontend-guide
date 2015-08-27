# Introduktion

Detta är [Kungl. bibliotekets](http://www.kb.se/) stilguide. Stilguiden består av en samling riktlinjer och exempel som är tänkta att underlätta gränssnittsutveckling i KB:s digitala tjänster.

## Bidra till utvecklingen

Källkoden är öppen och finns tillgänglig på [Github](https://github.com/Kungbib/frontend-guide). Dessa sidor skapas utifrån koden som ligger där.

Anpassningar av enklare natur bör göras med ett extra stylesheet istället för att ändra i grund-stilmallen, mer om detta under avsnittet [Anpassningar](/frontend-guide/section-9.html).

Denna guide är under utveckling och kommer att utökas kontinuerligt. Vi vill gärna ha förslag på förbättringar och vad guiden mer skulle kunna innehålla. Lämna gärna feedback antingen via [Trello](https://trello.com/b/lPYbNyNq/guide-for-ratt-uttryck) eller via [issues på Github](https://github.com/Kungbib/frontend-guide/issues).

# Stilmall

Som en del av guiden finns en tillhörande stilmall, som går att [ladda ner här](./css/kb-style.css).
Stilmallen är en anpassad version av [Twitter Bootstrap](http://getbootstrap.com/) och ersätter dess CSS-filer, dock ej dess JavaScript.

Stilmallen är kompatibel med **Bootstrap 3.3.4**.

## Exempel

### Templates som använder stilmallen

* [Jumbotron](./examples/jumbotron.html) (Pastel colors)
* [Jumbotron](./examples/jumbotron2.html) (Happy colors)
* [Elements](./examples/elements.html)
* [Off-canvas](./examples/offcanvas.html) (feat. [font awesome](http://fontawesome.io/))
* [Objekt med egenskaper](./examples/objectprop.html)

### Tjänster som använder stilmallen

* [Biografblad](https://biografblad.kb.se/)

# Relaterade länkar

* [Grafisk profil för trycksaker](http://kb.idmanuals.com)
* [KB Bildbank](https://www.flickr.com/photos/25300312@N08/)

# Principer för utveckling

* [KBs programverksamhet](http://www.kb.se/Dokument/Programverksamhet/KB_Programmen_low.pdf)

# Tjänster med unikt utryck

Om tjänsten har en specifik målgrupp med ett unikt behov kan man behöva gå utanför stilguiden men den minimala sidfoten och krav för tillgänglighet behöver följas.
