let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    }, 3000);
}


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    }, 3000);
}