$(document).ready(function () {
  $('#add-goal-button').click(function () {
    var newGoal = $('#new-goal-input').val();
    $.post('api/goals/new', {
      title: newGoal.trim()
    }, (data) => {
      $('#goal-list').append(`<div class="row align-items-center">
        <button onclick="deleteGoal('${data.id}')" class="col-1 btn btn-danger">
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
      $('#new-goal-input').val("");
    });
  });
});

function deleteGoal(goalId) {
  axios.delete(`/api/goals/${goalId}`).then(() => {
    $(`#${goalId}`).remove();
  }).catch(error => console.log(error));
}

function updateGoal(goalId, value) {
  axios.patch(`/api/goals/${goalId}`, {
    done: value
  }).then(() => {
    const text = value ? 'Done' : 'Not Done';
    $(`#${goalId} .form-check-label`).text(text);
  }).catch((error) => {
    console.log(error);
  });
}