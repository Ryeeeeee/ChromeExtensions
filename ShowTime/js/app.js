function show_time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    minute = (minute > 10)? minute : ('0' + minute);
    second = (second > 10)? second : ('0' + second);

    document.getElementById('clockDiv').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(function(){
        show_time();
    }, 1000);
}

show_time();
