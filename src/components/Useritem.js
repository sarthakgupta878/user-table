import React, { useContext } from 'react'
import userContext from '../context/user/userContext';

const Useritem = (props) => {
  let { name, username, email, phone, website } = props;
  const context = useContext(userContext);
  const { deleteUser } = context;
  let emails = "mailto:" + email;
  let phones = "tel:" + phone;
  let urls = "//" + website;
 
  const handleDelete = (e) => {
    deleteUser(props.user); 
    props.showAlert("User Deleted successfully", "success");
  }


  const popupDelete = (e) => {
    var result = window.confirm("Are you sure to delete the user?");
    if(result){
        handleDelete();
    }
  }


  return (
        
      <tr>
        <th scope="row">{name}</th>
        <td>{username}</td>
        <td><a href={emails}>{email}</a></td>
        <td><a href={phones}>{phone}</a></td>
        <td><a href={urls} rel="noreferrer" target="_blank">{website}</a></td>
        <td>
          <button className="btn btn-primary" onClick={() => { popupDelete(); }}>Delete</button>
        </td>
      </tr>
    
  )
}
// deleteUser(props.user);
export default Useritem