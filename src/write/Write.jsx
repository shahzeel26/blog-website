import React from 'react'
import './Write.css'
function Write() {
  return (
    <div className="write">
    <img src="https://media.cntraveler.com/photos/5cb63a0bc131b962ade953ad/master/w_4000,h_2670,c_limit/Banff-Canada_GettyImages-680900749.jpg" className='writeImg' alt="" />
   <form className='writeForm'>
   <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i className="writeIcon fa-solid fa-plus"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}}/>
        <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
    </div>
    <div className="writeFormGroup">
        <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
    </div>
    <button className="writeSubmit">
        publish
    </button>
   </form>
    </div>
  )
}

export default Write