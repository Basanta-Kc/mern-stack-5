import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../providers/CartProvider";

//
export default function ProductCard({ product }) {
  const { handleAddToCart } = useCart();
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={`http://localhost:3000/${product.image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography component="div">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
