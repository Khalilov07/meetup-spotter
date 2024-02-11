import React, { useEffect, useState } from 'react';
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
    const [audio] = useState(new Audio())
    const [playing, setPlaying] = useState(false)
    const [currentAudio, setCurrentAudion] = useState(null)

    useEffect(() => {
        dispatch(getTrackItems())
    }, [])

    const handleAudionClick = (audio) => {
        setPlaying((prev) => {
            const isPlaying = audio.sys.id === currentAudio?.sys?.id ? !prev :

                audio.src = audio.link.url

            !isPlaying ? audio.pause() : audio.play()

            return isPlaying;
        })
    }

    return (
        <Section className="audio-section">
            <div className="container">
                <SectionTitle text="Записи" />
                {isLoading ? "Loading" : (
                    <div className='audios'>
                        {
                            items
                                .filter((_, i) => i < 3)
                                .map((audio) => {

                                    const { cover, date, title, sys: { id }, link } = audio

                                    return (
                                        <ScrollAnimation
                                            key={id}
                                            className='audio-item'
                                            animateIn='fadeInLeft'
                                            animateOut='fadeOutRight'>
                                            <div className="audio" onClick={() => handleAudionClick(audio)}>
                                                <div className="audio-image">
                                                    <img src={cover.url} alt={title} />
                                                    <Icon name="pause" />
                                                </div>
                                                <p className="audio-date">{getLocalDateString(date, {})}</p>
                                                <p className="audio-title">{title}</p>
                                            </div>
                                        </ScrollAnimation>
                                    )
                                })

                        }
                    </div>
                )}

            </div>
        </Section >
    );
};

export default Tracks;