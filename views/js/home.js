$(document).ready(function() {
  if (!localStorage.getItem('location')) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      axios
        .get('http://ip-api.com/json')
        .then(response => {
          const {
            data: { city, regionName }
          } = response;
          savePositionToUser(city, regionName);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});

function setPosition(position) {
  const {
    coords: { longitude, latitude }
  } = position;
  axios
    .get(`/user/position/${longitude}/${latitude}`)
    .then(response => {
      console.log(response);
      const { city, state } = response.data;
      savePositionToUser(city, state);
    })
    .catch(error => {
      console.log(error);
    });
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
