import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';

import { getTrackItems } from '../../reducers/tracksReducer';

import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import Icon from '../Icon/Icon';

const Tracks = () => {

    const dispatch = useDispatch()
    const { items = [], isLoading } = useSelector(({ tracks }) => tracks)

    useEffect(() => {
        dispatch(getTrackItems())
    }, [])

    console.log(items);

    return (
        <Section className="tracks-section">
            <div className="container">
                <SectionTitle text="Записи" />

                {isLoading ? "Loading" : (
                    items.filter((_, i) => i < 3).map(({ cover, title, sys: { id }, link }) => {
                        <ScrollAnimation key={id} className='tracks-item' animateIn='inLeft' animateOut='fadeOutRight'>
                            <div className="track">
                                <div className="track">
                                    <img src={cover.url} alt={title} />
                                    <Icon name="pause" />
                                </div>
                                <p className="track-date">{ }</p>
                            </div>
                        </ScrollAnimation>
                    })
                )}

            </div>
        </Section >
    );
};

export default Tracks;