"use client";

import { useState } from "react";
import Image from "next/image";
import userLogo from "@/assets/user.png";
import { Button, Modal } from "@heroui/react";
import { ProfileUpdateModal } from "@/Components/ProfileUpdateModal";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {

 const { data, isPending } = useSession();
  const user = data?.user;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate__animated animate__fadeInDownBig">
      
      <div className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center space-y-4">
        
        <Image
          src={user?.image || userLogo}
          alt="user"
          width={90}
          height={90}
          className="rounded-full border"
        />

        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>


        <ProfileUpdateModal user={user}/>
      </div>
    </div>
  );
}