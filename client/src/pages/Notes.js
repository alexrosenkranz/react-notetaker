import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import ListGroup from '../components/ListGroup'

import { getAllNotes, removeNote } from '../utils/API';

class Notes extends Component {
  state = {
    notelist: []
  };

  // use component did mount to get all notes on load
  componentDidMount() {
    this.getNotes();
  }

  // create method to get all notes
  getNotes = () => {
    getAllNotes()
      .then(({data: dbNoteData}) => this.setState({notelist: dbNoteData}))
      .catch(err => console.log(err));
  }

  // create method to remove a note when user clicks on button to remove it
  handleDeleteNote = (noteId) => {
    removeNote(noteId)
      .then(this.getNotes)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron 
          fluid 
          bg={"info"} 
          text={"dark"} 
          pageTitle={"Viewing All Notes"}
        />

        <div className="container">
          <div className="row justify-content-center">
            {/* create column for list of notes */}
            <div className="col-12 col-sm-10 col-md-7">
              {/* render notes */}
              <h2>📓 Showing All Notes</h2>
              <ListGroup 
                notelist={this.state.notelist} 
                handleDeleteNote={this.handleDeleteNote}
              /> 
            </div>
          </div>
        </div>


      </React.Fragment>
    )
  }
}

export default Notes;
