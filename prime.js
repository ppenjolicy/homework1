let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    var i
    var check = 0
    if (d != 2) {
        for (i = 2; i < d; i++) {
            if ((d % i) == 0) check += 1
        }
        if (check != 0) console.log("Not Prime")
        else console.log("Prime")
    } else console.log("Prime")
    stdin.destroy()
})