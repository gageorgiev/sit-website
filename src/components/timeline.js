import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import building1 from '../images/carousel-building1.jpg';
import building2 from '../images/carousel-building2.jpg';
import building3 from '../images/carousel-building3.jpg';

const Timeline = ({ className, ...props }) => {
    return (
        <div className="mb-20 flex flex-col">
            <p className="mb-4 text-4xl text-gray-800 self-center">
                Нашите проекти
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
                            <div class="text-2xl mb-2">Проект 1</div>
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
                            <div class="text-2xl mb-2">Проект 2</div>
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
                            <div class="text-2xl mb-2">Проект 3</div>
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