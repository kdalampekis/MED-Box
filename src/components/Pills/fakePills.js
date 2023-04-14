
const pills =
    [
        {
        id: 1,
        name: "Acetaminophen",
        description: "A pain reliever and fever reducer used to treat minor aches and pains, headaches, and reduce fever",
        weight: "500mg",
        company: "Various",
        warnings: "This pill should not be taken if you are pregnant. Overdosing on acetaminophen can cause liver damage, and it should not be taken with alcohol.",
        inventory: 14,
        img: "./pills/Acetaminophen.jpeg"
        },
        {
            id: 2,
            name: "Ibuprofen",
            description: "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and decrease inflammation.",
            weight: "200mg",
            company: "Various",
            warnings: "This medication can increase your risk of heart attack, stroke, and stomach bleeding, especially if taken for a long period or in high doses. Use only as directed.",
            inventory: 14,
            img: "./pills/Ibuprofen.jpeg"
        },
        {    id: 3,
            name: "Aspirin",
            description: "A NSAID used to relieve mild to moderate pain, reduce fever, and prevent blood clots.",
            weight: "81mg",
            company: "Various",
            warnings: "Do not give this medication to children or teenagers with a fever, as it can cause a rare but serious illness called Reye's syndrome. Also, be aware that long-term use of aspirin can increase the risk of stomach bleeding and other side effects.",
            inventory: 14,
            img: "./pills/Aspirin.webp"
        },
        {    id: 4,
            name: "Diphenhydramine",
            description: "A antihistamine used to relieve symptoms of allergies, such as runny nose, sneezing, and itching, as well as to treat insomnia and motion sickness.",
            weight: "25mg",
            company: "Various",
            warnings: "This medication can cause drowsiness and impair your ability to drive or operate machinery. Avoid alcohol and other medications that can cause drowsiness when taking this medication.",
            inventory: 14,
            img: "./pills/Diphenhydramine.jpeg"
        },
        {
            id: 5,
            name: "Loperamide",
            description: "An antidiarrheal medication used to treat diarrhea and to reduce the amount of stool in people with ileostomies.",
            weight: "2mg",
            company: "Various",
            warnings: "Do not use this medication if you have bloody or black stools, or if you have a fever. These symptoms may indicate a serious condition that requires medical attention.",
            inventory: 14,
                img: "./pills/Loperamide.webp"
        },
        {
            id: 6,
            name: "Famotidine",
            description: "A histamine-2 blocker used to treat and prevent heartburn and acid indigestion caused by gastroesophageal reflux disease (GERD).",
            weight: "20mg",
            company: "Various",
            warnings: "TDo not take this medication if you are allergic to famotidine or other acid reducers. Also, tell your doctor if you have kidney disease or if you are taking other medications that can interact with famotidine.",
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



