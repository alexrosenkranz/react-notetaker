import React from 'react';
import ListGroupItem from './ListGroupItem';


// create a listgroup component that receives props for it's styling (flush) and receives props for the array of notes
function ListGroup(props) {
  return (
    <div className={`list-group ${props.flush ? "list-group-flush" : ""} `}>
      {
        (props.notelist.length > 0) ? (
          props.notelist.map(note => {
            return (
              <ListGroupItem 
                key={note._id}
                id={note._id}
                title={note.title}
                body={note.body}
                handleDeleteNote={props.handleDeleteNote}
              />
            )
          })
        ) : (
            <h2>No notes to display 😒</h2>
        )
      }
    </div>
  )
}

export default ListGroup;