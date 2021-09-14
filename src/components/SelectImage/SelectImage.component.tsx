import React from "react";
import {useStyles} from "./SelectImage.styles";
import {IconButton, Tooltip} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import {uploadImageApi} from "../../services/upload-image-api";
import {imageSearchApi} from "../../services/image-search-api";


type IProps = {
  setQuery: (query: any) => void;
};

const SelectImage: React.FC<IProps> = ({setQuery}) => {
  const classes = useStyles();

  const handleImageSearch = (url: string) => {
    imageSearchApi(url)
        .then((response: any) =>{
          console.log(response.data);
          setQuery(response.data.knowledge_graph.title);
        })
        .catch((err: any) => {
          console.log(err);
        });
  };

  const handleSubmit = (file: any) => {
    uploadImageApi(file)
        .then((response: any) =>{
          console.log(response.data.data);
          const url = response.data.data.url;
          handleImageSearch(url);
        })
        .catch((err: any) => {
          console.log(err);
        });
  }

  const handleCapture = ({ target }: any) => {
    handleSubmit(target.files[0]);
  };

  return (
      <div>
        <input
            accept="image/jpeg"
            className={classes.input}
            id="gameImage"
            type="file"
            onChange={handleCapture}
        />
        <Tooltip title="Select Image">
          <label htmlFor="gameImage">
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
          </label>
        </Tooltip>
      </div>
  );
};

export default SelectImage;