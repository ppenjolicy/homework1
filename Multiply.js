let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    stdin.addListener("data", (n) => {
            console.log("Ans", d * n) 
    		stdin.destroy()
    })
})