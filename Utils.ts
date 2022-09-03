
namespace userutils{
    export class Parent{
        name;
        setname(name){
            return this.name=name;
        }
 
    }
    export interface userType{
        getname();
    }
}