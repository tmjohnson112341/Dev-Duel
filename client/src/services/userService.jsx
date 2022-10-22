const inspectUserUrl = "http://localhost:3000/api/user/";
const duelUsersUrl = "http://localhost:3000/api/users?";

export const inspectUser = async (username = "andrew") => {
  try{
    let response = await fetch(inspectUserUrl + username);
    let data = await response.json();
    console.log(data);
    return data;
  } catch(e){
    console.log(e)
  } 
};

export const duelUsers = async (user1 = "fabpot", user2 = "andrew") => {
    // await response of fetch call
    let response = await fetch(duelUsersUrl + `username=${user1}&username=${user2}`);
    // only proceed once promise is resolved
    let data = await response.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
  };