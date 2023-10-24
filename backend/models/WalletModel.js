import mongoose from "mongoose";

const WalletSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    balance: {
      type: Number,
      default: 10000,
    },
  },
  {
    timestamps: { type: Number, default: Date.now() },
  }
);

export const WalletModel = mongoose.model("Wallet", WalletSchema);
