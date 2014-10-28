$(document).ready(function() {
  $('.lightbox').magnificPopup(
    {
      type:'image',
      gallery: {
        enabled: true
      }
    }
  );
});

$(document).ready(function() {
  $('.lightbox2').magnificPopup(
    {
      type:'iframe',
      gallery: {
        enabled: true
      }
    }
  );
});