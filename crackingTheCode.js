function palabraNoMagica(input){
    for(let i=0; i<input.lenght; i++){
        for(let j=i+1; j <input.lenght; j++){
            if (input[i] === input[j]){
                return false
            }
        }
    } return true;
}

console.log(palabraNoMagica("haolaa"));