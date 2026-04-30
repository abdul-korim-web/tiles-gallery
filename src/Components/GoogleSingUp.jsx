"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const GoogleSingUp = () => {
const handelGoogleSingup= async()=>{
const data = await authClient.signIn.social({
  provider:"google"
})
}
    return (
       <Button onClick={()=>handelGoogleSingup()}
          variant="outline"
          className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <span>
            <FcGoogle />
          </span>{" "}
          Continue with Google
        </Button>
    );
}

export default GoogleSingUp;
