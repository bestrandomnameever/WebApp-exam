import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

    private tokenName = "weebJwtToken";

    getToken(): String {
        return window.localStorage[this.tokenName];
    }

    saveToken(token: String) {
        window.localStorage[this.tokenName] = token;
    }

    destroyToken() {
        window.localStorage.removeItem(this.tokenName);
    }

}