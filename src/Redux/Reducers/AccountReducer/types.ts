export interface IStudent {
  name: string;
  surname: string;
  email: string;
  timePass: number;
}

export interface ITeacher {
  name: string;
  surname: string;
  email: string;
}

export enum UserActionTypes {
  INITSTUDENT = "INITSTUDENT",
  INITTEACHER = "INITTEACHER",
  INITSTUDENT_CLEAR = "INITSTUDENT_CLEAR",
  INITTEACHER_CLEAR = "INITTEACHER_CLEAR",

  INITUSER_WAITING = "INITUSER_WAITING",
  INITUSER_ERROR = "INITUSER_ERROR",
}

export interface IUserState {
  student: IStudent | null;
  teacher: ITeacher | null;
  loading: boolean;
  error: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthResponseStudent {
  token: string;
  expiredIn: Date;
  entity: IStudent;
}

export interface IAuthResponseTeacher {
  token: string;
  expiredIn: Date;
  entity: IStudent;
}

export interface IInitGet {
  email: string;
  roles: string;
}

export interface InitStudentAction {
  type: UserActionTypes.INITSTUDENT;
  payload: IStudent | null;
}
export interface InitTeacherAction {
  type: UserActionTypes.INITTEACHER;
  payload: ITeacher | null;
}
export interface InitUserWaitAction {
  type: UserActionTypes.INITUSER_WAITING;
  payload: boolean;
}
export interface InitUserErrorAction {
  type: UserActionTypes.INITUSER_ERROR;
  payload: string;
}

export interface InitStudentClearAction {
  type: UserActionTypes.INITSTUDENT_CLEAR;
}
export interface InitTeacherClearAction {
  type: UserActionTypes.INITTEACHER_CLEAR;
}

export type UserAction =
  | InitStudentAction
  | InitTeacherAction
  | InitUserWaitAction
  | InitUserErrorAction
  | InitStudentClearAction
  | InitTeacherClearAction;
