import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });


  const [formErrors, setFormErrors] = useState({
    email: null,
    name: null,
    username: null,
    password: null,
    confirmPassword: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;

    if (fieldName == "email"){
      setFormValues({
      ...formValues,
      email: value,
    });

    setFormErrors({
      ...formErrors,
      email: value.length === 0 ? "required" : (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ? "invalid email format" : null

    });
    }

    if (fieldName == "name"){
      setFormValues({
      ...formValues,
      name: value,
    });

    setFormErrors({
      ...formErrors,
      name: (value.trim()).length === 0 ? "required" : null
    });
    }

    if (fieldName == "username"){
      setFormValues({
      ...formValues,
      username: value,
    });

    setFormErrors({
      ...formErrors,
      username: (value.trim()).length === 0 ? "required" : (/\s/.test(value)) ? "cannot contain spaces" : null
    });
    }

    if (fieldName == "password"){
      setFormValues({
      ...formValues,
      password: value,
    });

    setFormErrors({
      ...formErrors,
      password: value.length === 0 ? "required" : (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) ? "password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 digit, and 1 special character" : null
    });
    }

    if (fieldName == "confirmPassword"){
      setFormValues({
      ...formValues,
      confirmPassword: value,
    });

    setFormErrors({
      ...formErrors,
      confirmPassword: value.length === 0 ? "required" : (value !== formValues.password) ? "must match password field" : null

    });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(formErrors).some(error => error !== null);
    
    if (hasErrors) {
      console.log("Form has errors. Fix them before submitting.");
      return;
    }
    alert(JSON.stringify(formValues, null, 2));
    navigate("/products");
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          {formErrors.username && <small className="text-danger">{formErrors.username}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <small className="text-danger">{formErrors.password}</small>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && <small className="text-danger">{formErrors.confirmPassword}</small>}
        </div>

        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Register;
