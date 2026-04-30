"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import userLogo from "@/assets/user.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
export function ProfileUpdateModal({ user }) {
  const [name,setName] = useState(user?.name)
  const [image,setImage] = useState(user?.image)

  const handelUpdateProfileInfo = async()=>{
    const { data, error } = await authClient.updateUser({
    name,
    image
});
if (data) {
  toast.success("update profile Information")
  
} else{
  toast.error("update fail")
}
  }
  return (
    <Modal>
      <Button variant="secondary">Update Profile</Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Image
                src={user?.image || userLogo}
                alt="user"
                width={50}
                height={50}
                className="rounded-full border"
              />
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="space-y-3">
              <input
              onChange={(e)=>setName(e.target.value)}
                defaultValue={user?.name}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />

              <input
              onChange={(e)=>setImage(e.target.value)}
                defaultValue={user?.image}
                type="text"
                placeholder="Image URL"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={()=>handelUpdateProfileInfo()} className="w-full bg-black text-white" slot="close">
                Update Information
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
