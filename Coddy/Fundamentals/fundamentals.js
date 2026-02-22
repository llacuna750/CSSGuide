let n = parseInt(inp); // Don't change this line

// Write your code below
for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
        if (x * y == n) {
            console.log(x, y)
        }
    }
}

