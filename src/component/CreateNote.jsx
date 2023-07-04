import React, { useState } from 'react'
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';



const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setNote(function (oldData) {
            return {
                ...oldData,
                [name]: value,
            };
        });


        // console.log(note);
    };

    function passData() {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    }

    function expandNote() {
        setExpand(true);
    }

    function hideNote() {
        setExpand(false);
    }

    return (
        <div className='main_note'>
            <form action="" onDoubleClick={hideNote}>

                {expand ?
                    <input type="text" placeholder="Title " autoComplete='off'
                        name='title'
                        value={note.title}
                        onChange={changeHandler} />
                    : null}
                <textarea cols="" rows="" placeholder='Write a note'
                    name='content'
                    value={note.content}
                    onChange={changeHandler}
                    onClick={expandNote}
                    onDoubleClick={hideNote}
                >
                </textarea>


                {expand ?
                    <Button onClick={passData} >{<AddIcon className='plus_sign' />}</Button> : null}
            </form>
        </div>
    )
}

export default CreateNote