import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GrayHour2 = () => {
    const [apiData, setApiData] = useState()

    useEffect(() => {
        axios.get("")
            .then((res) => {

            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder=''/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="container d-inline-flex p-2 ">
                <section className="">
                    Display data by onClick
                    
                </section>

                <hr />
                <section className=''>
                    Display data by axios
                    
                </section>

            </div>


        </div>
    )
}

export default GrayHour2