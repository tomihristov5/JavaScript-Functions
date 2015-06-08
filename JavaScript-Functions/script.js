function englishDigit(number) {
    var digitAsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log('The last digit of ' + number + ' as word is: ' + digitAsWord[number % 10]);
}

function reverseNumber(number) {
    var reversed = [];
    if (number < 0) {
        reversed.push('-');
        number *= -1;
    }
    number = number.toString().split('');
    reversed.push(number.reverse().join(''));
    console.log(reversed.join(''));
}

function occurrencesOfWord() {

    var text = 'abc asdasd abC asd sad sadsadas aBc'

    function calcOccurrences(text, word, isCaseSensitive) {
        var pattern = '\\b' + word + '\\b';
        var modifier = isCaseSensitive ? 'g' : 'gi';
        var regex = new RegExp(pattern, modifier);
        return text.match(regex).length;
    }
    console.log('The text: ' + text);
    console.log('Case insensitive occurrences of "abc": ' + calcOccurrences(text, 'abc', false));
    console.log('Case sensitive occurrences of "abc": ' + calcOccurrences(text, 'abc', true));
}

function numberOfElements(type) {

    var count = document.getElementsByTagName(type).length;
    console.log(type + ' count: ' + count);
}

function appearanceCount(array, number) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }

    console.log('Appearances of ' + number + ' in [' + array + ']: ' + count);
}

function largerThanNeightbours(array, position) {
    if (array[position - 1] === undefined || array[position + 1] === undefined) {
        console.log('Only one neighbour!');
    }
    else {
        if (array[position] > array[position - 1] && array[position] > array[position + 1]) {
            console.log(array[position] + ' is larger than its neighbours!');
        }
        else if (array[position] < array[position - 1] && array[position] < array[position + 1]) {
            console.log(array[position] + ' is smaller than its neighbours!');
        }
        else {
            console.log(array[position] + ' is smaller than one of its neighbours and larger than the other one!');
        }
    }
}

function firstLargerThanNeightbours(array) {
    var noElement = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            console.log('The first element larger than its neighbours is with index: ' + i);
            noElement = 0;
            break;
        }
    }
    if (noElement === -1) {
        console.log(noElement);
    }
}