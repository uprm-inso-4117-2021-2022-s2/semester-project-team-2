const url = "http://localhost:3000/api/auth";

interface userAuthInfo {
    email: string,
    password: string
}

export const login = async (userData: userAuthInfo) => {
    let errorMessage;
    await fetch(url + "/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.reason) {
          errorMessage = res.reason;
        } else {
            console.log("hm?");
          // Were we would get access token if we were to implement this
        }
      })
      .catch((err) => {
        console.log("Something went Wrong", err);
      });
  
    return errorMessage;
  };
  
  export const signup = async (userData: userAuthInfo) => {
    let errorMessage;
    await fetch(url + "/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.reason) {
          errorMessage = res.reason;
        }
      })
      .catch((err) => {
        console.log("Something went Wrong", err);
      });
    return errorMessage;
  };
  
  export const logout = () => {
    let errorMessage;
    if (localStorage.jwtToken) {
      window.location.href = "./auth";
    } else {
      errorMessage = "Could not logout user, something wrong happened."
    }
    return errorMessage;
  }