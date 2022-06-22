main_app.filter('DateFilter', function () {
    return function (date) {
        dateModified = date.split(" ");
        var dateIs = dateModified[0];
        dateModified = dateIs.split("-");
        year = dateModified[0];
        mon = dateModified[1];
        date = dateModified[2];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        years = year.charAt(2) + year.charAt(3);
        var month = Months[mon - 1]
        returnDate = date + '-' + month + '-' + years
        return returnDate;
    }
})