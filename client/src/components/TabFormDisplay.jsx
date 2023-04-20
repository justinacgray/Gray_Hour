import React from 'react'

const TabFormDisplay = ({ colorObj, boxColorArray }) => {
    console.log('colorOBJ', colorObj)
    return (
        <div className='box-array-list'>
            {
                boxColorArray.map((oneColor, index) => (
                    <div key={index}  className='boxColor' style={{
                        backgroundColor: oneColor.boxColor,
                        height:`${oneColor.boxHeight}px`,
                        width: `${oneColor.boxWidth}px`
                    }}>
            {/* {`${oneColor.boxWidth}px`}
            {`${oneColor.boxHeight}px`} */}
        </div>
    ))
}
    </div >
    )
}

export default TabFormDisplay