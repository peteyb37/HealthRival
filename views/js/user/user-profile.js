$(document).ready(function() {
  $('#avatarInputTrigger').on('click', () => {
    $('#avatarInput').click();
  });

  $('#avatarInput').on('change', event => {
    readURL(event.target);
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
