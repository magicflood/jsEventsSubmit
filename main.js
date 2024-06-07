let a = document.getElementById("ID")
let b = document.getElementById("parol")
let c = document.getElementById("btn")
let d = document.getElementById("flex")
let s = document.getElementById("welcome")
let k = document.getElementById("logo")
let nav = document.getElementById("logoNav")
let o = document.getElementById("imzo")
let r = document.getElementById("registr")
let hr = document.getElementById("up")

d.style.display = "flex"
d.style.flexDirection = "column"
d.style.alignItems = "center"
d.style.gap = "20px"
d.style.backgroundColor = "white"
d.style.marginTop = "150px"


a.style.width = "300px"
a.style.height = "50px"
a.style.border = "none"
a.style.paddingLeft = "50px"
a.style.backgroundColor = "#e8f0fe"
a.style.borderRadius = "15px"

b.style.width = "300px"
b.style.height = "50px"
b.style.border = "none"
b.style.paddingLeft = "50px"
b.style.backgroundColor = "#e8f0fe"
b.style.borderRadius = "15px"

c.style.width = "355px"
c.style.height = "50px"
c.style.border = "none"
c.style.backgroundColor = "#ef400f"
c.style.borderRadius = "15px"
c.style.color = "white"
c.style.fontSize = "15px"

s.style.textAlign = "center"
s.style.color = "#0e0d5d"

k.style.width = "112px"
k.style.height = "30px"

nav.style.display = "flex"
nav.style.alignItems = "center"
nav.style.gap = "100px"

o.style.color = "#00a9f2"
o.style.fontWeight = "700"

r.style.display = "flex"
r.style.alignItems = "center"
r.style.gap = "10px"

hr.style.textDecoration = "none"
hr.style.color = "#ef400f"


let form = document.getElementById("myform")

form.addEventListener("submit", function name(event) {
    event.preventDefault();
    let valuekod = a.value;
    let valuepass = b.value;

    if (valuekod === '123456' && valuepass === '78900') {
        alert("Siz space platformasiga kirdingiz")
    } else {
        alert("Noto'g'ri modem ID yoki parol. Iltimos, yana bir bor urinib ko'ring.")
    }
})

form.style.display = "flex"
form.style.flexDirection = "column"
form.style.gap = "20px"
