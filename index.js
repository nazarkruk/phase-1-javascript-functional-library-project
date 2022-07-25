function myEach(collection, callback){
    if (typeof collection === 'object' &&
        collection !== null &&
        !Array.isArray(collection)){
            let arr = Object.values(collection)
            myEach(arr, callback)
            return collection
        }else{
            for(let i = 0; i < collection.length; i ++){
                callback(collection[i])
            }
            return collection
        }
}      

function myMap(collection, callback){
    if (typeof collection === 'object' &&
        collection !== null &&
        !Array.isArray(collection)){
            let arr = Object.values(collection)
            return myMap(arr, callback)
        
            
        }else{
            let updatedArr = []
            for(let item of collection){
                updatedArr.push(callback(item))
            }
            console.log(updatedArr)
            return updatedArr
        }
}

function myReduce(collection, callback, acc){
    if (typeof collection === 'object' &&
    collection !== null &&
    !Array.isArray(collection)){
        let arr = Object.values(collection)
        return myReduce(arr, callback, acc)
        
    }else{
        if(!acc){
            acc = collection[0]
            collection = collection.slice(1)
        }
        for(let i = 0; i < collection.length; i ++){
            let value = collection[i]
            acc = callback(acc, value, collection)
            
        }
        return acc

    }
}

function myFind(collection, predicate){
    if (typeof collection === 'object' &&
    collection !== null &&
    !Array.isArray(collection)){ 
        let arr = Object.values(collection)
        return myFind(arr, predicate)
}else{
    for(let i = 0; i < collection.length; i ++){
        if (predicate(collection[i])=== true){
            return collection [i]
            } 
        }   
    }
}

function myFilter(collection, predicate){
    if (typeof collection === 'object' &&
    collection !== null &&
    !Array.isArray(collection)){
        let arr = Object.values(collection)
        return myFilter(arr, predicate)
}else{
    let newCollection = []
    for(let i = 0; i < collection.length; i ++){
        
        if ((predicate(collection[i])) === true){
            newCollection.push(collection[i])
            //console.log(newCollection)
            } 
            
        }return newCollection 
    }
}


function mySize(collection){
    if (typeof collection === 'object' &&
    collection !== null &&
    !Array.isArray(collection)){
        let arr = Object.values(collection)
        return mySize(arr)
    }else{
        return collection.length
    
        }
    }

    function myFirst(array, int){
        if(!int){
            return array[0]
        }else {
            let newArray = array.slice(0, int)
            return newArray

        }

    }


    function myLast(array, int){
        if(!int){
            return array[array.length - 1]
        }else {
            let newArray = array.slice(-int)
            return newArray

        }

    }

    function myKeys(object){
        return Object.keys(object)
    }

    function myValues(object){
        return Object.values(object)
    }



