import { AddressType } from "../enums/address-type.enum";

export class EmployeeAddress{
    addressType: AddressType = AddressType.currentAddress;
    address: string = '';
    city: string = '';
    postalCode: string = '';
}