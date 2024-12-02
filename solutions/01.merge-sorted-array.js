/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

function merge(nums1, m, nums2, n) {
  nums1.splice(m); // Xóa các phần tử dư thừa trong nums1
  nums1.push(...nums2); // Thêm tất cả phần tử từ nums2 vào nums1
  nums1.sort((a, b) => a - b); // Sắp xếp lại mảng
}

var merge = function (nums1, m, nums2, n) {
  let merged = nums1.slice(0, m).concat(nums2);
  merged.sort((a, b) => a - b);
  for (var i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};
