function htmlToStr(hStr) {
    console.log(hStr)
    var rootArr = hStr.split('');
    var finalArr = [],
        j = 0;
    for (var i = 0; i < rootArr.length; i++) {
        if (rootArr[i] == '<') {

            while (1) {
                if (rootArr[j] == '>') {
                    break;
                } else {
                    i++;
                    continue;
                }
            }
        }
        finalArr[j] = rootArr[i];
        j++;
    }

    return finalArr.join('');
    // return 'sssubb'
}

module.exports = {
    htmlToStr: htmlToStr
}