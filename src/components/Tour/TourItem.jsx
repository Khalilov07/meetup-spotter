import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Icon from "../Icon/Icon";
import { getLocalDateString } from "../../utils/common";

const TourItem = ({ place, date, city, ticketLink, videoLink, soldOut, i }) => {
  return (
    <li>
      <ScrollAnimation
        className="tour-item"
        animateIn="fadeInLeft"
        animateOut="fadeOutRight"
        delay={i * 100}
        offset={260}
      >
        <div className="tour-item__info">
          <div className="tour-item__date">
            {getLocalDateString(date, {})}
            <p className="tour-item__place">{place}</p>
          </div>
        </div>

        <p className="tour-item__city">{city}</p>

        {!soldOut ? (
          <a
            href={ticketLink || videoLink}
            target="_blank"
            className="tour-item__button"
          >
            {ticketLink ? (
              <>
                <span>Билеты</span>
                <Icon name="arrow-right" />
              </>
            ) : (
              <span>Видео</span>
            )}
          </a>
        ) : (
          <button className="tour-item__button soldout">SOLD OUT</button>
        )}
      </ScrollAnimation>
    </li>
  );
};

export default TourItem;
