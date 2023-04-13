import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { IDetails } from "../interfaces/IDetails";

function ArticleDetails() {
  const params = useParams();
  const API_URL = `https://api.spaceflightnewsapi.net/v4/articles/${params.elementId}`;

  const [details, setDetails] = useState<IDetails>();

  const articlesFetch = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setDetails(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    articlesFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {details && (
        <Row>
          <Col xs={6} className="mx-auto">
            <h1 className="mb-5">{details.title}</h1>
            <img className="img-fluid mb-3" src={details.image_url} alt={details.title} />
            <p className="text-center">{details.summary}</p>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ArticleDetails;
