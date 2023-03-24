import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
export default function Instructions(){
    return(
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="feather feather-book-open" style={{marginRight: "20px"}}>
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                            </svg>
                            <span>User manual</span>
                </CardTitle>
                <CardBody>
                    <h3>The specifics will be decided later</h3>
                </CardBody>
            </Card>
  )
}