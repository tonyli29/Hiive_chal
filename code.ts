// Problem
// We need to alphabetically order a string. For example, given the input “HiiveIsLive", the output “eehiiiilsvv" is produced.
// We need to further extend the function to take a second input which is a custom alphabet. The input should be an ordered list of all 26 characters in any order. The function should use this alphabet for ordering the input string.

// Some anaylsis and assumptions of the question by me
/* 
    1. the output example is “HiiveIsLive" -> “eehiiiilsvv" so the output should aways be in lowercase, and also the custom alphabet should also be in lower case.
    2. "The input should be an ordered list of all 26 characters in any order" this means that the custom alphabet will have no repeats and be a list of exactly all 26 alphabet characeters in any order
    3. If input contains characters not in the custom alphabet then just push them to the end of the result word
*/

// Put the normal alphabet here because I thought it was more readable
const alphabetList: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabeticalSort = (
  input: string,
  customAlphabet: string[] = alphabetList
): string => {
  const alphabetMap = new Map<string, number>(
    customAlphabet.map((char, idx) => [char.toLowerCase(), idx])
  );
  const sortedInput = input
    .toLowerCase()
    .split("")
    .sort((a, b) => {
      return (
        (alphabetMap.get(a) ?? Infinity) - (alphabetMap.get(b) ?? Infinity)
      );
    });

  return sortedInput.join("");
};

// Test cases
console.log(alphabeticalSort("HiiveIsLive"));
console.log(alphabeticalSort(""));
console.log(alphabeticalSort("", []));
console.log(alphabeticalSort("", ["a"]));
console.log(
  alphabeticalSort("HiiveIsLive", "zyxwvutsrqponmlkjiHgfedcba".split(""))
); // with custom alphabet
console.log(alphabeticalSort("Hii22veIsLive1111")); // with characters not in alphabet
console.log(
  alphabeticalSort(
    "Hiiv===eIs22Li11ve",
    "eyxwvutsrqponmlkjiHgf=zdcba".split("")
  )
);
