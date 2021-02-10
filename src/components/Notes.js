import React from 'react';

const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(item => (
                <li key={item.id} className="list-group-item note">
                    <div>
                        <strong>{item.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button type="button" className="btn btn-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    );
};

export default Notes;