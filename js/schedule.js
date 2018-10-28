$(document).ready(function () {
  $('#calendar').fullCalendar({
    defaultView: 'month',
    selectable: true,
    editable: true,
    events: [{
        title: 'event1',
        start: '2018-10-01'
      },
      {
        title: 'event2',
        start: '2018-10-05',
        end: '2018-10-07'
      },
      {
        title: 'event3',
        start: '2018-10-05',
        end: '2018-10-07'
      },
      {
        title: 'event4',
        start: '2018-10-05',
        end: '2018-10-07'
      },
      {
        title: 'event5',
        start: '2018-10-09T12:30:00',
        allDay: false
      },
      {
        title: 'event6',
        start: '2018-10-09T11:30:00',
        allDay: false
      }
    ],
    select: function (start, end, jsEvent, view) {
      var abc = prompt('Enter Title');
      var newEvent = new Object();
      newEvent.title = abc;
      newEvent.start = moment(start).format();
      newEvent.allDay = false;
      $('#calendar').fullCalendar('renderEvent', newEvent);
    }
  });
});