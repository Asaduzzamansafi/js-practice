let number = prompt("wanna know your grade?");

if(number >= 80 && number <= 100){
    document.write("A+");
}else if(number >= 70 && number <= 79){
    document.write("A");
}else if(number >= 60 && number <= 69){
    document.write("A-");
}else if(number >= 50 && number <= 59){
    document.write("B");
}else if(number >= 40 && number <= 49){
    document.write("C")
}else if(number >= 0 && number <= 39){
    document.write("F");
}else{
    document.write("error");
}