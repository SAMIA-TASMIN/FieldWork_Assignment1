function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, "");

    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));