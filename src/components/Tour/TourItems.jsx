import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import TourItem from "./TourItem";

import { getTourItems } from "../../reducers/tourReducer";

import { sortByDate } from "../../utils/common";

const TourItems = () => {
  const dispatch = useDispatch();

  const { items = [], isLoading } = useSelector(({ tour }) => tour);

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

  const filtered = sortByDate(
    items
      .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
      .filter((_, i) => i < 5)
  );

  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Концерт" />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ul className="tour-list">
            {filtered.map((item, i) => (
              <TourItem {...item} i={i} key={item.sys.id} />
            ))}
          </ul>
        )}
        <Link className="button-more" to="/tour">
          Все концерты
        </Link>
      </div>
    </Section>
  );
};

export default TourItems;
