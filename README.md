## What I've Done

1. Made the gif search work, included throttled search so as to not overtax clients with slower network connections.
2. Cleaned up all sorts of messy code.  Added style class name conventions, made coherent css rules. Added js structure, constants, service object, gif object, consistent naming, and cleaned up the madness inside the render functions.
3. Made drag and drop to target areas work.
4. Made the site style look respectable keeping in mind mobile, desktop, and large monitor devices (despite not making touch dnd work yet as mentioned below).

## What I would still like to do

1. Make drag and drop actually work with touch devices.
2. Add tests.
3. Update packages! So many deprecation warnings...
3. Test in other browsers besides Chrome.
3. Add Redux or Flux.  The data management needed is just at the point where they would start to be beneficial.
3. Do some linting.



## Installing

1. Install a recent version of nodejs (presumably you've done this already).
2. `npm install`

## Running

1. `npm start`
2. Load up `localhost:3020` in a browser.
3. Edit and save files. The browser should update automatically.

## Attributions

This repository is based on gaearon's [react-transform-boilerplate](//github.com/gaearon/react-transform-boilerplate) which is distributed under the [CC0 (public domain) license](//github.com/gaearon/react-transform-boilerplate/blob/d682dc59b3626fe515cd10bcc1f546a42d1098a9/LICENSE).
