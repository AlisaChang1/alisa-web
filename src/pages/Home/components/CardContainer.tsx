import React from "react";
import {
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { StyledCard, CardContainer } from "../styles";

const CardContainerPanel = () => {
  return (
    <CardContainer>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Makeup"
            height="140"
            image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-1296x728-header.jpg?w=1155&h=1528"
            title="Makeup"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Makeup
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tester description message about makeup
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Makeup"
            height="140"
            image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-1296x728-header.jpg?w=1155&h=1528"
            title="Makeup"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Makeup
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tester description message about makeup
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Makeup"
            height="140"
            image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-1296x728-header.jpg?w=1155&h=1528"
            title="Makeup"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Makeup
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tester description message about makeup
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </CardContainer>
  );
};

export { CardContainerPanel as default };
