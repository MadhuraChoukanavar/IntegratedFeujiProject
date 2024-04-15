export class EmployeeSkillGet{
    constructor( 
    public employeeSkillId:number,  
    public  employeeMail:string,
    public  skillCategory:string,
	public  TechnicalCategory:string,
	public  skillId:string,
	public  skillTypeId:string,
	public  competencyLevelId:string,
	public  yearsOfExp:number,
	public  certification:string,
	public  description:string,
	public  comments:string,	
	public  isDeleted:number
    ){}
  }