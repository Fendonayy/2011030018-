// 十进制转二进制
function decimalToBinary(decimal) {
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary || '0';
}

// 二进制转十进制
function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
        decimal += parseInt(binary.charAt(i)) * Math.pow(2, j);
    }
    return decimal;
}
