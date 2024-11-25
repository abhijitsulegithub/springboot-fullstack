import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '12766670-1c85-4432-bd5f-bcd052cd6eb1',
};

export const sampleWithPartialData: IAuthority = {
  name: '2058be8c-c7b6-46c8-960e-0da547065b67',
};

export const sampleWithFullData: IAuthority = {
  name: 'c235c900-5c10-4850-83cf-0052aaff5c9b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
