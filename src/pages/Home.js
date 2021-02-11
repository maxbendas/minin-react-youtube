import React, {Fragment, useContext, useEffect} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import Loader from "../components/Loader";
import {AlertContext} from "../context/alert/alertContext";

const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    useEffect(()=>{
        fetchNotes()
    }, [])

    const removeHandler = (id)=>{
        alert.show(' Заметка была удалена', 'success')
        removeNote(id)
    }

    return (
        <Fragment>
            <Form/>
            {loading?<Loader/>:<Notes notes={notes} onRemove={removeHandler}/>}

        </Fragment>
    );
};

export default Home;