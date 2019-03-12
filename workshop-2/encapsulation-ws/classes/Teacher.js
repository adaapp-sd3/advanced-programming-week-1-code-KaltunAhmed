class Teacher {
    constructor(yearsOfService,name,initials,subject){
        this.yearsOfService = yearsOfService
        this.name = name
        this.initials = initials
        this.subject = subject
    }
    Teacher(name,initials,subject){
        this.name = name
        this.initials = initials
        this.subject = subject
    }
    getName(name){
        return this.name
    }
    getInitial(initials){
        return this.initials
    }
    getSubject(subject) {
        this.subject = this.subject
    }
    getyearsOfService(yearsOfService){
        return this.yearsOfService
    }
    setYearsOfService(number){
        this.yearsOfService = number
    }
}




module.exports = Teacher