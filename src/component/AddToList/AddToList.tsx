import React,{useEffect, useState} from 'react'
import "./addtolist.css"
import { IState as Props } from "../../App"

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

interface IEntry {
    name:string,
    url: string,
    age: number ,
    note?: string
}

const AddToList: React.FC<IProps> = ({ people,setPeople }) => {

  const [input,setInput] = useState<IEntry>({name:"",url:"",age:0,note:""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    console.log(people)
  },[people]);

  const handleClick = (): void => {
    if(
        String(input.name) !== '' ||
        input.age !== 0 ||
        String(input.age) !== '' ||
        String(input.url) !== ''    
    ){
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(""+input.age),
                url: input.url,
                note: input.note
            } 
        ]);

        setInput({name:"",url:"",age:0,note:""})
    }
    else{
        console.log('error')
    }
  }

  return (
    <div className="AddToList">
        <input type="text" placeholder="Name" name='name' onChange={handleChange} value={input.name}/>
        <input type="url" placeholder="Image Url" name='url' onChange={handleChange} value={input.url}/>
        <input type="number" placeholder="age" name='age' onChange={handleChange} value={input.age}/>
        <textarea  placeholder="a short note" name='note' className="note_area" onChange={handleChange} value={input.note}/>
        <button onClick={handleClick}>Add Player</button>
    </div>
  )
}

export default AddToList