import mitchellHeadhot from '../assets/mitchell_headshot.png'
/*import linkedinLogo from './assets/linkedin-plain.svg'
import githubLogo from './assets/github-original.svg'
import emailIcon from './assets/email.svg'*/
import pencilIcon from '../assets/pencil-svgrepo-com.svg'
import { useState } from 'react'

import '../styles/HeadCard.css'

function HeadCard() {
  const [editingContact, setEditingContact] = useState(false);
  const [contact, setContact] = useState({fname: "Mitchell", lname: "Ballachay", phone: "403-991-8543", email: "mitchell@ballachay.com"})

  const toggleEditContact = () => {
    console.log("Switching to "+(!editingContact))
    setEditingContact(!editingContact)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (e.currentTarget.elements.fname.value ==""){
      e.currentTarget.elements.fname.value = contact.fname;
    } 
    if (e.currentTarget.elements.lname.value ==""){
      e.currentTarget.elements.lname.value = contact.lname;
    }
    if (e.currentTarget.elements.phone.value ==""){
      e.currentTarget.elements.phone.value = contact.phone;
    }
    if (e.currentTarget.elements.email.value ==""){
      e.currentTarget.elements.email.value = contact.email;
    }
    setContact({fname:e.currentTarget.elements.fname.value, lname:e.currentTarget.elements.lname.value, phone:e.currentTarget.elements.phone.value, email:e.currentTarget.elements.email.value})
    toggleEditContact()
    
  }

  function EditContactButton() {
    if(!editingContact){
      return(
        <button className="editContact" onClick={toggleEditContact}>{editingContact===true ? "Set Contact Details" : <img src={pencilIcon} alt="edit icon" width="20px" height="20px" /> }</button>
      )
    }
  }


  function ContactInputs() {
    if (editingContact){
        return(
            <>
                <form onSubmit={handleSubmit}>
                  <div className="contacts"><label htmlFor="fname">First Name: </label><input placeholder={contact.fname}  type="text" id="fname"></input>
                  Last Name: <input id="lname" placeholder={contact.lname}/><br/>
                  </div>
                  <div className="contacts" >
                  Phone: <input id="phone" placeholder={contact.phone} />
                  Email: <input id="email" placeholder={contact.email} /><br/>
                  </div>
                  <button className="editContact" type='submit'>Set Contact Details</button>
                </form>
            </>
        )
    }
  }

  return (
    <div className="headCard">
      <div>
        <a href="https://www.linkedin.com/in/mballachay" target="_blank">
          <img src={mitchellHeadhot} className="headshot" alt="mitchell ballachay headshot"  />
        </a>
        
      </div>
      
      {/*<div className="iconWrapper">
        <a href="https://www.linkedin.com/in/mballachay" target="_blank">
          <img src={linkedinLogo} alt="linkedin" width="25px" height="25px" />
        </a>
        <a href="https://github.com/mballach?tab=repositories" target="_blank" >
          <img src={githubLogo} alt="linkedin" width="25px" height="25px" />
        </a>
        <a href="mailto:mitchell@ballachay.com">
          <img src={emailIcon} alt="linkedin" width="25px" height="25px" />
        </a>  
      </div>*/}

      <h1 style={{paddingBottom:"0px", marginBottom:"10px"}} >{contact.fname} {contact.lname}</h1>
      <div className="contacts"><div className="contact">p: {contact.phone}</div><div className="contact">|</div><div className="contact">e: {contact.email}</div> </div>
      <div className="edit-inputs"></div>
      <ContactInputs />
      <EditContactButton />
    </div>
    
  )
}

export default HeadCard