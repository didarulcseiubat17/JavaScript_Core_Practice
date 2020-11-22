function isPalindrome( str,  start,  end)
{
    if (start >= end)
        return true;

    return ((str.charAt(start) == str.charAt(end)) &&
        isPalindrome(str, start + 1, end - 1));
}

s = "Geekskee";

console.log(isPalindrome(s, 0, s.length - 1));