
const pills =
    [
        {
        id: 1,
        name: "Acetaminophen",
        description: "A pain reliever and fever reducer used to treat minor aches and pains, headaches, and reduce fever",
        weight: "500mg",
        company: "Various",
        warnings: "This pill should not be taken if you are pregnant",
        inventory: 14,
        img: "./pills/Acetaminophen.jpeg"
        },
        {
            id: 2,
            name: "Ibuprofen",
            description: "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and decrease inflammation.",
            weight: "200mg",
            company: "Various",
            warnings: "This pill should not be taken if you are pregnant",
            inventory: 14,
            img: "./pills/Ibuprofen.jpeg"
        },
        {    id: 3,
            name: "Aspirin",
            description: "A NSAID used to relieve mild to moderate pain, reduce fever, and prevent blood clots.",
            weight: "81mg",
            company: "Various",
            warnings: "This pill should not be taken if you are pregnant",
            inventory: 14,
            img: "./pills/Aspirin.webp"
        },
        {    id: 4,
            name: "Diphenhydramine",
            description: "A antihistamine used to relieve symptoms of allergies, such as runny nose, sneezing, and itching, as well as to treat insomnia and motion sickness.",
            weight: "25mg",
            company: "Various",
            warnings: "This pill should not be taken if you are pregnant",
            inventory: 14,
            img: "./pills/Diphenhydramine.jpeg"
        },
        {
            id: 5,
            name: "Loperamide",
            description: "An antidiarrheal medication used to treat diarrhea and to reduce the amount of stool in people with ileostomies.",
            weight: "2mg",
            company: "Various",
            warnings: "This pill should not be taken if you are pregnant",
            inventory: 14,
            img: "./pills/Loperamide.webp"
        },
        {
            id: 6,
            name: "Famotidine",
            description: "A histamine-2 blocker used to treat and prevent heartburn and acid indigestion caused by gastroesophageal reflux disease (GERD).",
            weight: "20mg",
            company: "Various",
            warnings: "This pill should not be taken if you are pregnant",
            inventory: 14,
            img: "./pills/Famotidine.webp"
        },
    ]

export function getPills(){
    return pills;
}

export function getName(id){
    return pills[id-1].name
}
export function getDesc(id){
    return pills[id-1].description
}
export function getW(id){
    return pills[id-1].weight
}
export function getCompany(id){
    return pills[id-1].company
}
export function getImg(id){
    return pills[id-1].img
}
export function getInv(id){
    return pills[id-1].inventory
}
export function getWarning(id){
    return pills[id-1].warnings
}



