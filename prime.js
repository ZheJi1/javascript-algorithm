/**
 * Created by apple on 16-9-29.
 */
function isPrime(n) {
    var divisor = 2;
    while(n > divisor){
        if(n%divisor == 0){
            return false;
        }
        else {
            divisor++;
        }
    }
    return true;
}

isPrime(137);