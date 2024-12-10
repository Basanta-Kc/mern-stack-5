import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid2";

export default function ProductSekeleton() {
  return (
    <>
      <Grid size={{ md: 3 }}>
        <Skeleton variant="rectangular" height={250} />
      </Grid>
      <Grid size={{ md: 3 }}>
        <Skeleton variant="rectangular" height={250} />
      </Grid>{" "}
      <Grid size={{ md: 3 }}>
        <Skeleton variant="rectangular" height={250} />
      </Grid>{" "}
      <Grid size={{ md: 3 }}>
        <Skeleton variant="rectangular" height={250} />
      </Grid>
    </>
  );
}
