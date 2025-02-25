import Title from "@/components/Title";

import DeleteClient from "@/components/DeleteClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectClients } from "@/db/schema";
import { fetchClients } from "@/lib/actions/clientActions";
import { CLIENT_PAGE_CONTENT, ROUTES } from "@/lib/constants";
import { Mail, Phone, UserPlus } from "lucide-react";
import Link from "next/link";

const ClientsPage = async () => {
  const allClients: SelectClients[] = await fetchClients();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Title title="Clients" />
        <Button>
          <Link
            href={ROUTES.DASHBOARD.CLIENTS.NEW}
            className="flex items-center gap-2"
          >
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
                    <Link href={ROUTES.DASHBOARD.CLIENTS.DETAIL(client.id)} className="text-2xl line-clamp-2">
                      {client.companyName}
                    </Link>
                    <DeleteClient clientId={client.id} userId={client.userId} />
                  </CardTitle>
                  <CardDescription>
                    Last invoice: {new Date().toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="flex items-center gap-2 font-bold mb-2">
                    <Mail className="text-muted-foreground" size={20} />{" "}
                    {client.email}
                  </div>
                  <div className="flex items-center gap-2 font-bold">
                    <Phone className="text-muted-foreground" size={20} />{" "}
                    {client.phone}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
