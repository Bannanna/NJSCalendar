//should programatically create dirs if dont already exist
var fs = require('fs')
var path = require('path')
module.exports = function(vcal){ //cal <- fs.readdir && vcal <- path.normalize
  var status = false
  var rootcal = path.normalize('../' + vcal)
  var MONTHS = 12
  var DSINMS = [31, 28, 31, 30, 31, 28, 31, 31, 30, 31, 30, 31]
    for (var i = 1; i<=12; i++;){
      fs.mkdir
      for (i in DSINMS){
      }
    }

  return status
}
