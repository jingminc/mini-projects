function leap(){
    var year, obj, text;
    obj = document.getElementById('dv');
    year = document.getElementById('num').value;
    if(!isNaN(parseInt(year))){
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        {
            text = '&nbsp;is a leap year.';
            document.getElementById("demo").innerHTML= '<strong>' + year +'</strong>' + text;
            obj.style.display = ""
        }
        else
        {
            text = '&nbsp;is not a leap year.'
            document.getElementById("demo").innerHTML='<strong>' + year +'</strong>' + text;
            obj.style.display = ""
        }
    }
    else
    {
        alert("Please enter a valid year!");
    }
}

function reset_1() {
    str_1 = document.getElementById('num');
    str_2 = document.getElementById("demo");
    str_1.value = "";
    str_2.value = "";
}

function reset_2() {
    i1 = document.getElementById('i1');
    i2 = document.getElementById('i2');
    i1.value = "";
    i2.value = "";
}
        
function isleapYear(year) {
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flag = true;
    }
    return flag
}

function lylist() {
    var i1, i2;
    i1 = document.getElementById('i1').value
    i2 = document.getElementById('i2').value;
    if (i1>i2) {
        alert("End year must be greater than start year!")
    }
    var list_ly = [];
    for (var i = i1; i <= i2; i++) {
        if (isleapYear(i)) {
            list_ly[list_ly.length] = i;
        }
    }
    document.getElementById("list_year").innerHTML=list_ly.join(', ');
    }
        