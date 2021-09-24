import React, { useState } from "react";
import Review from "./Review";

const TabPanel = ({ children, value, index }) => {
  return (
    <div style={{ display: value === index ? "block" : "none" }}>
      {children}
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-root">
        <div className="tabs-header">
          <div className="tabs-scroller">
            <button className="tabs-button" onClick={() => setValue(0)}>
              Reviews ({reviews?.length > 0 ? reviews?.length : 0})
            </button>
            <button className="tabs-button" onClick={() => setValue(1)}>
              Discussions (0)
            </button>
          </div>
          <span
            className="tabs-indicator"
            style={
              value === 1 ? { left: 155, width: 160 } : { left: 10, width: 120 }
            }
          ></span>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <Review reviews={reviews} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="review-card">
          Want to be notified when someone makes the first post? Yes, notify me!
        </div>
      </TabPanel>
    </div>
  );
};

export default MovieReviews;
