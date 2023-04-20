import { useState } from 'react';
import './App.css';
import TabForm1 from './components/TabForm1';
import TabForm2 from './components/TabForm2';
import TabForm3 from './components/TabForm3';
import TabFormDisplay from './components/TabFormDisplay';
// import GrayHour3ToDoForm from './components/GrayHour3ToDoForm';
// import GrayHour3ToDoListView from './components/GrayHour3ToDoListView';
// import GrayHour1 from './components/GrayHour1';
// import GrayHour2 from './components/GrayHour2';
// import GrayHour2P2 from './components/GrayHour2P2';


function App() {
  // having state at the highest level to share amongst the children

  // what do I want to track - what is changing?
  //inputs are changing 
  //starting out empty string because we want a clean slate
  // const [task, setTask] = useState('') 

  // list(array) is changing
  // setting it empty square brackets so we don't get an error
  // const [todoList, setTodoList] = useState([]) //really important that you describe the data type

  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })

  const [tabsArray, setTabsArray] = useState([<TabForm1 />, <TabForm2 />, <TabForm3 />])

  const changeTab = (idx) => {
    console.log("idx", idx)
    if (idx === 0)  {
      setDisplayTab({tab1: true, tab2: false, tab3: false })
    }
    if (idx === 1)  {
      setDisplayTab({tab1:false, tab2:true, tab3:false })
    }
    if (idx === 2)  {
      setDisplayTab({ tab1:false, tab2:false, tab3: true })
    }

  }
  return (
    <div className="main-div">

      <ul className='nav nav-tabs nav-justified tab-list'>
        {
          tabsArray.map((tabName, i) => (
            <li onClick={() => changeTab(i)} key={i} className="btn tab-links"><a href="#">{`Tab ${i}`}</a></li>
          ))
        }
      </ul>
        <div className='display-tab-forms'>
          {
            displayTab.tab1 ? <TabForm1  /> : null 
          }

          {
            displayTab.tab2 ? <TabForm2  /> : null 
          }
    
          {
            displayTab.tab3 ? <TabForm3  /> : null
          }
      </div>
    </div>
  );
}

export default App;
