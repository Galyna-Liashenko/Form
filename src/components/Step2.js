import React from "react";
import { PrButton } from "./UI/PrButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { MainContainer } from "./MainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./UI/Form";
import { Input } from "./UI/Input";
import Box from '@material-ui/core/Box';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import * as yup from "yup";

const schema = yup.object({
  city: yup
    .string()
    .required('City is required field')
    .matches(/^([^0-9]*)$/, 'City should not contain numbers'),
  street: yup
    .string()
    .required('Last name is required field')
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers'),
  house: yup
    .string()
    .required('Email is required field')
    .matches(/^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i), 
}).required();

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({ 
   mode: "onBlur",
   defaultValues: { city: data.city, street: data.street, house: data.house },
   resolver: yupResolver(schema),
  });
 
  const onSubmit = (data) => {
   history.push("./step3");
   setValues(data);
  };

  const goToPrevious=()=>{
    history.push("/");
  }
  
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Input
          {...register("city")}
          id="city"
          type="text"
          label="City"
          name="city"
          error={!!errors?.city}
          helperText={errors?.city?.message}
        />
        <Input
          {...register("street")}
          id="street"
          type="text"
          label="Street"
          name="street"
          error={!!errors?.street}
          helperText={errors?.street?.message}
        />
        <Input
          {...register("house")}
          id="house"
          type="text"
          label="House"
          name="house"
          error={!!errors?.house}
          helperText={errors?.house?.message}
        />
        
        <Box display="flex" flexDirection="row">
          <PrButton 
          onClick={goToPrevious}
          style={{
              margin: "10px",
              width: "50%",
              height: "40px",
            }}>
              Previous
          </PrButton>

          <PrButton 
          onSubmit={handleSubmit(onSubmit)}
              style={{
                  margin: "10px",
                  width: "50%",
                  height: "40px",
                }}>Next
          </PrButton>
        </Box>
      </Form>
    </MainContainer>
  );
};