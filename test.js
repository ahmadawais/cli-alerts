const alert = require('./index.js');

alert();
alert({type: `success`, msg: `Everything finished!`});
alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
alert({type: `warning`, msg: `You didn't add something!`});
alert({type: `info`, msg: `Awais is awesome!`});
alert({type: `error`, msg: `Something went wrong!`});
