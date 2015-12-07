module.exports = {
  testModules: function() {
    console.log(this)
  },
  normpath: function(paths) {
    console.log(typeof paths)
    console.log('easier than path.normalize, but just ejemplo')
  }
}
