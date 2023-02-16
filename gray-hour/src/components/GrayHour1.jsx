import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const GrayHour1 = () => {

    // All JavaScript event handlers use an anonymous callback function
    // Anonymous functions are functions without names
    //JS uses callbacks to allow you to do one thing (pick up a click event for example) 
    //then do another thing (fire a handler function). 
    
    const [name, setName] = useState('Gray')   
    const [user, setUSer] = useState({
        fullName: '',
        email: ''
    })

    const handleClick =(e) => {
        // e is an object and has many properties that you can tap into
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }

    const handleClick2 = (name) => {
        console.log(`Shalom, ${name}`)
    }

    // takes in an event because user is typing and detecting a change in the input
    const handleInputChange = (event) => {
        console.log(event)
        const userValue = event.target.value
        console.log(userValue);
        setName(userValue)
    }

    const handleSubmit =(e) => {
        // prevent the page from refresher, Why don't we want to do that?
        e.preventDefault()
        console.log(e)
        const newUser = {
    
        }
    }


    // e is the event (user interacting with page; typing),
    // change is the type of event, 
    // target is the element that triggered the event, which in this case is the input,(what triggered the event -> the input)
    // and (attribute) value is the value of the input element 

    const handleInputChangeInForm = (e) => {
        console.log(e)
        console.log(e.target.name)
        console.log(e.target.value)

    }


    return (
    <div>
        {/* we don't want invoke the function by using () we curly braces to represent that a JS function will be passed in */}
        <Button className='btn btn-primary'  onClick={handleClick}>CLick Me</Button>
        <hr />

        {/* using parenthesis because we are passing through an argument */}
        <Button className='btn btn-primary' onClick={() => handleClick2('Azi')}>Click me for a name </Button>

        <hr />

        <label htmlFor="name">What is your name?</label>
        <input onChange={handleInputChange} type="text" placeholder={name}/>

        {name}

        <hr />

        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name?</label>
        <input 
        onChange={handleInputChangeInForm} 
        name="fullName" 
        value={user.fullName} 
        type="text" 
        placeholder="Full Name"/>

        <label htmlFor="name">Email?</label>
        <input 
        onChange={handleInputChangeInForm} 
        name="email" 
        value={user.email} 
        type="text" 
        placeholder="Email"/>
        </form>




    </div>
  )
}

export default GrayHour1