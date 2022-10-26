import EditProfile from "./api-edit-profile.controller.js"
import VisualResponses from "./modal-responses.controller.js"

export default class ModalEditProfile {
  static head = document.querySelector("head")
  static body = document.querySelector("body")
  static btnEdit = document.querySelector(".dropDown__editar")

   static render() {
    
        this.btnEdit.addEventListener("click", ()=>{
        const link            = document.createElement("link")
        link.rel  = "stylesheet"  
        link.href = "../css/modal-edit-profile.css"

        this.head.appendChild(link)
        
        const generalContainer = document.createElement("div")
        generalContainer.classList.add("container")
        const form            = document.createElement("form")
        form.classList.add("container__form")
        const divHeader       = document.createElement("div")
        divHeader.classList.add("container__header")
        const h1              = document.createElement("h1")
        h1.innerText=" Editar Perfil"
        const buttonClose     = document.createElement("button")
        buttonClose.id        = "btnClose"
        buttonClose.innerText = "X"
        const divContent      = document.createElement("div" )
        divContent.classList.add("container__content")
        const labelName       = document.createElement("label")
        labelName.for         = "cName"
        labelName.classList.add("container__content--legend")
        labelName.innerText   = "Nome"
        const inputName       = document.createElement("input")
        inputName.type        = "text"
        inputName.id          = "cName"
        inputName.placeholder = "Digite seu novo nome"
        inputName.value = `${JSON.parse(localStorage.getItem("@habits-kenzie:usr_name"))}`
        const labelImg        = document.createElement("label")
        labelImg.for          = "cImg"
        labelImg.classList.add("container__content--legend")
        labelImg.innerText    = "URL da imagem"
        const inputImg        = document.createElement("input")
        inputImg.type         = "url"
        inputImg.id           = "cImg"
        inputImg.placeholder  = "Caminho da sua imagem"
        const divButton       = document.createElement("div" )
        divButton.classList.add("container__button")
        const buttonSave      = document.createElement("button")
        buttonSave.id         = "btnsend"
        buttonSave.innerText  = "Salvar Alterações"
        buttonSave.type = "button"
        divButton.appendChild(buttonSave)
        divContent.append(labelName, inputName, labelImg, inputImg)
        divHeader.append(h1, buttonClose)
        form.append(divHeader,divContent,divButton)
        generalContainer.appendChild(form)
        this.body.appendChild(generalContainer)

        buttonClose.addEventListener("click", ()=>{
          this.body.removeChild(generalContainer)
        })
        buttonSave.addEventListener("click", ()=>{
          
          if(!inputName.value && !inputImg.value){

            this.body.removeChild(generalContainer)
            VisualResponses.failure()
            setTimeout(() => {document.location.reload()}, 2000)

          }else if(inputName.value && inputImg.value){ 
            
            localStorage.removeItem("@habits-kenzie:usr_image")
            localStorage.removeItem("@habits-kenzie:usr_name")
            EditProfile.updateAll()
            this.body.removeChild(generalContainer)

          }else if(inputImg.value){
              localStorage.removeItem("@habits-kenzie:usr_image")
              EditProfile.updateImage()
              this.body.removeChild(generalContainer)

          }else{
            localStorage.removeItem("@habits-kenzie:usr_name")
            EditProfile.updateName()
            this.body.removeChild(generalContainer)
          }
  

            // window.location.reload(true)
        })
    })

  }
}
