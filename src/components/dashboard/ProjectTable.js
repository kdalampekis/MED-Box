import {Card, CardBody, CardTitle, CardSubtitle, Table, Badge, Alert} from "reactstrap";
import {getTableData} from "./ProjectData";
import React from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const tableData = getTableData();

function getColor(pills_missed){
  if(pills_missed >= 1 && pills_missed <=2){
    return "warning";
  }else if (pills_missed > 2){
    return "danger";
  }else {
    return "success"
  }
}

const ProjectTables = () => {
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
              {tableData.map((data, index) => (
                  <Alert color= {getColor(data.status)}>
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <Link to={{pathname: `/profile/${data.id}`}} style={{ textDecoration: 'none' }}>
                            <img
                              src={data.avatar}
                              className="rounded-circle"
                              alt="avatar"
                              width="45"
                              height="45"
                            />
                          </Link>
                          <div className="ms-5">
                            <h6 className="mb-0" style={{color:"black"}}>{data.name}</h6>
                            <span className="text-muted">{data.email}</span>

                          </div>
                        </div>
                      </td>
                      <td>
                          <h5 className="mb-0" style={{color:"black"}}>Pills Missed
                            <Badge color="dark" className="ms-3">
                              {data.status}
                            </Badge>
                          </h5>
                      </td>
                      <td style={{color:"black"}}>{data.date}</td>
                  </Alert>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
  );
};

export default ProjectTables;
