import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
export default function VideoCard({ videoItem }) {
  // console.log(videoItem)

  return (
    videoItem ? (<div>
      <Card
        style={{
          height: "90px",
          width: "150px",
          background: "lightskyblue",
          marginTop: "3px",
          margin: "15px"
        }}
      >
        <CardBody style={{ height: "100%", width: "100%", display: "flex" }}>
          <CardImg style={{ height: "100%", width: "100%" }} src={videoItem.snippet.thumbnails.high.url}></CardImg>
          <CardText
            style={{ height: "100%", width: "70%", fontSize: "xx-small" }}
          >
            <CardTitle style={{ fontSize: "xx-small" }}></CardTitle>
            <CardTitle style={{ fontSize: "xx-small" }}></CardTitle>
          </CardText>
        </CardBody>
      </Card>
    </div>) : null

  );
}
