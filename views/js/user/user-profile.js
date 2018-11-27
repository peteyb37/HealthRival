$(document).ready(function() {
  $('#avatarInputTrigger').on('click', () => {
    $('#avatarInput').click();
  });

  $('#avatarInput').on('change', event => {
    readURL(event.target);
  });

  $('#locate-button').on('click', () => {
    $('.loader').css('display', 'block');
    $('#locate-button').css('display', 'none');

    getPosition((city, state) => {
      $('#city').val(city);
      $('#state').val(state);

      $('.loader').css('display', 'none');
      $('#locate-button').css('display', 'block');
    }, false);
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.user-avatar').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
