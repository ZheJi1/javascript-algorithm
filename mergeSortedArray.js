/**
 * Created by apple on 16-9-30.
 */
function mergeSortedArray(a,b){
    var merged=[],
        aElm=a[0],
        bElm=b[0],
        i=1,
        j=1;
    if(a.length==0)
        return b;
    if(b.length==0)
        return a;

    while(aElm||bElm){
        if((aElm&&!bElm)||(aElm<bElm)){
            merged.push(aElm);
            aElm=a[i++];
        }
        else{
            merged.push(bElm);
            bElm=b[j++];
        }
    }
    return merged;
}

mergeSortedArray([2,5,6,9,],[1,2,3,29]);
