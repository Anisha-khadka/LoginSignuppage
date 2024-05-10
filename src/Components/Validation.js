const Validation =(values)=>{
    let errors={}
    if(!values.name){
        errors.name
="Name required"    }
else if(!values.email){
    errors.email="Email required"
}
else if(!values.password){
    errors.password="Password required"
}
return errors;
}
export default Validation