$(document).ready(function() {
  if (!localStorage.getItem('location')) {
    getPosition();
  }
});

function getPosition(cb, savePosition = true) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { longitude, latitude }
      } = position;
      axios
        .get(`/user/position/${longitude}/${latitude}`)
        .then(response => {
          const { city, state } = response.data;
          if (savePosition) {
            savePositionToUser(city, state);
          }
          cb(city, state);
        })
        .catch(error => {
          console.log(error);
        });
    });
  } else {
    axios
      .get('http://ip-api.com/json')
      .then(response => {
        const {
          data: { city, regionName }
        } = response;
        if (savePosition) {
          savePositionToUser(city, state);
        }
        cb(city, regionName);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

function savePositionToUser(city, state) {
  localStorage.setItem('location', city);
  axios
    .patch('/user/update', {
      city,
      state
    })
    .catch(error => {
      console.log(error);
    });
}
