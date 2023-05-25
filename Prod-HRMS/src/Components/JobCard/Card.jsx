import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import { Button } from "@mui/material";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <span>
          {param.SourceDept} - {param.DestinationDept}{" "}
        </span>
        <span> {param.OverallStatus} </span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
    var authority = false
    const lvl = param.level;
    if (lvl>=3) {
        authority=true;
    }
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <span>{param.Description}</span>
      <span>
        {param.SourceDept}-{param.DestinationDept}{" "}
      </span>
      <span>Approval Status : {param.ApprovalStatus}</span>
      <span>Overall Status: {param.OverallStatus}</span>
      <span>Created At: {param.createdAt}</span>
      {authority?
      <div className="btn">
        <Button variant="contained" color="success">
          Approve
        </Button>
        <Button variant="contained" color="error">
          Reject
        </Button>
      </div> : <h1></h1>}
      
    </motion.div>
  );
}

export default Card;
