import React,  {useState} from "react";
import { PrButton } from "./UI/PrButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { MainContainer } from "./MainContainer";
import { Form } from "./UI/Form";
import userPhoto from '../img/avatar.jpg';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';

export const Step3 = () => {
  const { setValues, data } = useData();
  const [photo, setPhoto] = useState(userPhoto);
  const history = useHistory();
  const { handleSubmit } = useForm({   
   mode: "onBlur",
   defaultValues: {file1: data.file1, },
  });

  const onSubmit = (data) => {
    console.log(data)
    history.push("./step4");
    setValues({...data, photo: photo})
  };

  const goToPrevious=()=>{
    history.push("./step2");
  }

  const readFile = (e) => {
    var preview = document.querySelector('img');
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      setPhoto(e.target.result);
      console.log(e.target.result+"e.target.result");
      console.log(photo);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "src/img/avatar.jpg";
    }
  };

  function avatarka(){
    setPhoto(avatar1)
  }
  function avatarka1(){
    setPhoto(avatar2)
  }
  function avatarka2(){
    setPhoto(avatar3)
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
       Step 3
      </Typography>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      
        <Box  className="avatar">
          <p>Upload photo</p>
            <div>
              <input className="inputPhoto" accept="image/*"  id="icon-button-file" type="file" onChange={e => readFile(e)} />
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <div>
                    <Avatar 
                    alt="userPhoto" 
                    className="qqqq" 
                    src={photo} 
                    style={{
                        margin: "10px",
                        width: "100px",
                        height: "100px",
                    }} 
                    />
                    </div>
                  </IconButton>
                </label>
            </div>
        </Box>
        
        <Box  className="avatar">
            <p>or choose an avatar</p>
            <IconButton>
              <Avatar 
                onClick={avatarka}
                className="avatarka"
                src={avatar1} 
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }} 
              />
            </IconButton>
            <IconButton>
              <Avatar 
                onClick={avatarka1}
                className="avatarka"
                src={avatar2} 
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }} 
              />
            </IconButton>
            <IconButton>
              <Avatar 
                onClick={avatarka2}
                className="avatarka"
                src={avatar3} 
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }} 
              />
            </IconButton>
        </Box>

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