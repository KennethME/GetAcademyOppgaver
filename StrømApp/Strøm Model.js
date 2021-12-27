const api_url = 
    "https://norway-power.ffail.win/?zone=NO1&date=2020-02-17";

async function getApi(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    
    if (response) {
        hideLoader();
    }
    model = data;
    updateView(data)
}
getApi(api_url);
function hideLoader() {
    
}

var model =
    {

    };
// const model = 
//     {
//     name: '',
//     age: '',
//     count: '',
//     };