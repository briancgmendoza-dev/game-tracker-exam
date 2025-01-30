import { BrowserRouter as Router, Route, Routes } from 'react-router'
import HomePage from './modules/home-page'
import DetailsPage from './modules/details-page'
import './App.css'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/details-page/:id', element: <DetailsPage />}
]

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route />
      </Routes>
    </Router>
  )
}

export default App
