const fs = require('fs')
const mustache = require('mustache')
const args = {}

const languagesAndTools = [
    {
        name: 'Node.js',
        color: '#339933'
    }, {
        name: 'JavaScript',
        color: '#F7B93E'
    }, {
        name: 'HTML5',
        color: '#E34F26'
    }, {
        name: 'CSS3',
        color: '#1572B6'
    }, {
        name: 'PHP',
        color: '#777BB4'
    }, {
        name: 'Vue.js',
        color: '#4FC08D'
    }, {
        name: 'Visual Studio Code',
        color: '#007ACC'
    }, {
        name: 'MongoDB',
        color: '#47A248'
    }
]

var list = []
languagesAndTools.forEach(value => {
    list.push(`<img alt="${value.name}" src="https://img.shields.io/badge/-${value.name}-${value.color.replace('#', '')}?style=flat-square&logo=${value.name}&logoColor=white"/>`)
})

args.languages = list.join('\n')

function generate(data) {
    var template = fs.readFileSync('main.mustache')
    fs.writeFileSync('README.md', mustache.render(template.toString(), data))
}

generate(args)