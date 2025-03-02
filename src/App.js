import * as React from "react";
import { useState, useEffect } from "react";
//import {RecipeCard} from "./Components/RecipyCard";

import "./App.css";
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
  Tooltip,
  //Button,
  Stack,
  IconButton,
  Avatar,
  TextField,
  Select,
  //Menu,
  Button,
  MenuItem,
  Dialog,
  DialogContent,
  //Grid2,//
  //MoreVertIcon
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
//import Nveg1 from "./Images/non veg/cb.jpg";

const recipeList = [
  {
    id: 1,
    type: "Non-Veg",
    name: "Chicken Briyani",
    image: "images/chicken briyani.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage style.Homely, nutritious and delicious food prepared on a budget....",

    likes: 114,
  },

  {
    id: 2,
    type: "Non-Veg",
    name: "Chicken Karahi",
    image: "images/chicken karahi.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage style.Homely, nutritious and delicious food prepared on a budget..",
    likes: 21,
  },

  {
    id: 3,
    type: "Non-Veg",
    name: "Chicken Shawarma",
    image: "images/chicken shawarma.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage style.Homely, nutritious and delicious food prepared on a budget..",
    likes: 1,
  },
  {
    id: 4,
    type: "Non-Veg",
    name: "Hyderabad Briyani",
    image: "images/hyderabad briyani.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage style.Homely, nutritious and delicious food prepared on a budget..",
    likes: 115,
  },

  {
    id: 5,
    type: "Non-Veg",
    name: "Mutton Briyani",
    image: "images/mutton briyani.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage style.Homely, nutritious and delicious food prepared on a budget.",
    likes: 20,
  },

  {
    id: 6,
    type: "Non-Veg",
    name: "Reshmi Kabab",
    image: "images/reshmi kabab.jpg",
    description:
      "This impressive mutton lamb served for spicy meat lovers and cooked in a heritage.Homely, nutritious and delicious food prepared on a budget.",
    likes: 5,
  },

  {
    id: 7,
    type: "Veg",
    name: "Channa Aloo Kurma Recipe",
    image: "images/Chana-Aloo-Kurma.jpg",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 110,
  },

  {
    id: 8,
    type: "Veg",
    name: "Rajma-Masala",
    image: "images/Rajma-Masala.jpg  ",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 1,
  },

  {
    id: 9,
    type: "Veg",
    name: "Cilantro Chutney",
    image: "images/Cilantro-Chutney.jpg",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 1,
  },
  {
    id: 10,
    type: "Veg",
    name: "Kadhi Pakora",
    image: "images/kadhi pakora recipe.jpg",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 8,
  },

  {
    id: 11,
    type: "Veg",
    name: "Red Lentil-Curry",
    image: "images/red Lentil-curry.jpg",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 98,
  },

  {
    id: 12,
    type: "Veg",
    name: "Sag Panneer",
    image: "images/Sag paneer.jpg",
    description:
      "This impressive dish served for spicy lovers and cooked in a few minutes of a time.This Recipes of all kinds, drinks, food, deserts, appetizers!, and more! .",
    likes: 1,
  },
];
/*Recipe Card.........................*/

const RecipeCard = ({ recipy }) => {
  const [likes, setLikes] = useState(recipy.likes); //likes handler.........//
  const [liked, setLiked] = useState("false"); //To know about Likes and visible Heart icon ///
  const likesHandler = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  //COmments Box - Input Filed -------------//
  const [commentVis, setCommentVis] = useState(false);
  const [comment, setComment] = useState("");

  const commentHandler = () => {
    setCommentVis(!commentVis);
  };
  ////Recipy Cards----------------------------//
  return (
    <Card variant="elevation" sx={{ maxWidth: 700, mt: "50px" }}>
      <CardHeader
        className="cards"
        avatar={
          <Avatar
            aria-label="recipe"
            style={{
              backgroundColor: "red",
              color: "white",
              height: 35,
              width: 35,
            }}
          >
            V/N
          </Avatar>
        }
        action={
          <Tooltip title="Add to cart" placement="bottom-start">
            <AddShoppingCartIcon className="addCarts" />
            <Tooltip title="Options" placement="top">
              <MoreVertIcon className="addOpt" />
            </Tooltip>
          </Tooltip>
        }
        title={recipy.name}
        subheader="Septemberxx ,2025"
      />

      <CardMedia
        className="cardMedias"
        component="img"
        height="350"
        alt=""
        image={recipy.image}
      ></CardMedia>
      <CardContent className="cardContents">
        <Typography variant="h6">{recipy.description}</Typography>
      </CardContent>

      {/*Card Action--------------------*/}

      <CardActions className="cardActions">
        <IconButton onClick={likesHandler}>
          <motion.div animate={{ scale: liked ? 1.3 : 1 }}></motion.div>

          {liked ? (
            <FavoriteIcon sx={{ color: "red", fontSize: "40px" }} />
          ) : (
            <FavoriteBorderOutlinedIcon sx={{ fontSize: "40px" }} />
          )}
        </IconButton>
        <Typography variant="h6" sx={{ color: "red" }}>
          {likes}
        </Typography>

        <IconButton>
          <ShareRoundedIcon
            sx={{ ml: "10px", color: "blue", fontSize: "40px" }}
          />
        </IconButton>

        {/**comments icon ---------------- */}
        <IconButton onClick={commentHandler} className="commentsIcon">
          {commentVis ? (
            <CommentRoundedIcon
              sx={{ ml: "280px", fontSize: "40px", color: "blue" }}
            />
          ) : (
            <ModeCommentIcon
              sx={{ ml: "280px", fontSize: "40px", color: "red" }}
            />
          )}
        </IconButton>

        {commentVis && (
          <TextField

            className="commentBox"
            label="Add comments here"
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{width: "100vw"}}
            />
        )}
        
      
      </CardActions>
    
      
    </Card>
  );
};

//export default RecipeCard;

//----------------Main Apppp.....................//

const UserDisplay = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  //This is for Select Value Box Option All <Veg <nonVeg-----//
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  /*---............THis is for search inputbox.....................*/
  const recipyFilter = recipeList.filter((e) =>
      (filter === "All" || e.type === filter) &&
        e.name.toLowerCase().includes(search.toLowerCase())
  );

  //Loading Progresss animation-----------//
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return (
      <Stack className="loader">
        <CircularProgress size={100} sx={{color:'cyan'}} />
      </Stack>
    );
  }

  return (
    <Container>
      <Box
        className="Apps"
        sx={{
          width: "99vw",
          height: "100vh",
          top: 0,
          left: 0,
          overflow: "auto",
          mt: "25px",
          position: "fixed",
          mr: "0px",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom="1"
          sx={{
            marginTop: "10px",
            backgroundColor: "black",
            p: "12px",
            borderRadius: "8px",
            color: "white",
            alignItems: "left",
          }}
        >
          Recipies App
        </Typography>

        {/*Text Field search bar......*/}
        <div>
          <TextField
            sx={{ backgroundColor: "white" }}
            className="searchInput"
            label="Search recipies"
      
            onChange={searchHandler}
            >
          
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 2, width: "35ch" } }}
              noValidate
              autoComplete="off"
            ></Box>
          </TextField>
          {/*Select Items Filter .......*/}

          <Select
            className="selectValue"
            value={filter}
            label="Recipy Type"
            onChange={handleChange}
            sx={{ backgroundColor: "white", ml: "25%" }}
          >
            <MenuItem value="All" onClick={() => setFilter("All")}>
              All
            </MenuItem>
            <MenuItem value="Veg" onClick={() => setFilter("Veg")}>
              Veg
            </MenuItem>
            <MenuItem value="Non-Veg" onClick={() => setFilter("Non-Veg")}>
              Non-Veg
            </MenuItem>
          </Select>
        </div>

        <Grid container spacing={8}>
          {recipyFilter.map((recipy) => (
            <Grid
              size={{ xl: 4, lg: 4, md: 6, sm: 12 }}
              //xl-1536px,  lg-1200px,
              // md-900px,  sm:600px
              key={recipy.id}
            >
              <RecipeCard recipy={recipy} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserDisplay;
