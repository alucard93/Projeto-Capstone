
export default class UpdateHabit {
  static base_url = 'https://habits-kenzie.herokuapp.com/api/habits/:habit_id'
  static token = JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"));
  static async update(title, description,) {
    return await fetch(this.base_url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer${this.token}`
    }
    })
  }
}
