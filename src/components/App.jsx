import '../components/styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/LogIn';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthProvider} from '../Contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function App() {


  return (
    <Router> 
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SignUp' element={<PublicRoute element={<SignUp />} />} />
            <Route path='/Login' element={<PublicRoute element={<Login />} />} />
            <Route path='/Quiz/:id' element={<PrivateRoute element={<Quiz />} />} />
            <Route path='/Result/:id' element={<PrivateRoute element={<Result />} />} />
          </Routes>
        </Layout>
      </AuthProvider>
      
    </Router>
  )
}

export default App
