function checkCashRegister(price, cash, cid) {

    let listMoney = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    let newListMoney = []
    let casaStatut = "OPEN"
    let count = 0
     let rest = cash - price
     let checkMoney = 0
     
  
        
    for (let i = listMoney.length - 1; i >= 0; i--){

        rest = Math.round((rest + Number.EPSILON) * 100) / 100
        if (rest == 0) {break}

    else if (rest >= 100 && listMoney[i][0] == "ONE HUNDRED"){
      
        if (cid[i][1] >= 100){
            cid[i][1] -= 100
            listMoney[i][1] += 100
        rest  = rest - 100
        
        i++
        }
        else if (cid[i][1] < 100){
            cid[i -1][1]  -= 100
            listMoney[i -1][1]  += 100
            rest = rest - 100
           
        }
        }

    
    else if (rest >= 20  && listMoney[i][0] == "TWENTY"){
      
      if (cid[i][1] >= 20){
        cid[i][1] -= 20
        listMoney[i][1] += 20
        rest  = rest - 20
       
        i++
      }
      else if (cid[i][1] < 20){
        cid[i - 1][1]  -= 20
        listMoney[i  - 1][1] += 20
        rest = rest - 20
       
      }
    }
    
     
    else if (rest >= 10 && listMoney[i][0] == "TEN"){
      
      if (cid[i][1] >= 10){
        cid[i][1] -= 10
        listMoney[i][1] += 10
        rest  = rest - 10
        
        i++
      }
      else if (cid[i][1] < 10){
        cid[i -1][1]-= 10
        listMoney[i - 1][1] += 10
        rest = rest - 10
        
      }
    }
     
    else if (rest >= 5 && listMoney[i][0] == "FIVE"){
   
      if (cid[i][1] >= 5){
        cid[i][1] -= 5
        listMoney[i][1] += 5
        rest  = rest - 5
        
        i++
      }
      else if (cid[i][1] < 5){
        cid[i - 1][1] -= 5
        listMoney[i - 1][1] += 5
        rest = rest - 5
        
      }
    }
    else if (rest >= 1 && listMoney[i][0] == "ONE"){
      
      if (cid[i][1] >= 1){
        cid[i][1] -= 1
        listMoney[i][1] += 1
        rest  = rest - 1
        
        i++
      }
      else if (cid[i][1] < 1){
        cid[i - 1][1] -= 1
        listMoney[i - 1][1] += 1
        rest = rest - 1
        
      }
    }
    
    else if (rest >= 0.25 && listMoney[i][0] === "QUARTER"){
        

      if (cid[i][1] >= 0.25){
        cid[i][1] -= 0.25
        listMoney[i][1] += 0.25
        rest  = rest - 0.25
        
        i++
      }
      else if (cid[i][1] < 0.25){
        if (cid[i - 1][1] >= 0.25){
            if(cid[i -2][1] >= 0.25){
                if (cid[i -3][1] >= 0.25){
        cid[i - 1][1] -= 0.25
        listMoney[i - 1][1]  += 0.25
        rest = rest - 0.25
        
        }

    }
}}
}

    
    else if (rest >= 0.1 && listMoney[i][0]== "DIME" ){
      
    
      if (cid[i][1] >= 0.1){
        cid[i][1] -= 0.1
        listMoney[i][1] += 0.1
        rest  = rest - 0.1
       
        i++
      }
      else if (cid[i][1] < 0.1){
        if (cid[i -1][1] > 0.1){
        cid[i - 1][1]  -= 0.1
        listMoney[i - 1][1] += 0.1
        rest = rest - 0.1
        
      }}
    }
    
       else if (rest >= 0.05 && listMoney[i][0]== "NICKEL"){
        
      if (cid[i][1] >= 0.05){
        cid[i][1] -= 0.05
        listMoney[i][1] += 0.05
        rest  = rest - 0.05
        
        i++
      }
      else if (cid[i][1] < 0.05){
        if (cid[i -1][1] >= 0.05){

        cid[i - 1][1] -= 0.05
        listMoney[i -1][1] += 0.05
        rest = rest - 0.05
       
      }}
    }
    
       else if (rest >= 0.01 && listMoney[i][0]== "PENNY"){
    
      if (cid[i][1] >= 0.0001){
        cid[i][1]  -= 0.01
        listMoney[i][1] += 0.01
        rest  = rest - 0.01
     
        listMoney[i][1] = Math.round((listMoney[i][1] + Number.EPSILON) * 100) / 100
        i++
        }
      }

    }
    


     
for (let j = listMoney.length -1; j >= 0; j--){
    if (listMoney[j][1] > 0){
         newListMoney.push(listMoney[j])
       }

    if (cid[j][1] == 0){
            count ++
       }
       checkMoney += Math.round((cid[j][1] + Number.EPSILON) * 100) / 100
     }


    if (count == cid.length ){
        casaStatut = "CLOSED"
     }
     if (checkMoney == 0){
       casaStatut = "CLOSED"
     }
     if (rest != 0 && checkMoney >= 0){
       casaStatut = "INSUFFICIENT_FUNDS"
       newListMoney = []
     }
    

for (let i = 0 ; i < listMoney.length; i++){
    if (!newListMoney.includes(listMoney[i]) && casaStatut == "CLOSED"){
        newListMoney.push(listMoney[i])
    }
}
     
     function change(){
      this.status = casaStatut
      this.change = newListMoney
    }
    let newList = new change()
     return   newList
    }
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
