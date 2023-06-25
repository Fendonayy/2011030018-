function sort(arr) {
    // 从最后一个非叶子节点开始遍历,使根节点为最大值
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        bigHeap(arr, arr.length, i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        // 使根节点为每次的最大值,与最后一位交换并构建最大堆
        swap(arr, 0, i);
        bigHeap(arr, i,0)
    }

}

//构造最大堆
function bigHeap(arr, length, i) {
    // 非叶子结点的左子树
    for (let k = i * 2 + 1; k < length; k = 2 * k + 1) {
        // 找到左右子树中的最大值
        if (k + 1 < length && arr[k + 1] > arr[k]) {
            k++;
        }
        // 使父节点为最大值
        if (arr[k] > arr[i]) {
            swap(arr, i, k);
            i = k;
        } else {
            break;
        }
    }

}

// 交换函数
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
