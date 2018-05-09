import request from 'superagent';

const CALENDAR_ID = 'c06s2eq6p2n2445ucbbmfvis1c@group.calendar.google.com';
const API_KEY = 'AIzaSyArJT-_0CLLJ1WFgzeIAGlhqs183lb1zrI';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,

          })
          return callback
        })
        callback(events)
      }
    })

}
