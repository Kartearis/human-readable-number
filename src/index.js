module.exports = function toReadable (number) {
    let aliases = [
      [0, ''],
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine'],
      [10, 'ten'],
      [11, 'eleven'],
      [12, 'twelve'],
      [13, 'thirteen'],
      [14, 'fourteen'],
      [15, 'fifteen'],
      [16, 'sixteen'],
      [17, 'seventeen'],
      [18, 'eighteen'],
      [19, 'nineteen'],
      [20, 'twenty'],
      [30, 'thirty'],
      [40, 'forty'],
      [50, 'fifty'],
    ];
    let orders = [
        'ones',
        'tens',
        'hundred',
        'thousand',
        'million',
        'billion'
    ];
    let representation = [];
    let position = 0;
    while (number > 0)
    {
        let digit = number % 10;
        switch (position) {
            case 0: representation.unshift(aliases[digit]); break;
            case 1:
                if (digit === 1) {
                    let ones = representation.shift();
                    representation.unshift(aliases[10 + ones[0]]);
                }
                else if (digit < 6) {
                    representation.unshift(aliases[10 * digit]);
                }
                else representation.unshift([10 * digit, aliases[digit][1] + 'ty']);
                break;
            default:
                if (digit === 0)
                    representation.unshift([0, '']);
                else representation.unshift([digit * 10 ** position, aliases[digit] + ' ' + orders[position]]);
        }

    }

}
