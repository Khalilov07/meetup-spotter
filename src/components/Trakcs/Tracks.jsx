import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';

import { getTrackItems } from '../../reducers/tracksReducer';

import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import Icon from '../Icon/Icon';
import { getLocalDateString } from '../../utils/common';

const Tracks = () => {

    const dispatch = useDispatch()
    const { items = [], isLoading } = useSelector(({ tracks }) => tracks)

    useEffect(() => {
        dispatch(getTrackItems())
    }, [])

    console.log(items);

    return (
        <Section className="audio-section">
            <div className="container">
                <SectionTitle text="Записи" />
                {isLoading ? "Loading" : (
                    <div className='audios'>
                        {
                            items
                                .filter((_, i) => i < 3)
                                .map(({ cover, date, title, sys: { id }, link }) => (
                                    <ScrollAnimation
                                        key={id}
                                        className='audio-item'
                                        animateIn='fadeInLeft'
                                        animateOut='fadeOutRight'>
                                        <div className="audio">
                                            <div className="audio-image">
                                                <img src={cover.url} alt={title} />
                                                <Icon name="pause" />
                                            </div>
                                            <p className="audio-date">{getLocalDateString(date, {})}</p>
                                            <p className="audio-title">{title}</p>
                                        </div>
                                    </ScrollAnimation>
                                ))

                        }
                    </div>
                )}

            </div>
        </Section >
    );
};

export default Tracks;