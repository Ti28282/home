import React, { useState } from 'react';
import axios from 'axios';

const AvatarUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userAvatar, setUserAvatar] = useState('https://example.com/default-avatar.jpg'); // default avatar URL

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('avatar', selectedFile);

    axios.post('/api/users/update-avatar', formData)
      .then((response) => {
        setUserAvatar(response.data.avatarUrl); // update the user's avatar URL
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Avatar</button>
      <img src={userAvatar} alt="User Avatar" />
    </div>
  );
};

export default AvatarUploader;