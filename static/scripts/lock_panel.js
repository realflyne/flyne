window.onkeydown = function (evt) {
    if (
      evt.keyCode == 123 ||
      evt.keyCode == 85 ||
      evt.keyCode == 17 ||
      evt.keyCode == 16 ||
      evt.keyCode == 74 ||
      evt.keyCode == 116 ||
      evt.keyCode == 73
    )
      return false
  }
  
  window.onkeypress = function (evt) {
    if (
      evt.keyCode == 123 ||
      evt.keyCode == 85 ||
      evt.keyCode == 17 ||
      evt.keyCode == 16 ||
      evt.keyCode == 74 ||
      evt.keyCode == 116 ||
      evt.keyCode == 73
    )
      return false
  }
  
  function disableF5(e) {
    if ((e.which || e.keyCode) == 116) e.preventDefault()
  }
  $(document).on('keydown')
  