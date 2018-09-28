import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13734.140749766488!2d-79.40386673572708!3d43.643020193748896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b66a4a51%3A0xe210b2f6fe0b1405!2sRogers+Centre!5e0!3m2!1spt-BR!2sbr!4v1535111298629" 
                title="Event Location Map"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                style={{border:0}} 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;