import {Card, CardBody, CardTitle, CardSubtitle, Table, Badge, Alert} from "reactstrap";
import {getTableData} from "./ProjectData";
import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import { API_URL } from '../../api';
import "./projecttable.css";

function getColor(pills_missed){
  if(pills_missed === 0){
    return "success";
  }else if (pills_missed <= 2){
    return "warning";
  }else {
    return "danger"
  }
}

function getWarningText(pi){
    if (pi === 0){
        return "Great job! It looks like you took all your pills as prescribed. " +
            "Keep up the good work and remember to continue taking your medication on time " +
            "for optimal results."
    }else if (pi <= 2){
        return "Hey, it seems you missed taking quite a few pills. Please be careful and take your medication as prescribed to avoid any complications. " +
            "Remember that missing doses can impact the effectiveness of your treatment.";
    }else {
        return "You missed taking many pills. This can significantly impact the effectiveness of your " +
            "medication and put your health at risk."

    }
}

const ProjectTables = () => {
  const [users, setusers] = useState([])

  useEffect(() => {
    axios.get(API_URL+'count_taken/')
        .then(response => {
          setusers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }, [])    ;

  return (
      <Card>
        <CardBody>
          <CardTitle tag="h2">Device Notifications</CardTitle>
          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th><h5>Click on the icon to see history</h5></th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, index) => (
                  <Alert color= {getColor(data.missed)}>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <Link to={{pathname: `/profile/${data.id}`}} style={{ textDecoration: 'none' }}>
                            <img
                              src={data.imgSrc}
                              className="rounded-circle"
                              alt="avatar"
                              style={{maxWidth:"50px"}}
                            />
                          </Link>
                            <div className="ms-5 mt-3">
                                <h6 className="mb-0" style={{color:"black"}}>{data.name}</h6>
                                <span className="text-muted">{data.email}</span>
                                <div style={{display: "inline-block", padding:"10px"}}>
                                    <h5 className="mb-0" style={{color:"black", display: "inline-block"}}>Pills Missed</h5>
                                    <Badge color="dark" className="ms-4" style={{display: "inline-block"}}>{data.missed}</Badge>
                                </div>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <div className="d-flex align-items-center p-2">
                              <h5 className="mb-0" style={{color:"black"}}>
                                  {getWarningText(data.missed)}
                              </h5>
                          </div>
                      </td>
                    </tr>
                  </Alert>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
  );
};

export default ProjectTables;
