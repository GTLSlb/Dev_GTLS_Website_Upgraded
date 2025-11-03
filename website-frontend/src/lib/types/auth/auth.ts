export type User = {
    "UserId": number;
    "TypeId": number;
    "TypeName": string;
    "OwnerId": number;
    "Username": string;
    "FirstName": string;
    "LastName": string;
    "Email": string;
    "PhoneNo": string;
    "Picture": string;
    "Dob": string;
    "Address": string;
    "NationalityId": number;
    "NationalityName": string;
    "BranchId": number;
    "RoleId": number;
    "RoleName": string;
    "ReportToId": number;
    "ReportToName": string;
    "HiringDate": string;
    "StateId": number;
    "StateName": string;
    "CustomerName"?: string;
}

export type LoginResponse = {
    "token": string;
    "user": User;
    "jwt_token": string;
}

export type token = string;