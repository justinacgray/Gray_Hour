import React, { useState } from 'react'
import TabFormDisplay from './TabFormDisplay'

const TabForm = ({ tabsArray }) => {
    const [boxColorArray, setBoxColorArray] = useState([])
    const [colorObj, setColorObj] = useState({
        boxColor: "",
        boxWidth: 50,
        boxHeight: 50
    })
    const handleChange = (e) => {
        setColorObj({
            ...colorObj,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() //don't forget the e or it won't add!
        setBoxColorArray([...boxColorArray, colorObj]) // make sure to include []
        console.log(boxColorArray)
    }

  
    return (
        <div className=''>
            <form style={{backgroundColor: '#ACBDBA' }} onSubmit={handleSubmit} className="d-flex p-2 outer-form-container">
        
                <div className="me-3">
                    <label className="form-label"> Tab Color
                        <input type="color" className="form-control" name="boxColor" value={colorObj.boxColor} onChange={handleChange} />
                    </label>
                </div>
                <div className="me-3">
                    <label className="form-label"> Tab Width
                        <input type="number" className="form-control" name="boxWidth" value={colorObj.boxWidth} onChange={handleChange} />
                    </label>
                </div>
                <div className="me-3">
                    <label className="form-label"> Tab Height
                        <input type="number" className="form-control" name="boxHeight" value={colorObj.boxHeight} onChange={handleChange} />
                    </label>
                </div>

                <button type="submit" className="btn btn-warning">Submit</button>
            </form>

            <TabFormDisplay boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} colorObj={colorObj} />

        </div>
    )
}

export default TabForm


