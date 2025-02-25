const ClientDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Client Detail</h1>
      <p className="text-xl">Client Detail Page {id} </p>
    </div>
  );
};

export default ClientDetail;
