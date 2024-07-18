class StudentAdmissionForm{
    submit(){
        console.log("Submitted today.")
    }
    accepted(){
        console.log(this.name +" your admission form is accepted by the insitution.")
    }
    rejected(){
        console.log(this.name+" your admission form is rejected by the insitutional committee.")
    }
    fill(name){
        this.name=name;
    }
}
let malini_22 = new StudentAdmissionForm()
malini_22.fill("Malini")
let rish_18 = new StudentAdmissionForm()
rish_18.fill("Abhishek")
malini_22.submit()
malini_22.rejected()
rish_18.submit()
rish_18.accepted()