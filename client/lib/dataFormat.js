export default function dataFormat(format, data){
    if(Array.isArray(data)) return arrayFormat(format, data)
    else return singleItemFormat(format, data)
}

const singleItemFormat = (format = null, data) => {
    if(!format) return data
    let obj = {}
    for(let field of format) {
        obj[field] = data[field]
    }

    return obj
}

const arrayFormat = (format = null, data) => {
    if(!format) return data
    let filteredObj = []
    for(item in data){
        filteredObj.push(singleItemFormat(item))
    }

    return filteredObj
}
