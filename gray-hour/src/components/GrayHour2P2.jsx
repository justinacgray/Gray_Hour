import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GrayHour2P2 = () => {

    const [clickWordObj, setClickWordObj] = useState({
        word: "penguin",
        meanings: [],
        definitions: []
    })

    const [wordObj, setWordObj] = useState({
        word: "giraffe",
        meanings: [],
        definitions: []
    })


    const apiEndpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

    useEffect(() => {
        axios.get(`${apiEndpoint}${wordObj.word}`)
            .then((res) => {
                console.log("useEffect res.data", res.data)
                console.log("useEffect res.data[0]", res.data[0])
                console.log("useEffect res.data[0].meanings", res.data[0]?.meanings[0])
                console.log("useEffect res.data[0].meanings ...", res.data[0].meanings[0]?.definitions[0].definition)
                // setWord(res.data) // this will give [object,object] in input placeholder
                setWordObj({
                    word: res.data[0]?.word,
                    meanings: "" ,
                    definitions: "",
                })
            })
            .catch((err) => {
                console.log("error from useEffect", err.response.status);
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.get(`${apiEndpoint}${clickWordObj.word}`)
            .then((res) => {
                // console.log("onClick res", res.data[0].meanings[0].definitions[0].definition)
                setClickWordObj({
                    word: res.data[0]?.word,
                    meanings: "" ,
                    definitions: ""
                })
            })
            .catch((err) => {
                console.log("ERROR", err)
            })

    }


    return (
        <div>
            <div className="container d-inline-flex p-2 w-700">
                <form className='m-5' onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">What word to look up?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="'desire', 'learn', etc... "
                            name="clickWord"
                            value={clickWordObj.word}
                            onChange={(e) => setClickWordObj(e.target.value)} />
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
                            value={wordObj.word}
                            onChange={(e) => setWordObj(e.target.value)} />
                    </div>
                
                </div>
            </div>

            <div className="container d-inline-flex p-2 w-900">
                <section className='border border-primary m-4 p-4 col '>
                    Display data by onClick
                    <p>{clickWordObj.word}</p>

                </section>

                <hr />
                <section className='border border-primary m-4 p-4 col'>
                    Display data by axios
                    <p>{wordObj.word}</p>
                    {/* {wordObj.word[0].word} */}
                    {/* {word[0][2]} */}

                </section>

            </div>


        </div>
    )
}

export default GrayHour2P2