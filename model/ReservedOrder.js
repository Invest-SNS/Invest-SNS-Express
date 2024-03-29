const mongoose = require('mongoose');

const ReservedOrderSchema = new mongoose.Schema({

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    buyOrSell: String, // 매수, 매도
    ownedShare: String, // 주식코드
    price: Number, // 구매 가격
    quantity: Number, // 수량
    time: Date, //  거래 시간
  });
  
  const ReservedOrder = mongoose.model("resevedOrder", ReservedOrderSchema);
  
  module.exports = ReservedOrder;