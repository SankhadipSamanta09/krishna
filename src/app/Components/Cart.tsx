"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  X,
  ArrowRight,
  CreditCard,
  Truck,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

// ─── Format Price ───────────────────────────────────────
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

// ─── Component ──────────────────────────────────────────
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
  // ─── Local State ──────────────────────────────────────
  const [processing, setProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // ─── Calculations ─────────────────────────────────────
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalOriginal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const discount = totalOriginal - subtotal;
  const shipping = subtotal > 50000 ? 0 : 499;
  const tax = Math.round(subtotal * 0.03);
  const grandTotal = subtotal + shipping + tax;

  // ─── Checkout ─────────────────────────────────────────
  const handleCheckout = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOrderPlaced(true);
      clearCart();
    }, 2500);
  };

  // ─── Empty Cart View ──────────────────────────────────
  if (cartCount === 0 && !orderPlaced) {
    return (
      <section className="w-full min-h-screen bg-gradient-to-b from-[#faf8f5] to-[#f5f0e8] py-20 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#f5f0e8] border border-[#e8e0d5] flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-[#8b6914]" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-serif text-[#2c1810] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Cart is Empty
            </h2>
            <p className="text-[#6b5b4f] mb-8 font-light">
              Discover our divine jewelry collection and add something beautiful to your cart.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8b6914] to-[#c9a84c] text-white rounded-full font-medium tracking-wide hover:shadow-lg hover:shadow-[#8b6914]/30 transition-all duration-300"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // ─── Order Success View ───────────────────────────────
  if (orderPlaced) {
    return (
      <section className="w-full min-h-screen bg-gradient-to-b from-[#faf8f5] to-[#f5f0e8] py-20 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center shadow-lg shadow-green-500/30">
              <ShieldCheck className="w-12 h-12 text-white" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-serif text-[#2c1810] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Placed Successfully!
            </h2>
            <p className="text-[#6b5b4f] mb-2 font-light">
              Thank you for your purchase. Your divine jewelry is on its way.
            </p>
            <p className="text-[#8b6914] font-medium mb-8">
              Order ID: #KR{Math.floor(Math.random() * 100000)}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8b6914] to-[#c9a84c] text-white rounded-full font-medium tracking-wide hover:shadow-lg hover:shadow-[#8b6914]/30 transition-all duration-300"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#faf8f5] to-[#f5f0e8] py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <h1
              className="text-2xl md:text-4xl font-serif text-[#2c1810]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shopping Cart
            </h1>
            <span className="text-sm text-[#6b5b4f]">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="w-20 h-[1px] bg-[#8b6914]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          {/* ── Cart Items ── */}
          <div className="space-y-4 md:space-y-6">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm border border-[#e8e0d5] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex gap-4 md:gap-5">
                    {/* Image */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-b from-[#faf8f5] to-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="112px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] md:text-xs text-[#8b6914] uppercase tracking-wider font-medium">
                            {item.category}
                          </span>
                          <h3 className="text-sm md:text-base font-medium text-[#2c1810] mt-0.5 leading-tight">
                            {item.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-[#9e9e9e] hover:text-[#c41e3a] transition-colors rounded-full hover:bg-[#c41e3a]/5"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#e8e0d5] flex items-center justify-center text-[#6b5b4f] hover:border-[#8b6914] hover:text-[#8b6914] transition-all"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-[#2c1810]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#e8e0d5] flex items-center justify-center text-[#6b5b4f] hover:border-[#8b6914] hover:text-[#8b6914] transition-all"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm md:text-base font-bold text-[#c41e3a]">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <p className="text-[10px] md:text-xs text-[#9e9e9e] line-through">
                            {formatPrice(item.originalPrice * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart */}
            {cartCount > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-[#9e9e9e] hover:text-[#c41e3a] transition-colors flex items-center gap-1.5 mt-2"
              >
                <X className="w-3.5 h-3.5" />
                Clear Cart
              </button>
            )}
          </div>

          {/* ── Order Summary ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8e0d5]">
              <h2
                className="text-lg md:text-xl font-serif text-[#2c1810] mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order Summary
              </h2>

              {/* Price Breakdown */}
              <div className="space-y-3 pb-5 border-b border-[#e8e0d5]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b5b4f]">Subtotal</span>
                  <span className="font-medium text-[#2c1810]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b5b4f]">Discount</span>
                  <span className="font-medium text-[#22c55e]">
                    -{formatPrice(discount)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b5b4f]">Shipping</span>
                  <span className="font-medium text-[#2c1810]">
                    {shipping === 0 ? (
                      <span className="text-[#22c55e]">Free</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b5b4f]">Tax (3%)</span>
                  <span className="font-medium text-[#2c1810]">
                    {formatPrice(tax)}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4">
                <span className="text-base font-semibold text-[#2c1810]">
                  Grand Total
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#8b6914]">
                  {formatPrice(grandTotal)}
                </span>
              </div>

              {/* Savings */}
              {discount > 0 && (
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-3 mb-5 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#22c55e] fill-[#22c55e]" />
                  <span className="text-sm text-[#166534]">
                    You save {formatPrice(discount)} on this order
                  </span>
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={processing}
                className="w-full py-3.5 md:py-4 bg-gradient-to-r from-[#2c1810] to-[#4a2c1a] text-white rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#2c1810]/20 transition-all duration-300 disabled:opacity-70"
              >
                {processing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    Proceed to Checkout
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-[#e8e0d5]">
                <div className="flex flex-col items-center gap-1 text-center">
                  <Truck className="w-5 h-5 text-[#8b6914]" />
                  <span className="text-[10px] text-[#6b5b4f]">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <ShieldCheck className="w-5 h-5 text-[#8b6914]" />
                  <span className="text-[10px] text-[#6b5b4f]">Secure Pay</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <Heart className="w-5 h-5 text-[#8b6914]" />
                  <span className="text-[10px] text-[#6b5b4f]">BIS Hallmark</span>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              href="/"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-[#8b6914] hover:text-[#2c1810] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}