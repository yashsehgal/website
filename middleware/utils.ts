
const baseURL = "https://hekors-strapi.herokuapp.com";

function mediaURL(fileName: string) {
    return `${baseURL}/uploads/${fileName}`;
}

function parseDate(date: string = "") {
    const allMonths: any = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "Aug",
        "09": "Sept",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
    };
    return {
        year: date.substring(0, 3),
        month: allMonths[date.substring(5, 7)],
        date: date.substring(8, 10)
    }
}

export {
    baseURL,
    mediaURL,
    parseDate
}