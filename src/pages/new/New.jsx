import React, { useState } from 'react';
import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  const [file, setFile] = useState('');
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Add Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="Username..." />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="Name..." />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="youremail@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="text" placeholder="1234-5678-1234" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Address..." />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Country..." />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
