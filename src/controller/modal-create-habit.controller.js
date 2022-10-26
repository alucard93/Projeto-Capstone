import CreateHabit from "./api-create-habit.controller.js"

export default class ModalCreateHabit {
  static filterButtonNew = document.querySelector('.main__filterButtonNew')
  static head = document.querySelector('head')
  static main = document.querySelector('main')

  static render() {
  
  this.filterButtonNew.addEventListener('click', () => {
    
    const link = document.createElement('link')

    this.head.append(link)
    link.rel = 'stylesheet'
    link.href = '../css/modal-create-habit.css'
    link.type = 'text/css' 

    const modalBackground = document.createElement('div')
    const divModalCreateHabit = document.createElement('div')
    const divModalCreateHabitHeader = document.createElement('div')
    const modalTitle = document.createElement('h4')
    const closeButton = document.createElement('button')
    const formCreateHabit = document.createElement('form')
    const titleLabel = document.createElement('label')
    const titleInput = document.createElement('input')
    const descriptionLabel = document.createElement('label')
    const descriptionInput = document.createElement('input')
    const categoryLabel = document.createElement('label')
    const categorySelect = document.createElement('select')
    const categoryOption = document.createElement('option')
    const categoryOptionLazer = document.createElement('option')
    const categoryOptionTrabalho = document.createElement('option')
    const categoryOptionSaude = document.createElement('option')
    const categoryOptionEstudos = document.createElement('option')
    const categoryOptionCasa = document.createElement('option')
    const insertButton = document.createElement('button')

    this.main.append(modalBackground)
    modalBackground.append(divModalCreateHabit)
    divModalCreateHabit.append(divModalCreateHabitHeader)
    divModalCreateHabitHeader.append(modalTitle)
    divModalCreateHabitHeader.append(closeButton)
    divModalCreateHabit.append(formCreateHabit)
    formCreateHabit.append(titleLabel)
    formCreateHabit.append(titleInput)
    formCreateHabit.append(descriptionLabel)
    formCreateHabit.append(descriptionInput)
    formCreateHabit.append(categoryLabel)
    formCreateHabit.append(categorySelect)
    categorySelect.append(categoryOption)
    categorySelect.append(categoryOptionLazer)
    categorySelect.append(categoryOptionTrabalho)
    categorySelect.append(categoryOptionSaude)
    categorySelect.append(categoryOptionEstudos)
    categorySelect.append(categoryOptionCasa)
    formCreateHabit.append(insertButton)

    modalTitle.innerText = 'Criar hábito'
    closeButton.innerText = 'X'
    titleLabel.innerText = 'Título'
    descriptionLabel.innerText = 'Descrição'
    categoryLabel.innerText = 'Categoria'
    insertButton.innerText = 'Inserir'
    categoryOption.innerText = 'Selecionar categoria'
    categoryOptionLazer.innerText = 'Lazer'
    categoryOptionTrabalho.innerText = 'Trabalho'
    categoryOptionSaude.innerText = 'Saude'
    categoryOptionCasa.innerText = 'Casa'
    categoryOptionEstudos.innerText = 'Estudos'

    titleInput.placeholder = 'Digitar título'
    descriptionInput.placeholder = 'Digitar descrição'

    titleInput.type = 'text'
    descriptionInput.type = 'text'
    insertButton.type = 'button'

    modalBackground.id = 'modalBackground'
    divModalCreateHabit.id = 'modalContent'
    divModalCreateHabitHeader.id = 'modalHeader'
    formCreateHabit.id = 'modalFormCreateHabit'

    modalTitle.classList.add('modalContent__modalHeader--modalTitle')
    closeButton.classList.add('modalContent__modalHeader--closeButton')
    titleLabel.classList.add('modalContent__modalHeader--modalLabel')
    descriptionLabel.classList.add('modalContent__modalFormCreateHabit--modalLabel')
    categoryLabel.classList.add('modalContent__modalFormCreateHabit--modalLabel')
    titleInput.classList.add('modalContent__modalFormCreateHabit--modalInput')
    descriptionInput.classList.add('modalContent__modalFormCreateHabit--modalInput')
    categorySelect.classList.add('modalContent__modalFormCreateHabit--modalInput')
    categoryOption.classList.add('modalContent__modalFormCreateHabit--option')
    insertButton.classList.add('modalContent__modalFormCreateHabit--insertButton')

    insertButton.addEventListener('click', () => {

      CreateHabit.create(titleInput.value, descriptionInput.value, categorySelect.value)
    })

    closeButton.addEventListener('click', () => this.main.removeChild(modalBackground))
    })
  }
}
