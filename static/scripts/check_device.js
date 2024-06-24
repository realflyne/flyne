document.addEventListener('DOMContentLoaded', function () {
    var userAgent = window.navigator.userAgent.toLowerCase()
  
    var mobileKeywords =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
  
    if (!mobileKeywords.test(userAgent)) {
      var script = document.createElement('script')
      script.src = '/static/scripts/current_track.js'
      document.body.appendChild(script)
    }
  })
  