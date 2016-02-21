'use strict'
/* global Elm */ // This will keep your linter happy

// get a reference to the div where we will show our UI
let container = document.getElementById('container')

// start the elm app in the container
// and keep a reference for communicating with the appp
let feldspar = Elm.embed(Elm.Main, container)
