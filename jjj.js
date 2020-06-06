import React,{useEffect,createContext,useReducer,UseContext} from 'react';
import Navbar from'./components/Navbar'
import"./App.css"
import { BrowserRouter ,Route,Switch,useHistory} from 'react-router-dom';
import Home from './components/screenss/Home'
import Profile from './components/screenss/Profile'
import Signup from './components/screenss/Signup'
import Signin from './components/screenss/SignIn'
import CreatePost from './components/screenss/CreatePost'
import{reducer,initialState}from './reducers/userReducer'
export const UserContext = createContext()
const Routing = ()=>{
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }
    else{

    history.push('/signin')
    }
  },[])
return (
  <switch>
    <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/Profile">
  <Profile/>
  </Route>
  <Route path="/Signup">
  <Signup/>
  </Route>
  <Route path="/signin">
  <Signin/>
  </Route>
  <Route path="/create">
  <CreatePost/>
  </Route>
  </switch>
)
}








function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{reducer,initialState}}>
    <BrowserRouter>
 
  <Navbar />
  <Routing/>
  
  </BrowserRouter>
  </UserContext.Provider>
        
  );
}

export default App;
