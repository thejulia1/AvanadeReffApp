//function that converts data retrieved my the calendar picker to format required for the api
function convert(str) {
    const month = str.slice(4,7);
    let num; 
    switch (month) {
        case "Jan":
            num = "01";
            break;
        case "Feb":
            num = "02";
            break;
        case "Mar":
            num = "03";
            break;
        case "Apr":
            num = "04";
            break;
        case "May":
            num = "05";
            break;
        case "Jun":
            num = "06";
            break;
        case "Jul":
            num = "07";
            break;
        case "Aug":
            num = "08";
            break;
        case "Sep":
            num = "09";
            break;
        case "Oct":
            num = "10";
            break;
        case "Nov":
            num = "11";
            break;
        case "Dec":
            num = "12"
            break;

    } 
    const day = str.slice(8,10);
    const year = str.slice(11,15);
    return(year + "-" + num + "-" + day)
} 
module.exports = {
    convert,
}
