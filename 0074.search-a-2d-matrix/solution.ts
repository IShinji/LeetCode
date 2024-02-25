function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    if (m === 0) return false;
    const n = matrix[0].length;
    if (n === 0) return false;

    let left = 0;
    let right = m * n - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};