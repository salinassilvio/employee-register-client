import React,{useState, useEffect} from "react";

const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    employeeId:0,
    employeeName:'',
    occupation:'',
    imageName:'',
    imageSrc:'',
    imageFile:null
}

export default function Employee() {

  const [values,setValues] = useState(initialFieldValues)

  const handleInputChange = e => {
      const {name,value} = e.target;
      setValues({
          ...values,
        [name]:value
      })
  }

  return (
    <>
      <div className="container text-center">
          <p className="lead">
              An Employee
          </p>
      </div>
      <form autoComplete="off" noValidate>
        <div class="card">
            <img src={values.imageSrc} className="card-img-top" />
          <div class="card-body">
          <div className="form-group">
                <input className="form-control-file"  type="file" accept="image/*" name="employeeName" 
                        value={values.employeeName} 
                        onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Employee Name" type="text" name="employeeName" 
                        value={values.employeeName} 
                        onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Occupation" type="text" name="occupation" 
                        value={values.occupation} 
                        onChange={handleInputChange} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
