import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import building1 from '../images/project-images/leksi/dsc_1407.jpg';
import building2 from '../images/project-images/praktiker/dsc_1430.jpg';
import building3 from '../images/project-images/colori/dsc_0010.jpg';

const Timeline = ({ className, ...props }) => {
    return (
        <div className="mb-20 flex flex-col manrope">
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
                    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                        <img class="w-full" src={building1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Лекси</div>
                            <p class="text-gray-700 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: 'none' }}
                    date="2014 - 2016"
                    iconStyle={{ background: '#e31e25', }}
                >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={building2} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Практикер</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: 'none' }}
                    date="2016 - 2019"
                    iconStyle={{ background: 'grey', }}
                >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={building3} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="text-2xl mb-2">Колори</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
    );
};

export default Timeline;