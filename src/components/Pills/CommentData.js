const commentsData = [
    {
        id: 1,
        user_id: 1,
        avatar: "./users/user1.jpg",
        name: "John Smith",
        email: "jsmith@gmail.com",
        commentText: "This pill is wonderful",
        date: "6 minute ago",
    },
    {   id: 2,
        user_id: 2,
        avatar: "./users/user2.jpg",
        name: "Jane Doe",
        email: "jdoe@gmail.com",
        commentText: "This pill is awful",
        date: "6 minute ago",

    },
    {   id: 3,
        user_id: 3,
        avatar: "./users/user3.jpg",
        name: "David Johnson",
        email: "djohnson@gmail.com",
        commentText: "This pill is ok",
        date: "6 minute ago",

    },
];

export function getComments(){
    return commentsData;
};

