import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Listitem = (props) => {
  return (
    <div className='note'>

    <h4>{props.listnotes.title}</h4>
    <p>{props.listnotes.content}</p>
    <button onClick={()=>props.del(props.order)}><DeleteIcon/></button>
  
    </div>
  )
}

export default Listitem
