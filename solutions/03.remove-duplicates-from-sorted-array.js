/**
 * @param {number[]} nums
 * @return {number}
 */
// Two Pointers 
var removeDuplicates = function(nums) {
    let i = 0; // pointer for unique elements
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; // return length of unique array
};

//  O(n)   O(n) 
var removeDuplicates = function(nums) {
    let unique = [...new Set(nums)];
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }
    return unique.length;
};
//  O(n^2)   O(1) 
var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--; // Lùi lại một bước vì mảng bị co lại
        }
    }
    return nums.length;
};
//  O(n)   O(1) 
var removeDuplicates = function(nums) {
    let index = 0; // Vị trí sẽ ghi phần tử không trùng lặp
    for (let num of nums) {
        if (index === 0 || nums[index - 1] !== num) {
            nums[index] = num;
            index++;
        }
    }
    return index;
};

var removeDuplicates = function(nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

var removeDuplicates = function(nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, true);
    }
    let index = 0;
    for (let key of map.keys()) {
        nums[index++] = key;
    }
    return index;
};


