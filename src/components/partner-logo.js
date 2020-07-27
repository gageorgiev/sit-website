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
                        transformCard: `scale(${state.hovering ? 1.2 : 1 })`,
                        opacity: `${state.hovering ? 1 : 0.9}`,
                        padding: `${state.hovering ? '1rem' : '0rem'}`
                    }}
                >
                    {props =>
                        <img src={imagedata.logo} style={{ transform: props.transformCard,
                                                                                        opacity: props.opacity,
                                                                                        marginTop: '1rem',
                                                                                        marginBottom: '1rem',
                                                                                        marginRight: props.padding,
                                                                                        marginLeft: props.padding,
                                                                                        height: imagedata.height,
                                                                                        width: 'auto',
                                                                                        marginTop: imagedata.paddingTop,
                                                        }} />
                    }
                </Spring>
            </div>
        </>
    );
}