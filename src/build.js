// console.log(process.argv.slice(2))
var fs = require('fs')
var fm = require('front-matter')

// get all paths to yaml
process.argv.slice(2).forEach(function(vid) {
    fs.readFile('./' + vid, 'utf8', function (err, data) {
        if (err) throw err
        var yaml = fm(data)
        console.log(yaml.attributes)
    })
})

