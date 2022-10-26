import VisualResponses from "./modal-responses.controller.js"

export default class CreateHabit {
  static async create(title, description, category) {
    const data = {
      "habit_title": `${title}`,
      "habit_description": `${description}`,
      "habit_category": `${category}`
    }

    await fetch (
        "https://habits-kenzie.herokuapp.com/api/habits",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"))}`
            },
            body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.message === "habit_title obrigatório" || res.message === "habit_description obrigatório" || res.message === "categorias aceitas: saude, estudos, casa, trabalho e lazer"){
        VisualResponses.failure()
      } 
      else{
        VisualResponses.success("create")
        setTimeout(() => {document.location.reload()}, 2000)
      }
    })
    .catch(res => console.log(res))
  }
}
