import { CalendarEvent } from './types'
import cuid from 'cuid';


export const event: CalendarEvent = {
  id: "5dcc1dc477812f790f696bc7",
  title: "Cortina Skiing",
  startDate: new Date(1588100400000),
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: new Date(1588114800000),
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "Greenleaf Chalet"},
  notes: "Bring warm clothes",
  status: "DEFAULT"
}

export const event2: CalendarEvent = {
  id: cuid(),
  title: "Wine Tasting",
  startDate: new Date(1590000400000),
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: new Date(1590314800000),
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "Berry Bros"},
  notes: "New Zealand Pinot Noir night",
  status: "DEFAULT"
}

export const event3: CalendarEvent = {
  id: cuid(),
  title: "Avicii Concert",
  startDate: new Date(2020, 4, 20, 19),
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: new Date(2020, 4, 20, 23),
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "O2"},
  notes: "Tribute night",
  status: "DEFAULT"
}

export const event4: CalendarEvent = {
  id: cuid(),
  title: "Some gala",
  startDate: new Date(2020, 3, 20, 19),
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: new Date(2020, 3, 20, 19),
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "Annabel's"},
  notes: "Black tie",
  status: "DEFAULT"
}
export const event5: CalendarEvent = {
  id: cuid(),
  title: "Start Wars Opening",
  startDate: new Date(2020, 4, 4, 19),
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: new Date(2020, 4, 4, 21),
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "Odeon LS"},
  notes: "May the 4th be with you",
  status: "DEFAULT"
}


/*
{
    "data": {
      "calendarEvents": [
        {
          "id": "5dcc472ff437937fd96728de",
          "title": "Poker Night",
          "startDate": 1587326400000,
          "startTimeZone": {
            "timezone": "UK/London"
          },
          "endDate": 1587344400000,
          "endTimeZone": {
            "timezone": "UK/London"
          },
          "allDay": true,
          "location": null,
          "notes": "Guys poker night. BYO Cigars.",
          "status": "PENCILLED",
          "calendarEventAuthorization": {
            "modifyRightsConnection": {
              "edges": [
                {
                  "node": {
                    "id": "5dcc45a2f437937fd96728da"
                  }
                }
              ]
            }
          },
          "attendeesConnection": {
            "edges": [
              {
                "node": {
                  "id": "5dcc45a2f437937fd96728da",
                  "firstName": "Winston",
                  "lastName": "Churchill"
                },
                "status": "ACCEPTED"
              },
              {
                "node": {
                  "id": "5dcbf76c9454b874722939ec",
                  "firstName": "Johann",
                  "lastName": "Sebastian Bach"
                },
                "status": "INVITED"
              },
              {
                "node": {
                  "id": "5dcbf5ce9454b874722939eb",
                  "firstName": "Hans",
                  "lastName": "Zimmer"
                },
                "status": "TENTATIVE"
              },
              {
                "node": {
                  "id": "5dc0774f1c9d440000cac0ca",
                  "firstName": "Thomas",
                  "lastName": "Tank Engine"
                },
                "status": "TENTATIVE"
              }
            ]
          }
        },
        {
          "id": "5dcc1dc477812f790f696bc7",
          "title": "Cortina Skiing",
          "startDate": 1588100400000,
          "startTimeZone": {
            "timezone": "UK/London"
          },
          "endDate": 1588114800000,
          "endTimeZone": {
            "timezone": "UK/London"
          },
          "allDay": false,
          "location": null,
          "notes": null,
          "status": "DEFAULT",
          "calendarEventAuthorization": {
            "modifyRightsConnection": {
              "edges": [
                {
                  "node": {
                    "id": "5dcbf76c9454b874722939ec"
                  }
                }
              ]
            }
          },
          "attendeesConnection": {
            "edges": [
              {
                "node": {
                  "id": "5dcbf76c9454b874722939ec",
                  "firstName": "Johann",
                  "lastName": "Sebastian Bach"
                },
                "status": "ACCEPTED"
              },
              {
                "node": {
                  "id": "5dc0774f1c9d440000cac0ca",
                  "firstName": "Thomas",
                  "lastName": "Tank Engine"
                },
                "status": "TENTATIVE"
              }
            ]
          }
        }
      ]
    }
  } 
  */