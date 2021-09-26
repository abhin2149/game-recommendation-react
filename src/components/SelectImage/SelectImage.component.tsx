import React from "react";
import {useStyles} from "./SelectImage.styles";
import {Backdrop, CircularProgress, IconButton, Tooltip} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import {uploadImageApi} from "../../services/upload-image-api";
import {imageSearchApi} from "../../services/image-search-api";

/**
 * * Component for image recognition feature
 */
type IProps = {
  id: string;
  setQuery: (query: any) => void;
};

const SelectImage: React.FC<IProps> = ({setQuery, id}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const handleImageSearch = (url: string) => {
    imageSearchApi(url)
        .then((response: any) =>{
          setQuery(response.data.knowledge_graph.title);
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
  };

  const handleSubmit = (file: any) => {
    uploadImageApi(file)
        .then((response: any) =>{
          const url = response.data.data.url;
          handleImageSearch(url);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
  }

  const handleCapture = ({ target }: any) => {
    setLoading(true);
    handleSubmit(target.files[0]);
  };

  return (
      <div>
        <input
            accept="image/jpeg"
            className={classes.input}
            id={id}
            type="file"
            onChange={handleCapture}
        />
        <Tooltip title="Select Image">
          <label htmlFor={id}>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
          </label>
        </Tooltip>
        <Backdrop className={classes.backdrop} open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
  );
};

export default SelectImage;