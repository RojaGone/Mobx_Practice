import { action, computed, makeObservable, observable, autorun, runInAction } from "mobx"

class UserStore{

    userInfo = {
        id: '1',
        name: 'code test',
        subject: ['math','english','hindi']
    }

    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,
            addSubject: action
        })
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }

    get totalSubject(){
        return this.userInfo.subject.length
    }

    logUserDetails = () => {
        console.log(" auto run - sub length is: "+this.totalSubject);
    }

    prefetchData = () => {
        console.log("run in action");
    }

    updateUser(name){
        let reName = this.userInfo.name;
        reName = name
        return this.userInfo.name = name
    }

    addSubject(data){
        return this.userInfo.subject = [...this.userInfo.subject,data]
    }
}

export default UserStore;