import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../providers/CartProvider";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

async function createOrder(data) {
  const res = await axios.post("/api/products/order", data);
  return res.data;
}

export default function Cart() {
  const { cart, handleCartIncrement, handleCartDecrement, resetCart } =
    useCart();

  const total = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [cart]
  );

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (res) => {
      resetCart();
      location.replace(res.url);
    },
  });

  const handlePayment = () => {
    mutation.mutate({
      products: cart.map(({ _id, quantity }) => {
        return { _id, quantity };
      }),
    });
  };

  return (
    <>
      <Typography sx={{ mt: 2 }} variant="h5">
        Your Cart Items:{" "}
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem
            key={product._id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => handleCartDecrement(index)}
                >
                  <RemoveIcon />
                </IconButton>
                <Chip sx={{ ml: 1 }} label={product.quantity} />
                <IconButton
                  edge="end"
                  aria-label="add"
                  onClick={() => handleCartIncrement(index)}
                >
                  <AddIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar src={`http://localhost:3000/${product.image}`} />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`$${product.price} X ${product.quantity} = $${
                product.price * product.quantity
              }`}
            />
          </ListItem>
        ))}
      </List>
      <Typography textAlign={"right"} sx={{ mr: 2 }}>
        Total: ${total}
      </Typography>
      <Button variant="contained" onClick={handlePayment}>
        Proceed To Payment
      </Button>
    </>
  );
}

// cart = [iphone, tshirt, shoes] (basanta)
// proceed to payment -> order (basanta => iphone, tshirt, shoes , status = pending)
//                    -> stripe (basanta , cart) => payment page (url)
//                    -> res
// stripe payment => Page (credit card ,) => pay
// order(basanta => completed)
// payment successfult => /api/webhook {orderId}
