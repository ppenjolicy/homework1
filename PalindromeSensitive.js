let stdin = process.openStdin()
stdin.addListener("data", (t) => {
    if ((t.length % 2) == 0) {
        //console.log(t.length)
        var halflen = (t.length - 2) / 2
        //console.log((t.length-2)/2)
        var check = 0
        for (let i = 0; i <= halflen; i++) {
            if (t.toString().substring(halflen - (i + 1), halflen - i) == t.toString().substring(halflen + i, halflen + (i + 1))) check += 1
        }
        if (check == halflen) {
            console.log("Palindrome")
        } else {
            console.log("Not Palindrome")
        }
    } else {
        console.log("Not Palindrome")
    }
    stdin.destroy()
})