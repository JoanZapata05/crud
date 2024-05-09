// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { coders } from "./database.js"
import {create, listWithInnerHtml } from './operations.js'

const tbody = document.querySelector("tbody")
listWithInnerHtml(coders, tbody)

const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")


form.addEventListener('submit', function(event){
    create(coders,name,email,lastName,tbody)


    form.reset()
    event.preventDefault()
    listWithInnerHtml(coders,tbody)
  
})

//eliminar coder por el id

coders.forEach(coder => {
    if (coder.id == 2) {
        coders.splice(coders.indexOf(coder), 1)
    }
})
//mostrar en consola 
console.log(coders);

//mostrar en html
listWithInnerHtml(coders, tbody)

