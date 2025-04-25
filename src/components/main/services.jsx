import React from 'react';
import { useEffect, useState } from "react";
import iconDevice from '../../assets/icons/device.svg';
import iconSettings from '../../assets/icons/settings.svg';
import iconRobot from '../../assets/icons/Robot 2.svg';
import iconDatabase from '../../assets/icons/database.svg';
import iconNetwork from '../../assets/icons/network.svg';
import iconCloud from '../../assets/icons/Cloud.svg';


import servicesData from "../../data/services.json";
const iconsMap = {
    1: iconDevice,
    2: iconSettings,
    3: iconRobot,
    4: iconDatabase,
    5: iconNetwork,
    6: iconCloud,
  };

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <section id="Services" className="py-20 bg-white">
      <h2 className="text-4xl text-center  mb-12" style={{ fontFamily: 'var(--title-font)' , color: 'var(--dark-purple)'}}>
        Nos Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl 
           shadow-[0_0_20px_var(--violet-Purple)] 
           hover:shadow-[0_0_30px_var(--violet-Purple)]
           transition-all border-[2px] border-[var(--light-purple)]  text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={iconsMap[service.id]}
                alt={service.name}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg  mb-2" style={{ fontFamily: 'var(--title-font)' , color: 'var(--dark-purple)' }}>
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm"style={{ fontFamily: 'var(--text-font)' , color: 'var(--text-color)' }}>
                {service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
