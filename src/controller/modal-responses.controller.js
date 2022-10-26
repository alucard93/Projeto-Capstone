import CreateHabit from "./api-create-habit.controller.js"
import DeleteHabit from "./api-delete-habit.controller.js"
export default class VisualResponses {

    static head = document.querySelector('head')
    static main = document.querySelector('main')

    static failure () {
        const link = document.createElement('link')

        this.head.append(link)
        link.rel = 'stylesheet'
        link.href = '../css/modal-create-habit.css'
        link.type = 'text/css' 
        
        const modalBackground = document.createElement('div')
        const divModalFailure = document.createElement('div')
        const divModalFailureHeader = document.createElement('div')
        const divModalFailureContent = document.createElement('div')
        const modalTitle = document.createElement('h4')
        const modalText = document.createElement('p')

        this.main.append(modalBackground)
        modalBackground.append(divModalFailure)
        divModalFailure.append(divModalFailureHeader, divModalFailureContent)
        divModalFailureHeader.append(modalTitle)
        divModalFailureContent.append(modalText)

        modalTitle.innerText = "Não foi possível concluir sua requisição"
        modalText.innerText = "Preencha todos os campos corretamente"

        modalBackground.id = 'modalBackground'
        divModalFailure.id = 'modalContent__failure'
        divModalFailureHeader.id = 'modalHeader'

        setTimeout(() => {
            this.main.removeChild(modalBackground)
            this.head.removeChild(link)
        }, 2000)

    }

    static success (type) {
        const link = document.createElement('link')

        this.head.append(link)
        link.rel = 'stylesheet'
        link.href = '../css/modal-create-habit.css'
        link.type = 'text/css' 
        
        const modalBackground = document.createElement('div')
        const divModalSuccess = document.createElement('div')
        const divModalSuccessIcon = document.createElement('div')
        const divModalSuccessContent = document.createElement('div')
        const modalTitle = document.createElement('h4')
        const modalText = document.createElement('p')

        this.main.append(modalBackground)
        modalBackground.append(divModalSuccess)
        divModalSuccess.append(divModalSuccessIcon, divModalSuccessContent)
        divModalSuccessIcon.append(modalTitle)
        divModalSuccessContent.append(modalText)

        modalBackground.id = 'modalBackground'
        divModalSuccess.id = 'modalContent__success'
        divModalSuccessIcon.id = 'modalIcon'

        modalTitle.innerText = "Sucesso!"

        if(type === "create"){
            modalText.innerText = "Seu hábito foi criado"
        }
        if(type === "update"){
            modalText.innerText = "Seu hábito foi alterado"

        }
        if(type === "updateName"){
            modalText.innerText = "Seu nome foi alterado!"
        }

       
        if(type === "updateImg"){
            modalText.innerText = "Sua imagem foi alterado!"
        }
        
        if(type === "updateAll"){
            modalText.innerText = "Seu nome e sua Imagem foi alterado!"
        }
        
        if(type === "delete"){
            modalText.innerText = "Seu hábito foi deletado"
        }

    }
}