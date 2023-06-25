// 高精度加法
function add(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        let x = i >= 0 ? parseInt(a.charAt(i)) : 0;
        let y = j >= 0 ? parseInt(b.charAt(j)) : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        i--;
        j--;
    }
    return result;
}

// 高精度乘法
function multiply(a, b) {
    let result = '0';
    for (let i = b.length - 1; i >= 0; i--) {
        let carry = 0;
        let temp = '';
        for (let j = a.length - 1; j >= 0 || carry > 0; j--) {
            let x = j >= 0 ? parseInt(a.charAt(j)) : 0;
            let y = parseInt(b.charAt(i));
            let product = x * y + carry;
            carry = Math.floor(product / 10);
            temp = (product % 10) + temp;
        }
        for (let k = 0; k < b.length - 1 - i; k++) {
            temp += '0';
        }
        result = add(result, temp);
    }
    return result;
}

// 高精度除法
function divide(a, b) {
    let result = '';
    let remainder = '';
    for (let i = 0; i < a.length; i++) {
        remainder += a.charAt(i);
        let quotient = Math.floor(parseInt(remainder) / parseInt(b));
        if (result || quotient > 0) {
            result += quotient;
        }
        remainder = (parseInt(remainder) % parseInt(b)).toString();
    }
    if (!result) {
        result = '0';
    }
    return result;
}
