import { Col, Row } from "reactstrap";
import Feeds from "../components/dashboard/Feeds";
//import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import React, {useEffect, useState} from "react";
import {getLenght} from "../components/dashboard/ProjectData";
const BlogData = [
  {
    image: bg1,
    title: "Pill#1",
    subtitle: "2 comments, 1 Like",
    description: "Useful info for the effects and ",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Pill#2",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Pill#3",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Pill#4",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

function Starter(){

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);


  let date = dateState.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  let time = dateState.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  //let dataLength = getLenght();

  return (
    <div>
      {/***Top Cards***/}
      {/*<Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>*/}
      {/***Sales & Feed***/}
      <Row>
        {/*<Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>*/}
          <Col sm="6" lg="5">
            <TopCards
                bg="bg-light-success text-success"
                title="Profit"
                subtitle="Time"
                earning= {time}
                icon="bi bi-clock"
            />
          </Col>
        <Col sm="6" lg="5">
          <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Date"
              earning={date}
              icon="bi bi-calendar"
          />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col sm="6" lg="6" xl="5" xxl="7">
          <Feeds />
        </Col>
      </Row>
      {/*<Row>
        <Col lg="9">
          <ProjectTables />
        </Col>
      </Row>*/}
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Starter;
