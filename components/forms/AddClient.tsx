"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewClient, newClient } from "@/zod/newClient.schema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { Label } from "../ui/label";
import { insertClient } from "@/app/dashboard/clients/actions";
import { useState } from "react";

const AddClient = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NewClient>({
    resolver: zodResolver(newClient),
  });
  
  const [open, setOpen] = useState(false);
  
  const addNewClient = async (data: NewClient) => {
    await insertClient(data);
    setOpen((prev) => !prev);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> New Client
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Fill in the client&apos;s details
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(addNewClient)}
          className="flex flex-col gap-3"
        >
          <div className="">
            <Label htmlFor="displayName">Client&apos;s Name</Label>
            <Input {...register("displayName")} />
            <small className="text-red-500">
              {errors.displayName?.message?.toString()}
            </small>
          </div>
          <div className="">
            <Label htmlFor="officialName">Client&apos;s Official Name</Label>
            <Input {...register("officialName")} />
            <small className="text-red-500">
              {errors.officialName?.message?.toString()}
            </small>
          </div>
          <Button type="submit" className="mt-4">
            <Check /> Save Client
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddClient;
