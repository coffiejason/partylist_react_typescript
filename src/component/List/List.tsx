import React from 'react'
import "./list.css"

import { IState as IProps} from "../../App"


const List: React.FC<IProps> = ({ people }) => {

  const renderList = ():JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={Math.random() * 10}>
        <div className='list'>
          <div className='img_name'>
            <div className='img_container'>
              <img src={person.url} />
            </div>
            <h3>{person.name}</h3>
          </div>

          <p>{person.age}</p>

          <p>{person.note}</p>
        </div>
      </li>
      )
    });

  };
  


  return (
    <ul>
      {renderList()}
    </ul>

  )
}

export default List