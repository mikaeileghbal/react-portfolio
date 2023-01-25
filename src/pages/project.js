import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { portfolio } from "../data/portfolio";

export default function Project() {
  const [project, setProject] = useState({});
  const { title } = useParams();

  useEffect(() => {
    setProject(
      portfolio.filter((item) => item.title === title.replace(/-/g, " "))[0]
    );
  }, [title]);

  return (
    <div>
      <h1>projct: {project.title}</h1>
      <p>
        lorem adasdaasd asd adas dasdsd dasdaasdsad sadsjakdadhasdhjdh sahdja
        sajhd sajhd sjdk hsadh ahdkjs sahd{" "}
      </p>
    </div>
  );
}
