export type ColorsType = {
    ColorId: number;
    ColorType: string;
    ColorName: string;
};

export type StateType = {
  StateID: number;
  StateName: string;
};

export type UserAppType = {
  AppId: number;
  AppName: string;
  AppAbv: string;
  AppURL: string;
  AppDesc: string;
  AppVersion: string;
  AppPic: string;
  AppIcon: string;
  AppRoleId: number;
  AppRoleName: string;
  Colors: ColorsType[];
};

export type FeatureType = {
  FeautureId: string;
  FeatureName: string;
  FunctionName: string;
};
export type UserPermissionType = {
  Features: FeatureType[];
  States: StateType[];
};