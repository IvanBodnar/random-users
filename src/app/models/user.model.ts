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

  private capitalize( word: string ): string {
    return word.replace( word[0], word[0].toUpperCase() );
  }

  fullName(): string {
    return `${ this.capitalize( this.firstName ) } ${ this.capitalize( this.lastName ) }`;
  }

  twitter(): string {
    return `@${ this.firstName[0] }${ this.lastName }`;
  }
}
