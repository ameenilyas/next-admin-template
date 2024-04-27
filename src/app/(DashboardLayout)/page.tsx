"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import ProfitExpenses from "@/app/(DashboardLayout)/components/dashboard/ProfitExpenses";
import TrafficDistribution from "@/app/(DashboardLayout)/components/dashboard/TrafficDistribution";
import UpcomingSchedules from "@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules";
import TopPayingClients from "@/app/(DashboardLayout)/components/dashboard/TopPayingClients";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import ProductSales from "@/app/(DashboardLayout)/components/dashboard/ProductSales";
import { useGetPokemonByNameQuery } from "@/store/services/pokemon";

const Dashboard = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  console.log({ data, error, isLoading });

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TrafficDistribution />
              </Grid>
              <Grid item xs={12}>
                <ProductSales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid>
          <Grid item xs={12} lg={8}>
            <TopPayingClients />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
