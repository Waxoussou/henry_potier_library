import React, { useContext } from 'react';
import InfoContext from '../context/info/infoContext';
import { Alert } from 'react-bootstrap';
const Info = () => {
    const { alerts } = useContext(InfoContext);

    return (
        alerts && <Alert key={alerts.id} variant={alerts.type}>
            {alerts.message}
        </Alert>
    );
};

export default Info;