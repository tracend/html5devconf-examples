var Model = require('scuttlebutt/model');
var model = new Model;

var shoe = require('shoe');
var stream = shoe('/sock');

stream.pipe(model.createStream()).pipe(stream);

var keys = {};
model.on('update', function (key, value, source) {
    if (!keys[key]) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        
        var label = document.createTextNode(key);
        div.appendChild(label);
        
        keys[key] = document.createElement('input');
        keys[key].addEventListener('keydown', onkeydown);
        
        div.appendChild(keys[key]);
    }
    
    keys[key].value = value;
});
