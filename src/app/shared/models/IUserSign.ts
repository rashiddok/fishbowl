interface ISignFirstLastName {
  firstName: string;
  lastName: string;
}

export enum SignText {
  'companyDisplayName' = 0,
  'location' = 1,
  'professionalTitle' = 2,
  'username' = 4,
  'firstLastName' = 5,
  'Teacher' = 6,
  'Deactivated user' = 8,
}

export interface IUserSign {
  companyDisplayName: string;
  location?: string;
  professionalTitle?: string;
  username?: string;
  firstLastName?: ISignFirstLastName;
  signType: number;
}
