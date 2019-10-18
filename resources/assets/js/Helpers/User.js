import Token from './Token'
import AppStorage from './AppStorage'

class User {
    login(data) {
        axios.post('/api/auth/login', data)
        .then(res => this.responseAfterLogin(res))
        //.catch(error => console.log(error.response.data))
        //.catch(function(response){
        //    console.log('response.data.msg');
        //    console.log('response.data.status');
        //})
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;
        console.log("AccessToken isValid: "+access_token);
        if(Token.isValid(access_token)) {
            console.log("AccessToken isValid: "+access_token);
            AppStorage.store(username,access_token);
            window.location = '/forum'
        } else {
            console.log("Invalid Login");
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        console.log(storedToken);
        if(storedToken) {
            return Token.isValid(storedToken) ? true : false
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout() {
        AppStorage.clear()
        window.location = '/forum'
    }

    name() {
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id() {
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();