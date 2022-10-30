import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, rating, image_url, total_view } = news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            className="me-2"
            roundedCircle
            src={author.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p>
              {author?.name} <br /> {author?.published_date}
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="text-center">
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="text-warning me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
