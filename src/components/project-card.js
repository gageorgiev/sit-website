import React from 'react';
import Modal from 'react-modal';
import ProjectCardCarousel from './project-card-carousel';


export default function ProjectCard(props)  {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="" >
      <button
        className="outline-none focus:opacity-50"
        onClick={() => setShowModal(true)}
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg outline-none h-76" > 
          <img class="w-full h-56" src={require(`../images/project-images/${props.name}/${props.frontimage}`)} alt={props.name} />
          <div class="px-6 py-4">
            <div class="text-2xl mb-2 manropereg ">{props.displayname}</div>
            <p class="text-gray-600 manrope ">
              {props.description}
            </p>
          </div>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="z-50 absolute left-0 bottom-0 bg-white outline-none focus:outline-none shadow-lg w-projectmodal h-screen  border-0 rounded-lg">
            <div> 
              {/*content*/}
              <div className="">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-gray-300 rounded-t">
                  <p className="text-3xl text-semibold">
                    {props.displayname}
                  </p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:underline top-0 right-0"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none">
                      ×
            </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-6 flex flex-col md:flex-row-reverse flex-auto">
                  <div className="h-full w-full">
                    <ProjectCardCarousel carousel={props.carousel} name={props.name} />
                  </div>
                  <div className="pr-4 md:w-1/4">
                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                      Клиент: {props.client} 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}


//<div
//    className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//    onClick={() => setShowModal(false)}
//  >
//    <div className="relative w-auto my-6 mx-auto max-w-3xl">
//      {/*content*/}
//      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//        {/*header*/}
//        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
//          <h3 className="text-3xl font-semibold">
//            Modal Title
//          </h3>
//          <button
//            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//            onClick={() => setShowModal(false)}
//          >
//            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//              ×
//            </span>
//          </button>
//        </div>
//        {/*body*/}
//        <div className="relative p-6 flex-auto">
//          <p className="my-4 text-gray-600 text-lg leading-relaxed">
//            I always felt like I could do anything. That’s the main
//            thing people are controlled by! Thoughts- their perception
//            of themselves! They're slowed down by their perception of
//            themselves. If you're taught you can’t do anything, you
//            won’t do anything. I was taught I could do everything.
//          </p>
//        </div>
//        {/*footer*/}
//        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
//          <button
//            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
//            type="button"
//            style={{ transition: "all .15s ease" }}
//            onClick={() => setShowModal(false)}
//          >
//            Close
//          </button>
//          <button
//            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//            type="button"
//            style={{ transition: "all .15s ease" }}
//            onClick={() => setShowModal(false)}
//          >
//            Save Changes
//          </button>
//        </div>
//      </div>
//    </div>
//  </div>