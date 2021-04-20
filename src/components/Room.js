import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room(room) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
          {/* images[0]  -> cannot read poperty 0
          FIX THIS SHIT! */}
        <img src={images[0] || defaultImg} alt="single room" />
      </div>
    </article>
  );
}
