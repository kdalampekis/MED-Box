import {Card, CardBody, CardTitle, Table} from "reactstrap";
import {getComments} from "./CommentData";
import React from "react";
import {Link} from "react-router-dom";


const comments = getComments();

const Comments = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h2">Comments about this pill</CardTitle>
                <Table className="no-wrap mt-4 align-middle" responsive borderless>
                    <tbody>
                        {comments.map((comment) => (
                            <tr key={comment.id}>
                                <td>
                                    <div className="d-flex align-items-center p-2">
                                        <Link to={{pathname: `/profile/${comment.user_id}`}} style={{ textDecoration: 'none' }}>
                                            <img
                                                src={comment.avatar}
                                                className="rounded-circle"
                                                alt="avatar"
                                                width="45"
                                                height="45"
                                            />
                                        </Link>
                                        <div className="ms-5">
                                            <h6 className="mb-0" style={{color:"black"}}>{comment.name}</h6>
                                            <span className="text-muted">{comment.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6>{comment.commentText}</h6>
                                </td>
                                <td style={{color:"black"}}>{comment.date}</td>
                            </tr>
                    ))}
                        </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Comments;
