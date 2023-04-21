import React, { useState } from 'react';
import './App.css';
import DisplayColorList from './components/DisplayColorList';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

function App() {


  const [allBoxObj, setAllBoxObj] = useState({
    color: "",
    boxHeight: 50,
    boxWidth: 50
  })
  const [boxArray, setBoxArray] = useState([])

  const addBox = (e) => {
    e.preventDefault()
    setBoxArray([...boxArray, allBoxObj])
    console.log("ARRAYYYYY--->", boxArray)
  } 

  const changeHandler = (e) => {
    setAllBoxObj({
      ...allBoxObj,
      [e.target.name] : e.target.value
    })
  }

  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })
  const [tabArray, setTabArray] = useState([<Form1 />, <Form2 />, <Form3 />])

  const handleTabChange =(e,idx) => {
    e.preventDefault()
    console.log("INDEX ---->", idx)
    if(idx=== 0) {
      setDisplayTab({
        tab1: true,
        tab2: false,
        tab3: false
      })
    }
    if(idx=== 1) {
      setDisplayTab({
        tab1: false,
        tab2: true,
        tab3: false
      })
    }
    if(idx=== 2) {
      setDisplayTab({
        tab1: false,
        tab2: false,
        tab3: true
      })
    }
  }

  return (
    <div className="main-container">
      <ul className='tab-list'>
        {
          tabArray.map((tab, i) => (
            <div key={i}><button className='tab-links' onClick={(e) => handleTabChange(e,i)}>{`Tab ${i}`}</button></div>
          ))
        }
      </ul>
        
      {
        displayTab.tab1 ? <Form1 
        allBoxObj={allBoxObj} 
        setAllBoxObj={ setAllBoxObj} 
        boxArray={boxArray} 
        setBoxArray={setBoxArray}
        addBox={addBox}
        changeHandler={changeHandler}
        /> 
        : null
      }

      {
        displayTab.tab2 ? <Form2  
        allBoxObj={allBoxObj} 
        setAllBoxObj={ setAllBoxObj} 
        boxArray={boxArray} 
        setBoxArray={setBoxArray}
        addBox={addBox} 
        changeHandler={changeHandler}
        /> : null

      }
      { 
        displayTab.tab3 ? <Form3  
        allBoxObj={allBoxObj} 
        setAllBoxObj={ setAllBoxObj} 
        boxArray={boxArray} 
        setBoxArray={setBoxArray}
        addBox={addBox}
        changeHandler={changeHandler}
        /> : null
      }

      <DisplayColorList 
      boxArray={boxArray} 
      setBoxArray={setBoxArray}
      />

    </div>
  );
} 

export default App;
