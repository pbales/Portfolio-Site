function handleExpandedMenu() {
  $('.navBar').on('click', '#navMenu', function() {
    $('.expandedMenu').toggleClass('menuHidden');
  });
  
  $('.navBar').on('click', '.expandedItemA', function() {
    $('.expandedMenu').toggleClass('menuHidden');
  });
}

$(handleExpandedMenu);