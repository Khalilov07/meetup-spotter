import React, { useEffect } from "react";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import { useDispatch } from "react-redux";
import { getTourItems } from "../../reducers/tourReducer";

const TourItems = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Концерт" />
      </div>
    </Section>
  );
};

export default TourItems;
