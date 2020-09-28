$(document).ready(function () {
  const check = {};

  $('.popover > ul > li > input:checkbox').on('click', function () {
    if ($(this).is(':checked')) {
      check[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete check[$(this).attr('data-id')];
    }
    print();
  });

  function print () {
    let sep = '';
    $('#amenitiesBox').html('');
    for (const key in check) {
      $('#amenitiesBox').append(sep + check[key]);
      sep = ', ';
    }
  }
});
