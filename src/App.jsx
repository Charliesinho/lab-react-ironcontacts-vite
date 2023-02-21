import './App.css'
import React, { useState } from 'react';
import contacts from "./contacts.json"

function App() {
  const [firstSix, setFirstFive] = useState(contacts.slice(0,6));
  console.log(firstSix);
  const [remContacts, setRemContacts] = useState(contacts.slice(7));
  
   

  function getRandomContact() {
    let randomIndex = Math.floor(Math.random() * remContacts.length);
    let randomContact = remContacts[randomIndex];
    setFirstFive([...firstSix, randomContact])
    let filteredArr = remContacts.filter((elem) => {
      if (elem.name !== randomContact.name) {
        return elem;
      }
    })
    setRemContacts(filteredArr)
  }

  function sortByName() {
    const sorted = [...firstSix];
    sorted.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(sorted)
    setFirstFive(sorted)
  }
  function sortByPop() {
    const sorted = [...firstSix];
    sorted.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    console.log(sorted)
    setFirstFive(sorted)
  }


  return(
  <div className="App">
  <h1> IronContacts </h1>
  <button onClick={getRandomContact}> Add random </button>
  <button onClick={sortByName}> Sort by name </button>
  <button onClick={sortByPop}> Sort by Popularity </button>
<table id='table '>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
    </tr>
  </thead>
  <tbody>
    {firstSix.map((celebrity) => {
        return (
          <tr key={celebrity.id} className="table">
            <td>
                <img class="img" src={celebrity.pictureUrl} alt="" />
              </td>
            <td>{celebrity.name}</td>
            <td>{celebrity.popularity}</td>
            <td>{celebrity.wonOscar ? '🏆' : ''}</td>
            <td>{celebrity.wonEmmy ? '🏆' : ''}</td>
            <button onClick={() => {
              const newArr = firstSix.filter((elem) => elem.id !== celebrity.id);
              setFirstFive([...newArr])
              console.log("deleted")
            }}> Delete</button>
          </tr>
        )
      })}
    </tbody> 
</table>
</div>
)
}
export default App