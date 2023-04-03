


import React from "react";

// UseState

import {useState} from "react";

const App = (props) => {

  const[age, setAge] = useState(21);
  const[name, setName] = useState({
    firstName:"Harishrao",
    lastName:"Rangineni"
  });

  const handleUpdateAll = () => {
    setAge(25);
    setName({
      firstName:"Sathwika",
      lastName:"Rao"
    });
  }


  // simple forms --> userName and password

  const [userName, setUserName] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = () => {
    alert(`username:${userName} password:${password}`);
  }


  // conditional rendering  ---> show/hide a model

  const[showText, setShowText] = useState(false);

  const[members, setMembers] = useState([
    {name:"Harish", job:"devloper"},
    {name:"rohit", job:"devloper"},
    {name:"Manoj", job:"developer"},
  ]);

  const addMembers =() => {
    setMembers([...members, {name:"Gpoi",job:"QA"},{name:"Pavan",job:"QA"}]);
  }
  return (
    <>
    <div>age:{age}</div>
    <button onClick={() => setAge((prevAge) => prevAge + 1)}>Increase Age</button>
    <hr/><hr />

    <div>firstName:{name.firstName}</div>
    <div>lastName:{name.lastName}</div>

    <button onClick={() => setName({firstName:"ManoharRao", lastName:"Rangineni"})}>update Name</button>
    <hr />
    <hr/>
    <button onClick={handleUpdateAll}>Update All</button>
    <hr/>

    <form onSubmit={handleSubmit}>
      <input placeholder="UserName" value={userName} onChange={(e) =>setUserName(e.target.value)}></input>
      <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
      <button type="onSubmit">Submit</button>
    </form>

    <hr/>
    <hr/>

    {showText ? <span>hello Iam a modal :)</span> : null}

    <div>
      <button onClick={() => setShowText(!showText)}>Toggle showText</button>
    </div>

    <hr/>

    {members.map((members) => (
      <div>
        {members.name} is a {members.job}.
      </div>
    ))}

    <button onClick={addMembers}>Add a Person</button>
    </>
    
  )

}

export default App;
