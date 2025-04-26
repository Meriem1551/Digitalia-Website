import React, { useState, useEffect } from 'react';
import avis_client from '../../data/avis-client.json';

const AvisClients = () => {
        const [avis, setAvis] = useState([]);
        useEffect(() => {
            setAvis(avis_client);
        }, []);
    return (
        <div className="p-20" id="AvisClients">
            <h2 className="text-4xl mb-16 text-center" style={{fontFamily:'var(--title-font)', color:'var(--dark-purple)'}}>Avis clients</h2>
            <ul className='gap-10 flex flex-col items-center justify-center'>
                {avis.map((client) => (
                    <li key={client.id} className='flex flex-col justify-center gap-3 bg-white p-4 rounded-lg shadow-lg border-l-5 border-purple-900'>
                        <p style={{fontFamily:'var(--text-font)', color:'var(--black)'}} className='text-base'>{client.feedback}</p>
                        <h3 className='text-end text-base' style={{fontFamily:'var(--title-font)', color:'var(--text-color)'}}>{client.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvisClients;