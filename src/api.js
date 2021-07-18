export const getUsers = () => fetch("http://localhost:4000/").then(res => res.json())

export const createUser = (user) => fetch("http://localhost:4000/create", {
    method: "POST",
    headers: {
        "Accept": "application/json", 
        "Content-Type": "applicaton/json",
    },
    body: JSON.stringify(user)
})

export const updateUser = (user, id) => fetch(`http://localhost:4000/edit-profile/${id}`, {
  method: "PUT",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})  

export const getUserEditProfile = (id) => fetch(`http://localhost:4000/edit-profile/${id}`).then(res => res.json())

export const getUserProfile = (id) => fetch(`http://localhost:4000/profile/${id}`).then(res => res.json())


export const createPost = (user) => fetch("http://localhost:4000/createpost", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})


