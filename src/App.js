
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';


function App() {
  const useStyle = makeStyles(()=>({
    App:{
      backgroundColor: "black",
      color : "white",
      minHeight: "100vh"
    }

  }));

  const classes = useStyle();

  return (
    <div className={classes.App}>
      <BrowserRouter>
      <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/coin-page' element={<CoinPage/>}  />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
