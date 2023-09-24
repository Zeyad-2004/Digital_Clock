$(document).ready(function() {
    function showTime(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var period = "AM";

        if(hours >= 12){
            period = "PM";
        }
        hours %= 12;
        
        hours   = (hours < 10)?   "0" + hours: hours;
        minutes = (minutes < 10)? "0" + minutes: minutes;
        seconds = (seconds < 10)? "0" + seconds: seconds;

        $('.no-h').text(hours);
        $('.no-m').text(minutes);
        $('.no-s').text(seconds);
        $('.am-pm').text(period);

        setTimeout(showTime, 1000);
    }
    showTime();
})