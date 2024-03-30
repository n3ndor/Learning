
"use client"

import React, { useState } from 'react';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Assuming ProfileForm is defined elsewhere or you can define it right here as done previously
const ProfileForm = ({ className = "" }) => (
  <form className={`grid items-start gap-4 ${className}`}>
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" defaultValue="shadcn@example.com" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" defaultValue="@shadcn" />
    </div>
    <Button type="submit">Save changes</Button>
  </form>
);

export const Shadcn_Drawer = () => {
  const [isFirstDrawerOpen, setIsFirstDrawerOpen] = useState(false);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col gap-4">
      <p>Drawer:</p>

      <Button variant="outline" onClick={() => setIsFirstDrawerOpen(true)}>Basic Drawer</Button>
      <Drawer open={isFirstDrawerOpen} onOpenChange={setIsFirstDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>First Drawer Title</DrawerTitle>
            <DrawerDescription>First drawer description.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={() => setIsFirstDrawerOpen(false)}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


      {isDesktop ? (
        <Dialog open={responsiveOpen} onOpenChange={setResponsiveOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Responsive Drawer</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={responsiveOpen} onOpenChange={setResponsiveOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};