
import './App.css';
import Home from './home/Home';
import About from './about/About';
import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
<>
      <Route path='/' element = {<Home />}></Route> 
      <Route path = 'about' element = {<About /> } > </Route>
      </>

  ))
  return (
   <RouterProvider router ={router} />
  );
}

export default App;
