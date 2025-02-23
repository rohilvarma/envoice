"use client";

import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CLIENT_PAGE_CONTENT } from "@/lib/constants";
import { deleteClient } from "@/app/dashboard/clients/actions";
import { toast } from "sonner";

type DeleteClientProps = {
  clientId: string;
  userId: string;
};

const DeleteClient = ({ clientId, userId }: DeleteClientProps) => {
  const deleteClientById = async () => {
    const { success, error } = await deleteClient(clientId, userId);

    if (success) {
      toast.success("Client has been successfully deleted!");
    } else {
      toast.error("Error encountered while deleting client.", {
        description: `${error}`,
      });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Trash2
            size={17}
            onClick={() => deleteClientById()}
            className="hover:text-red-500 duration-150 ease-linear"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{CLIENT_PAGE_CONTENT.DELETE_CLIENT}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DeleteClient;
