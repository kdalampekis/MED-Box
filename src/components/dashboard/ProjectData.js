import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
    {
        avatar: user1,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        project: "Flexy React",
        status: "pending",
        weeks: "35",
        budget: "95K",
        date: "6 minute ago",
    },
    {
        avatar: user2,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        project: "Lading pro React",
        status: "done",
        weeks: "35",
        budget: "95K",
        date: "6 minute ago",

    },
    {
        avatar: user3,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        project: "Elite React",
        status: "holt",
        weeks: "35",
        budget: "95K",
        date: "6 minute ago",

    },
    {
        avatar: user4,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        project: "Flexy React",
        status: "pending",
        weeks: "35",
        budget: "95K",
        date: "6 minute ago",

    },
    {
        avatar: user5,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        project: "Ample React",
        status: "done",
        weeks: "35",
        budget: "95K",
        date: "6 minute ago",

    },
];

export function getTableData(){
    return tableData;
};

export function getLenght(){
    return tableData.length;
}