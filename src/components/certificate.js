import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Certificate(certdata) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Spring
            to={{ transform: `scale(${hovered ? 1.1 : 1})`, padding: `${hovered ? '2rem' : '0rem'}`, opacity: `${hovered ? 1 : 0.8}`}}
        >
            {props =>
                <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transform: props.transform, paddingLeft: props.padding, paddingRight: props.padding, opacity: props.opacity}}>
                <a href={certdata.cert} target="_blank"><img src={certdata.certpic} className="h-56 px-4 py-4"/></a>
                </div>
            }
        </Spring>
    );
}


