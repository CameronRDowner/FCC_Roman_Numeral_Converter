function convertToRomanNumeral(inputNumber) {
    let romanNumeralTable = [ //array contains all single-symbol Roman Numerals as well as any combinations of symbols that can't be put together by addition
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let numberToConvert = inputNumber;
    let romanNumeralResult = [];
    for (let index = 0; numberToConvert > 0; index++) {
        if (numberToConvert - romanNumeralTable[index][0] >= 0) {
            romanNumeralResult.push(romanNumeralTable[index][1]);
            numberToConvert -= romanNumeralTable[index][0];
            index = -1;
        }
    }
    return romanNumeralResult.join('');
}

convertToRomanNumeral(4999);