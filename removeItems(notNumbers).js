/**
 * Created by apple on 16-10-24.
 */
function filterNumbersFromArray(arr) {
for(var i=arr.length-1;i>0;i--) {
    if (typeof arr[i] != "number") {
        arr.splice(i, 1);
    }
}

}

var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
