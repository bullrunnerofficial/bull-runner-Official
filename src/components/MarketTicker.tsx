"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  { symbol: "NIFTY 50", price: "24,320.55", change: "+0.85%", up: true },
  { symbol: "BANKNIFTY", price: "52,654.10", change: "-0.21%", up: false },
  { symbol: "RELIANCE", price: "3,145.00", change: "+1.2%", up: true },
  { symbol: "HDFCBANK", price: "1,642.30", change: "+0.5%", up: true },
  { symbol: "TCS", price: "4,015.75", change: "-1.1%", up: false },
  { symbol: "INFY", price: "1,520.10", change: "+0.3%", up: true },
  { symbol: "BTC/USD", price: "$64,230", change: "+4.2%", up: true },
  { symbol: "ETH/USD", price: "$3,450", change: "+2.1%", up: true },
];

export default function MarketTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-t border-border-subtle py-2 overflow-hidden flex shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* We duplicate the array to create an infinite loop effect */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-semibold tracking-wide cursor-default hover:opacity-80 transition-opacity">
            <span className="text-text-muted">{item.symbol}</span>
            <span className={item.up ? "text-accent-blue" : "text-accent-red"}>
              {item.price}
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                item.up
                  ? "bg-accent-blue/15 text-accent-blue"
                  : "bg-accent-red/15 text-accent-red"
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
