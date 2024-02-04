import React from 'react'
import Counter from './component/Counter'
import { useDispatch, useSelector } from 'react-redux'
import Button from './component/button/Button'
import { decrementer, incrementer } from './store/slices/counterSlice'
import { Box, Stack } from '@mui/material'



const App = () => {
  const dispatch = useDispatch()

  const incHandler = () => dispatch(incrementer())

  const decHandler = () => dispatch(decrementer())


  return (
    <Box sx={{
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwLCKNyuiRQYyObl5HigqKeYQ_3q9H6AZnA&s')",
      backgroundRepeat: 'no - repeat',
      backgroundSize: 'cover',
      height: '100vh',
      padding: {
        xs: '100px 10px',
        sm: '100px 50px',
      }
    }}>

      <Counter />

      <Stack sx={{
        flexDirection: {
          xs: 'column',
          sm: 'row'
        }, justifyContent: 'center',
      }}>

        <Button eventInc={incHandler} name='Increment' />
        <Button eventInc={decHandler} name='Decrement' />

      </Stack>

    </Box >


  )
}

export default App