import {Button, Col, Row} from "reactstrap";
import TopCards from "../components/dashboard/TopCards";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import React, {useEffect, useState} from "react";
import ProfileCard from "../components/profile/ProfileCard";
import Instructions from "../components/Instructions";
import ProjectTable from "../components/dashboard/ProjectTable";
import {Link} from "react-router-dom";
import axios from "axios";
import { API_URL } from '../api';
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


  const [next_user, set_next_user] = useState([])




  useEffect(() => {
    axios.get(API_URL+ 'get_next_user/')
        .then(response => {
          set_next_user(response.data);
          console.log(next_user)
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
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

      {/***Table ***/}
      <Row>
        <Col sm="6" md="6" lg="6">
          <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Time"
              earning= {time}
              icon="bi bi-clock"
          />
        </Col>
          <Col sm="6" md="6" lg="6">
          <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Date"
              earning={date}
              icon="bi bi-calendar"
          />
          </Col>
            <Col sm="6" md="6" lg="6">
              <Link to={{pathname: '/pillCard'}} style={{ textDecoration: 'none' }}>
              <TopCards
                bg="bg-navy text-info"
                title="Refunds"
                subtitle="Click me"
                earning="Take a Pill"
                icon = "bi bi-capsule"
            />
              </Link>
        </Col>
        <Col  sm="6" md="6" lg="6">
          <TopCards
                bg="bg-light-warning text-danger"
                title="Refunds"
                subtitle="Next Pill Intake"
                earning={next_user.full_name}
                icon = "bi bi-bell"
            />
        </Col>
      </Row>
      <ProfileCard/>
      <Row >
        <Col xs="10" sm="10" md="12" lg="12" xl="12">
          <ProjectTable/>
          <Instructions />
        </Col>
      </Row>
    </div>
  );
}

export default Starter;
