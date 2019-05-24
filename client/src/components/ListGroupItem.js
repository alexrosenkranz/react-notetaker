import React from 'react';
// import Link from react-router-dom
import { Link } from 'react-router-dom';

// create list group item (<li>) that accepts id, title, body, handleRemove as props
function ListGroupItem(props) {
  return (
      <li className="list-group-item list-group-item-action ">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.title}</h5>
        </div>
        <p className="mb-1">{props.body}</p>
      <Link to={`/update/${props.id}`} className="btn btn-warning btn-sm m-1">Edit Note</Link>
      <button className="btn btn-danger btn-sm m-1" onClick={() => props.handleDeleteNote(props.id)}>Remove This Note</button>
      </li>
  )
}

export default ListGroupItem;