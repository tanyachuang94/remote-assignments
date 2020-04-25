function calculate(args) { 
    let result;
    if (args.op === "+") {
    result = args.n1 + args.n2;
    } else if(args.op === "-") {
    result = args.n1 - args.n2;
    } else {
    result = "Not supported";
    }
    console.log(result);
    return result; 
}

var args = new Object()
args.op = "+" ;
args.n1 = 1 ;
args.n2 = 2 ;
calculate(args)

var args = new Object()
args.op = "-" ;
args.n1 = 1 ;
args.n2 = 2 ;
calculate(args)

    //calculate({ op: "+", n1: 1, n2: 2 });
    //calculate({ op: "-", n1: 1, n2: 2 });