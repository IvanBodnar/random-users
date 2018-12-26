import UserDetailsModel from './user-details.model';


export default class UserModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public phone: string,
    public thumbnail: string,
    public details: UserDetailsModel
  ) { }
}
