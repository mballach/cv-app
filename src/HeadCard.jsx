import mitchellHeadhot from './assets/mitchell_headshot.png'
/*import linkedinLogo from './assets/linkedin-plain.svg'
import githubLogo from './assets/github-original.svg'
import emailIcon from './assets/email.svg'*/
import pencilIcon from './assets/pencil-svgrepo-com.svg'
import { useState } from 'react'

import './HeadCard.css'

function HeadCard() {
  const [editingContact, setEditingContact] = useState(false);
  const [contact, setContact] = useState({fname: "Mitchell", lname: "Ballachay", phone: "403-991-8543", email: "mitchell@ballachay.com"})

  const toggleEditContact = () => {
    console.log("Switching to "+(!editingContact))
    setEditingContact(!editingContact)
  }

  const handleFNameUpdates = (event) =>{
    setContact({...contact, fname: event.target.value})
  }

  function EditContactButton() {
    return(
        <button className="editContact" onClick={toggleEditContact}>{editingContact===true ? "Set Contact Details" : <img src={pencilIcon} alt="linkedin" width="20px" height="20px" /> }</button>
    )
  }

  function ContactInputs(value, onChange) {
    if (editingContact){
        return(
            <>
                <div className="contacts">First Name: <input type="text" id="fname" value={contact.fname} onChange={(event)=>{handleFNameUpdates(event)}} />
                Last Name: <input id="lname" value={contact.lname}/><br/>
                </div>
                <div className="contacts" >
                Phone: <input id="phone" value={contact.phone} />
                Email: <input id="email" value={contact.email} /><br/>
                </div>
            </>
        )
    }
  }

  function Contacts() {
    return(
    <>
        <h1 style={{paddingBottom:"0px", marginBottom:"10px"}} >{contact.fname} {contact.lname}</h1>
        <div className="contacts"><div className="contact">p: {contact.phone}</div><div className="contact">|</div><div className="contact">e: {contact.email}</div> </div>
        <div className="edit-inputs"></div>
        <ContactInputs />
        <EditContactButton />

    </>
    )
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

      <Contacts />
    </div>
    
  )
}

export default HeadCard