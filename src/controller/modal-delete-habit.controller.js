import DeleteHabit from "./api-delete-habit.controller.js"
import VisualResponses from "./modal-responses.controller.js"

export default class ModalDeleteHabit {
  static body = document.querySelector("body")
  static head = document.querySelector("head")
  
  static render(id) {
    
      const link    = document.createElement("link")
      link.rel ="stylesheet"
      link.href = "../css/modal-delete-habit.css"
      this.head.appendChild(link)

      const containerMain    = document.createElement("div")
      containerMain.classList.add("container")
      
      const containerBox     = document.createElement("div")
      containerBox.classList.add("container__box")
      const containerHeader        = document.createElement("div")
      containerHeader.classList.add("container__header")
      
      const titleHeader            = document.createElement("h2")
      titleHeader.innerText        = "Excluir hábito"
      
      const btnCloseDel            = document.createElement("button")
      btnCloseDel.id               = "btnCloseDelete"
      btnCloseDel.innerText        = "X"

      const containerContent       = document.createElement("div")
      containerContent.classList.add("container__content")

      const titleContent           = document.createElement("h2")
      titleContent.innerText       = "Certeza que deseja excluir esse habito?"
      
      const paragraphContent       = document.createElement("p")
      paragraphContent.innerText   = "Após executar essa ação não será possível desfazer"
      
      const containerButtons       = document.createElement("div")
      containerButtons.classList.add("container__buttons")
      
      const btnCancel              = document.createElement("button")
      btnCancel.id                 = "cancel"
      btnCancel.innerText          = "Cancelar"
      
      const btnConfirm             = document.createElement("button")
      btnConfirm.id                = "confirm"
      btnConfirm.innerText         = "Sim, excluir esse hábito"
      
      
      containerButtons.append(btnCancel, btnConfirm)
      containerContent.append(titleContent, paragraphContent)
      containerHeader.append(titleHeader, btnCloseDel)
      containerBox.append(containerHeader, containerContent, containerButtons)
      containerMain.append(containerBox)
      this.body.append(containerMain)


    btnCloseDel.addEventListener("click", ()=>{
        this.body.removeChild(containerMain)

      })

      btnCancel.addEventListener("click", ()=>{
        this.body.removeChild(containerMain)
      })
      
      btnConfirm.addEventListener("click", ()=>{
           DeleteHabit.delete(id)
           this.body.removeChild(containerMain)


          
      } )

    }
   }