import React from 'react'

const DisplayColorList = ({boxArray}) => {


return (
    <div className='box-array-list '>
        {
            boxArray.map((oneBoxColor, index) => (
                <div className='boxColor' key={index} style={{
                    backgroundColor : oneBoxColor.color, 
                    height: `${oneBoxColor.boxHeight}px`, 
                    width: `${oneBoxColor.boxWidth}px` }} > 
                
                </div>
            ))

        }
    </div>
    )
}

export default DisplayColorList