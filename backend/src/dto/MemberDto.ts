import { convertDateTimeToDateString } from "../utils/convertDatetimeToDateString";

interface MemberType {
    id: number;
    name: string;
    birthday: Date;
    numberphone: string;
    street: string;
    district: string;
    city: string;
    state: string; 

}

export class MemberDto {

    id: number;
    name: string;
    birthday: string;
    numberphone: string;
    street: string;
    district: string;
    city: string;
    state: string; 


    constructor(
        member: MemberType 
        ) {
            this.id = member.id
            this.name = member.name
            this.birthday = convertDateTimeToDateString(member.birthday)
            this.numberphone = member.numberphone
            this.street = member.street
            this.district = member.district
            this.city = member.city
            this.state = member.state            
    }
}