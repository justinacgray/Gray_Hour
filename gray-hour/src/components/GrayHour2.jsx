import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GrayHour2 = () => {

    const [word, setWord] = useState("chair")
    const [clickWord, setClickWord] = useState("")


    const apiLink = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

    useEffect(() => {
        axios.get(`${apiLink}${word}`)
            .then((res) => {
                console.log("useEffect res.data", res.data)
                console.log("useEffect res.data[0]", res.data[0])
                console.log("useEffect res.data[0].meanings", res.data[0].meanings[0])
                console.log("useEffect res.data[0].meanings ...", res.data[0].meanings[0].definitions[0].definition)
                // setWord(res.data) // this will give [object,object] in input placeholder
                setWord(res.data[0].word)
            })
            .catch((err) => {
                console.log("error from useEffect", err.response.status);
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.get(`${apiLink}${clickWord}`)
            .then((res) => {
                // console.log("onClick res", res.data[0].meanings[0].definitions[0].definition)
                setClickWord(res.data[0].meanings[0].definitions[0].definition)
            })
            .catch((err) => {
                console.log("ERROR", err)
            })

    }


    return (
        <div>
            <div className="container d-inline-flex p-2 w-900">
                <form className='m-5' onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">What word to look up?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="'desire', 'learn', etc... "
                            name="clickWord"
                            value={clickWord}
                            onChange={(e) => setClickWord(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className='m-5' >
                    <div className="form-group">
                        <label htmlFor="">What word to look up?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="'desire', 'learn', etc... "
                            name="word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)} />
                    </div>
                
                </div>
            </div>

            <div className="container d-inline-flex p-2 w-900">
                <section className='border border-primary m-4 p-4 col '>
                    Display data by onClick
                    {JSON.stringify(clickWord)}

                </section>

                <hr />
                <section className='border border-primary m-4 p-4 col'>
                    Display data by axios
                    {/* {JSON.stringify(word)} */}
                    {word[0].word}
                    {/* {word[0][2]} */}

                </section>

            </div>


        </div>
    )
}

export default GrayHour2