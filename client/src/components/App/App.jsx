import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import Home from '../Home/Home'


function App() {
  return (
    <>
			<div className="wraper">
				<header className="header">
					<Nav />
				</header>
         <main className="uk-container">
          <Routes>
            <Route path="/" element={<Home />} />
						<Route path="/registation" element={<Registration />} />
						<Route path="/login" element={<Login />} />
          </Routes>
         </main>

        <footer>
          
        </footer>
      </div>
    </>
  );
}

export default App;
