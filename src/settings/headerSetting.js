import Cookies from "js-cookie";

const AccessToken = Cookies.get("AccessToken")
export const headerSetting = {
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Origin": "*",
        "authorization": "bearer " + AccessToken
}


