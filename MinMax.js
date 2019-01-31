let stdin = process.openStdin()
stdin.addListener("data", (a) => {
    stdin.addListener("data", (b) => {
        if (a < b) console.log("Min =", a + "Max=", b)
        else console.log("Min =", b + "Max=", a)
        stdin.destroy()
    })
})