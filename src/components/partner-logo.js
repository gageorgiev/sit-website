import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function PartnerLogo(imagedata) {
    const [state, setState] = React.useState({ hovering: false });
    return (
        <>
            <div
                onMouseEnter={() => setState({ hovering: true })}
                onMouseLeave={() => setState({ hovering: false })}
                className="object-contain"
            >
                <Spring
                    to={{
                        transformCard: `scale(${state.hovering ? 1.1 : 0.9})`,
                        opacity: `${state.hovering ? 1 : 0.9}`,
                        padding: `${state.hovering ? '0.2rem' : '0rem'}`
                    }}
                >
                    {props =>
                        <img src={imagedata.logo} className="" style={{ transform: props.transformCard,
                                                                                        opacity: props.opacity,
                                                                                        paddingTop: props.padding,
                                                                                        paddingBottom: props.padding,
                                                                                        paddingRight: props.padding,
                                                                                        paddingLeft: props.padding,
                                                                                        height: imagedata.height,
                                                                                        width: 'auto',
                                                                                        marginTop: imagedata.paddingTop 
                                                        }} />
                    }
                </Spring>
            </div>
        </>
    );
}