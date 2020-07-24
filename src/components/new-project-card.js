import React from "react";
import { Spring } from "react-spring/renderprops";

export default function NewProjectCard(projectdata) {
  const [state, setState] = React.useState({
    hovering: false
  });

  return (
    <>
      <Spring
        to={{
          transformCard: `scale(${state.hovering ? 1.05 : 1})`,
          transformPic: `scaleX(${state.hovering ? 1.5 : 1})`,
          pictureHeight: `${state.hovering ? '100%' : '64%'}`,
          paddingPic: `${state.hovering ? '2rem' : '0rem'}`
        }}
        config={{ tension: 200 }}
      >
        {props =>
          <>
            <button
              type="button"
              onMouseEnter={() => setState({ hovering: true })}
              onMouseLeave={() => setState({ hovering: false })}
              style={{ transform: props.transformCard, paddingRight: props.paddingPic, paddingLeft: props.paddingPic, outlineColor: 'none' }}
            >
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg outline-none h-74 focus:shadow-outline"
              >
                <img style={{ width: '100%', height: props.pictureHeight, transform: props.transformPic }} src={require(`../images/project-images/${projectdata.name}/thumbnail/${projectdata.frontimage}`)} alt={projectdata.name} />
                <div>
                  <div class="text-2xl manropereg" >{projectdata.displayname}</div>
                  <p class="text-gray-600 manrope">
                    {projectdata.description}
                  </p>
                </div>
              </div>
            </button>
          </>}</Spring>
    </>
  );
}


