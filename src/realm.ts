import Realm, { ObjectClass, ObjectSchema } from 'realm';


export const CalendarEventSchema: Realm.ObjectSchema = {
  name: 'CalendarEvent',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    startDate: 'date',
    startTimeZone: 'TimeZone',
    endDate: 'date',
    endTimeZone: 'TimeZone',
    allDay: 'bool',
    location: 'CalendarEventLocation',
    notes: 'string?',
    status: { type: 'string', indexed: true },
  },
};

const TimeZoneSchema: Realm.ObjectSchema = {
  name: 'TimeZone',
  properties: {
    timezone: 'string',
  },
};

const CalendarEventLocationSchema: Realm.ObjectSchema = {
  name: 'CalendarEventLocation',
  properties: {
    locationString: 'string',
  },
};


const SchemaArray: (ObjectClass | ObjectSchema)[] = [
  CalendarEventSchema,
  CalendarEventLocationSchema,
  TimeZoneSchema
]



export default new Realm({ schema: SchemaArray, deleteRealmIfMigrationNeeded: true });


