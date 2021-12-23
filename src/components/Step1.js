import React from "react";
import { PrButton } from "./UI/PrButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { MainContainer } from "./MainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./UI/Form";
import { Input } from "./UI/Input";
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .required('First name is required field')
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers'),
  lastName: yup
    .string()
    .required('Last name is required field')
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers'),
  email: yup
    .string()
    .required('Email is required field')
    .email('Email should correct format')
}).required();

export const Step1 = () => {
  const { data ,setValues } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({ 
   mode: "onBlur",
   defaultValues: { firstName: data.firstName, lastName: data.lastName, email:data.email},
   resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
   history.push("./step2");
   setValues(data);
  };

  return (
    <MainContainer>

      <Typography component="h2" variant="h5">
         Step 1
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
           {...register("firstName")}
          name="firstName"
          id="firstName"
          type="text"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />

        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />

        <Input
          {...register("email")}
          id="email"
          type="text"
          label="E-mail"
          name="email"
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
    
        <PrButton onSubmit={handleSubmit(onSubmit)}>Next</PrButton>

      </Form>
    </MainContainer>
  );
};