# Frontend guide 

Guide in [Swedish](https://github.com/Kungbib/frontend-guide/blob/master/README-sv.md).

This document contains guidelines for developing UI in apps and services at the National Library of Sweden. The purpose of these guidelines are to:

- keep code _maintainable_ and help developers understand each other's code 
- support the development of _reusable_ UI components.
- support the development of UI that is _accessible_.
- reduce the risk of UI "breaking" when changes are made.


## Conventions, tech and tools
**Tech**
- [node.js](https://nodejs.org/download/)

**Tools**
- [KSS](https://github.com/kneath/kss)
- [KSS-node](https://github.com/kss-node/kss-node)
- [Grunt](https://gruntjs.com/)
- [Less](http://lesscss.org/)

**Frameworks**
- [Twitter Bootstrap](https://github.com/twbs/bootstrap)

**Naming conventions**
- [SUIT CSS](https://suitcss.github.io)


## Installation

1. Download and install [node.js](https://nodejs.org/download/).

2. Install grunt-cli:

        $ npm install -g grunt-cli

3. Go to repo, then run:

        $ npm install


## Creating custom css

Create your own rules in de folder `custom/`. Open `variables.less` and try out editing. To add a custom file to the build, import it by editing `custom.less` and adding:

    @import 'filename.less';

### Coding standards

#### Naming classes witth SUIT CSS

Use the [SUIT CSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md):

````
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
````

- Component parts should only be one level down, despite their relationship in the DOM:

```
/* Like this */
.MainNav
    .MainNav-list
    .MainNav-listItem
    .MainNav-link

/* Don't do this */
.MainNav
    .MainNav-list
    .MainNav-list-listItem
    .MainNav-list-listItem-link
```
- Use the `.js-` prefix to separate JavaScript-binding from CSS-styling:

````
<figure class="Thumbnail js-openGallery">
    <img class="Thumbnail-image" />
    <caption class="Thumbnail-caption>
</figure>
````
In this case, `.Thumbnail` might add styling with CSS, while we have an event listener in JavaScript on `.js-openGallery`. By never styling `.js-`-prefixed classes or connecting styled CSS with JS we can reduce the risk of the UI breaking when changes are made.

#### KSS

When adding a new component or modifier, this should be documented according to the KSS-syntax described [here](http://warpspire.com/kss/syntax/). This will then generate a styleguide for that component/modifier. 


##### Example

1. Create two new modifiers for `.Card`:

###### LESS

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

###### CSS

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

2. Add comments above the code:

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

This will generate a view like this:

![img](https://dl.dropboxusercontent.com/u/2316209/Screenshot%202015-06-03%2016.24.39.png)

##### Known errors
###### KSS in Windows environment

The KSS generator has som issues with path names in Windows, see [documentation](https://github.com/igor-dv/grunt-kss/commit/c23f26a2499fdeac2e9ca9a313771b2b6c7f8043) for further help.


## Build

Build Less to CSS and update documentation by running grunt:

    $ grunt

Watch for changes and build automatically when those occur:

    $ grunt watch

Check styleguide locally and watch for changes at the same time:

    $ grunt serve

This will make the styleguide available at: [http://localhost:8500/build/](http://localhost:8500/build/)

## Usage

Generated CSS file is called `kb-style.css`and is located in folder `build/css/`. Include this file in your application.

