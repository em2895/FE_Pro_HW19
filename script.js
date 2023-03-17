function sumNum(){
    let result = 0;

    return function(num) {
        result += num;
        console.log(result);
    }
};

let sum = sumNum();

sum(3);
sum(5);
sum(20);
sum(-12);
sum(9);