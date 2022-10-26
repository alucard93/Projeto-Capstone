import VisualResponses from "./modal-responses.controller.js"

export default class EditProfile {

  static baseURL = "https://habits-kenzie.herokuapp.com/api/user/profile"
  static token = localStorage.getItem("@habits-kenzie:usr_token")

  static async updateImage() {
    const getUrl = document.querySelector("#cImg")
    
    const data = {
      usr_image: getUrl.value
    }
    const updteImg = await fetch(this.baseURL, {
      
      method: "PATCH",
      headers:{
        
        "Content-Type" :  "application/json",
        
        "Authorization" :   `Bearer ${JSON.parse(this.token)}`
      },
      body: JSON.stringify(data)
    })
    .then(res =>  res.json() )
    .then(res =>{ 
        localStorage.setItem("@habits-kenzie:usr_image", JSON.stringify(data.usr_image))
      return res})
      .then(res => {
        VisualResponses.success("updateImg")
        setTimeout(() => {document.location.reload()}, 2000)
        return res
      })
      .catch(err => console.log(err))
      
      return updteImg
    }
    
    static async updateName(){
      
      const nameInput = document.querySelector("#cName")
      
      const dataName = {
        
        usr_name : nameInput.value
      }
      
      const nameUpdate = await fetch(this.baseURL, {
        method: "PATCH",
        headers:{
          
          "Content-Type" :  "application/json",
          
          "Authorization" :   `Bearer ${JSON.parse(this.token)}`
        },
        body: JSON.stringify(dataName)
      })
      .then(res => res.json())
      .then(res =>{
        
        localStorage.setItem("@habits-kenzie:usr_name", JSON.stringify(dataName.usr_name))
        // window.location.reload(true)
        return res
      })
      .then(res => {

        VisualResponses.success("updateName")
        
        setTimeout(() => {document.location.reload()}, 2000)

        
      

        return res
      })
      .catch(err => console.log(err))
      return nameUpdate
  }
  static async updateAll(){
    const nameInput = document.querySelector("#cName")
    const getUrl = document.querySelector("#cImg")

      
    const allData = {

      usr_image: getUrl.value,
      
      usr_name : nameInput.value
    }
    
    const allUpdate = await fetch(this.baseURL, {
      method: "PATCH",
      headers:{
        
        "Content-Type" :  "application/json",
        
        "Authorization" :   `Bearer ${JSON.parse(this.token)}`
      },
      body: JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(res =>{

        localStorage.setItem("@habits-kenzie:usr_image", JSON.stringify(allData.usr_image))
        localStorage.setItem("@habits-kenzie:usr_name", JSON.stringify(allData.usr_name))
        
      return res
    })
    .then(res => {
      VisualResponses.success("updateAll")
      setTimeout(() => {document.location.reload()}, 2000)
      return res
    })
    .catch(err => console.log(err))
     return allUpdate
  }

}
