import React, { useEffect } from 'react'
import { fetchAllData } from './API-Fetching/Api-data-fetch';
import { useDispatch, useSelector} from 'react-redux'
import DashView from './components/DashBoards/DashBoard';
import TopNav from './components/Navbars/Navbar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer); 
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <div></div>
 
}
export default App