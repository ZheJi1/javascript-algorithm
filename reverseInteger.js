/**
 * Created by apple on 16-10-28.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result=0;
    var reminder=0;
    if(x==0){
        return 0;
    }
    if(x<0){
        x=(-1)*x;
        while(x!==0){
            reminder=x%10;
            result=result*10+reminder;
            x=Math.floor(x/10);
        }
        result=(-1)*result;
        if(result<=-Math.pow(2,31)){
            return 0;
        }
        return result;
    }
    while(x!==0){
        reminder=x%10;
        result=result*10+reminder;
        x=Math.floor(x/10);
    }
    if(result>=Math.pow(2,31)-1){
        return 0;
    }

    return result;

};
