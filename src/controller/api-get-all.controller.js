import ModalEditHabit from "./modal-edit-habit.controller.js"

export default class GetAllRequest {

  static baseUrl = "https://habits-kenzie.herokuapp.com/api/habits";
  static token = JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"));
  
  static async getAll() {
    const response = await fetch(this.baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return response;
  }

  static async getByID(idHabit) {
    const response = await fetch(this.baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
    .then(res => res.json())
    .then((res) => {
      const habitSelected = res.find(element => element.habit_id == idHabit);
      return habitSelected
    })
    
    .catch(err => console.log(err))

    return response;

  }
}