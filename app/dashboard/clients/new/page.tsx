"use client";

import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CLIENT_PAGE_CONTENT, ROUTES } from "@/lib/constants";
import { ArrowLeft, Ban, Check } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { NewClientInput, newClientSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { insertClient } from "../actions";

const NewClient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewClientInput>({
    resolver: zodResolver(newClientSchema),
  });

  /**
  * Adds a new client to the system and handles the response feedback.
  * 
  * @param data - The new client's data conforming to NewClientInput type.
  * @returns Promise<void>
  */
  const addNewClient = async (data: NewClientInput): Promise<void> => {
    const {success, error} = await insertClient(data);
    if(success) {
      toast.success('New Client has been successfully added!')
    }
    else {
      toast.error("Error encountered while adding new client.", {
        description: `${error}`
      })
    }
    reset();
    router.push(ROUTES.DASHBOARD.CLIENTS.ROOT)
  };

  /**
  * Cancels the current form by resetting the form and going back to the previous page.
  * @returns void
  */
  const cancelNewClient = (): void => {
    router.back();
    reset(
      {},
      {
        keepErrors: false,
      },
    );
  };

  return (
    <div className="">
      <section id="header" className="flex items-baseline gap-4 mb-6">
        <Link href={ROUTES.DASHBOARD.CLIENTS.ROOT}>
          <ArrowLeft />
        </Link>
        <div className="">
          <Title title="Add New Client" />
          <p className="text-sm md:text-base text-muted-foreground">
            Enter client details to create a new account
          </p>
        </div>
      </section>
      <section id="details" className="md:max-w-4xl">
        <form
          onSubmit={handleSubmit(addNewClient)}
          className="flex flex-col gap-4"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="md:text-2xl">
                  {CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.TITLE}
                </span>
              </CardTitle>
              <CardDescription>
                {CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.DESCRIPTION}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.FORM_LABELS
                      .COMPANY_NAME
                  }
                </Label>
                <Input {...register("companyName")} />
                <small className="text-red-500">
                  {errors.companyName?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.FORM_LABELS.EMAIL}
                </Label>
                <Input {...register("email")} />
                <small className="text-red-500">
                  {errors.email?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.FORM_LABELS.PHONE}
                </Label>
                <Input {...register("phone")} />
                <small className="text-red-500">
                  {errors.phone?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.FORM_LABELS.GST_NO}
                </Label>
                <Input {...register("gstNo")} />
                <small className="text-red-500">
                  {errors.gstNo?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BASIC_INFO.FORM_LABELS
                      .WEBSITE
                  }
                </Label>
                <Input {...register("website")} />
                <small className="text-red-500">
                  {errors.website?.message?.toString()}
                </small>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="md:text-2xl">
                  {CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.TITLE}
                </span>
              </CardTitle>
              <CardDescription>
                {CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.DESCRIPTION}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.FORM_LABELS
                      .STREET_ADDRESS
                  }
                </Label>
                <Input {...register("address")} />
                <small className="text-red-500">
                  {errors.address?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.FORM_LABELS
                      .CITY
                  }
                </Label>
                <Input {...register("city")} />
                <small className="text-red-500">
                  {errors.city?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.FORM_LABELS
                      .STATE
                  }
                </Label>
                <Input {...register("state")} />
                <small className="text-red-500">
                  {errors.state?.message?.toString()}
                </small>
              </div>
              <div className="">
                <Label htmlFor="" className="font-bold mb-2">
                  {
                    CLIENT_PAGE_CONTENT.NEW_CLIENT.BILLING_ADDRESS.FORM_LABELS
                      .ZIP_CODE
                  }
                </Label>
                <Input {...register("zipCode")} />
                <small className="text-red-500">
                  {errors.zipCode?.message?.toString()}
                </small>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-between">
            <Button variant="destructive" onClick={cancelNewClient}>
              <Ban /> {CLIENT_PAGE_CONTENT.NEW_CLIENT.CANCEL}
            </Button>
            <Button>
              <Check /> {CLIENT_PAGE_CONTENT.NEW_CLIENT.CREATE_CLIENT}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewClient;
