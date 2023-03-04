import React from "react";
import "./PopUp.css"
import {ListGroup, ListGroupItem, Button} from "reactstrap";

const timeData = [
    {
        title: "Morning",
        icon: "bi bi-brightness-high",
        color: "warning",
    },
    {
        title: "Noon",
        icon: "bi bi-cloud-moon",
        color: "info",
    },
    {
        title: "Night",
        icon: "bi bi-moon-stars",
        color: "primary",
    },
];

function PopUp(props){
    return( props.trigger) ? (
     <div className="popup">
         <div className="popup-inner">
             <ListGroup flush className="mt-4">
                 {timeData.map((feed, index) => (
                     <ListGroupItem
                         key={index}
                         action
                         href="#"
                         className="d-flex align-items-center p-3 border-0"
                     >
                         <Button
                             className="rounded-circle me-3"
                             size="sm"
                             color={feed.color}
                         >
                             <i className={feed.icon}/>
                         </Button>
                         {feed.title}
                     </ListGroupItem>

                 ))}
             </ListGroup>
             <div className="close-btn">
                 <button type="button" className="btn-close" aria-label="Close" onClick={() => props.setTrigger(false)}/>
             </div>

             {/*<button className="close-btn" onClick={() => props.setTrigger(false)}>
                 Done
             </button>*/}
         </div>
     </div>
        ) : "";
}

export default PopUp;