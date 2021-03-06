$(document).ready(function() {
  addSortable();

  $('#add-goal-button').click(function() {
    var newGoal = $('#new-goal-input').val();
    var length = $('#goal-list .row').length;

    $.post(
      'api/goals/new',
      {
        title: newGoal.trim(),
        index: length + 1
      },
      data => {
        $('#goal-list').append(`<div id=${
          data.id
        } class="row align-items-center">
          <button class="col-1 btn btn-danger">
            Delete</button>
          <li class="col list-group-item">
            ${data.title}
          </li>
          <div class="col-2 form-check">
            <input class="form-check-input"
            type="checkbox"
            value="bike"
            id="defaultCheck1">
            <label class="form-check-label"
            for="defaultCheck1">
              Not Done
            </label>
          </div>
        </div>`);
        $('#new-goal-input').val('');

        $('#goal-list').on('click', `#${data.id} .btn-danger`, () => {
          deleteGoal(data.id);
        });

        $('#goal-list').on('change', `#${data.id} .form-check-input`, () => {
          updateGoal(data.id);
        });
      }
    );
  });
});

function deleteGoal(goalId) {
  axios
    .delete(`/api/goals/${goalId}`)
    .then(() => {
      $(`#${goalId}`).remove();
    })
    .catch(error => console.log(error));
}

function updateGoal(goalId) {
  const value = $(`#${goalId} .form-check-input`).is(':checked');
  axios
    .patch(`/api/goals/${goalId}`, {
      done: value
    })
    .then(() => {
      const text = value ? 'Done' : 'Not Done';
      $(`#${goalId} .form-check-label`).text(text);
    })
    .catch(error => {
      console.log(error);
    });
}

function addSortable() {
  $('#goal-list').sortable({
    stop: updatePosition
  });
  $('#goal-list').disableSelection();
}

function updatePosition() {
  $('#goal-list .row').each(i => {
    const id = $('#goal-list .row').get(i).id;
    axios.patch(`/api/goals/${id}`, {
      index: i
    });
  });
}
