Clara Front-end Challenge
============================

## Intro

Welcome! This challenge is designed to give us a better idea of how you work
on a front-end project. We've found project-based challenges like this are
often more accurate than traditional coding interviews.

You should **expect to spend 2 hours on this challenge**.

## The Challenge

At Clara, we've decided to build some internal "portals" that make our
mortgage staff more effective. Lately, we realized that GIFs shared per hour
is really the most important metric so we've decided to build an internal portal
for sharing GIF collections! It's like... Pinterest for GIFs?
Well.. you get the idea.

Your quest is to complete the **Basic Requirements** and
your choice of **2 Features/Enhancements** from the list below.

We've provided a basic framework to get you started, but many things are
intentionally incomplete or broken. Feel free to change *anything* and
to add *any* libraries you need (just be sure to `npm install --save`them).

When you're done, check out the [submission guidelines](#submitting).

Best of luck!

### Basic Requirements

- Hook search up to the [Giphy API](https://github.com/giphy/GiphyAPI)
  - Should use their public beta key
  - Should efficiently make search requests as the user types in the search input.
  - Should populate the sidebar with thumbnail results.

### Features/Enhancements (choose 2)
- Dropping a search result onto a dropzone should fill the dropzone with
  the corresponding GIF.
  - Note: Basic drag'n'drop is already set up with
    [react-dnd](http://gaearon.github.io/react-dnd/docs-overview.html)
    you just need to hook it up to your own data model.
- Fix styling... what looks good to you?
- Hovering over a search result thumbnail should play a GIF preview.
- Cleanup GifDisplays:
  - image should stretch to fit the frame
  - should be arranged in a 2x2 grid, 200px row height.
- Do something cool! Anything you like! Just have fun with it.

## Installing

1. Install a recent version of nodejs (presumably you've done this already).
2. `npm install`

## Running

1. `npm start`
2. Load up `localhost:3020` in a browser.
3. Edit and save files. The browser should update automatically.

## Submitting

When you are satisfied with your work, follow these instructions to submit:

1. `git format-patch master --stdout > your-name.patch`.
    Or, if you worked straight off of master, use the commit sha preceding
    your work.
2. Email the patch to [recruiting+challenge-front-end@clara.com](mailto:recruiting+challenge-front-end@clara.com).

## Feedback

We're always looking for ways to improve our processes at Clara so
let us know if anything is especially frustrating (or fun)!

## Attributions

This repository is based on gaearon's [react-transform-boilerplate](//github.com/gaearon/react-transform-boilerplate) which is distributed under the [CC0 (public domain) license](//github.com/gaearon/react-transform-boilerplate/blob/d682dc59b3626fe515cd10bcc1f546a42d1098a9/LICENSE).
