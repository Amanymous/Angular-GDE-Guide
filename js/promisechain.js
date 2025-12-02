// promise is object repersting eventual completion or failour of an asynchronous operation
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);
// // console.log(promise);

// promise.then(function (orderId) {
//   console.log(orderId);
// });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = Boolean;
//     if (typeof orderId !== "number") {
//       reject("Error");
//       return;
//     }
//     resolve("Order id is valid", orderId);
//   });
//   return pr;
// }

// function validateCart() {
//   return true;
// }
// ==================================================================
// promise is object repersting eventual completion or failour of an asynchronous operation

// const cart = ["Kurta", "Pents", "shoes"];
// createOrder, proceedToPayment,showOrderSummary,updateWallet
// createOrder(cart)
//   .then(function (orderId) {
//     console.log("OrderId:", orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log("Error:", err.message);
//     return err.message;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log("paymentInfo:", paymentInfo);
//     return paymentInfo;
//   })
//   .catch(function (err) {
//     console.log("Error:", err.message);
//     // return err.message
//   })
//   .then(function (cash) {
//     console.log("cash:", cash);
//     return updateWallet(cash);
//   })
//   .catch(function (err) {
//     console.log("Error:", err.message);
//   })
//   .then(function (summary) {
//     console.log("summary:", summary);
//     return showOrderSummary(summary);
//   })
//   .catch(function (err) {
//     console.log("Error:", err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = 1;
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 1000);
//     }
//   });
//   return pr;
// }

// function proceedToPayment() {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function showOrderSummary(summary = "high quality") {
//   return new Promise(function (resolve, reject) {
//     resolve("Summary Successful", summary);
//   });
// }

// function updateWallet(cash = 100) {
//   return new Promise(function (resolve, reject) {
//     resolve("wallet Successful", cash);
//   });
// }

// function validateCart(cart) {
//   return true;
// }

// ================================================================

const cart = ["Kurta", "Pents", "shoes"];

createOrder(cart)
  .then(function (orderId) {
    console.log({ orderId });
    return orderId;
  })
  .catch(function (err) {
    console.log("Error:", err.message);
    return null;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log({ paymentInfo });
    return paymentInfo;
  })
  .catch(function (err) {
    console.log("Error:", err.message);
    return null;
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summary) {
    console.log({ summary });
    return updateWallet(summary);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
    return err.message;
  })
  .then(function (walletInfo) {
    console.log({ walletInfo });
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });

// ------------- FUNCTIONS ---------------- //

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
      return;
    }

    const orderId = "1";

    if (typeof orderId !== "number") {
      reject(new Error("Order ID must be a number"));
      return;
    }

    setTimeout(() => resolve(orderId), 1000);
  });
}

function proceedToPayment(orderId) {
  if (!orderId) {
    return Promise.reject(new Error("Cannot process payment without Order ID"));
  }

  return Promise.resolve({
    status: "Payment Successful",
    amount: 999,
    method: "UPI",
  });
}

function showOrderSummary(paymentInfo) {
  if (!paymentInfo) {
    return Promise.reject(new Error("No payment info found"));
  }

  return Promise.resolve({
    message: "Order Summary Created",
    paymentStatus: paymentInfo.status,
    amountPaid: paymentInfo.amount,
  });
}

function updateWallet(summary) {
  if (!summary) {
    return Promise.reject(new Error("Cannot update wallet without summary"));
  }

  return Promise.resolve({
    message: "Wallet Updated Successfully",
    cashback: 100,
    summaryReceived: summary,
  });
}

function validateCart(cart) {
  return true;
}
