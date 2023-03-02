import {Card, CardBody, CardTitle, CardSubtitle, Table, Badge} from "reactstrap";
import {getTableData} from "./ProjectData";


const tableData = getTableData();

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h2">Family Messages</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h4">
            Will be personalized if user logs in
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th><h3>User</h3></th>
                <th><h3>Status</h3></th>
                <th><h3>Messages</h3></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>

                    {tdata.status === "pending" ? (
                        <Badge color="danger" className="ms-3">
                          Urgent
                        </Badge>
                    ) : tdata.status === "holt" ? (
                        <Badge color="warning" className="ms-3">
                          Warning
                        </Badge>
                    ) : (
                        <Badge color="success" className="ms-3">
                          Ok
                        </Badge>
                    )}
                  </td>
                  <td>{tdata.project}</td>
                  <td>{tdata.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
