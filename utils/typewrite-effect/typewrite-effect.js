export function run(id, string) {
    const node = document.getElementById(id)
    const text = string || node.innerText

    node.innerText = ""

    let i = 0
    const interval = setInterval(() => {
        node.innerHTML += text.charAt(i)

        i++
        if (i >= text.length)
            clearInterval(interval)
    }, 50)
}