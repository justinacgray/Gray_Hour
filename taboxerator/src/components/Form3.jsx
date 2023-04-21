import React from 'react'

const Form3 = ({allBoxObj, setAllBoxObj, boxArray, setBoxArray, addBox}) => {
    return (
        <div>
            <form style={{backgroundColor: '#9F5671'}} className="d-flex p-2 outer-form-container">
                <label> Tab color
                    <input type="color" />
                </label>
                <label> Tab Height: 
                    <input type="number" placeholder="" />
                </label>
                <label> Tab Width:
                    <input type="number" placeholder="" />
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Form3