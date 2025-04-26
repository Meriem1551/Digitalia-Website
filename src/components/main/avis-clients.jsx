import React, { useState, useEffect } from 'react';
import avis_client from '../../data/avis-client.json';

const AvisClients = () => {
        const [avis, setAvis] = useState([]);
        useEffect(() => {
            setAvis(avis_client);
        }, []);
    return (
        <div className="avis-clients">
            <h2>Avis clients</h2>
            <ul>
                {avis.map((client) => (
                    <li key={client.id} className="avis-item">
                        <p>{client.feedback}</p>
                        <h3>{client.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvisClients;