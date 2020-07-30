import React from "react";
import { Spring, config } from "react-spring/renderprops";

export default function NewProjectCard(projectdata) {
  const [state, setState] = React.useState({
    hovering: false
  });

  return (
    <>
      <Spring
        from={{ opacity: 0, paddingTop: '2rem' }}
        to={{
          transformCard: `scale(${state.hovering ? 1.05 : 1})`,
          transformPic: `scaleX(${state.hovering ? 1.40625 : 1})`,
          pictureHeight: `${state.hovering ? '90%' : '75%'}`,
          paddingPic: `${state.hovering ? '2rem' : '0rem'}`,
          shadow: `${state.hovering ? '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)' : '0 15px 35px rgba(0,0,0,0), 0 5px 15px rgba(0,0,0,0)'}`,
          opacity: 1,
          paddingTop: '0rem'
        }}
        config={key => (key === 'opacity' ? config.molasses : config.default )}
      >
        {props =>
          <>
              <div
              onMouseEnter={() => setState({ hovering: true })}
              onMouseLeave={() => setState({ hovering: false })}
                class="max-w-sm rounded overflow-hidden outline-none h-74"
              style={{ transform: props.transformCard, paddingRight: props.paddingPic, paddingLeft: props.paddingPic, outlineColor: 'none', boxShadow: props.shadow, opacity: props.opacity, marginTop: props.paddingTop }}
              >
                <img style={{
                  width: '100%',
                  height: props.pictureHeight,
                  transform: props.transformPic
                }}
                  src={require(`../images/project-images/${projectdata.name}/thumbnail/${projectdata.frontimage}`)} alt={projectdata.name} />
                <div className="ml-2">
                  <div class="text-l mt-1 manrope" >{projectdata.displayname}</div>
                </div>
              </div>
          </>}</Spring>
    </>
  );
}