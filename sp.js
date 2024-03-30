const singleton = (function(){
    let instance;

    function createInstance (){
       const object = new Object('Object instance 1');
       return object 
    }

    return {
        getInstance:function(){
            !instance && (instance = createInstance())

            return instance
        }
    }

})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();


console.log(instance1);
console.log(instance2);
console.log(instance1 === instance2);