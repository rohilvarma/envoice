import Title from "@/components/Title";
import { ROUTES } from "@/lib/constants";

const Dashboard = () => {
  return (
    <main className="">
      <Title
        title={
          ROUTES.DASHBOARD.ROOT[1].toUpperCase() +
          ROUTES.DASHBOARD.ROOT.substring(2)
        }
      />
    </main>
  );
};

export default Dashboard;
