import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Home from './components/Home';
import Favourites from './components/Favourites';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      img: "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-550x550.jpg",
      name: "Chocolate chip cookie",
      ingredients:"100g sugar, 165g brown sugar, 1 teaspoon salt, 115g butter, 1 egg, 1 teaspoon vanilla extract, 155g flour, ½ teaspoon baking soda200g chocolate chunks",
      preparation:"In a large bowl, whisk together the sugars, salt, and butter until a paste forms with no lumps." + 
      "Whisk in the egg and vanilla, beating until light ribbons fall off the whisk and remain for a short while before falling back into the mixture." +
      "Sift in the flour and baking soda, then fold the mixture with a spatula (Be careful not to overmix, which would cause the gluten in the flour to toughen resulting in cakier cookies)." +
      "Fold in the chocolate chunks, then chill the dough for at least 30 minutes. For a more intense toffee-like flavor and deeper color, chill the dough overnight. The longer the dough rests, the more complex its flavor will be." +
      "Preheat oven to 350°F (180°C). Line a baking sheet with parchment paper." +
      "Scoop the dough with an ice-cream scoop onto a parchment paper-lined baking sheet, leaving at least 4 inches (10 cm) of space between cookies and 2 inches (5 cm) of space from the edges of the pan so that the cookies can spread evenly." +
      "Bake for 12-15 minutes, or until the edges have started to barely brown." + 
      "Cool completely before serving." +
      "Enjoy!",
      added: 0,
    },
    {
      id: 2,
      name:"Oatmeal cups",
      img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/163959.jpg",
      ingredients:"1 cup milk(235 mL), ½ cup maple syrup(110 g), 2 eggs, 1 teaspoon vanilla extract, 1 ½ cups quick-cook oats(150 g), 1 cup granola(120 g), 1 teaspoon baking powder, 1 teaspoon cinnamon, 1 cup mixed berries(100 g)",
      preparation:"Preheat oven to 350°F (180°C)" +
      "In a bowl, whisk all wet ingredients until fully combined." +
      "Add the dry ingredients and mix thoroughly." +
      "Divide mixture amongst the lined cups of a muffin tin. Top each muffin with berries." +
      "Bake 25 minutes. Store covered up to 2 days." +
      "Enjoy!",
      added: 0,
    },
    {
      id: 3,
      name:"Blueberry puncakes",
      img:"https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___blueberry-protein-pancakes-2.jpg",
      ingredients:"2 ripe bananas, 2 eggs, 1 teaspoon vanilla extract, ½ cup quick-cook oats(70 g), ½ cup blueberry(50 g)",
      preparation:"Mash the bananas in a large bowl until smooth. Mix in the eggs and vanilla until well combined, then mix in the oats. Carefully fold in the blueberries." +
      "Heat a medium nonstick skillet over medium heat. Add a scoop of the pancake batter. Smooth out to form an even layer. Cook for 2–3 minutes until you start to see bubbles" + 
      "forming on the surface. Flip and cook until the other side is golden brown, 1–2 minutes more." +
      "Garnish your pancakes with your favorite toppings! We like Greek yogurt, granola, fresh blueberries, and/or maple syrup." +
      "Enjoy!",
      added: 0,
    },
    {
      id: 4,
      img: "https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg",
      name:"Muffins",
      ingredients:"3 ripe bananas, ½ cup milk, 1 cup quick oat, 155g flour, 3 eggs, 1 teaspoon vanilla, ½ teaspoon cinnamon, 250g yogurt, 2 tablespoons honey, ½ cup dark chocolate chip",
      preparation:"Preheat oven to 350°F (180˚C)." + 
      "In a blender, combine all ingredients except chocolate chips. Blend thoroughly, mixing up with a spoon if needed."+
      "Divide mixture among 12 lined muffin tins."+
      "Sprinkle chocolate chips on top of the muffins."+
      "Bake 20 minutes."+
      "Enjoy!",
      added: 0,
    },
    {
      id: 5,
      name:"Brownies",
      img: "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg",
      ingredients:"1 cup unsalted butter(230 g), 2 sticks, 1 ½ cups semi-sweet chocolate chips(260 g), or dark chocolate chips, divided, 1 ½ cups granulated sugar(300 g), ¾ cup brown sugar(150 g), 1 tablespoon vanilla extract, 1 teaspoon salt, 3 large eggs, 1 ¼ cups all-purpose flour(155 g), ⅓ cup dark cocoa powder(35 g), nonstick cooking spray, for greasing",
      preparation: " Preheat the oven to 350˚F (180˚C)."+
      "Add the butter and 1 cup (175 g) of chocolate chips to a large microwave-safe bowl. Microwave for 1½ minutes."+
      "Add the granulated and brown sugars, vanilla, and salt. Whisk to combine."+
      "Whisk in the eggs until fully combined."+
      "Sift the flour and cocoa powder into the bowl and fold in with a spatula. Add the remaining chocolate chips and fold to incorporate."+
      "Line a 9-inch (23-cm) square baking pan with parchment paper and grease with nonstick spray. Spread the batter evenly in the pan."+
      "Bake for 35-40 minutes."+
      "Enjoy!",
      added: 0,
    },
    
  ]);

  const [favNumber, setFavNumber] = useState(0);

  const [favRecipes, setFavRecipes] = useState([]);

  function refresh() {
    let favourites = recipes.filter((recipe) => recipe.added == 1);
    setFavRecipes(favourites);
  }

  const AddToFavourites = (id) => {

    recipes.map((recipe) => {
      if(recipe.id === id){
        if(recipe.added == 0){
          recipe.added = 1;
          setFavNumber(favNumber + 1);
        }
      }
    }
    );

    refresh();

  }

  function RemoveFromFavourites(id){
    
    recipes.map((recipe) => {
      if(recipe.id === id){
          recipe.added = 0;
          setFavNumber(favNumber - 1);
      }
    }
    );

    refresh();

  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar favNumber = {favNumber}/>
      <Routes>
        <Route
          path = '/'
          element = {<Home />}
        />
        <Route
          path = '/recipes'
          element = {<Recipes recipes = {recipes} AddToFavourites = {AddToFavourites}/>}
        />
        <Route
          path = '/favourites'
          element = {<Favourites recipes = {favRecipes} RemoveFromFavourites = {RemoveFromFavourites}/>}
        />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
