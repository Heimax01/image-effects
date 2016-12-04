(function($) {

  var $image = $('#imageInput'),
      $rest = $('.js-rest'),
      $photo = $('.photo'),
      $placeholder = $('.placeholder'),
      $effectCode = $('.effect-code'),
      $effect = $('.effects__item'),
      $effectImg = $('.effects__img'),
      $codeBtn = $('.code__btn'),
      $copy = $('.js-copy'),
      $css = $('.js-css'),
      $scss = $('.js-scss'),
      $copyText = $('.js-copy-text'),
      currentEffect = null;

  var sheet = (function() {
    // Create the <style> tag
    var style = document.createElement("style");

    // WebKit hack :(
    style.appendChild(document.createTextNode(""));

    document.head.appendChild(style);

    return style.sheet;
  })();      

  var cleanRules = function() {
    var i = sheet.cssRules.length - 1 ;

    while(i >= 0){
      
      if("deleteRule" in sheet) { sheet.deleteRule(i); }
      else if("removeRule" in sheet) { sheet.removeRule(i); }
      
      i--;
      
    }
  }


  var setImageSrc = function(imageData) {
    $placeholder.attr('src', imageData);
  }

  $image.change(function(){
    var im = document.querySelector("input[type=file]").files[0];
    var file = new FileReader;
    if (im) {
      file.readAsDataURL(im);
    } else {
      alert("pick a photo");
    }

    file.onloadend = function() {
      cleanRules();
      insertRules(file.result);
      $rest.show();
      setImageSrc(file.result);      
    }

    var insertRules = function(image) {      
      sheet.insertRule('.photo.none-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.none-effect { background-image: url(' + image + ') !important}', 0);
      

      sheet.insertRule('.photo.pencil-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.pencil-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.watercolor-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.effects__img.watercolor-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.photo.watercolor-effect::before { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.watercolor-effect::before { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.photo.watercolor-effect::after { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.watercolor-effect::after { background-image: url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.emboss-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.emboss-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.colored-pencil-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.effects__img.colored-pencil-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.photo.colored-pencil-effect::before { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.colored-pencil-effect::before { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.chalkboard-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.chalkboard-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.colored-chalkboard-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.colored-chalkboard-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.airbrush-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.airbrush-effect { background-image: url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.hallucination-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.hallucination-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.flannel-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.flannel-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.low-ink-x-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.low-ink-x-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.low-ink-y-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.low-ink-y-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);

  
      sheet.insertRule('.photo.collage-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.collage-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);

      
      sheet.insertRule('.photo.mosaic-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mosaic-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
       
      sheet.insertRule('.photo.photo-border-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.photo-border-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
 
    
      sheet.insertRule('.photo.infrared-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.infrared-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.night-vision-effect { background-image: url(' + image + '), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px) !important}', 0);
      sheet.insertRule('.effects__img.night-vision-effect { background-image: url(' + image + '), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px) !important}', 0);

      sheet.insertRule('.photo.warhol-effect { background-image: linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.warhol-effect { background-image: linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.selective-color-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.selective-color-effect { background-image: url(' + image + ') !important}', 0);

      
      sheet.insertRule('.photo.mirror-x-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mirror-x-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.mirror-y-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mirror-y-effect { background-image: url(' + image + ') !important}', 0);
    }
  });


  $rest.on('click', function(){
    cleanRules();
    $(this).hide();
    setImageSrc('img/bg.jpg');
  });

  $effect.on('click', function(){
    $effect.removeClass('selected');
    $(this).addClass('selected');
    ef = this.getAttribute("data-name");
    currentEffect = ef.replace("-effect", "");
    $effectCode.hide();
    $('#'+currentEffect).show();
    $('#'+currentEffect+' .css').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_css" );
    $scss.removeClass('is-selected');
    $css.addClass('is-selected');

    $photo.removeClass();
    $photo.addClass('photo ' + ef);
  });

  $css.on('click', function(e){
    e.preventDefault();
    $codeBtn.removeClass('is-selected');
    $css.addClass('is-selected');
    $('#'+currentEffect+' .scss').hide();
    $('#'+currentEffect+' .scss').removeClass('is-selected');
    $('#'+currentEffect+' .css').show();    
    $('#'+currentEffect+' .css').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_css" );
  });

  $scss.on('click', function(e){
    e.preventDefault();
    $codeBtn.removeClass('is-selected');
    $scss.addClass('is-selected');
    $('#'+currentEffect+' .css').hide();
    $('#'+currentEffect+' .css').removeClass('is-selected');
    $('#'+currentEffect+' .scss').show();    
    $('#'+currentEffect+' .scss').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_scss" );
  });

  /**
   * Copy to clipboard
   */
  var clipboard = new Clipboard('.js-copy');

  clipboard.on('success', function(e) {
    $copyText.text('Copied!');
    setTimeout(function() {
      $copyText.text('Copy');
      e.clearSelection();
      
    }, 2000)
  });  


})(jQuery);
