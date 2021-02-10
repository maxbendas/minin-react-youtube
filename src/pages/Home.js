import React from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";

const Home = () => {
    const notes = new Array(5)
        .fill('')
        .map((_,i)=>({id:i, title:'Note '+(i+1) }))
    console.log(notes)
    return (
        <>
            <Form/>
            <Notes notes={notes}/>
        </>
    );
};

export default Home;