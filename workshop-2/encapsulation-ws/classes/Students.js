class Student {
    constructor(name,form){
        this.name = name
        this.form = form
        this.year = form.substring(0, form.length - 1);
    }
    getName(name){
        return this.name
    }
    getYearGroup(year){
        return this.year
    }
    getForm(form){
        return this.form
    }
}



module.exports = Student