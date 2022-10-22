import {useState} from 'react'
import Card from "../components/Card"
import style from "./Duel.module.css"

const duelUsersUrl = "http://localhost:3000/api/users?";

const Duel = () => {
  const[data, setData] = useState([{}, {}]);
  const [username1, SetUsername1] = useState("");
  const [username2, SetUsername2] = useState("");
  const [isShown, setIsShown] = useState(false)
  const [error, setError] = useState(null)
  
  const githubData =  () => {
    if(username1 == username2){
      setError("The usernames cannot be the same!")
    } else{
    fetch(duelUsersUrl + `username=${username1}&username=${username2}`)
    .then(res => {
      if(!res.ok){
        throw Error("At least one of the usernames provided does not exist.");
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      setIsShown(true);
      setError(null)
    }).catch(err => {
      setError(err.message)
      setIsShown(false);
    })}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    githubData()
  }

  const handleChange1= (e) => {
    let name = e.target.value
    SetUsername1(name)
  }

  const handleChange2= (e) => {
    let name = e.target.value
    SetUsername2(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className={style.fields}>
        <input type="text" name="username" placeholder='username' onChange={handleChange1} required/>
        <input type="text" name="username" placeholder='username' onChange={handleChange2} required/>
         </div>
        <button type="submit">Duel</button>
      </form>
      <div className={style.container}>
      {error && <div>{error}</div>}
     {isShown &&    
     <div id={style.winnerFrame1} >
      <h1>{data[0]["total-stars"] >= data[1]["total-stars"] ? "WINNER" : "LOSER"}</h1>
     <Card data={data[0]}/>
     </div>
      }
      {isShown &&   
      <div id={style.winnerFrame2} >
        <h1>{data[1]["total-stars"] >= data[0]["total-stars"] ? "WINNER" : "LOSER"}</h1>
     <Card data={data[1]}/>
      </div>
      }
      </div>
    </div>
  )
}

export default Duel