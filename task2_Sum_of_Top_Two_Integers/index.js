let arrays = [1, 4, 2, 3, 5, 10, 220, 33];

if (arrays.length < 2) {
    console.log("Array must contain at least 2 arrays");
    return;
}

if (!arrays.every((num) => typeof num === "number" && !isNaN(num))) {
    console.log("All elements must be valid arrays");
    return;
}

let max1 = Math.max(arrays[0], arrays[1]);
let max2 = Math.min(arrays[0], arrays[1]);

for (let i = 2; i < arrays.length; i++) {
    if (arrays[i] > max1) {
        max2 = max1;
        max1 = arrays[i];
    } else if (arrays[i] > max2) {
        max2 = arrays[i];
    }
}
console.log(max1 + max2);
