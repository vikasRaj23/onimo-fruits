"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../components/context/CartContext";


export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total,
  } = useCart();


  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  


  const [paymentMethod, setPaymentMethod] = useState("");

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const discount =
    couponApplied && coupon.toUpperCase() === "VIKU22"
      ? total * 0.1
      : 0;

  const finalSubtotal = total - discount;

  const delivery = finalSubtotal >= 299 ? 0 : 40;

  const grandTotal = finalSubtotal + delivery;

  const phone = "919680560867";

  const orderList = cart
    .map(
      (item: any) =>
        `🍎 ${item.name} x ${item.quantity} = ₹${
          item.price * item.quantity
        }`
    )
    .join("\n");

  const message = `🍎 ONIMO FRUITS ORDER

👤 Customer : ${name}

📞 Mobile : ${mobile}

📍 Address :
${address}
  

💳 Payment : ${paymentMethod}
━━━━━━━━━━━━━━

🛒 ITEMS

${orderList}

━━━━━━━━━━━━━━

Subtotal : ₹${total}

Discount : ₹${discount}

Delivery : ${
    delivery === 0 ? "FREE" : "₹" + delivery
  }

Grand Total : ₹${grandTotal}

Thank You ❤️`;

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty 😔</h2>
      ) : (
        <>
          {cart.map((item: any) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <div>
                <img
                  src={item.image}
                  width={80}
                  height={80}
                />

                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <p>
                  Total : ₹
                  {item.price * item.quantity}
                </p>
              </div>

              <div>
                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                <span
                  style={{
                    margin: "0 15px",
                  }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>

                <br />

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  style={{
                    marginTop: "12px",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      <hr />

      <h3>Subtotal : ₹{total}</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={() => {
            if (coupon.toUpperCase() === "VIKU22") {
              setCouponApplied(true);
              alert("🎉 Coupon Applied Successfully");
            } else {
              alert("❌ Invalid Coupon");
            }
          }}
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Apply
        </button>
      </div>

      <h3>Discount : ₹{discount}</h3>

      <h3>
        Delivery :
        {delivery === 0 ? " FREE 🎉" : ` ₹${delivery}`}
      </h3>

      <h2
        style={{
          color: "#16a34a",
        }}
      >
        Grand Total : ₹{grandTotal}
      </h2>

      <hr />

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <textarea
        rows={4}
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <h3 style={{ marginTop: "20px" }}>
  💳 Select Payment Method
</h3>

<div style={{ marginBottom: "20px" }}>
  <label>
    <input
      type="radio"
      name="payment"
      value="Cash On Delivery"
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    {" "}Cash On Delivery (COD)
  </label>

  <br /><br />

  <label>
    <input
      type="radio"
      name="payment"
      value="PhonePe"
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    {" "}PhonePe
  </label>

  <br /><br />

  <label>
    <input
      type="radio"
      name="payment"
      value="Google Pay"
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    {" "}Google Pay
  </label>

  <br /><br />

  <label>
    <input
      type="radio"
      name="payment"
      value="Paytm"
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    {" "}Paytm
  </label>

  <br /><br />

  <label>
    <input
      type="radio"
      name="payment"
      value="UPI"
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    {" "}UPI
  </label>
</div>
      
  
  <hr style={{ margin: "25px 0" }} />

<h2 style={{ textAlign: "center" }}>
  💳 Scan & Pay
</h2>

<p
  style={{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "22px",
    color: "green",
  }}
>
  Amount to Pay: ₹{grandTotal}
</p>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  }}
>
  <Image
    src="/payment-qr.png"
    alt="Payment QR"
    width={250}
    height={250}
  />
</div>

<p
  style={{
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  }}
>
  QR Scan karke payment kare, fir WhatsApp Order button dabaye.
</p>
      <a
  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
  target="_blank"
  onClick={(e) => {
    if (
      !name ||
      !mobile ||
      !address ||
      
      !paymentMethod
    ) {
      e.preventDefault();
      alert("⚠ Please fill all details and select payment method.");
    }
  }}
>
  <button
    style={{
      width: "100%",
      background: "#16a34a",
      color: "white",
      border: "none",
      padding: "15px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    📲 Place Order on WhatsApp
  </button>
</a>

      <a href="tel:+919680560867">
        <button
          style={{
            width: "100%",
            marginTop: "15px",
            background: "orange",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          📞 Call Ramkishan
        </button>
      </a>
    </>
  )}
</div>
  );
}