export interface MembersRoot {
  struct: Struct[];
  data: StructData;
}

export interface Struct {
  _id: string | null;
  children: EventItem[];
  isLeaf: boolean;
  type: string;
  stats: Stats;
  name?: string;
  lastNameAndFirstName?: string;
  hiringDate?: number;
  code?: string;
  memberTypeId?: string;
}

export interface EventItem {
  _id: string;
  autoScheduling: any;
  code: number;
  divisionId: string;
  endsAt: number;
  hideEndsAt: boolean;
  highlighted: boolean;
  fromPunch: any;
  isCancelled?: boolean;
  isDraft: boolean;
  isStandby: boolean;
  locationId: string;
  rrule: any;
  seenAt: number | null;
  subLocationId: string;
  memberId: string | null;
  note: string;
  skillId: string;
  startsAt: number;
  teamId: string;
  timeZone: string;
  type: number;
  uiProperties: UiProperties;
  settings: Settings;
  request: Request;
  clocking: Clocking;
  premiums: any[];
  tasks: any[];
}

export interface UiProperties {
  icon: number;
  iconColor: number;
  text: string;
  textColor: number;
  border: string;
  background: string;
  isNew?: boolean;
}

export interface Settings {
  breakPeriodInM: number;
  extraPaidTimeInM: number;
  invitationRuleId: string;
  paidBreaks: any[];
}

export interface Request {
  interestedAnswersCount: number;
  openShiftCount: number;
  type: number;
}

export interface Clocking {
  in: object;
  out: object;
  breakPeriodInM: number;
  paidDurationInM: number;
}

export interface Stats {
  byDay: Record<string, DayStats>;
  draftCost: number;
  draftWorkingHours: number;
  workerCount: number;
  workerCountWD: number;
  workingHours: number;
  workingHoursWD: number;
  cost: number;
  costWD: number;
}

export interface DayStats {
  byDay: object;
  draftCost: number;
  draftWorkingHours: number;
  workerCount: number;
  workerCountWD: number;
  workingHours: number;
  workingHoursWD: number;
  cost: number;
  costWD: number;
}

export interface StructData {
  events: any[];
  members: Member[];
  locations: Location[];
  subLocations: SubLocation[];
  skills: Skill[];
  teams: Team[];
  linkedEvents: any[];
  groupedEvents: any[];
  marketEvents: any[];
}

export interface Member {
  _id: string;
  status: string;
  isAdmin: boolean;
  fName: string;
  lName: string;
  lfNameLowerCase: string;
  nameLowerCase: string;
  code: string | null;
  email: string;
  skillIds: string[];
  ratingBySkill: object;
  teamIds: string[];
  locationIds: string[];
  hiringDate: number | null;
  hourlyWage: number | null;
  maxHoursPerWeek: number | null;
  accountId: string;
  managedTeamIds?: string[];
  supervisedTeamIds?: string[];
  typeId: string;
  phone?: string;
  phoneE164?: string;
  pin?: string;
  gender?: string | null;
  avatarVersion?: number;
}

export interface Location {
  _id: string;
  createdAt: number;
  updatedAt?: number;
  fallbackIds: string[] | null;
  status: string;
  groupId: string;
  orderedSubLocationIds: string[];
  radiusInM: number;
  geoLocationEnabled: boolean;
  createdByMemberId: string;
  updatedByMemberId: string;
  origin: string;
  locData: LocData;
}

export interface LocData {
  abbrev: string;
  code: string;
  name: string;
  address: string | null;
  geo: any;
}

export interface SubLocation {
  _id: string;
  createdAt: number;
  updatedAt?: number;
  status: string;
  groupId: string;
  names: { fr: string };
  abbrev: string;
  code: string;
  parentLocationId: string;
}

export interface Skill {
  _id: string;
  createdAt: number;
  updatedAt: number;
  fallbackIds: string[] | null;
  status: string;
  groupId: string;
  abbrev: string;
  code: string;
  names: { fr: string };
  descriptions?: Record<string, string | null>;
  color: number;
  clockingSettings: { enabled: boolean };
  createdByMemberId?: string;
  updatedByMemberId?: string;
  origin: string;
}

export interface Team {
  _id: string;
  createdAt: number;
  updatedAt: number;
  fallbackIds: string[] | null;
  groupId: string;
  status: string;
  names: Record<string, string>;
  namesLC: Record<string, string>;
  locationIds: string[];
  skillIds: string[];
  timeZone: string;
  code: string;
  divisionId: string;
  createdByMemberId: string;
  updatedByMemberId: string;
  origin: string | null;
  settings: Record<string, any>;
}
