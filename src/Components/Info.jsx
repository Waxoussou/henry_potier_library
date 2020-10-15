import React, { useContext } from 'react';
import InfoContext from '../context/info/infoContext';
import { Alert } from 'react-bootstrap';
const Info = () => {
    const { alerts } = useContext(InfoContext);

    return (
        alerts && <Alert style={{ position: 'fixed', left: 0, right: 0, zIndex: 1200 }} key={alerts.id} variant={alerts.type}>
            {alerts.message}
        </Alert>
    );
};

export default Info;