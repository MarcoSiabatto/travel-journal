import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        alt="image-url"
        className="card--img"
      />
      <div className="card--body">
        <div className="card--headers">
          <BsFillGeoAltFill className="card--icon" />
          <p className="card--location">{props.location}</p> &nbsp;
          <a href={props.googleMapsUrl} className="card--maps">
            View on Google maps
          </a>
        </div>
        <section className="card--desc">
          <h2 className="card--title">{props.title}</h2>
          <span className="card--dates">{props.startDate}</span> -&nbsp;
          <span className="card--dates">{props.endDate}</span>
          <article className="card--description">
            {props.description}
          </article>
        </section>
      </div>
    </div>
  );
};

export default Card;
