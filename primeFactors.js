/**
 * Created by apple on 16-9-29.
 */
function primeFactors(n) {
    var factors=[];
    var divisor=2;

    while(n>2){
        if(n%divisor == 0){
            factors.push(divisor);
            n=n/divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}

primeFactors(69);
