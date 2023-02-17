import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

const GrayHour1 = () => {

    // All JavaScript event handlers use an anonymous callback function
    // Anonymous functions are functions without names
    //JS uses callbacks to allow you to do one thing (pick up a click event for example) 
    //then do another thing (fire a handler function). 

    const [name, setName] = useState('Gray')
    // const [fullName, setFullName] = useState("")
    // const [email, setEmail] = useState("")
    const [success, setSuccess] = useState("")

    // distructuring 
    const [user, setUser] = useState({
        fullName: '',
        email: ''
    })

    const handleClick = (e) => {
        // e is an object and has many properties that you can tap into
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }

    const handleClick2 = (e) => {
        console.log(e)
        // console.log(`Shalom, ${name}`)
    }

    // takes in an event because user is typing and detecting a change in the input
    const handleInputChange = (event) => {
        console.log(event)
        const userValue = event.target.value
        console.log("user value", userValue);
        setName(userValue)
    }

    const handleSubmit = (e) => {
        // prevent the page from refresher, Why don't we want to do that?
        e.preventDefault()
        console.log(e)
        // const newUser = {

        // }
        setSuccess(user.fullName, user.email)
        console.log(success)

    }


    // e is the event (user interacting with page; typing),
    // change is the type of event, 
    // target is the element that triggered the event, which in this case is the input,(what triggered the event -> the input)
    // and (attribute) value is the value of the input element 

    const handleInputChangeInForm = (e) => {
        // console.log(e)
        console.log("target", e.target)
        console.log("name", e.target.name)
        console.log("value", e.target.value)
        // this code below get the state but changes all inputs at the same time
        // setFullName(e.target.value)
        // setEmail(e.target.value)
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        console.log("New User", user)
        setUser("")
    }


    return (
        <div>
            {/* we don't want invoke the function by using () we curly braces to represent that a JS function will be passed in */}
            <Button className='btn btn-primary'  onClick={handleClick}>CLick Me</Button>
            <hr />

            {/* using parenthesis because we are passing through an argument */}
            <Button className='btn btn-primary' onClick={(e) => handleClick2(e)}>Click me for a name </Button>

            <hr />

            <label htmlFor="name">What is your name?</label>
            <input onChange={handleInputChange} type="text" placeholder={name} />

            {name}

            <hr />

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    onChange={handleInputChangeInForm}
                    name="fullName"
                    value={user.fullName}
                    type="text"
                    placeholder="Full Name" />

                <label htmlFor="email">Email</label>
                <input
                    onChange={handleInputChangeInForm}
                    name="email"
                    value={user.email}
                    type="text"
                    placeholder="Email" />

                <button>Submit</button>
            </form>

            {success}


        </div>
    )
}

export default GrayHour1