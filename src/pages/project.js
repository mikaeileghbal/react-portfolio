import React from "react";
import { useParams } from "react-router";

export default function Project() {
  const { title } = useParams();

  console.log(title);
  return (
    <div>
      project detail
      <p>
        lorem adasdaasd asd adas dasdsd dasdaasdsad sadsjakdadhasdhjdh sahdja
        sajhd sajhd sjdk hsadh ahdkjs sahd{" "}
      </p>
    </div>
  );
}
