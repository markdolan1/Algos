// Using Set
var countGoodSubstrings = function (s) {
    let ans = 0;
    for (i = 0; i < s.length; i++) {
        let a = s.substring(i, i + 3)
        console.log(a);

        let set = new Set(a)
        console.log(set);
        if (set.size == 3) {
            ans++;
        }
    }
    return ans
};

// console.log(countGoodSubstrings("abcaabbdefa"));
// [2, 4, 6, 8, 16, 44]


// Approach uses sliding window & set
var countGoodSubstrings = function (s) {
    let n = s.length;
    if (n < 3) return 0;          // minimum 3 chars needed for good substring
    let count = 0;

    let A = [s[0], s[1]];
    for (let i = 2; i < n; i++) {
        A.push(s[i]);  // add 1 char to the back
        if (new Set(A).size === 3) {
            count++; // if distinct, set size will be 3, if so increment counter
        }
        A.shift();// remove 1 char from the front
    }

    return count
};          