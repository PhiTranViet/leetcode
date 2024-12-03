/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Two Pointers (Overwrite)	 O(n) 	 O(1) 
function removeElement(nums, val) {
    let j = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++; 
        }
    }

    return j; 
}

// Two Pointers (Swap)	 O(n) 	 O(1) 
function removeElement(nums, val) {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i] === val) {
            nums[i] = nums[j]; 
            j--; 
        } else {
            i++; 
        }
    }

    return j + 1; 
}

// splice	 O(n^2) 	 O(1) 
function removeElement(nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++; 
        }
    }
    return nums.length;
}

// filter	 O(n) 	 O(n) 
function removeElement(nums, val) {
    nums = nums.filter((num) => num !== val); // Lọc phần tử khác val
    return nums.length;
}