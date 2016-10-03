/**
 * Created by apple on 16-9-30.
 */
function reverse(str){
    var rtnStr='';
    for(i=str.length-1;i>=0;i--){
        rtnStr +=str[i];
    }
    return rtnStr;
}

reverse('you are a nice dude');