import { CalendarEvent, CalendarEventStatus, Scalars, Maybe, CalendarEventLocation } from './types'


export const ThomasSchema = {
  name: 'ThomasObject', 
  properties: {
    name: 'string'
  }
}

// export const ThomasObject = {
//   name: 'Alexander Hamilton'
// }

export const CalendarDetailsSchema = {
  name: 'CalendarEventDetails',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    startDate: 'date',
    startTimeZone: {
      timezone: 'string'
    },
    endDate: 'date',
    endTimeZone: {
      timezone: 'string'
    },
    allDay: 'bool',
    location: {locationString: 'string'},
    notes: 'string',
    status: 'string'
  }
}


export const event: CalendarEvent = {
  id: "5dcc1dc477812f790f696bc7",
  title: "Cortina Skiing",
  startDate: 1588100400000,
  startTimeZone: {
    timezone: "UK/London"
  },
  endDate: 1588114800000,
  endTimeZone: {
    timezone: "UK/London"
  },
  allDay: false,
  location: {locationString: "Greenleaf Chalet"},
  notes: "Bring warm clothes",
  status: "DEFAULT"
}




/*
export interface Guest {
  name: string;
}

export interface Event {
  title: Scalars['String'];
  startDate: Scalars['Date'];
  notes?: Maybe<Scalars['String']>;
  location?: Maybe<CalendarEventLocation>;
  guests: Guest[];
}

const EventSchema = {
  name: 'Event',
}


const event: Event = {
  title: "Rave",
  startDate: "Tomorrow",
  notes: "Will be epic",
  location: 
  {
    locationString: "Boom - Belgium"
  },
  guests: [
      {name: "Thomas"},
      {name: "Tim"}
  ]
}
*/

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