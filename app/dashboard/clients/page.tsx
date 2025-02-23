import Title from "@/components/Title";
import { fetchClients } from "./actions";
import { SelectClients } from "@/db/schema";
import { CLIENT_PAGE_CONTENT, ROUTES } from "@/lib/constants";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteClient from "@/components/DeleteClient";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";


const ClientsPage = async () => {
  const allClients: SelectClients[] = await fetchClients();
  
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Title title="Clients" />
        <Button>
          <Link href={ROUTES.DASHBOARD.CLIENTS.NEW} className="flex items-center gap-2">
            <UserPlus /> New Client
          </Link>
        </Button>
      </div>
      <div className="my-6">
        {allClients.length === 0 ? (
          <div className="text-muted-foreground">
            {CLIENT_PAGE_CONTENT.ADD_NEW_CLIENT}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {allClients.map((client, index) => (
              <Card key={index} className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg truncate">{client.companyName}</span>
                    <DeleteClient clientId={client.id} userId={client.userId} />
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
