import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const Navbar = () => {
        const count = useSelector((state) => state.counter.value)
      const dispatch = useDispatch()
  return (
    <div>

              currently count is {count}
             
    </div>
  )
}

export default Navbar