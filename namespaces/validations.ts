namespace Validations {

    export const validateText = (text : string):boolean=>{
        return (text.length < 3) ? false: true;
    }

    const validateDate = (myDate:Date):boolean =>{
        return (isNaN(myDate.valueOf())) ? false : true;
    }
}

console.log(Validations.validateText('Re'));
