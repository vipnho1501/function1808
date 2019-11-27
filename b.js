// const a = console.log;

// function getLog() {
//     return console.log;
//     // return '';
// }

// getLog()(1);

function doSth(fn) {
    fn(1);
}

doSth(function (x) { console.log(x * 2) });
