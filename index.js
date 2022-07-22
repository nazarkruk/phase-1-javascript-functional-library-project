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