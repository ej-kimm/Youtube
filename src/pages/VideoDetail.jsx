import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function VideoDetail() {
  // const { videoId } = useParams();
  const { state } = useLocation();
  console.log(state);
  return <div>VideoDetail</div>;
}
