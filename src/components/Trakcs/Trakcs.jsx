import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import { getTrackItems } from '../../reducers/tracksReducer';
import { getLocalDateString } from '../../utils/common';

import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import Icon from '../Icon/Icon';

const Tracks = () => {

    const dispatch = useDispatch()
    const { items = [], isLoading } = useSelector(({ tracks }) => tracks)
    const [audio] = useState(new Audio())
    const [playing, setPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState(null)

    useEffect(() => {
        dispatch(getTrackItems())
    }, [])

    const handleAudionClick = (track) => {
        console.log(track);
        setPlaying((prev) => {

            console.log();
            const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;

            audio.src = track.link?.url
            !isPlaying ? audio.pause() : audio.play()

            return isPlaying;
        })

        setCurrentTrack(track)

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
                                .map((track) => {
                                    const {
                                        cover,
                                        title,
                                        sys: { id },
                                        date
                                    } = track;

                                    return (
                                        <ScrollAnimation
                                            key={id}
                                            className='audio-item'
                                            animateIn='fadeInLeft'
                                            animateOut='fadeOutRight'>
                                            <div className="audio" onClick={() => handleAudionClick(track)}>
                                                <div className="audio-image">
                                                    <img src={cover.url} alt={title} />
                                                    {!!playing && currentTrack.sys.id === id && <Icon name="pause" />}
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

                <Link to="/tour" className="button-more">
                    Все релизы
                </Link>

            </div>
        </Section >
    );
};

export default Tracks;