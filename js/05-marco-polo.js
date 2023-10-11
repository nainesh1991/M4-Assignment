for (let index = 1; index <= 100; index++) {

    if((index%3)==0 && (index%5)==0){
        console.log(`${index}  Marco! Polo`)
    }
    else if((index%3)==0){
        console.log(`${index}  Marco`)
    }
    else if((index%5)==0){
        console.log(`${index}  Polo`)
    }

}