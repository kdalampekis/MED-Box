import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";


const commentsData = [
    {
        id: 1,
        user_id: 1,
        avatar: user1,
        name: "John Smith",
        email: "jsmith@gmail.com",
        commentText: "This pill is wonderful",
        date: "6 minute ago",
    },
    {   id: 2,
        user_id: 2,
        avatar: user2,
        name: "Jane Doe",
        email: "jdoe@gmail.com",
        commentText: "This pill is awful",
        date: "6 minute ago",

    },
    {   id: 3,
        user_id: 3,
        avatar: user3,
        name: "David Johnson",
        email: "djohnson@gmail.com",
        commentText: "This pill is ok",
        date: "6 minute ago",

    },
];

export function getComments(){
    return commentsData;
};

