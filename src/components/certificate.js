import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Certificate(certdata) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Spring
            to={{
                transform: `scale(${hovered ? 1.1 : 1})`,
                padding: `${hovered ? '2rem' : '0rem'}`,
                opacity: `${hovered ? 1 : 0.8}`,
                nameOpacity: `${hovered ? 1 : 0}`,
                shadow: `${hovered ? '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)' : '0 15px 35px rgba(0,0,0,0), 0 5px 15px rgba(0,0,0,0)'}`
            }}
        >
            {props =>
                <div className="flex flex-col">
                    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transform: props.transform, paddingLeft: props.padding, paddingRight: props.padding, opacity: props.opacity}}>
                        <a href={certdata.cert} target="_blank"><img src={certdata.certpic} className="h-48 md:h-64 px-2 py-2" style={{ boxShadow: props.shadow }}/></a>
                    </div>
                    <div style={{ opacity: props.nameOpacity, marginLeft: props.padding }} className="w-40 text-l manrope font-bold pl-4 pt-4">{certdata.name}</div>
                </div>
            }
        </Spring>
    );
}