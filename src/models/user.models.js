import GetAllRequest from "../controller/api-get-all.controller.js";
import Filter from "../controller/filter-homepage.controller.js";

export default class User {
  static async finished() {
    // retorna os hábitogis da API filtrando somente os hábitos concluídos
  }

  static async allPages() {
    const habit = []
    const allButton = document.querySelector('.main__filterButtonAll')
    const finishButton = document.querySelector('.main__filterButtonFinish')

    allButton.addEventListener('click', async () => {
      const all = await Filter.clickFilterAll()
      habit.push(all)
    })
    finishButton.addEventListener('click', async () => {
      const complete = await Filter.clickFilterFinished()
      habit.push(complete)
    })
    console.log(habit)
    return habit
  }
}
