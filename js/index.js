$(window).load(function() {
  
  // Store the list element.
  var obj = $('.portrait-details');
  // Store half width of the portrait div.
  var push = $('.portrait').width() / 2;
  
  // Since every list element will have different content widths make an individual function for each of it.
  obj.each(function() {
    // Step 1: Get width of list element
    var objWidth = $(this).outerWidth();
    // Step 2: Pull list element to the left by half of its own width to align its own center with the left side of the portrait div. Then push back half of portrait width (stored above) to align both their center axes.
    $(this).css('margin-left', -(objWidth / 2 - push) + 'px');
  });
  
  // Make a mouse event function. I used click because I don't like the user to get attacked by stuff out of nowhere. The pointer should be enough of an indicator.
  $('.portrait').on('click', function(e) {
    // Prevent parent DOM from firing any of this.
    e.stopPropagation();
    // Only fire if it is the actual element, no childs allowed.
    if(e.target != this) return;
    // Toggle a class and make siblings remove it.
    $(this).toggleClass('show').siblings().removeClass('show');
  });
  
  // Too keep this intuitive make a second function to remove on document click. (Don't force mouse movements.)
  $(document).click(function() {
    $('.portrait').removeClass('show');
  });
  
});