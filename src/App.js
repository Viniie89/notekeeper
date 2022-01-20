import React, {useState} from 'react';
import Header from './Header';

import CreateNote from './CreateNote';
import Note from './Note';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [addItem , setAddItem] = useState([]);
  const addNote = (note) => {
    //alert ('i am clicked');
    setAddItem((prevData)=>{
      return[...prevData,note]
    })
    


  }
  const onDelete =(id) =>{
       setAddItem((olddata)=>
       olddata.filter((currdata,index)=>{
         return index !== id;
       })
       )
  }
  return(
    <>
    <Header/>
   
    <CreateNote passNote = {addNote}/>
    
      {addItem.map((val,index)=>{
        return(
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem = {onDelete}
          />
        )
      })}
      
    </>
     
  );
}
  
export default App;