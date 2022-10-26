export default class LoginRequest {
  static base_url = "https://habits-kenzie.herokuapp.com/api/userLogin";

  static async login(loginData) {
    console.log(JSON.stringify(loginData));
    await fetch(this.base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          console.log(res);
          window.alert(res.message);
          window.location.reload(true);
        } else {

          localStorage.setItem("@habits-kenzie:usr_name", JSON.stringify(res.response.usr_name));
          localStorage.setItem("@habits-kenzie:usr_email", JSON.stringify(res.response.usr_email));
          localStorage.setItem("@habits-kenzie:usr_image", JSON.stringify(res.response.usr_image));
          localStorage.setItem("@habits-kenzie:usr_token", JSON.stringify(res.token));
         
          window.location.href = "./src/views/homepage.views.html";
        }
      })
      .catch((err) => console.log(err));
  }
}
