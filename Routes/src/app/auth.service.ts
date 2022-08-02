export class authService{
    loggedIn:boolean=true;
    login(){
        this.loggedIn=true;
    }
    logout(){
        this.loggedIn=false;
    }
    isAuthenticated(){
        return this.loggedIn;
    }
}