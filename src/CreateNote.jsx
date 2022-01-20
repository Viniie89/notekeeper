import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';




const CreateNote = (props) => {
    const[expand,setExpand] = useState(false);

    const [note , setNote] = useState({
        title: "",
        content: "",
    });
     
    const inputEvent = (event) => {
       // value = event.target.value;
       // name = event.target.name;

       const{name, value} = event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
                
            };
        });
        console.log(note);
    };
    
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    const expandIt = () => {
        setExpand(true);
    }

    const bcktoNormal = () => {
        setExpand(false);
    }
  return(
    <>
     <div className='main_note'>
     <form>
         {expand? 
         <input type= "text" 
                name="title"
                value={note.title}
                onChange={inputEvent} 
                placeholder='Title'
              />:null
         }

         <textarea rows = "" 
                   columns = "" 
                   name="content"
                   value={note.content} 
                   onChange={inputEvent} 
                   onClick={expandIt}
                   onDoubleClick={bcktoNormal}
                   placeholder='Write a note...'/>
             {
                 expand?
                 <Button onClick={addEvent}>
             <AddIcon/>
             </Button> : null }
        
         
     </form>

     </div>
    </>
     
  );
}
  
export default CreateNote;