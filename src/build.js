// console.log(process.argv.slice(2))
var fs = require('fs')
var fm = require('front-matter')
var hyperstream = require('hyperstream')

// get all paths to yaml
// var _hs
var embed = ''
var i = 0
process.argv.slice(2).forEach(function(vid) {
    fs.readFile(vid, 'utf8', function (err, data) {
        if (err) throw err
        var yaml = fm(data)
        embed += '<div>' + yaml.attributes.embedCode + '</div>'
        i++
        if (i === process.argv.slice(2).length) {
            var rs = fs.createReadStream(__dirname + '/index.html')
            var hs = hyperstream({
                '#videos': {
                    _appendHtml: embed
                }
            })
            rs.pipe(hs).pipe(process.stdout)

        }
        // var hs = hyperstream({
        //     '#videos': {
        //         _appendHtml: yaml.attributes.embedCode
        //     }
        // })
        // var rs = _hs || fs.createReadStream(__dirname + '/index.html')
        // rs.pipe(hs)
        // _hs = hs
    })
})

