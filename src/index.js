exports.min = function min(array) {
    if (array === null || array === undefined || array.length === 0) {
        return 0
    } else {
        let number_min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < number_min) {
                number_min = array[i];
            }
        }
        return number_min
    }
}

exports.max = function max(array) {
    if (array === null || array === undefined || array.length === 0) {
        return 0
    } else {
        let number_max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > number_max) {
                number_max = array[i];
            }
        }
        return number_max
    }
}

exports.avg = function avg(array) {
    if (array === null || array === undefined || array.length === 0) {
        return 0
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        sum = sum / array.length;
        return sum
    }
}
