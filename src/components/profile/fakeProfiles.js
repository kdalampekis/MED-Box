const users = [
    {
        id: 1,
        name: "John Smith",
        age: 35,
        gender: "male",
        prescription_pills: [
            "Lisinopril",
            "Metoprolol",
            "Lipitor"
        ],
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 42,
        gender: "female",
        prescription_pills: [
            "Sertraline",
            "Lorazepam",
            "Levothyroxine"
        ],
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    },
    {
        id: 3,
        name: "David Johnson",
        age: 57,
        gender: "male",
        prescription_pills: [
            "Losartan",
            "Simvastatin",
            "Aspirin"
        ],
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    }
];

export function getUsers(){
    return users;
}
