// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PayPalButton = ({ amount, onSuccess }) => {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "ARABQW2u85Z6yP9j4whyfDMaIsXGlvZOfg2siRAtuzquCNrNvgRUX0rOVdAAp10sIAZNCRh4HryVdKz6", currency: "USD" }}>
//       <PayPalButtons
//         style={{ layout: "vertical" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   currency_code: "USD",
//                   value: amount,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then((details) => {
//             onSuccess(details);
//           });
//         }}
//         onError={(err) => {
//           console.error("PayPal Payment Error:", err);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;


import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ amount, onSuccess }) => {
  const navigate = useNavigate();
  return (
   
    <PayPalScriptProvider options={{ "client-id": "ARABQW2u85Z6yP9j4whyfDMaIsXGlvZOfg2siRAtuzquCNrNvgRUX0rOVdAAp10sIAZNCRh4HryVdKz6", currency: "USD" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details);
            navigate("/payment-success");
          });
        }}
        onError={(err) => {
          console.error("PayPal Payment Error:", err);
          navigate("/payment-fail");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
