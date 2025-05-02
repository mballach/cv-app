import { useState } from 'react'
import pencilIcon from '../assets/pencil-svgrepo-com.svg'

import '../styles/Education.css'

function Education(){
    const [addingEducation, setAddingEducation] = useState(false);
    const [educationHistory, setEducationHistory] = useState([])

    const toggleAddingEducation = () => {
        setAddingEducation(!addingEducation)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.currentTarget.elements.edSchool.value=="" || e.currentTarget.elements.edDegree.value=="" || e.currentTarget.elements.edYear.value==""){
            alert("Please fill all fields to add education entry")
        } else {
            let newAdd = {school:e.currentTarget.elements.edSchool.value, degree:e.currentTarget.elements.edDegree.value, year:e.currentTarget.elements.edYear.value, id: crypto.randomUUID()}
            setEducationHistory([...educationHistory,newAdd])
            educationHistory.push(newAdd)
            toggleAddingEducation()
        }
    }

    function EdDelete(id) {
        const reducedList = educationHistory.filter((ed)=>ed.id !== id)
        setEducationHistory([...reducedList])
    }

    function EdEntry({ed}) {
        const [editingEd, setEditingEd] = useState(false);

        const toggleAddingToEdit = () => {
            setEditingEd(!editingEd)
        }

        const handleEdit = (e,id) => {
            e.preventDefault()
            let activeEd = educationHistory.find((ed)=>ed.id==id)
            const reducedList = educationHistory.filter((ed)=>ed.id !== id)
            if(e.currentTarget.elements.edSchool.value=="") {
                e.currentTarget.elements.edSchool.value=activeEd.school
            }
            if(e.currentTarget.elements.edDegree.value=="") {
                e.currentTarget.elements.edDegree.value=activeEd.degree
            }
            if(e.currentTarget.elements.edYear.value=="") {
                e.currentTarget.elements.edYear.value=activeEd.year
            }
            let newAdd = {school:e.currentTarget.elements.edSchool.value, degree:e.currentTarget.elements.edDegree.value, year:e.currentTarget.elements.edYear.value, id: activeEd.id}
            setEducationHistory([...reducedList,newAdd])
            educationHistory.push(newAdd)
        }

        if(editingEd){
            return (
                <>
                    <div>
                    <div className="education-card-active" style={{marginBottom:"0px"}}key={ed.id}>
                        <div className="creds">
                            <div className="deg">{ed.degree}</div>
                            <div className="sch">{ed.school}, {ed.year}</div>
                        </div>
                        <div className="edButtons">
                            <button className="edDelete" onClick={() => {toggleAddingToEdit()}}><img src={pencilIcon} alt="edit icon" width="15px" height="15px" /></button>
                            <button className="edDelete" onClick={() => {EdDelete(ed.id)}}>  X  </button>
                        </div>
                    </div>
                    <form className="editSub" onSubmit = {(e) => handleEdit(e,ed.id)}>
                        <div className="edLabelPairWrapper"><label htmlFor="edDegree">Degree Achieved: </label><input type="text" id="edDegree"placeholder={ed.degree}/></div>
                        <div className="edLabelPairWrapper"><label htmlFor="edSchool" >School: </label><input type="text" id="edSchool"placeholder={ed.school}/></div>
                        <div className="edLabelPairWrapper"><label htmlFor="edYear">Year Completed: </label><input type="text" id="edYear" placeholder={ed.year}/></div>
                        <button type="submit">+ Submit Edit</button>
                        <button onClick={toggleAddingToEdit}>Cancel</button>
                    </form>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="education-card" key={ed.id}>
                        <div className="creds">
                            <div className="deg">{ed.degree}</div>
                            <div className="sch">{ed.school}, {ed.year}</div>
                        </div>
                        <div className="edButtons">
                            <button className="edDelete" onClick={() => {toggleAddingToEdit()}}><img src={pencilIcon} alt="edit icon" width="15px" height="15px" /></button>
                            <button className="edDelete" onClick={() => {EdDelete(ed.id)}}>  X  </button>
                        </div>
                    </div>
                </>
            )
        }
        
    }

    function EducationHistory() {
        if(educationHistory.length==0){
            return (
                <div>
                    <p style={{color:'grey'}}>No education added</p>
                </div>
            )
        } else {
            return(
                <>
                    {educationHistory.map((ed) => (
                        <EdEntry ed={ed}  key={ed.id}/>
                    ))}
                </>
            )
        }
    }

    function AddEducationButton() {
        if(addingEducation==false){
            return(
                <button onClick={toggleAddingEducation}>+</button>
            )
        }
    }

    function EducationInputs(){
        if(addingEducation==true){
            return(
                <form onSubmit = {handleSubmit}>
                    <div className="edLabelPairWrapper"><label htmlFor="edDegree">Degree/Certificate Achieved: </label><input type="text" id="edDegree"placeholder="Bachelor's of Education..."/></div>
                    <div className="edLabelPairWrapper"><label htmlFor="edSchool" >School: </label><input type="text" id="edSchool"placeholder="University of ..."/></div>
                    <div className="edLabelPairWrapper"><label htmlFor="edYear">Year Completed: </label><input type="text" id="edYear" placeholder="2018"/></div>
                    <button type="submit">+ Log Education History</button>
                    <button onClick={toggleAddingEducation}>Cancel</button>
                </form>
            )
        }
    }
    
    return (
        <>
        <h2 style={{textAlign:"center"}}>Educational Background</h2>
        <div className="education-container">
            <EducationHistory />
            <EducationInputs />
            <AddEducationButton />
        </div>
        </>
        
    )

}

export default Education