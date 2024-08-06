

import {Routes , Route ,Link ,useLocation} from 'react-router-dom'
import {Create, Home} from './components/index'
import Details from './components/Details'

function App() {
 const {search , pathname} = useLocation()
 console.log(pathname)

  return (
    <>

    <div className='w-screen h-screen flex items-center'>

    {
      (pathname != '/' || search !='') && <Link to={'/'} className='  absolute top-1 font-bold text-red-600  text-xl left-[22.5%]'>Home</Link>
    }
      
    

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit' element={<Create/>} />

      </Routes>
      


    </div>


    </>
  )
}

export default App
