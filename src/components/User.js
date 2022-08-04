import React, { useState, useEffect, useRef, useContext } from 'react'
import Useritem from './Useritem';
import userContext from '../context/user/userContext';
// console.log("hi")



const User = (props) => {
  const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "" });
  const context = useContext(userContext);
  const { users, getUser, addUser } = context;
  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, [])

  const createUser = (e) => {
    e.preventDefault();
    ref.current.click()
    // props.showAlert("Updated Successfully","success")

  }

  const handleClick = (e) => {
    // console.log("updating")
    // console.log(user.name);

    addUser(user);
    refClose.current.click();

    props.showAlert("User is added successfully", "success")

  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    // console.log(note)
  }
  const validateEmail = (email) => {

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };




  return (

    <>

      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" value={user.name} id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" value={user.username} name='username' onChange={onChange} id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' value={user.email} onChange={onChange} id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone No.</label>
                  <input type="number" className="form-control" name='phone' value={user.phone} onChange={onChange} id="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="website" className="form-label">Website</label>
                  <input type="text" className="form-control" name='website' value={user.website} onChange={onChange} id="website" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={user.name.length < 3 || user.username.length < 5 || (user.website.length < 5 && user.website.includes("www.")) || user.phone.length !== 10 || !(validateEmail(user.email)) } onClick={handleClick} className="btn btn-primary">Create User</button>
            </div>
          </div>
        </div>
      </div>


      <h1 style={{ margin: "15px" }} className="text-center">User Table </h1>
      <div className="container">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Website</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((element) => {
                return <Useritem user={element.id} key={element.id} name={element.name} username={element.username} email={element.email} phone={element.phone} website={element.website} showAlert={props.showAlert} />
              })
            }
          </tbody>


        </table>
        <button type="submit" className="btn btn-primary" onClick={createUser}>Create User</button>
      </div>
    </>


  )
}

export default User