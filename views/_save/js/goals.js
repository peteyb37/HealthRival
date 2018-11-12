$(document).ready(function () {

  $('#add-goal-button').click(function () {
    var newGoal = $('#new-goal-input').val();
    if (newGoal && newGoal.trim()) {
      $('#goal-list').append(`<div class="row align-items-center">
        <button class="col-1 btn btn-danger">
          Delete</button>
        <li class="col list-group-item">
          ${newGoal.trim()}
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
    }
  });
});