export const singleItemFormat = (format = null, data) => {
    if(!format) return data
    let obj = {}
    for(let field of format) {
        obj[field] = data[field]
    }

    return obj
}

export const arrayFormat = (format = null, data) => {
    if(!format) return data
    let filteredObj = []
    for(let item of data){
        filteredObj.push(singleItemFormat(format, item))
    }

    return filteredObj
}


export const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}