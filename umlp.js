let outContainer = document.createElement("div")

let skills = [1,2,3,4,5]

let counter = 0
for(row = 0; row<3;row++){
    let row = document.createElement("div")
    row.className="container mx-auto flex justify-between"
    for(col=0;col<row+1;col++){
        row.innerHTML=`${counter}`
    }
    
}
