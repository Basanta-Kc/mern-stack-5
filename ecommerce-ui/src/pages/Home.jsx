import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductCard from "../components/Product";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid2";

const getFeaturedProducts = async () => {
  const res = await axios.get("http://localhost:3000/api/products/featured");
  return res.data.data;
};

export default function Home() {
  const query = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });


  return (
    <>
      <NavBar />
      <img src="/banner.jpg" width="100%" />
      <Typography variant="h4" align="center" marginY={2}>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {query.isLoading ? (
          <>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={250}  />
            </Grid>
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={250} />
            </Grid>{" "}
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={250}  />
            </Grid>{" "}
            <Grid size={{ md: 3 }}>
              <Skeleton variant="rectangular" height={250}  />
            </Grid>
          </>
        ) : (
          query.data.map((product) => {
            return (
              <Grid key={product._id} size={{ md: 3 }}>
                <ProductCard product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
      {/* <Typography variant="h4" align="center" marginY={2}>
        Latest Products
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
      </Grid> */}
    </>
  );
}
