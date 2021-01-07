import { UserManagerSettings, WebStorageStateStore } from "oidc-client"

export const prodConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "finance_investin",
    redirect_uri: "https://investin.badeev.info/auth-complete",
    response_type: "code",
    loadUserInfo: true,
    scope: "openid profile Portfolio.Finance.API",
    post_logout_redirect_uri: "https://investin.badeev.info/signout",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "https://investin.badeev.info/silent.html",
}

export const devConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "finance_investin",
    redirect_uri: "http://localhost:3000/auth-complete",
    response_type: "code",
    loadUserInfo: true,
    scope: "openid profile Portfolio.Finance.API",
    post_logout_redirect_uri: "http://localhost:3000/signout",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "http://localhost:3000/silent.html",
}
