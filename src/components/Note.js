import {MdDeleteForever} from "react-icons/md";

const Note = ({id, text, date}) => {
    return (
    <div className="note">
               <span> Hello this is my first note! Hurray</span>
               <div className="note-footer">
                   <small>13/07/2022</small>
                   <MdDeleteForever className= "delete-icon" size="1.3em"/>
                </div>

    </div>
    );
};

export default Note;