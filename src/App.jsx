import React, { useState } from 'react'

import Header from './component/Header'
import Footer from './component/Footer'
import CreateNote from './component/CreateNote'
import Note from './component/Note'

const App = () => {

  const [addItem, setAddItem] = useState([]);

  function addNote(data) {
    // alert("clicked from app.jsx ..");

    // console.log(data);

    setAddItem(function (oldAr) {
      return [...oldAr, data]
    });

    // console.log(data);
  }


  function deleteNote(key) {
    // alert("delte key " + key);

    setAddItem(function (data) {
      return data.filter(function (ele, ind) {
        return (ind !== key);

      })
    })
  }

  return (
    <div>

      <Header />

      <CreateNote passNote={addNote} />


      {addItem.map(function (val, index) {
        return <Note
          key={index}
          title={val.title}
          content={val.content}
          id={index}
          delNote={deleteNote} />;
      })}

      <Footer />
    </div>
  )

}
export default App