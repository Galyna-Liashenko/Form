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
  password: yup
    .string()
    .required('First name is required field')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
  password1: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
}).required();


export const Step4 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({ 
   mode: "onBlur",
   defaultValues: { password: data.password, password1: data.password1 },
   resolver: yupResolver(schema),
  });
 
  const onSubmit = (data) => {
    history.push("./step5");
    setValues(data);
  };

  const goToPrevious=()=>{
    history.push("./step3");
  }
  
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 4
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Input
          {...register("password")}
          id="password"
          type="password"
          label="Password"
          name="password"
          error={!!errors?.password}
         helperText={errors?.password?.message}
        />
        <Input
          {...register("password1")}
          id="password1"
          type="password"
          label="Confirm password"
          name="password1"
          error={!!errors?.password1}
          helperText={errors?.password1?.message}
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
                    }}>
                Next
          </PrButton>
        </Box>
      </Form>
    </MainContainer>
  );
};