export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AddCalendarUserEmailInput = {
  emailString: Scalars['String'];
};

export type AddCalendarUserEmailResponse = MutationResponse & {
   __typename?: 'AddCalendarUserEmailResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type AddCalendarUserPhoneNumberInput = {
  number: Scalars['String'];
  digits: Scalars['String'];
  countryCode: Scalars['String'];
};

export type AddCalendarUserPhoneNumberResponse = MutationResponse & {
   __typename?: 'AddCalendarUserPhoneNumberResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CalendarEvent = Node & {
   __typename?: 'CalendarEvent';
  id: Scalars['ID'];
  title: Scalars['String'];
  startDate: Scalars['Date'];
  startTimeZone: TimeZone;
  endDate: Scalars['Date'];
  endTimeZone: TimeZone;
  allDay: Scalars['Boolean'];
  location?: Maybe<CalendarEventLocation>;
  notes?: Maybe<Scalars['String']>;
  creationDate: Scalars['Date'];
  lastModifiedEventDetailsDate: Scalars['Date'];
  calendarEventAuthorization: CalendarEventAuthorization;
  attendeesConnection: CalendarEventAttendeesConnection;
  calendarGhostsConnection: CalendarEventCalendarGhostConnection;
  calendarEventMessagesConnection: CalendarEventMessagesConnection;
  calendarEventColour: Scalars['String'];
  childCalendarEvent: Scalars['Boolean'];
  parentCalendarEvent?: Maybe<Scalars['ID']>;
  status: CalendarEventStatus;
};


export type CalendarEventAttendeesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


export type CalendarEventCalendarGhostsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


export type CalendarEventCalendarEventMessagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

export type CalendarEventAttendeesConnection = {
   __typename?: 'CalendarEventAttendeesConnection';
  edges?: Maybe<Array<Maybe<CalendarEventAttendeesEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventAttendeesEdge = {
   __typename?: 'CalendarEventAttendeesEdge';
  cursor: Scalars['String'];
  node: CalendarUser;
  status: InviteStatus;
  lastViewedDate?: Maybe<Scalars['Date']>;
  assignedColour?: Maybe<Scalars['String']>;
};

export type CalendarEventAuthorization = {
   __typename?: 'CalendarEventAuthorization';
  organizersConnection: CalendarEventOrganizersCalendarUsersConnection;
  modifyRightsConnection: CalendarEventModifyRightsCalendarUsersConnection;
  inviteRightsConnection: CalendarEventInviteRightsCalendarUsersConnection;
};

export type CalendarEventCalendarGhostConnection = {
   __typename?: 'CalendarEventCalendarGhostConnection';
  edges?: Maybe<Array<Maybe<CalendarEventCalendarGhostsEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventCalendarGhostsEdge = {
   __typename?: 'CalendarEventCalendarGhostsEdge';
  cursor: Scalars['String'];
  node: CalendarGhost;
};

export type CalendarEventInviteRightsCalendarUsersConnection = {
   __typename?: 'CalendarEventInviteRightsCalendarUsersConnection';
  edges?: Maybe<Array<Maybe<CalendarEventInviteRightsCalendarUsersEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventInviteRightsCalendarUsersEdge = {
   __typename?: 'CalendarEventInviteRightsCalendarUsersEdge';
  cursor: Scalars['String'];
  node: CalendarUser;
  lastViewedDate?: Maybe<Scalars['Date']>;
};

export type CalendarEventLocation = {
   __typename?: 'CalendarEventLocation';
  locationString: Scalars['String'];
};

export type CalendarEventLocationInput = {
  locationString: Scalars['String'];
};

export type CalendarEventMessage = Node & {
   __typename?: 'CalendarEventMessage';
  id: Scalars['ID'];
  calendarUser: CalendarUser;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  lastModifiedContentDate?: Maybe<Scalars['Date']>;
};

export type CalendarEventMessagesConnection = {
   __typename?: 'CalendarEventMessagesConnection';
  edges?: Maybe<Array<Maybe<CalendarEventMessagesEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventMessagesEdge = {
   __typename?: 'CalendarEventMessagesEdge';
  cursor: Scalars['String'];
  node: CalendarEventMessage;
};

export type CalendarEventModifyRightsCalendarUsersConnection = {
   __typename?: 'CalendarEventModifyRightsCalendarUsersConnection';
  edges?: Maybe<Array<Maybe<CalendarEventModifyRightsCalendarUsersEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventModifyRightsCalendarUsersEdge = {
   __typename?: 'CalendarEventModifyRightsCalendarUsersEdge';
  cursor: Scalars['String'];
  node: CalendarUser;
  lastViewedDate?: Maybe<Scalars['Date']>;
};

export type CalendarEventOrganizersCalendarUsersConnection = {
   __typename?: 'CalendarEventOrganizersCalendarUsersConnection';
  edges?: Maybe<Array<Maybe<CalendarEventOrganizersCalendarUsersEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarEventOrganizersCalendarUsersEdge = {
   __typename?: 'CalendarEventOrganizersCalendarUsersEdge';
  cursor: Scalars['String'];
  node: CalendarUser;
  lastViewedDate?: Maybe<Scalars['Date']>;
};

export enum CalendarEventStatus {
  Default = 'DEFAULT',
  Pencilled = 'PENCILLED',
  Cancelled = 'CANCELLED'
}

export type CalendarGhost = Node & {
   __typename?: 'CalendarGhost';
  id: Scalars['ID'];
  identifierString?: Maybe<Scalars['String']>;
};

export type CalendarUser = Node & {
   __typename?: 'CalendarUser';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
  emailsConnection: CalendarUserEmailsConnection;
  phoneNumbersConnection: CalendarUserPhoneNumbersConnection;
};


export type CalendarUserEmailsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


export type CalendarUserPhoneNumbersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

export type CalendarUserEmailsConnection = {
   __typename?: 'CalendarUserEmailsConnection';
  edges?: Maybe<Array<Maybe<CalendarUserEmailsEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarUserEmailsEdge = {
   __typename?: 'CalendarUserEmailsEdge';
  cursor: Scalars['String'];
  node: Email;
  isPrimary: Scalars['Boolean'];
};

export type CalendarUserEmailsInput = {
  emailString: Scalars['String'];
  isPrimary: Scalars['Boolean'];
};

export type CalendarUserLoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CalendarUserLoginResponse = MutationResponse & {
   __typename?: 'CalendarUserLoginResponse';
  success: Scalars['Boolean'];
  authorization_token?: Maybe<Scalars['String']>;
};

export type CalendarUserLogoutResponse = MutationResponse & {
   __typename?: 'CalendarUserLogoutResponse';
  success: Scalars['Boolean'];
};

export type CalendarUserPhoneNumbersConnection = {
   __typename?: 'CalendarUserPhoneNumbersConnection';
  edges?: Maybe<Array<Maybe<CalendarUserPhoneNumbersEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CalendarUserPhoneNumbersEdge = {
   __typename?: 'CalendarUserPhoneNumbersEdge';
  cursor: Scalars['String'];
  node: PhoneNumber;
  isPrimary: Scalars['Boolean'];
};

export type CalendarUserPhoneNumbersInput = {
  number: Scalars['String'];
  digits: Scalars['String'];
  countryCode: Scalars['String'];
  isPrimary: Scalars['Boolean'];
};

export type CancelCalendarEventInput = {
  id: Scalars['ID'];
};

export type CancelCalendarEventResponse = MutationResponse & {
   __typename?: 'CancelCalendarEventResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type ConfirmCalendarUserEmailInput = {
  Something?: Maybe<Scalars['Boolean']>;
};

export type ConfirmCalendarUserEmailResponse = MutationResponse & {
   __typename?: 'ConfirmCalendarUserEmailResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type ConfirmCalendarUserPhoneNumberInput = {
  Something?: Maybe<Scalars['Boolean']>;
};

export type ConfirmCalendarUserPhoneNumberResponse = MutationResponse & {
   __typename?: 'ConfirmCalendarUserPhoneNumberResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type CreateCalendarEventAttendeeInput = {
  calendarUserId: Scalars['ID'];
};

export type CreateCalendarEventAttendeesInput = {
  attendees: Array<CreateCalendarEventAttendeeInput>;
};

export type CreateCalendarEventAuthorizationInput = {
  organizers: Array<CreateCalendarEventOrganizersInput>;
  modifyRights: Array<CreateCalendarEventModifyRightsInput>;
  inviteRights: Array<CreateCalendarEventInviteRightsInput>;
};

export type CreateCalendarEventCalendarGhostInput = {
  identifierString: Scalars['String'];
};

export type CreateCalendarEventDetailsInput = {
  title: Scalars['String'];
  startDate: Scalars['Date'];
  startTimeZone: TimeZoneInput;
  endDate: Scalars['Date'];
  endTimeZone: TimeZoneInput;
  allDay: Scalars['Boolean'];
  location?: Maybe<CalendarEventLocationInput>;
  notes?: Maybe<Scalars['String']>;
  calendarEventColour: Scalars['String'];
  childCalendarEvent: Scalars['Boolean'];
  parentCalendarEvent?: Maybe<Scalars['ID']>;
  status: CalendarEventStatus;
};

export type CreateCalendarEventGhostsInput = {
  ghosts: Array<Maybe<CreateCalendarEventCalendarGhostInput>>;
};

export type CreateCalendarEventInviteRightsInput = {
  calendarUserId: Scalars['ID'];
};

export type CreateCalendarEventMessageInput = {
  calendarEventId: Scalars['ID'];
  messageContent: Scalars['String'];
};

export type CreateCalendarEventMessageResponse = MutationResponse & {
   __typename?: 'CreateCalendarEventMessageResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type CreateCalendarEventModifyRightsInput = {
  calendarUserId: Scalars['ID'];
};

export type CreateCalendarEventOrganizersInput = {
  calendarUserId: Scalars['ID'];
};

export type CreateCalendarEventResponse = MutationResponse & {
   __typename?: 'CreateCalendarEventResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type CreateCalendarUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
  emails: Array<CalendarUserEmailsInput>;
  password: Scalars['String'];
};

export type CreateCalendarUserResponse = MutationResponse & {
   __typename?: 'CreateCalendarUserResponse';
  success: Scalars['Boolean'];
  authorization_token?: Maybe<Scalars['String']>;
};

export type CreateCalendarUserWithPhoneNumberInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
  emails: Array<CalendarUserEmailsInput>;
  phoneNumbers: Array<CalendarUserPhoneNumbersInput>;
  password: Scalars['String'];
};


export type Email = Node & {
   __typename?: 'Email';
  id: Scalars['ID'];
  emailString: Scalars['String'];
};

export type InkInInput = {
  id: Scalars['ID'];
};

export type InkInResponse = MutationResponse & {
   __typename?: 'InkInResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type InviteCalendarEventAttendeesInput = {
  id: Scalars['ID'];
  attendees: Array<Maybe<UpdateCalendarEventAttendeesEdgeInput>>;
};

export type InviteCalendarEventAttendeesResponse = MutationResponse & {
   __typename?: 'InviteCalendarEventAttendeesResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type InviteCalendarEventCalendarGhostsResponse = MutationResponse & {
   __typename?: 'InviteCalendarEventCalendarGhostsResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type InviteCalendarEventGhostsInput = {
  id: Scalars['ID'];
  ghosts: Array<Maybe<UpdateCalendarEventCalendarGhostsEdgeInput>>;
};

export enum InviteStatus {
  Invited = 'INVITED',
  Accepted = 'ACCEPTED',
  Tentative = 'TENTATIVE',
  Declined = 'DECLINED'
}

export type Mutation = {
   __typename?: 'Mutation';
  createCalendarUser?: Maybe<CreateCalendarUserResponse>;
  createCalendarUserWithPhoneNumber?: Maybe<CreateCalendarUserResponse>;
  updateCalendarUserPassword?: Maybe<UpdateCalendarUserPasswordResponse>;
  updateCalendarUserDetails?: Maybe<UpdateCalendarUserDetailsResponse>;
  addCalendarUserEmail?: Maybe<AddCalendarUserEmailResponse>;
  confirmCalendarUserEmail?: Maybe<ConfirmCalendarUserEmailResponse>;
  removeCalendarUserEmail?: Maybe<RemoveCalendarUserEmailResponse>;
  setCalendarUserEmailPrimary?: Maybe<SetCalendarUserEmailPrimaryResponse>;
  addCalendarUserPhoneNumber?: Maybe<AddCalendarUserPhoneNumberResponse>;
  confirmCalendarUserPhoneNumber?: Maybe<ConfirmCalendarUserPhoneNumberResponse>;
  removeCalendarUserPhoneNumber?: Maybe<RemoveCalendarUserPhoneNumberResponse>;
  setCalendarUserPhoneNumberPrimary?: Maybe<SetCalendarUserPhoneNumberPrimaryResponse>;
  updateCalendarUserSettings?: Maybe<UpdateCalendarUserSettingsResponse>;
  login?: Maybe<CalendarUserLoginResponse>;
  updateCalendarUserCalendarEventInviteStatus?: Maybe<UpdateCalendarUserCalendarEventInviteStatusResponse>;
  viewedCalendarEvent?: Maybe<ViewedCalendarEventResponse>;
  createCalendarEvent?: Maybe<CreateCalendarEventResponse>;
  inviteAttendeesToCalendarEvent?: Maybe<InviteCalendarEventAttendeesResponse>;
  inviteGhostsToCalendarEvent?: Maybe<InviteCalendarEventCalendarGhostsResponse>;
  updateCalendarEventDetails?: Maybe<UpdateCalendarEventDetailsResponse>;
  updateCalendarEventModifyAndInviteRights?: Maybe<UpdateCalendarEventModifyAndInviteRightsResponse>;
  transferCalendarEventOrganizerRights?: Maybe<TransferCalendarEventOrganizerResponse>;
  inkInPencilledCalendarEvent?: Maybe<InkInResponse>;
  cancelCalendarEvent?: Maybe<CancelCalendarEventResponse>;
  createCalendarEventMessage?: Maybe<CreateCalendarEventMessageResponse>;
  updateCalendarEventMessage?: Maybe<UpdateCalendarEventMessageResponse>;
};


export type MutationCreateCalendarUserArgs = {
  input?: Maybe<CreateCalendarUserInput>;
};


export type MutationCreateCalendarUserWithPhoneNumberArgs = {
  input?: Maybe<CreateCalendarUserWithPhoneNumberInput>;
};


export type MutationUpdateCalendarUserPasswordArgs = {
  input?: Maybe<UpdateCalendarUserPasswordInput>;
};


export type MutationUpdateCalendarUserDetailsArgs = {
  input?: Maybe<UpdateCalendarUserDetailsInput>;
};


export type MutationAddCalendarUserEmailArgs = {
  input?: Maybe<AddCalendarUserEmailInput>;
};


export type MutationConfirmCalendarUserEmailArgs = {
  input?: Maybe<ConfirmCalendarUserEmailInput>;
};


export type MutationRemoveCalendarUserEmailArgs = {
  input?: Maybe<RemoveCalendarUserEmailInput>;
};


export type MutationSetCalendarUserEmailPrimaryArgs = {
  input?: Maybe<SetCalendarUserEmailPrimaryInput>;
};


export type MutationAddCalendarUserPhoneNumberArgs = {
  input?: Maybe<AddCalendarUserPhoneNumberInput>;
};


export type MutationConfirmCalendarUserPhoneNumberArgs = {
  input?: Maybe<ConfirmCalendarUserPhoneNumberInput>;
};


export type MutationRemoveCalendarUserPhoneNumberArgs = {
  input?: Maybe<RemoveCalendarUserPhoneNumberInput>;
};


export type MutationSetCalendarUserPhoneNumberPrimaryArgs = {
  input?: Maybe<SetCalendarUserPhoneNumberPrimaryInput>;
};


export type MutationUpdateCalendarUserSettingsArgs = {
  input?: Maybe<UpdateCalendarUserSettingsInput>;
};


export type MutationLoginArgs = {
  input?: Maybe<CalendarUserLoginInput>;
};


export type MutationUpdateCalendarUserCalendarEventInviteStatusArgs = {
  input?: Maybe<UpdateCalendarUserCalendarEventInviteStatusInput>;
};


export type MutationViewedCalendarEventArgs = {
  input?: Maybe<ViewedCalendarEventInput>;
};


export type MutationCreateCalendarEventArgs = {
  detailsInput?: Maybe<CreateCalendarEventDetailsInput>;
  authorizationInput?: Maybe<CreateCalendarEventAuthorizationInput>;
  attendeesInput?: Maybe<CreateCalendarEventAttendeesInput>;
  ghostsInput?: Maybe<CreateCalendarEventGhostsInput>;
};


export type MutationInviteAttendeesToCalendarEventArgs = {
  input?: Maybe<InviteCalendarEventAttendeesInput>;
};


export type MutationInviteGhostsToCalendarEventArgs = {
  input?: Maybe<InviteCalendarEventGhostsInput>;
};


export type MutationUpdateCalendarEventDetailsArgs = {
  input?: Maybe<UpdateCalendarEventDetailsInput>;
};


export type MutationUpdateCalendarEventModifyAndInviteRightsArgs = {
  input?: Maybe<UpdateCalendarEventModifyAndInviteRightsInput>;
};


export type MutationTransferCalendarEventOrganizerRightsArgs = {
  input?: Maybe<TransferCalendarEventOrganizerRightsInput>;
};


export type MutationInkInPencilledCalendarEventArgs = {
  input?: Maybe<InkInInput>;
};


export type MutationCancelCalendarEventArgs = {
  input?: Maybe<CancelCalendarEventInput>;
};


export type MutationCreateCalendarEventMessageArgs = {
  input?: Maybe<CreateCalendarEventMessageInput>;
};


export type MutationUpdateCalendarEventMessageArgs = {
  input?: Maybe<UpdateCalendarEventMessageInput>;
};

export type MutationResponse = {
  success: Scalars['Boolean'];
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type PhoneNumber = Node & {
   __typename?: 'PhoneNumber';
  id: Scalars['ID'];
  number: Scalars['String'];
  digits: Scalars['String'];
  countryCode: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  calendarEvent?: Maybe<CalendarEvent>;
  calendarUser?: Maybe<CalendarUser>;
  contactsMapByEmails?: Maybe<Array<Maybe<CalendarUser>>>;
  contactsMapByPhoneNumbers?: Maybe<Array<Maybe<CalendarUser>>>;
  calendarEvents: Array<Maybe<CalendarEvent>>;
  ownCalendarUser?: Maybe<CalendarUser>;
};


export type QueryCalendarEventArgs = {
  id: Scalars['ID'];
};


export type QueryCalendarUserArgs = {
  id: Scalars['ID'];
};


export type QueryContactsMapByEmailsArgs = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryContactsMapByPhoneNumbersArgs = {
  phoneNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCalendarEventsArgs = {
  from: Scalars['String'];
  until: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
};

export type RemoveCalendarUserEmailInput = {
  emailId: Scalars['ID'];
};

export type RemoveCalendarUserEmailResponse = MutationResponse & {
   __typename?: 'RemoveCalendarUserEmailResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type RemoveCalendarUserPhoneNumberInput = {
  phoneNumberId: Scalars['ID'];
};

export type RemoveCalendarUserPhoneNumberResponse = MutationResponse & {
   __typename?: 'RemoveCalendarUserPhoneNumberResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type SetCalendarUserEmailPrimaryInput = {
  emailId: Scalars['ID'];
  password: Scalars['String'];
};

export type SetCalendarUserEmailPrimaryResponse = MutationResponse & {
   __typename?: 'SetCalendarUserEmailPrimaryResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type SetCalendarUserPhoneNumberPrimaryInput = {
  phoneNumberId: Scalars['ID'];
  password: Scalars['String'];
};

export type SetCalendarUserPhoneNumberPrimaryResponse = MutationResponse & {
   __typename?: 'SetCalendarUserPhoneNumberPrimaryResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type Subscription = {
   __typename?: 'Subscription';
  calendarEvent?: Maybe<CalendarEvent>;
};

export type TimeZone = {
   __typename?: 'TimeZone';
  timezone: Scalars['String'];
};

export type TimeZoneInput = {
  timezone: Scalars['String'];
};

export type TransferCalendarEventOrganizerResponse = MutationResponse & {
   __typename?: 'TransferCalendarEventOrganizerResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type TransferCalendarEventOrganizerRightsInput = {
  id: Scalars['ID'];
  newOrganizerId?: Maybe<Scalars['ID']>;
};

export type UpdateCalendarEventAttendeesEdgeInput = {
  calendarUserId: Scalars['ID'];
};

export type UpdateCalendarEventCalendarGhostsEdgeInput = {
  identifierString: Scalars['String'];
};

export type UpdateCalendarEventDetailsInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  startDate: Scalars['Date'];
  startTimeZone: TimeZoneInput;
  endDate: Scalars['Date'];
  endTimeZone: TimeZoneInput;
  allDay: Scalars['Boolean'];
  location?: Maybe<CalendarEventLocationInput>;
  notes?: Maybe<Scalars['String']>;
  calendarEventColour: Scalars['String'];
};

export type UpdateCalendarEventDetailsResponse = MutationResponse & {
   __typename?: 'UpdateCalendarEventDetailsResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type UpdateCalendarEventInviteRightsInput = {
  calendarUserId: Scalars['ID'];
};

export type UpdateCalendarEventMessageInput = {
  id: Scalars['ID'];
  calendarEventId: Scalars['ID'];
  messageContent?: Maybe<Scalars['String']>;
};

export type UpdateCalendarEventMessageResponse = MutationResponse & {
   __typename?: 'UpdateCalendarEventMessageResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type UpdateCalendarEventModifyAndInviteRightsInput = {
  id: Scalars['ID'];
  modifyRights: Array<UpdateCalendarEventModifyRightsInput>;
  inviteRights: Array<UpdateCalendarEventInviteRightsInput>;
};

export type UpdateCalendarEventModifyAndInviteRightsResponse = MutationResponse & {
   __typename?: 'UpdateCalendarEventModifyAndInviteRightsResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type UpdateCalendarEventModifyRightsInput = {
  calendarUserId: Scalars['ID'];
};

export type UpdateCalendarUserCalendarEventInviteStatusInput = {
  id: Scalars['ID'];
  status: InviteStatus;
};

export type UpdateCalendarUserCalendarEventInviteStatusResponse = MutationResponse & {
   __typename?: 'UpdateCalendarUserCalendarEventInviteStatusResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

export type UpdateCalendarUserDetailsInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
};

export type UpdateCalendarUserDetailsResponse = MutationResponse & {
   __typename?: 'UpdateCalendarUserDetailsResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type UpdateCalendarUserPasswordInput = {
  existingPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type UpdateCalendarUserPasswordResponse = MutationResponse & {
   __typename?: 'UpdateCalendarUserPasswordResponse';
  success: Scalars['Boolean'];
  authorization_token?: Maybe<Scalars['String']>;
};

export type UpdateCalendarUserSettingsInput = {
  settings?: Maybe<Scalars['Boolean']>;
};

export type UpdateCalendarUserSettingsResponse = MutationResponse & {
   __typename?: 'UpdateCalendarUserSettingsResponse';
  success: Scalars['Boolean'];
  ownCalendarUser?: Maybe<CalendarUser>;
};

export type ViewedCalendarEventInput = {
  id: Scalars['ID'];
};

export type ViewedCalendarEventResponse = MutationResponse & {
   __typename?: 'ViewedCalendarEventResponse';
  success: Scalars['Boolean'];
  calendarEvent?: Maybe<CalendarEvent>;
};

