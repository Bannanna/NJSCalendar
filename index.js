// IDEA year['2015'].month['03'].day['15'].hour['1600']
// PROBLEM must run as sudo!!!
// // have init function to take care of such bs
var fs = require('fs')
var path = require('path')

var helperMods = require('./NJS/mods.js')

var VCAL = process.env.VCALPATH || path.normalize('./VCAL')
var cal = fs.readdirSync(VCAL)

if(cal.len < 1){
  console.log('initializing calendar...')
  var init = require('./NJS/init.js')(VCAL) //return bool status
}

//start parsing years
// var months = (function(){
//   for(f in NJSfiles) {
//
//
//   }
//
// })()

var cli = require('./NJS/cli.js')(process.argv)
module.exports = require('./NJS/ncal.js')(VCAL)

console.log('Process exited')
