class Employee {
  constructor(
    userId,
    typeId,
    typeName,
    ownerId,
    phoneNumber,
    firstName,
    lastName,
    picture,
    username,
    email,
    address,
    Dob,
    nationalityId,
    nationalityName,
    branchId,
    roleId,
    roleName,
    reportToId,
    reportToName,
    hiringDate,
    stateId,
    stateName
  ) {
    this.UserId = userId;
    this.TypeId = typeId;
    this.TypeName = typeName;
    this.OwnerId = ownerId;
    this.Username = username;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.PhoneNo = phoneNumber;
    this.Picture = picture;
    this.Dob = Dob;
    this.Address = address;
    this.NationalityId = nationalityId;
    this.NationalityName = nationalityName;
    this.BranchId = branchId;
    this.RoleId = roleId;
    this.RoleName = roleName;
    this.ReportToId = reportToId;
    this.ReportToName = reportToName;
    this.HiringDate = hiringDate;
    this.StateId = stateId;
    this.StateName = stateName;
  }
}

module.exports = Employee;
