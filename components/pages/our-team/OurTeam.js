import React from "react";

import Card from "./Card";
import team from "../../../constants/our-team.json";
import Container from "../../common/Container";

export default function OurTeam() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 md:my-20 gap-6">
        {team?.list?.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </Container>
  );
}
