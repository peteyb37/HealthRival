$(document).ready(function () {
  if (!localStorage.getItem('location')) {
    console.log('do not have location')
    axios.get('http://ip-api.com/json').then(response => {
      const {
        data: {
          city,
          regionName
        }
      } = response;
      localStorage.setItem('location', city);
      axios.patch('/user/update', {
        city,
        state: regionName
      }).catch(error => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  } else {
    console.log('has location')
  }
});