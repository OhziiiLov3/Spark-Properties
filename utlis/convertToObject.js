



export function convertToSerializableObject(leanDocument) {
    if (!leanDocument || typeof leanDocument !== 'object') {
        return {}; 
    }

    for (const key of Object.keys(leanDocument)) {
        const value = leanDocument[key];
        if (value && value.toJSON && value.toString) {
            leanDocument[key] = value.toString();
        }
    }

    return leanDocument;
}


// export function convertToSerializableObject(leanDocument){
//     for(const key of Object.keys(leanDocument)){
//         const value = leanDocument[key];
//         if(value && value.toJSON && value.toString()){
//             leanDocument[key] = value.toString();
//         }
//     }
//     return leanDocument
// }