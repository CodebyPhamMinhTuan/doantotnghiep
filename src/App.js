import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  
  return (
    <div>
      <Router>
         <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/order' element = {<OrderPage />} />
         </Routes>
      </Router>
    </div>
  )
}

export default App;