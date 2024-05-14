// Import our custom CSS
import '../scss/style.scss'


import * as bootstrap from 'bootstrap'
import { coders } from "./database.js"
import { create, deleteItem, listWithInnerHtml } from './operations.js'
import { showSmallAlertSuccess } from './alert.js'



const table = document.querySelector("table")
const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")
let idParaEditar 

const tbody = document.querySelector("tbody")
listWithInnerHtml(coders, tbody)


form.addEventListener('submit', function (event) {
    if (idParaEditar == undefined) {
        create(coders, name, email, lastName,)
        showSmallAlertSuccess("Saved")
    }else{
        for (const coder of coders) {
            if(coder.id == idParaEditar){
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
             
            
            }
        }
        showSmallAlertSuccess("Update")
        idParaEditar=undefined
    }


    form.reset()
    event.preventDefault()
    listWithInnerHtml(coders, tbody)
})

table.addEventListener("click",function(event){
    if(event.target.classList.contains("btn-danger")){
        const idParaEliminar = event.target.getAttribute("data")
    
        deleteItem(coders,idParaEliminar)
        listWithInnerHtml(coders,tbody)
        showSmallAlertSuccess("Coder deleted")
    }

    if(event.target.classList.contains("btn-primary")){
        idParaEditar = event.target.getAttribute("data")
        console.log(idParaEditar);
        //Vamos a buscar el usuario en la base de datos
        const userFound = coders.find(coder=>coder.id == idParaEditar)
        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email
     
    

        showSmallAlertSuccess("Coder edit")
    }
})


