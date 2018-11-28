$(document).ready(function() {
  $.i18n()
    .load({
      en: '/js/i18n/i18n/en.json',
      vni: '/js/i18n/i18n/vni.json'
    })
    .done(function() {
      const localLanguage = localStorage.getItem('language');
      setLocaleTo(localLanguage);

      axios.get('/user/api/info').then(response => {
        const user = response.data;
        const language = user.language;
        if (localLanguage !== language) {
          localStorage.setItem('language', language);
          setLocaleTo(language);
        }
      });
    });
});

var setLocaleTo = function(locale) {
  if (locale) $.i18n().locale = locale;

  $('[data-i18n]').each(function() {
    const message = $(this).attr('data-i18n');
    $(this).html($.i18n(message));
  });
};
