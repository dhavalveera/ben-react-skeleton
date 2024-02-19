// React Router DOM
import { Routes, Route } from 'react-router-dom'

// Components
import HomePage from './components/page-components/home-page'
import FormPage from './components/page-components/form-page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/form' element={<FormPage />} />
    </Routes>
  )
}

export default App
