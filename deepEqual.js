let obj1 = {
    name: `JR`,
    age: 31
}

let obj2 = {
    name: `Lazuli`,
    age: 28
}

let obj3 = {
    age: 31,
    name: `JR`,
}


function deepEqual ( value1, value2){

    if(typeof value1 != "object" || value1 === null){
        return value1 === value2;
    }else {
        let keys1 = Object.keys(value1);
        let keys2 = Object.keys(value2);

        if (keys1.length !== keys2.length ) return false;

        for( const key in value1) {
            if(value1[key] !== value2[key]){
                console.log(`false: on key "${key}", ${value1[key]} compared with ${value2[key]}`);
                return false;
            } 
        }

       return true;
    }

}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj3, obj2));