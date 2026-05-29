import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    completed : 0,
  netflixClone : "Not yet",
  ecommerceWebsite : "Not yet",
  blogWebsite : "Not yet",
}

export const portfolioSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
 projectnetflix : (state)=>{
state.netflixClone = "Done"
state.completed += 1
 },
 projectEcommerce : (state)=>{
state.ecommerceWebsite = "Done"
state.completed += 1
 },
 projectBlog : (state)=>{
state.blogWebsite = "Done"
state.completed += 1
 },


  },
})

// Action creators are generated for each case reducer function
export const { projectBlog,projectEcommerce,projectnetflix } = portfolioSlice.actions

export default portfolioSlice.reducer