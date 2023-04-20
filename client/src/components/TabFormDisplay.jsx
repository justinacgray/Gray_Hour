import React from 'react'

const TabFormDisplay = ({ colorObj, boxColorArray }) => {
    console.log('colorOBJ', colorObj)
    return (
        <div className='box-array-list'>
            {
                boxColorArray.map((oneColor, index) => (
                    <div key={index} style={{
                        backgroundColor: oneColor.boxColor,
                        height:`${oneColor.boxWidth}px`,
                        width: `${oneColor.boxHeight}px`
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