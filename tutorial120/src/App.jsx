import { useSelector, useDispatch } from 'react-redux';
// Import the exact actions we exported from the slice!

import {projectBlog,projectEcommerce,projectnetflix} from './redux/portfolioSlice'
const App = () => {
const blog = useSelector((state) => state.projects.blogWebsite);
const netflix = useSelector((state) => state.projects.netflixClone);
const ecommerce = useSelector((state) => state.projects.ecommerceWebsite);
  const completedCount =  useSelector((state)=> state.projects.completed)

  const dispatch = useDispatch();

  return (
  <>
  <div className="border border-black p-4 w-64 bg-gray-50">

        <p className="font-bold">project completed: {completedCount}/3</p>
        <p className="font-bold">project netflix: {netflix}</p>
        <p className="text-gray-600">blog: {blog}</p>
        <p className="text-gray-600">Ecommerce: {ecommerce}</p>
      </div>
  <button className="bg-blue-600 text-white font-bold p-2 px-4 rounded mx-3" onClick={()=> dispatch(projectnetflix())}>Completed netflix project</button>
  <button className="bg-blue-600 text-white font-bold p-2 px-4 rounded mx-3" onClick={()=> dispatch(projectEcommerce())}>Completed ecommerce project</button>
  <button className="bg-blue-600 text-white font-bold p-2 px-4 rounded mx-3" onClick={()=> dispatch(projectBlog())}>Completed blog project</button>
  </>
  );
}

export default App;