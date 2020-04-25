function max(numbers) {
    // your code here, for-loop method preferred
    var maxNum = '' ;
    for ( i = 0 ; i < numbers.length ; i += 1) {
        if ( maxNum == '' ){
            maxNum = numbers[i]
        } else if ( numbers[i] > maxNum ){
            maxNum = numbers[i]
        }  
    }
    return maxNum 
}

    function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    for ( i = 0 ; i < numbers.length ; i += 1) {
        if ( numbers[i]== target ){
            return i
            break;
        }
    }  
    return -1
}

    console.log( max([1, 2, 4, 5]) ); // should print 5
    console.log( max([5, 2, 7, 1, 6]) ); // should print 7
    console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
    console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
    console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position) 
    console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1