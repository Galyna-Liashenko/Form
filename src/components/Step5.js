import React from "react";

import { useData } from "../DataContext";
import { MainContainer } from "./MainContainer";
import Typography from "@material-ui/core/Typography";



export const Step5 = () => {

  const { data } = useData();

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
        Thanks for registration!
        </Typography>
        <img src={data.photo} 
        alt="userPhoto" 
        style={{margin: '30px auto', 
        width: "200px",
        height: "200px", 
        borderRadius: '50%'}}/>
        <Typography component="h4" variant="h5">
        Contact Information
        </Typography>
        <p className="data__item">Name: <span style={{fontWeight: '600'}}>{data.firstName}</span></p>
        <p className="data__item">Last name: <span style={{fontWeight: '600'}}>{data.lastName}</span></p>
        <p className="data__item">Email: <span style={{fontWeight: '600'}}>{data.email}</span></p>
        <p className="data__item">City: <span style={{fontWeight: '600'}}>{data.city}</span></p>
        <p className="data__item">Street: <span style={{fontWeight: '600'}}>{data.street}</span></p>
        <p className="data__item">House: <span style={{fontWeight: '600'}}>{data.house}</span></p>
        
      </MainContainer>
    </>
  );
};

