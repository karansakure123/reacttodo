
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Items from './pages/Items'
import EditItem from './pages/EditItem'
import Home from './pages/Home'
import CreateItem from './pages/CreateItem'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Router>
                  <Toaster position='top-right'/>

        <Routes>
           <Route path="/item/addnew" element={<CreateItem />} />

          <Route path="/" element={<Home />} />

          <Route path="/item" element={<Items />} />
          <Route path="/items/edit/:id" element={<EditItem />} />

        </Routes>
      </Router>
    </>
  )
}

export default App