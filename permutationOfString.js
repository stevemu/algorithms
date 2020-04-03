function permutation(str) {
  permutationHelper(str, '');
}

function permutationHelper(str, prefix) {
  if (str == '') {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let nextPrefix = prefix + str[i];
    let restOfString = str.substring(0, i) + str.substring(i + 1);
    permutationHelper(restOfString, nextPrefix);
  }

}

permutation('abc')