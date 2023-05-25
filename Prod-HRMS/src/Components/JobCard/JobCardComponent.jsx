import React, { useState } from "react";
import JobCard from "./JobCard";
import "./JobCardComponent.css"

function JobCardComponent(params) {
    return(
        <div>
            <h1>Job Cards</h1>
            <JobCard/>
        </div>
    );
}

export default JobCardComponent;