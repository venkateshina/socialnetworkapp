import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { UserContext} from '../App'
const Navbar = ()=> {


const{state,dispatch}=useContext(UserContext)
const history = useHistory()


const renderList=()=>{
  if(state){
    return [
    <li><Link to="/profile">profile</Link></li>,
    <li><Link to="/create">CreatePost</Link></li>,
    <li>
       <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>{
         localStorage.clear()
         dispatch({type:"CLEAR"})
         history.push('/signin')
       }}>
         Log out

</button>
    </li>
    ]
  }
  else{
    return [
    <li><Link to="/signin">Singin</Link></li>,
    <li><Link to="/signup">signup</Link></li>
  ]
  }
}
return (

    <nav>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
       {renderList()}
      </ul>
    </div>
  </nav>
        
)
}
export default Navbar
