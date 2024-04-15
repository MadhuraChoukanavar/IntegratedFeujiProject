import { ReferenceSkillCategoryBean } from "./ReferenceSkillCategoryBean";

export class SubSkillCategoryBean{
    constructor(
        public referenceDetailValue:string,
        public referenceType:ReferenceSkillCategoryBean
        
    ){ }
}