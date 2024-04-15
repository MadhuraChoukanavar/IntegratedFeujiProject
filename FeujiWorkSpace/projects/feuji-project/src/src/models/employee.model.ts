export class Employee{
  constructor(
    public employeeId:number,
    public employeeCode:string,
    public firstName:string,
    public middleName:string,
    public lastName:string,
    public designation:string,
    public email:string,
    public gender:string,
    public dateOfJoining:Date,
    public reportingManagerId:number,
    public employmentType:string,
    public status:string,
    public deliveryUnitId:number,
    public businessUnitId:string,
     public exitDate:Date,
    public exitRemarks:string,
    public isDeleted:string,
    public uuid:string,
    public createdBy:number,
     public createdOn:Date,
    public modifiedBy:string,
     public modifiedOn:Date,
  ){}
}

