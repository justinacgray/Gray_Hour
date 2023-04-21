import React from 'react'


// bring in props by destructuring in the component parameters
const Form1 = ({allBoxObj, setAllBoxObj, boxArray, setBoxArray, addBox, changeHandler}) => {
// const Form1 = (props) => {

    // another way to bring in props
    // const {allBoxObj, setAllBoxObj}  = props
    return (
        <div>
            <form onSubmit = {addBox} style={{backgroundColor: '#52283E'}}  className="d-flex p-2 outer-form-container">
                <label> Tab color
                    <input type="color" name="color" value={allBoxObj.color} onChange={changeHandler}/>
                </label>
                <label> Tab Height: 
                    <input type="number" name= "boxHeight" value={allBoxObj.boxHeight} onChange={changeHandler} />
                </label>
                <label> Tab Width:
                    <input type="number" name= "boxWidth" value={allBoxObj.boxWidth} onChange={changeHandler} />
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Form1