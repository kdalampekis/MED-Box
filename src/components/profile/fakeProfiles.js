const users = [
    {
        id: 1,
        name: "John Smith",
        email: "example@gmail.com",
        phone: "6942423473",
        age: 35,
        gender: "male",
        address: "Magnisias 36 Nikaia",
        prescription_pills: {
            "Lisinopril": 3,
            "Metoprolol": 4,
            "Lipitor": 5
        },
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "example@gmail.com",
        phone: "6942423473",
        age: 42,
        gender: "female",
        address: "Magnisias 36 Nikaia",
        prescription_pills: {
            "Sertraline": 3,
            "Lorazepam": 4,
            "Levothyroxine": 5
        },
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    },
    {
        id: 3,
        name: "David Johnson",
        email: "example@gmail.com",
        phone: "6942423473",
        age: 57,
        gender: "male",
        address: "Magnisias 36 Nikaia",
        prescription_pills: {
            "Losartan": 3,
            "Simvastatin": 4,
            "Aspirin": 5
        },
        img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    }
];

export function getUsers(){
    return users;
}

export function getUserName(id){
    return users[id-1].name;
}
export function getEmail(id){
    return users[id-1].email;
}
export function getUserAge(id){
    return users[id-1].age;
}
export function getUserGender(id){
    return users[id-1].gender;
}

export function getUserPills(id){
    return users[id-1].prescription_pills;
}
export function getUserImg(id){
    return users[id-1].img;
}
export function getPillSum(id){
    let sum = 0;
   for(let key in users[id-1].prescription_pills){
       sum += users[id-1].prescription_pills[key];
   }
   return sum;
}
export function getUserPhone(id){
    return users[id-1].phone;
}
export function getUserAddress(id){
    return users[id-1].address;
}

