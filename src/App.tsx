import { useState } from 'react'
import './App.css'
import { AddToList, List } from './component'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name: "LeBron James",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/375px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    age:  36,
    note: "He is an okay player"
  }]);

  return (
    <div>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>   
  )
}

export default App
