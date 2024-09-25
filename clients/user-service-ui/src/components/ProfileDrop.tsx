"use client";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import AuthScreen from "../screens/AuthScreen";
import useUser from "../hooks/useUser";
import { CgUser, CgUserAdd } from "react-icons/cg";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function ProfileDrop() {
  const [logedIn, setLoggedIn] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const {user,loading}=useUser()
  const handelLogOut=()=>{
    Cookies.remove("refreshToken")
    Cookies.remove("accessToken")
    toast.success("Logout success")
  window.location.reload()
  
  }
  useEffect(()=>{
if(!loading){
  setLoggedIn(!!user)
}
  },[loading,user])
  return (
    <>
      <div className="flex-none">
        {logedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.avatar?.url ?(<img
                  alt="avatar"
                  src={user?.avatar?.url } 
                />):(<CgUser size={35} className="m-auto"/>)}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-1 shadow"
            >
              <li>
                <div>
                  <p className=" ">
                    <p className="font-semibold">Signed in as</p>
                    <p className="text-xs text-ellispis">&nbsp;{user.email}</p>
                  </p>
                </div>
              </li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <p>All Orders</p>
              </li>
              <li>
                <p>Apply for seller Acc</p>
              </li>
              <li onClick={handelLogOut} className="border-t my-1 border-gray-600">
                <p className="hover:text-red-500 hover:bg-red-100 mt-1">
                  Logout
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <>
           
              <FaUserAlt onClick={() => setOpenAuth(!openAuth)} size={20} className=" cursor-pointer" />
           
          </>
        )}
      </div>

      {
        openAuth && <AuthScreen setOpenAuth={setOpenAuth} />
      }
    </>
  );
}
