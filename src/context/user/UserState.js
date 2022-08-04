import React, { useState } from 'react'
import UserContext from "./userContext";

const UserState = (props) => {

  const userInitial = []
  const [users, setUser] = useState(userInitial)

  const getUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify()
    });

    const json = await response.json();
    // console.log(json)
    setUser(json);
  }


  const addUser = async (mydata) => {
    console.log(mydata)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify({
        name: mydata.name,
        username: mydata.username,
        email:mydata.email,
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone:mydata.phone,
        website:mydata.website,
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const json = await response.json();

    const user = json;
    console.log(json)
    setUser(users.concat(user))
  }

  const deleteUser = async (id) => {
    // console.log(id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'

      }
    });
    const json = await response.json();
    const newUser = users.filter((user) => { return user.id !== id })
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ users, getUser, addUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState