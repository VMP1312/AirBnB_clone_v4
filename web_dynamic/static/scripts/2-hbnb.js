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

  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (outmsg) {
      $('#api_status').addClass('available');
    },
    error: function () {
      $('#api_status').removeClass('available');
    }
  });
});
