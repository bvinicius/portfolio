'use strict'

import { run } from './src/utils/typewrite-effect/typewrite-effect.js'

window.onload = () => {
    const height = window.outerHeight
    const element = document.getElementById('welcome')
    element.style.height = height - 50 + "px"

    run('name', ' Vinicius')
}