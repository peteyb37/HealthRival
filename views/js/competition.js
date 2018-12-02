var selectedId = 0;

function selectExercise(id) {
  if (id !== selectedId) {
    selectedId = id;
    $('.exercises-container .fa-check').remove();
    $(`.exercises-container #${id}`).append(`<i class="fas fa-check"></i>`);
  }
}
