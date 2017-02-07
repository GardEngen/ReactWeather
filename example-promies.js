// function getTemCallback (location, callback) {
//    callback(undefined,  78);
//    callback("City not found");
// }
//
// getTemCallback("Oslo", function (err, temp) {
//     if(err){
//         console.log("error", err)
//     }
//             else{
//                 console.log("success", temp)
//             }
//         });
// function getTempPromise(location){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(57);
//             reject("City not found");
//         }, 1000);
//     });
// }
//
// getTempPromise("Oslo").then(function (temp) {
//     console.log("promes success", temp);
// }, function (err) {
//     console.log("promes error", err);
// });
function addPromise(a, b){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if((typeof a === "number") && (typeof b === "number"))
            {
                resolve(a+b);
            }
            else
            {
                reject("a or b is not a number");
            }}, 1000);
    });
}
addPromise(2,"d").then(function (sum) {
    console.log("promes success", sum);
}, function (err) {
    console.log("promes error", err);
});
