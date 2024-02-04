import React from 'react'
import { useSelector } from 'react-redux'




const Counter = () => {

    const selector = useSelector(state => state.CounterReducer)
    console.log(selector)

    return (

        <>
            <h1 style={{
                backgroundColor: 'orange', color: '#fff',
                textAlign: 'center', padding: '10px',
                fontSize: '3em', marginBottom: '1.5em'
            }}>
                Counter : {selector.count}
            </h1>
        </>

    )
}

export default Counter