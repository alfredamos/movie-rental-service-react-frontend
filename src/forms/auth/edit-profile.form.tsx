import { FormEvent, useState } from 'react';
import { EditProfileDto } from '../../models/auth/edit-profile.auth';


interface EditProfileFormProp {
  initialAuthUser: EditProfileDto;
  onEditProfile: (editProfileDto: EditProfileDto) => void;
  backToList: () => void;
}

export const EditProfileForm = (editProfileFormProp: EditProfileFormProp) => {
  const { initialAuthUser, backToList, onEditProfile } = editProfileFormProp;
  const [authUser, setAuthUser] = useState(initialAuthUser);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEditProfile(authUser);
  };

  const selectChangeHandler = (event: FormEvent<HTMLSelectElement>) => {
     const { name, value } = event.currentTarget;
     setAuthUser({ ...authUser, [name]: value });
  }

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;    
    setAuthUser({ ...authUser, [name]: value });
  };

  return (
    <div className="border" style={{ padding: "10px" }}>
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={authUser.name}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={authUser.email}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={authUser.phone}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={authUser.password}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>            
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={authUser.confirmPassword}
                className="form-control"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"                
                name="gender"
                value={authUser.gender}
                className="form-select"
                onChange={selectChangeHandler}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="userType" className="form-label">
                User Type
              </label>
              <select
                id="userType"                
                name="userType"
                value={authUser.userType}
                className="form-select"
                
                onChange={selectChangeHandler}
              >
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-outline-primary form-control m-1">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary form-control m-1"
              onClick={backToList}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
