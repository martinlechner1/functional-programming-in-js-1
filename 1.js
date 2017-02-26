// Maybe change this to a more real life example, must not be working

const ajaxCall = function(callback) {
   callback({msg: 'Hello world!'});
}

const getServerStuff = function(callback) {
  return ajaxCall(function(json) {
    return callback(json);
  });
};

const getServerStuff1 = ajaxCall;

const callback = function(json) {
    console.log(json.msg);
}

getServerStuff(callback);
getServerStuff1(callback);