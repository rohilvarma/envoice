import Title from "@/components/Title";
import AddClient from "@/components/AddClient";
import { fetchClients } from "./actions";
import { SelectClients } from "@/db/schema";
import { CLIENT_PAGE_CONTENT } from "@/lib/constants";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteClient from "@/components/DeleteClient";


const ClientsPage = async () => {
  const allClients: SelectClients[] = await fetchClients();
  
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Title title="Clients" />
        <AddClient />
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
                    <span className="text-lg truncate">{client.displayName}</span>
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
