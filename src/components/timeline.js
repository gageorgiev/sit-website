import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import building1 from '../images/project-images/leksi/dsc_1407.jpg';
import building2 from '../images/project-images/praktiker/dsc_1430.jpg';
import building3 from '../images/project-images/colori/dsc_0010.jpg';
import { Link } from 'gatsby';

const Timeline = ({ className, ...props }) => {
    return (
        <div className="mb-20 flex flex-col items-center manrope">
            <p className="mb-4 text-4xl text-gray-800 self-center garamond">
                НАШИТЕ ОБЕКТИ
            </p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: 'none' }}
                    date="2011 - 2014"
                    iconStyle={{ background: 'grey', }}
                >
                    <Link to='/projects/leksi' >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                        <img class="w-full" src={building1} alt="Снимка на сградата на Лекси" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Супермаркет "Лекси"</div>
                        </div>
                    </div>
                    </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: 'none' }}
                    date="2014 - 2016"
                    iconStyle={{ background: '#e31e25', }}
                >
                    <Link to='/projects/praktiker' >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={building2} alt="Снимка на сградата на Практикер" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Строителен хипермаркет "Практикер"</div>
                        </div>
                    </div>
                    </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: 'none' }}
                    date="2016 - 2019"
                    iconStyle={{ background: 'grey', }}
                >
                    <Link to='/projects/colori' >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={building3} alt="Снимка на сградата на Колори" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Фабрика "Колори"</div>
                        </div>
                    </div>
                    </Link>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Link to="/projects">
                <button class="bg-gray-300 hover:bg-red-100 hover:text-red-600 font-bold text-xl manrope py-2 px-4 rounded focus:bg-red-200 focus:border-red-700">
                    Всички обекти
                </button>
            </Link>
        </div>
    );
};

export default Timeline;