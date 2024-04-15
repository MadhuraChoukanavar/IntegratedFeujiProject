import { ReferenceSkillCategoryBean } from "./ReferenceSkillCategoryBean";


export class SkillCategoryBean {
    constructor(
        public referenceDetailValue: string,
        public referenceType: ReferenceSkillCategoryBean,
        public isDeleted:number,
        public createdBy:string,
        public modifiedBy:string
    ) { }
}