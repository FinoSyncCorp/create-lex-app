import { useAuth0 } from "@auth0/auth0-react";
import UserDashboard from "../components/ui/dashboards/user_dashboard/UserDashboard";

const Dashboard = () => {
  const {isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <p className="text-center mt-10 text-lg">Please login to access the dashboard.</p>;
  }

  return (
    <>
    <UserDashboard/>
    </>
  );
};

export default Dashboard;
