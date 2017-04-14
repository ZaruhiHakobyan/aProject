import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Http} from "@angular/http";


@Injectable()
export class AuthService extends RestService {

  private baseUrl: string = 'auth/';

  public register(data: {email: string, password: string}): Promise<any> {
    return this.post(this.baseUrl + 'register', data);
  }

  public login(data: {email: string, password: string}): Promise<any> {
    return this.post(this.baseUrl + 'authenticate', data);
  }

}
