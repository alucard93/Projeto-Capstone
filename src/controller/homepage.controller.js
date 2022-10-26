import GetAllRequest from "./api-get-all.controller.js";

import UpdateHabit from "./api-uptade-habit.controller.js";
import ModalEditProfile from "./modal-edit-profile.controller.js";
import EditHabit from "./api-edit-habit.controller.js";
import LoginRequest from "./login.controller.js";
import ModalCreateHabit from "./modal-create-habit.controller.js";

import DeleteHabit from "./api-delete-habit.controller.js";

import ModalEditHabit from "./modal-edit-habit.controller.js"





export default class ComponentsDom {
  static body = document.querySelector("body");


  static base_url = 'https://habits-kenzie.herokuapp.com/api/habits'
  static token = localStorage.getItem('@habits-kenzie:usr_token')

  static async header1() {
    const headerUserInfo = document.querySelector('.header__userInfo')
    const figure = document.createElement('figure')
    const headerImg = document.createElement('img')

    const img = localStorage.getItem('@habits-kenzie:usr_image')

    headerImg.className = 'header__avatarUser'
    headerImg.alt = 'Avatar User'
    headerImg.src = JSON.parse(img)
    figure.appendChild(headerImg)
    headerUserInfo.appendChild(figure)
  }

  static userInfo() {
    // renderiza o header2 e mostra a imagem que está arquivada no localStorage
    // a imagem deve term um "escutador" para que, ao ser clicada, possa abrir o modal "menu do usuário"
    const sectionUserInfo = document.querySelector('.userinfo')
    const figure = document.querySelector('.userinfo__figure')
    const imgUserInfo = document.createElement('img')
    const userName = document.createElement('h2')
    const dropDown = document.querySelector('.dropDown')
    const logoutButton = document.querySelector('.dropDown__Logout')
    const editButton = document.querySelector('.dropDown__editar')
    const bodyEP = document.querySelector('.container')

    editButton.addEventListener('click', async () => {
      bodyEP.innerHTML = ''
      await ModalEditProfile.render()
    })

    logoutButton.addEventListener('click', () => {
      localStorage.clear()
      window.location.href = '../../index.html'
    })

    imgUserInfo.className = 'userinfo__Avatar'
    userName.className = 'userinfo__userName'
    // imgUserInfo.alt = 'Avatar User'
    // const nome = localStorage.getItem('@habits-kenzie:usr_name')
    const img = localStorage.getItem('@habits-kenzie:usr_image')

    userName.innerText = `${JSON.parse(localStorage.getItem('@habits-kenzie:usr_name'))}`
    imgUserInfo.src = `${JSON.parse(img)}`

    imgUserInfo.addEventListener('click', (event) => {
      if(dropDown.style.display === 'none'){
        dropDown.style.display = 'flex'
      } else{
        dropDown.style.display = 'none'
      }
    })

    figure.appendChild(imgUserInfo)
    sectionUserInfo.append(figure, userName)
  }


  static async main(el) {
    // busca os dados na API chamando GetAllRequest.getAll
    // renderiza os dados no corpo da página de acordo com o Figma
    // botão Criar deve ter escutador para abrir o Modal "Criar Hábito"
    // botão Concluídos deve fitrar apenas os hábitos concluídos - chama classe User
    // botão Todos deve renderizar todos os hábitos
    // OBS: no Mobilie as colunas Descrição e Categoria devem estar com display: none
    // botão Carregar Mais deve renderizar os hábitos de todas as páginas da API
    // botão ... deve ter escutador para abrir o Modal "Editar Hábito"
    // checkbox deve alterar o hábito para concluído. Deve ter um escutador para chamar a classe UpdateHabit.update()
    let habits = []
    const ha = await GetAllRequest.getAll()
    habits.push(...ha)
    const cardHabits = document.querySelector('.main__data')
    const buttonMoreUpdate = document.querySelector('.button__loadMore')
    const buttonFinish = document.querySelector('.main__filterButtonFinish')
    buttonFinish.addEventListener('click', () => {
    const hab =  habits.filter(element => element.habit_status === true)
    habits = []
      habits.push(...hab)
    })

    
    const divLoadMore = document.querySelector('.div__loadMore')
    let counter = 7

    el.forEach((element, index) => {
      if(index <= 7){
      const card = document.createElement('li')
      const check = document.createElement('div')
      const title = document.createElement('p')
      const description = document.createElement('p')
      const category = document.createElement('p')
      const edit = document.createElement('img')
      const status = element.habit_status
      const id = element.habit_id
      check.id = element.habit_id

      check.addEventListener('click', (event) => {
        EditHabit.check(check.id)
      })

      if(status === true){
        card.className = 'main__datali'
        check.className = 'main__dataliCheck'
      } else if(status === false) {
        check.className = 'main__dataCheck'
      }
      title.className = 'main__dataTitle'
      description.className = 'main__dataDescription'
      category.className = 'main__dataCategory'
      edit.className = 'main__dataEdit'

      title.innerText = `${element.habit_title}`
      description.innerText = `${element.habit_description}`
      category.innerText = `${element.habit_category}`
      edit.src = "../assets/img/Group 39.png"
      const modalEdit = document.querySelector('#modalContent')
      edit.id = element.habit_id

      edit.addEventListener('click', () => {
        ModalEditHabit.render(edit.id)
      })

      card.append(check, title, description, category, edit)
      cardHabits.appendChild(card)
    }
    });








    buttonMoreUpdate.addEventListener('click', (event) =>{
      while(cardHabits.firstChild){
        cardHabits.removeChild(cardHabits.firstChild)
      }

  

    cardHabits.innerHTML = "";  

    el.forEach((element, index) => {
      const card = document.createElement('li')
      const check = document.createElement('div')
      const title = document.createElement('p')
      const description = document.createElement('p')
      const category = document.createElement('p')
      const edit = document.createElement('img')
      const status = element.habit_status
      const id = element.habit_id
      check.id = element.habit_id



      if(status === true){
        card.className = 'main__datali'
        check.className = 'main__dataliCheck'
      } else if(status === false) {
        check.className = 'main__dataCheck'
      }
      title.className = 'main__dataTitle'
      description.className = 'main__dataDescription'
      category.className = 'main__dataCategory'
      edit.className = 'main__dataEdit'

      check.addEventListener('click', async(event) => {
        await EditHabit.check(check.id)
     })
      title.innerText = `${element.habit_title}`
      description.innerText = `${element.habit_description}`
      category.innerText = `${element.habit_category}`
      edit.src = "../assets/img/Group 39.png"

      edit.id = element.habit_id

      edit.addEventListener('click', () => {
        console
        ModalEditHabit.render(edit.id)
      })


      card.append(check, title, description, category, edit)
      cardHabits.appendChild(card)
      
    });

    buttonMoreUpdate.style.display = 'none'
    })


  }

  static async filters(){
    let ha = await GetAllRequest.getAll()
    const habit = ha.filter((habit) => {
    return habit.habit_status === true;
  });

const btnAll = document.querySelector(".main__filterButtonAll")
const btnFinish = document.querySelector('.main__filterButtonFinish');
const card = document.querySelectorAll('li')
const cardHabits = document.querySelector('.main__data')
const buttonMoreUpdate = document.querySelector('.button__loadMore')
ComponentsDom.main(ha);
btnAll.addEventListener('click', (event) => {   
    cardHabits.innerHTML = ''
    ComponentsDom.main(ha);
    buttonMoreUpdate.style.display = 'flex'
})

btnFinish.addEventListener('click', (event) => {
    cardHabits.innerHTML = ''
    ComponentsDom.main(habit);
    buttonMoreUpdate.style.display = 'flex'
})


  }

}

