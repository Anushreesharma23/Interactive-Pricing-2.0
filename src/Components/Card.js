import { useState } from "react";
import slider from "../images/icon-slider.svg";

const PricingDeets= {
  1: {
    pageviews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

function formatCurrency(amt) {
  return amt.toLocaleString(undefined, {
    currency: "USD",
    style: "currency",
  });
}

function Card() {
  const [pageviews, setPageviews] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);

  function updateRangePosition(pageviews) {
    if (pageviews == 1) {
      return "0%";
    }
    if (pageviews == 5) {
      return "100%";
    }
    return `${(pageviews - 1) * 20}%`;
  }
  return (
    <>
       <div className="slider-wrapper">
          <p className="uppercase pageviews">
            {PricingDeets[pageviews].pageviews} pageviews
          </p>
          <div className="range-wrapper">
            <input
              type="range"
              name="pageviews"
              id="pageviews"
              min="1"
              max="5"
              step="1"
              aria-label={`${PricingDeets[pageviews].pageviews} pageviews`}
              value={pageviews}
              onInput={(e) => {
                setPageviews(e.target.value);
              }}
            />
            <div
              className="fake-range"
              style={{
                "--width": updateRangePosition(pageviews),
              }}
            >
              <div className="track">
                <div className="filled"></div>
              </div>
              <div
                className="thumb"
                style={{
                  transform: `translateX(${pageviews == 5 ? "-100%" : "0"})`,
                }}
              >
                <img src={slider} alt="" />
              </div>
            </div>
          </div>
          <p className="amt-wrapper">
            <span className="amt">
              {formatCurrency(
                PricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]
              )}
            </span>
            / {isMonthly ? "month" : "year"}
          </p>
        </div>
    <div className="billing-wrapper">
    <input
      type="checkbox"
      name="billingType"
      id="billingType"
      onChange={(e) => setIsMonthly(!isMonthly)}
    />
     <label htmlFor="billingType" className="billing-type">
      <p>Monthly Billing</p>
      <div className="fake-checkbox"></div>
      <p>Yearly Billing </p>
      <span class="badge">
        25% <span>discount</span>
      </span>
    </label>
  </div>
</>
  );
}

export default Card;
