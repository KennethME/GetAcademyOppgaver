var today = new Date();
var time = addZero(today.getHours())+':'+addZero(today.getMinutes())+':'+addZero(today.getSeconds());
var dato = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
function addZero(i){
    if (i < 10) {i = "0" + i}
    return i;
}

var idag = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+addZero(today.getHours())+":00:00+01:00";

const api_url = 
    "https://norway-power.ffail.win/?zone=NO1&date="+dato;

async function getApi(url) {
    const response = await fetch(url);
    var data = await response.json();
    model.dagLog = data;
    model.timeLog = model.dagLog[idag];
    updateView()
}
getApi(api_url);

var kwhiTimen = '';


var model =
    {
        dagLog: '',
        timeLog: '',
    };