import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("✅ Payment Successful! Your transaction was completed.", {
      position: "top-center",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <ToastContainer />
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ fontSize: "80px", color: "green" }}>✔</div>
        <h2 style={{ marginTop: "10px", fontSize: "24px", fontWeight: "600" }}>
          Payment Successful
        </h2>
        <p style={{ color: "gray", marginTop: "5px" }}>
          Your transaction has been completed successfully.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
