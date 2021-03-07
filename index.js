const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arr;
      if(collection instanceof Array) {
        arr = collection
      } else {
        arr = Object.values(collection)
      }
      arr.forEach(element => {
        callback(element)
      });
      return collection
    },

    map: function(collection, callback) {
      let arr;
      if(collection instanceof Array) {
        arr = collection
      } else {
        arr = Object.values(collection)
      }
      let newArr = []
       arr.forEach(element => {
         newArr.push(callback(element))
      });
      return newArr
    },

    reduce: function(collection, callback, acc) {
      if(!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      
      for(let i = 0; i< collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc

    },
    find: function(collection, item) {
      if(!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      
      for(let i = 0; i< collection.length; i++) {
        if(item(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },
    filter: function(collection, callback) {
      if(!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let newArr = []
      for(let i = 0; i< collection.length; i++) {
        if(callback(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      if(!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let counter = 0;
      collection.forEach(element => {
        counter += 1
      })
      return counter
    },
    first: function(collection, n=1) {
      let newArr = []
      for(let i =0; i< n; i++) {
        if(n > 1) {
          newArr.push(collection[i])

        } else {
          return collection[0]
        }
      }
      return newArr;
    },
    last: function(collection, n=false) {
     
      if(n) {
        return collection.slice(collection.length - n)
      } else {
        return collection[collection.length-1]
      }
    },
    compact: function(collection) {
      let newArr = []
      collection.forEach(element => {
        if(element) {
          newArr.push(element)
        }
      })
      return newArr
    },
    sortBy: function(collection, callback) {
      let newArr = [...collection]
      return newArr.sort((a,b) => {
        return callback(a) - callback(b)
      })
    },
    
    flatten: function(collection, shallow, newArr = []) {
      if(!Array.isArray(collection)) {
        newArr.push(collection)
      }
      if(shallow) {
        for(let item of collection) {
          if(Array.isArray(item)) {
            for(let newItem of item) {
              newArr.push(newItem)
            }
          } else {
            newArr.push(item)
          }
        }
      } else {
        for(let i=0; i<collection.length; i++) {
          this.flatten(collection[i], false, newArr)
        }
      }
     

      return newArr
    }, 
    uniq: function(collection, sorted, callback = false) {
      
      let newArr = []
      let callbackArr = []
      if(!collection instanceof Array) {
        collection = Object.values(collection)
      }
      if(!sorted) {
        collection = collection.sort()
      }
      
      for(let i =0; i<collection.length; i++) {
        if(newArr.indexOf(collection[i]) !=-1) {
         
          collection.slice(collection[i], 1)
        } else {
          if(callback) {
            if(callbackArr.indexOf(callback(collection[i])) === -1) {
              callbackArr.push(callback(collection[i]))
              newArr.push(collection[i])
            }
          } else {

            newArr.push(collection[i])
          }
        }
      }
      
      return newArr
      
    },
    keys: function(collection) {
      
      let key = []
      for(let k in collection) {
        key.push(k)
      }
      return key
    }, 
    values: function(collection) {
      let values = [];
      for(let k in collection) {
        values.push(collection[k])
      }
      return values
    }, 

    functions: function(obj) {
      let names = []
      for(let k in obj) {
        if(typeof obj[k] === "function") {
          names.push(k)
        }
      }
      return names;
    },


  }
})()

fi.libraryMethod()