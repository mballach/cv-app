import { useState } from 'react'
import pencilIcon from '../assets/pencil-svgrepo-com.svg'

import '../styles/Work.css'

function Work(){
    const [addingWork, setAddingWork] = useState(false);
    const [workHistory, setWorkHistory] = useState([])

    const toggleAddingWork = () => {
        setAddingWork(!addingWork)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.currentTarget.elements.wkTitle.value=="" || e.currentTarget.elements.wkCompany.value=="" || e.currentTarget.elements.wkStartYear.value=="" || e.currentTarget.elements.wkEndYear.value=="" || e.currentTarget.elements.wkDesc.value==""){
            alert("Please fill all fields to add new work experience")
        } else {
            let newAdd = {title:e.currentTarget.elements.wkTitle.value, company:e.currentTarget.elements.wkCompany.value, startYear:e.currentTarget.elements.wkStartYear.value,endYear:e.currentTarget.elements.wkEndYear.value,desc:e.currentTarget.elements.wkDesc.value, id: crypto.randomUUID()}
            setWorkHistory([...workHistory,newAdd])
            workHistory.push(newAdd)
            console.log(workHistory)
            toggleAddingWork()
        }
    }

    function WorkDelete(id) {
        const reducedList = workHistory.filter((ed)=>ed.id !== id)
        setWorkHistory([...reducedList])
    }

    function WkEntry({wk}) {
        const [editingWork, setEditingWork] = useState(false);

        const toggleAddingToEdit = () => {
            setEditingWork(!editingWork)
        }

        const handleEdit = (e,id) => {
            e.preventDefault()
            let activeWk = workHistory.find((wk)=>wk.id==id)
            const reducedList = workHistory.filter((wk)=>wk.id !== id)
            if(e.currentTarget.elements.wkTitle.value=="") {
                e.currentTarget.elements.wkTitle.value=activeWk.title
            }
            if(e.currentTarget.elements.wkCompany.value=="") {
                e.currentTarget.elements.wkCompany.value=activeWk.company
            }
            if(e.currentTarget.elements.wkStartYear.value=="") {
                e.currentTarget.elements.wkStartYear.value=activeWk.startYear
            }
            if(e.currentTarget.elements.wkEndYear.value=="") {
                e.currentTarget.elements.wkEndYear.value=activeWk.endYear
            }
            if(e.currentTarget.elements.wkDesc.value=="") {
                e.currentTarget.elements.wkDesc.value=activeWk.desc
            }
            let newAdd = {title:e.currentTarget.elements.wkTitle.value, company:e.currentTarget.elements.wkCompany.value, startYear:e.currentTarget.elements.wkStartYear.value, endYear:e.currentTarget.elements.wkEndYear.value, desc:e.currentTarget.elements.wkDesc.value,  id: activeWk.id}
            setWorkHistory([...reducedList,newAdd])
            workHistory.push(newAdd)
        }

        if(editingWork){
            return (
                <div className="work-card" key={wk.id}>
                    <div className="work-card-header">
                        <div className="job-title"> 
                            {wk.title} - {wk.company}
                        </div>
                        <div className="job-years">
                            {wk.startYear}-{wk.endYear}
                        </div>
                        
                    </div>
                    <div className="work-card-base">
                        <div className="work-card-base-top">
                            <div className="description">
                                Description:
                            </div>
                            <div className="wkButtons">
                                <button className="edDelete" onClick={() => {toggleAddingToEdit()}}><img src={pencilIcon} alt="edit icon" width="15px" height="15px" /></button>
                                <button className="edDelete" onClick={() => {WorkDelete(wk.id)}}>  X  </button>
                            </div>
                        </div>
                            <div style={{textAlign:"left"}}>{wk.desc}</div>
                            <br/>
                            <div className="description">Edit Work Experience:</div>
                            <form onSubmit = {handleEdit}>
                                <div className="labelRowWrapper">
                                    <div className="edLabelPairWrapper">
                                        <label htmlFor="wkTitle">Role Title: </label>
                                        <input type="text" id="wkTitle"placeholder={wk.title}/>
                                    </div>
                                    <div className="edLabelPairWrapper">
                                        <label htmlFor="wkCompany" >Company: </label>
                                        <input type="text" id="wkCompany"placeholder={wk.company}/>
                                    </div>
                                </div> 
                                
                                <div className="labelRowWrapper">
                                    <div className="edLabelPairWrapper">
                                        <label htmlFor="wkStartYear">Start Year: </label>
                                        <input type="text" id="wkStartYear" placeholder={wk.startYear}/>
                                    </div>
                                    <div className="edLabelPairWrapper">
                                        <label htmlFor="wkEndYear">End Year: </label>
                                        <input type="text" id="wkEndYear" placeholder={wk.endYear}/>
                                    </div>
                                </div>
                                <div className='workTextInput'>
                                    <label htmlFor="wkDesc" style={{textAlign:"left"}}>Description of Role:</label>
                                    <textarea name="wkDesc" id="wkDesc" placeholder={wk.desc}></textarea>
                                </div>
                                <button type="submit">+ Submit Edit</button>
                                <button onClick={toggleAddingToEdit}>Cancel</button>
                            </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="work-card" key={wk.id}>
                    <div className="work-card-header">
                        <div className="job-title"> 
                            {wk.title} - {wk.company}
                        </div>
                        <div className="job-years">
                            {wk.startYear}-{wk.endYear}
                        </div>
                        
                    </div>
                    <div className="work-card-base">
                        <div className="work-card-base-top">
                            <div className="description">
                                Description:
                            </div>
                            <div className="wkButtons">
                                <button className="edDelete" onClick={() => {toggleAddingToEdit()}}><img src={pencilIcon} alt="edit icon" width="15px" height="15px" /></button>
                                <button className="edDelete" onClick={() => {WorkDelete(wk.id)}}>  X  </button>
                            </div>
                        </div>
                            <div style={{textAlign:"left"}}>{wk.desc}</div>
                        
                    </div>
                </div>
            )
        }
        
    }

    function WorkHistory() {
        if(workHistory.length==0){
            return (
                <div>
                    <p style={{color:'grey'}}>No work experience added</p>
                </div>
            )
        } else {
            return(
                <>
                    {workHistory.map((wk) => (
                        <WkEntry wk={wk} key={wk.id}/>
                    ))}
                </>
            )
        }
    }

    function AddWorkButton() {
        if(addingWork==false){
            return(
                <button onClick={toggleAddingWork}>+</button>
            )
        }
    }

    function WorkInputs(){
        if(addingWork==true){
            return(
                <form onSubmit = {handleSubmit}>
                    <div className="labelRowWrapper">
                        <div className="edLabelPairWrapper">
                            <label htmlFor="wkTitle">Role Title: </label>
                            <input type="text" id="wkTitle"placeholder="Assistant Manager"/>
                        </div>
                        <div className="edLabelPairWrapper">
                            <label htmlFor="wkCompany" >Company: </label>
                            <input type="text" id="wkCompany"placeholder="Interesting Co, Inc."/>
                        </div>
                    </div> 
                    <div className="labelRowWrapper">
                        <div className="edLabelPairWrapper">
                            <label htmlFor="wkStartYear">Start Year: </label>
                            <input type="text" id="wkStartYear" placeholder="2016"/>
                        </div>
                        <div className="edLabelPairWrapper">
                            <label htmlFor="wkEndYear">End Year: </label>
                            <input type="text" id="wkEndYear" placeholder='2018 / "Current"'/>
                        </div>
                    </div>
                    <div className='workTextInput'>
                        <label htmlFor="wkDesc" style={{textAlign:"left"}}>Description of Role:</label>
                        <textarea name="wkDesc" id="wkDesc" placeholder="I maintained records and worked..."></textarea>
                    </div>
                    <button type="submit">+ Log Work History</button>
                    <button onClick={toggleAddingWork}>Cancel</button>
                </form>
            )
        }
    }
    
    return (
        <>
        <h2 style={{textAlign:"center"}}>Work Experience</h2>
        <div className="work-container">
            <WorkHistory />
            <WorkInputs />
            <AddWorkButton />
        </div>
        </>
        
    )

}

export default Work