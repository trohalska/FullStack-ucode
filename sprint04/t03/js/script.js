'use strict'

let checkClass = (elem, attr) => elem.classList.contains(attr);

let main = document.querySelector("main"),
    zIndexCounter = 0;

main.addEventListener('dblclick', (event) => {
    let div = event.target

    if (div.classList.contains('block')) {
        div.classList.toggle('active')
    }
})

main.onmousedown = ((event) => {
    let div = event.target

    if (checkClass(div, 'active')) {
        let cursorX = event.clientX - div.getBoundingClientRect().left,
            cursorY = event.clientY - div.getBoundingClientRect().top,
            moveTo = (pageX, pageY) => {
                div.style.left = pageX - cursorX + 'px'
                div.style.top = pageY - cursorY + 'px'
            },
            moveDiv = (event) => moveTo(event.pageX, event.pageY);

        // div.style.opacity = '.6'
        div.style.position = 'absolute'
        div.style.zIndex = zIndexCounter
        zIndexCounter += 1

        moveTo(event.pageX, event.pageY)
        document.addEventListener('mousemove', moveDiv)
        div.onmouseup = (() => {
            // div.style.opacity = '1'
            document.removeEventListener('mousemove', moveDiv)
            div.onmouseup = null;
        })
    }
})

document.ondragstart = () => false;
