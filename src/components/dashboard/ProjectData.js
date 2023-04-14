const tableData = [
    {
        id: 1,
        avatar: "./users/user3.jpg",
        name: "John Smith",
        email: "jsmith@gmail.com",
        status: 0,
        date: "6 minute ago",
    },
    {   id: 2,
        avatar: "./users/user2.jpg",
        name: "Jane Doe",
        email: "jdoe@gmail.com",
        status: 2,
        date: "6 minute ago",

    },
    {   id: 3,
        avatar: "./users/user3.jpg",
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