// 快速排序
// 快排大概的流程是：

// 随机选择数组中的一个数 A，以这个数为基准
// 其他数字跟这个数进行比较，比这个数小的放在其左边，大的放到其右边
// 经过一次循环之后，A 左边为小于 A 的，右边为大于 A 的
// 这时候将左边和右边的数再递归上面的过程
// 具体代码如下：

// 划分操作函数
function partition (array, left, right) {
  // 用index取中间值而非splice
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (compare(array[i], pivot) === -1) {
      i++
    }
    while (compare(array[j], pivot) === 1) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}

// 原地交换函数，而非用临时数组
function swap (array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

// 比较函数
function compare (a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}

function quick (array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}

function quickSort (array) {
  return quick(array, 0, array.length - 1)
}

const Arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(quickSort(Arr));


// ------------------------------------------------------------------------------------

// 二分查找是一种「分治」思想的算法，大概流程如下：

// 1.数组中排在中间的数字 A，与要找的数字比较大小
// 2.因为数组是有序的，所以： a) A 较大则说明要查找的数字应该从前半部分查找 b) A 较小则说明应该从查找数字的后半部分查找
// 3.这样不断查找缩小数量级（扔掉一半数据），直到找完数组为止

// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find (target, array) {
  let i = 0;
  let j = array[i].length - 1;
  while (i < array.length && j >= 0) {
    if (array[i][j] < target) {
      i++;
    } else if (array[i][j] > target) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

//测试用例
console.log(Find(10, [
  [1, 2, 3, 4],
  [5, 9, 10, 11],
  [13, 20, 21, 23]
])
);