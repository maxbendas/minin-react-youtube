import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group';

import {AlertContext} from "../context/alert/alertContext";

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible){
        return null
    }
    return (
        <CSSTransition
        in={alert.visible}>
        <div className={`alert alert-${alert.type||'warning'} alert-dismissible`}>
            <strong>Attention!</strong>
            {alert.text}
            <button
                onClick={hide}
                type="button"
                    className="close"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </CSSTransition>
    );
};

export default Alert;