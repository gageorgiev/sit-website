import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function PartnerLogo(imagedata) {
    const [state, setState] = React.useState({ hovering: false });
    return (
        <>
            <div
                onMouseEnter={() => setState({ hovering: true })}
                onMouseLeave={() => setState({ hovering: false })}
                className="h-16 md:h-24"
            >
                <Spring
                    to={{
                        transformCard: `scale(${state.hovering ? 1.1 : 1})`,
                        opacity: `${state.hovering ? 1 : 0.6}`,
                        padding: `${state.hovering ? '0.2rem 0.2rem 0.2rem 0.2rem' : '0rem 0rem 0rem 0rem'}`
                    }}
                >
                    {props =>
                        <img src={imagedata.logo} className="h-16 md:h-24 m-8" style={{ transform: props.transformCard,
                                                                                        opacity: props.opacity,
                                                                                        padding: props.padding
                                                        }} />
                    }
                </Spring>
            </div>
        </>
    );
}