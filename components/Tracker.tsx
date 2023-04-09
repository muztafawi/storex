import React from "react";

const MonthTracker = () => {
  return <h1>Month Tracker</h1>;
};

const DailyQoute = () => {
  return <h1>Daily Qoute</h1>;
};

const Analytics = () => {
  return <h1>Analytics</h1>;
};

const Tracker = () => {
  return (
    <div>
      <div>
        <MonthTracker />
        <Analytics />
      </div>

      <DailyQoute />
    </div>
  );
};

export default Tracker;
