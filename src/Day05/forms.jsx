import {useFormik} from "formik";
import * as Yup from "yup";
import  "./forms.css"
function Forms(){
   
    const ValidationSchema=Yup.object({
        fullname:Yup.string().min(3,"Fullname must contain atleast 3 letters").required("Fullname must be required"),
        email:Yup.string().email("must be in email format").required("Email must be required"),
        password:Yup.string().min(8,"password must contain atleast 8 characters").required("password must be required"),
        Cpassword:Yup.string().oneOf([Yup.ref("password")],"Password did not match").required("Confirm Password must be required"),
        gender:Yup.string().required("Please Select Gender"),
        country:Yup.string().required("please Choose country"),
        about:Yup.string().min(20, "About must contain at least 20 characters").max(200, "About must not exceed 200 characters").required("Please enter something about you"),
        resume:Yup.mixed().required("resume is required"),
        skills:Yup.array().min(1,"select atleast one skill").required("select at least one skill")

    })
const formik=useFormik({
    initialValues:{
        fullname:"",
        email:"",
        password:"",
        Cpassword:"",
        gender:"",
        skills:[],
        country:"",
        about:"",
        resume:null
    },
    validationSchema:ValidationSchema,
    onSubmit:(values)=>{
        console.log(values)
    }

})
return<>
<form action="" onSubmit={(e)=>{
    e.preventDefault()
    const formdata=new FormData(e.currentTarget)
    formik.handleSubmit(e)}}>
    <div id="name">
         <label htmlFor="fullname" style={{"color":"black"}}>Fullname:</label>
         <input type="text" name="fullname" id="fullname" value={formik.values.fullname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
         {formik.touched.fullname&&(<p>{formik.errors.fullname}</p>)}
    </div>
    <div id="Email">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}/>
        {formik.touched.email&&(<p>{formik.errors.email}</p>)}
    </div>
    <div id="Password">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}/>
        {formik.touched.password&&(<p>{formik.errors.password}</p>)}
    </div>
    <div id="CPassword">
        <label htmlFor="Cpassword">Confirm Password:</label>
        <input type="password" name="Cpassword" id="Cpassword" onBlur={formik.handleBlur} value={formik.values.Cpassword} onChange={formik.handleChange}/>
        {formik.touched.Cpassword&&(<p>{formik.errors.Cpassword}</p>)}
    </div>
    <div id="gender">
        <label htmlFor="">Gender:</label>
        <div>
            <label htmlFor="male"><input type="radio" name="gender" id="male"  value="male" onBlur={formik.handleBlur} checked={formik.values.gender==="male"} onChange={formik.handleChange}/>Male</label>
            <label htmlFor="female"><input type="radio" name="gender" id="female" value="female" onBlur={formik.handleBlur} checked={formik.values.gender==="female"} onChange={formik.handleChange}/>Female</label>
            <label htmlFor="other"><input type="radio" name="gender" id="other"  value="other" onBlur={formik.handleBlur} checked={formik.values.gender==="other"} onChange={formik.handleChange}/>Other</label>
        </div>
        {formik.touched.gender&&(<p>{formik.errors.gender}</p>)}

    </div>
    <div id="Skills">
        <label htmlFor="">Skills:</label>
        <div>
            <label htmlFor="python"> <input type="checkbox" name="skills" id="python" value="python" onBlur={formik.handleBlur} checked={formik.values.skills.includes("python")} onChange={formik.handleChange}/>Python</label>
            <label htmlFor="javascript"><input type="checkbox" name="skills" id="javascript" value="javascript" onBlur={formik.handleBlur} checked={formik.values.skills.includes("javascript")} onChange={formik.handleChange}/>Javascript</label>
            <label htmlFor="react"> <input type="checkbox" name="skills" id="react" value="react" onBlur={formik.handleBlur} checked={formik.values.skills.includes("react")} onChange={formik.handleChange}/>React</label>
            <label htmlFor="django"><input type="checkbox" name="skills" id="django"  value="django" onBlur={formik.handleBlur} checked={formik.values.skills.includes("django")} onChange={formik.handleChange}/>Django</label>
            <label htmlFor="sql"><input type="checkbox" name="skills" id="sql" value="sql" onBlur={formik.handleBlur} checked={formik.values.skills.includes("sql")} onChange={formik.handleChange}/>SQL</label>
        </div>
        {formik.touched.skills&&(<p>{formik.errors.skills}</p>)}

       
    </div>
    <div id="Country">
        <label htmlFor="country">Country:</label>
        <select name="country" id="country" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option value="">Select Country</option>
            <option value="india" id="country">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">canada</option>
            <option value="australia">Australia</option>
        </select>
         {formik.touched.country&&(<p>{formik.errors.country}</p>)}
    </div>

    <div id="About">
        <label htmlFor="about">Enter About You:</label>
        <textarea name="about" id="about" value={formik.values.about} onBlur={formik.handleBlur} onChange={formik.handleChange}></textarea>
         {formik.touched.about&&(<p>{formik.errors.about}</p>)}
    </div>
    <div id="Resume">
        <label htmlFor="resume">Resume:</label>
        <input type="file" name="resume" onChange={(e)=>{
            formik.setFieldValue("resume",e.target.files[0])}} onBlur={formik.handleBlur}/>
         {formik.touched.resume&&(<p>{formik.errors.resume}</p>)}
    </div>
    <button type="submit">Submit</button>
</form>

</>
}
export default Forms;