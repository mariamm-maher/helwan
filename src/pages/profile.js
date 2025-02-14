import React from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfileComponent = () => {
  const { user, token } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
        {user ? (
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Name ID:</span> {user.nameid}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">SSN:</span> {user.SSN}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {user.Type}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Is First Time Login:</span>{" "}
              {user.IsFirstTimeLogin}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Role:</span> {user.role}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Not Before (nbf):</span>{" "}
              {user.nbf}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Expiration (exp):</span>{" "}
              {user.exp}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Issued At (iat):</span> {user.iat}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Issuer (iss):</span> {user.iss}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Audience (aud):</span> {user.aud}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Token:</span> {token}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-700">
            Please log in to view your profile.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
