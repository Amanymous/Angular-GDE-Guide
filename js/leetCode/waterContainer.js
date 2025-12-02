// function waterContainer(arr){
//     let l =  0
//     let r = arr.length-1
//     let max = 0
//     while(l < r){
//         let lh = arr[l]
//         let rh = arr[r]
//         let min_h = Math.min(lh,rh)
//         let len = r-l
//         let area = min_h * len
//         max = Math.max(max,area)
//         if(lh < rh) l++
//         else r--;
//     }
//     return max
// }

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        // console.log("left height:",height[left],"right height", height[right],"right:",right,"left:",left);
        const minHeight = Math.min(height[left], height[right]);
        // console.log("minHeight:",minHeight);
        const currentArea = (right - left) * minHeight;
        console.log("currentArea=",currentArea);
        maxArea = Math.max(maxArea, currentArea);
        // console.log("maxArea=",Math.max(maxArea, currentArea));
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const currentArea = (j - i) * Math.min(height[i], height[j]);
            maxArea = Math.max(maxArea, currentArea);
        }
    }
    
    return maxArea;
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]));