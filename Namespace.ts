/// <reference path="./Utils.ts" />

namespace userutils{
    export class Utils extends Parent implements userType{
        getname(){
            return this.name;
        }
        
    }
}
let N1=new userutils.Utils();
N1.setname("Rahujina=======")
console.log(N1.getname());
