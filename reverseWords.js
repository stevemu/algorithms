var reverseWords = function(s) {
	let arr = s.split('');
	let forward = 0;
	let anchor = 0;
	
	while (forward <= s.length) {
			if (arr[forward] == ' ' || forward == s.length) {
					// swap
					let left = anchor;
					let right = forward - 1;
					while (left < right) {
							let temp = arr[left];
							arr[left] = arr[right];
							arr[right] = temp;
							
							left++;
							right--;
					}
					
					anchor = forward + 1;
			}
			
			forward++;
	}
	
	
	return arr.join('');
};

console.log(reverseWords("Let's take LeetCode contest"));