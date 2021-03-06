/**
 * Consume stream information
 * 
 * /!\ This code doesn't compile as getReadableStreamSomehow() is
 * undefined. Just an example about the syntax.
 */

const readable = getReadableStreamSomehow();

function nextDataCallback(chunk) {
    console.log(`Received ${chunk.length} bytes of data.`)
}

function errorCallback(err) {
    console.log(`Mmmmh bad news ${err}`)
}

function doneCallback() {
    console.log(`Done!`)
}

readable.on('data', nextCallback);
readable.on('error', errorCallback);
readable.on('end', doneCallback);