import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Agile Methodology",
      description:
        "Technology, a powerful force shaping our world, presents both the promise of progress and the challenge of ethical responsibility in its relentless pursuit of innovation.",
      bannerStyle: "banner-bg-agile",
    },
    header: "Key principles of Agile methodology include:",
  };
  return (
    <ServicesPageContent key={Index} item={content} otherChildren={<List />} />
  );
}

function List() {
  const points = [
    "Iterative Development: Agile projects are divided into small increments or iterations, typically lasting from one to four weeks, called sprints. Each sprint results in a potentially shippable product increment.",
    "Continuous Feedback: Agile encourages constant collaboration between cross-functional teams, stakeholders, and customers. Feedback is gathered regularly to ensure that the product meets the evolving needs and expectations of the users.",
    "Adaptability: Agile embraces change, recognizing that requirements can evolve throughout the project. It allows for flexibility in adjusting priorities and making course corrections based on feedback and new insights.",
    "Cross-functional Teams: Agile teams are composed of individuals with diverse skills and expertise necessary to deliver a working product. Collaboration and communication within the team are prioritized to maximize productivity and innovation.",
    "Customer Collaboration: Agile promotes active involvement of customers or stakeholders throughout the development process. This ensures that the product aligns with their needs and provides value.",
    "Emphasis on Individuals and Interactions: Agile values interactions between team members over rigid processes and tools. Face-to-face communication is preferred to foster transparency, trust, and a shared understanding of goals.",
    "Common Agile frameworks and methodologies include Scrum, Kanban, Extreme Programming (XP), Lean, and Dynamic Systems Development Method (DSDM). Each framework has its own set of practices and guidelines for implementing Agile principles effectively.",
    "Agile methodologies have gained popularity not only in software development but also in various other industries due to their ability to promote innovation, increase responsiveness to change, and deliver high-quality products that meet customer expectations.",
  ];
  return (
    <div>
      {points?.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <p className="text-md md:text-lg mt-3 font-light text-justify leading-[21px] md:leading-[45px]">
            •
          </p>
          <p className="text-md md:text-lg mt-3 font-light text-justify leading-[21px] md:leading-[45px]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
