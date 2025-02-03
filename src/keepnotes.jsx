import React, { useState } from 'react'


const keepnotes = (props) => {

    const[notes,Setnotes]=useState({title:"",content:""})
    const[checked,Setchecked]=useState(false)

    const addnotes=(event)=>{

        

        Setnotes((prv)=>{return{...prv,[event.target.name]:event.target.value}})
        
        

    }

    const addtoarray=()=>{
                props.add(notes);
                Setnotes({ title: "", content: "" });
                Setchecked(false);
    }

    return (
        <div >
        <div id="form">
            <form onClick={()=>Setchecked(true)} className='keepnote'>
                <input onChange={addnotes} name='title' value={notes.title} placeholder='Title'></input>
                
             {checked &&   (<textarea onChange={addnotes} name='content' value={notes.content} placeholder='Description'></textarea>)}
            </form>
           { checked && (<button onClick={addtoarray} className='fab-button'>+</button>)}
            
        </div>
        </div>
    )
}

export default keepnotes

