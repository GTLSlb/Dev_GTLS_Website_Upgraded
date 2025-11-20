class Customer {
  constructor(userId, typeId, typeName, ownerId, phoneNumber, customerName, picture, username, email) {
    this.UserId = userId;
    this.TypeId = typeId;
    this.TypeName = typeName;
    this.OwnerId = ownerId;
    this.PhoneNumber = phoneNumber;
    this.CustomerName = customerName;
    this.Picture = picture;
    this.Username = username;
    this.Email = email;
  }
}

module.exports = Customer;