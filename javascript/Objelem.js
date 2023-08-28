function orbitalPeriod(arr) {
    let T = []
  
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
   
  
  
   const objOr = function(obj){
     let a = 2 * Math.PI
      let b = Math.pow(earthRadius + obj.avgAlt, 3)
      let c = Math.sqrt(b/GM)
   
      let orbitalPeriod =Math.round(a * c)
  
      return {name: obj.name,orbitalPeriod: orbitalPeriod }
   }
      for (let elem in arr) {
      T.push(objOr(arr[elem]));
    }
  
  
    return T ;
  }console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));