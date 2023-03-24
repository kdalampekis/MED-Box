import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
    {
        id: 1,
        avatar: user1,
        name: "John Smith",
        email: "jsmith@gmail.com",
        status: 0,
        date: "6 minute ago",
    },
    {   id: 2,
        avatar: user2,
        name: "Jane Doe",
        email: "jdoe@gmail.com",
        status: 2,
        date: "6 minute ago",

    },
    {   id: 3,
        avatar: user3,
        name: "David Johnson",
        email: "djohnson@gmail.com",
        status: 3,
        date: "6 minute ago",

    },
];

export function getTableData(){
    return tableData;
};

export function getLenght(){
    return tableData.length;
}