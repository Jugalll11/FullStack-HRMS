import React from "react";
import Card from "./Card";
import "./JobCard.css";

const cardsData = [
    {
      title: "Job Card 1",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      SourceDept:"Civil",
      DestinationDept:"IT",
      Description: "This is a short Description",
      ApprovalStatus:"Pending",
      OverallStatus:"Pending",
      createdAt: "2023-04-03T07:06:37.692+00:00"
      
    },
    {
        title: "Job Card 2",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        SourceDept:"Mechanical",
        DestinationDept:"IT",
        Description: "This is a short Description",
        ApprovalStatus:"Pending",
        OverallStatus:"Pending",
        createdAt: "2023-04-03T07:06:37.692+00:00"
        
      },
      {
        title: "Job Card 3",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        SourceDept:"Electronics",
        DestinationDept:"Civil",
        Description: "This is a short Description",
        ApprovalStatus:"Pending",
        OverallStatus:"Pending",
        createdAt: "2023-04-03T07:06:37.692+00:00"
        
      },
  ];

  const level = 3;

const JobCard = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              SourceDept={card.SourceDept}
              DestinationDept={card.DestinationDept}
              Description={card.Description}
              ApprovalStatus={card.ApprovalStatus}
              OverallStatus={card.OverallStatus}
              createdAt={card.createdAt}
              level={level}
            />
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
