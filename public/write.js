function write(data) {
    var dom = document.getElementById('res');
    if(typeof arguments[1] === 'string') {
        dom.innerHTML += '<p><strong style="margin-bottom:10px;font-weight:bold;font-size:20px;">' + data + '<strong></p>';
    }else {
        dom.innerHTML += '<p>' + JSON.stringify(data) + '</p>';
    }
    
    console.log(data);
}