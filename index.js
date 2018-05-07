function versionCompare(first, second) {
    var first = first.split('');
    var second = second.split('');
    var i;
    for (i = 0; i <= second.length - 1; i++) {
        if (first[4] == 1 && second[2] == 0 && second[4] == 1) {
            console.log('you are downgrade  ');
        } else if (first[4] == 1 && second[4] == 1) {
            console.log('you are stable');
            // second[4] = 1;
        } else if (first[4] == 0 && second[4] == 1) {
            console.log('you are upgrade');
        }
    }
}
versionCompare('1.1.1', '1.1.1');
versionCompare('1.1.1', '1.0.1');
versionCompare('1.1.0', '1.1.1');

module.exports = versionCompare;
