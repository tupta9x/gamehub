// src/pages/UserProfile.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <Header />
      <h2>Your Profile</h2>
      {/* Thêm các thông tin về game yêu thích và thành tích */}
      <Footer />
    </div>
  );
};

export default UserProfile;
