$(function () {

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dc = {};

var homeHtmlUrl = "snippets/home-snippet.html";
var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl =
  "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};


document.addEventListener("DOMContentLoaded", function (event) {


showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  [...], 
  true); 
});


function buildAndShowHomeHTML (categories) {
<h2 id="menu-categories-title" class="text-center">Menu Categories</h2>
<div class="text-center">
  Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.
</div>
  <div class="col-md-3 col-sm-4 col-xs-6 col-xxs-12">
  <a href="#" onclick="$dc.loadMenuItems('{{short_name}}');">
    <div class="category-tile">
      <img width="200" height="200" src="images/menu/{{short_name}}/{{short_name}}.jpg" alt="{{name}}">
      <span>{{name}}</span>
    </div>
  </a>
</div>
  
  
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {
          <div class="jumbotron">
      <img src="images/jumbotron_768.jpg" alt="Picture of restaurant" class="img-responsive visible-xs">
    </div>

    <div id="home-tiles" class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="#" onclick="$dc.loadMenuCategories();"><div id="menu-tile"><span>menu</span></div></a>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="#" onclick="$dc.loadMenuItems({{randomCategoryShortName}});">
          <div id="specials-tile"><span>specials</span></div>
        </a>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12">
        <a href="https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea" target="_blank">
          <div id="map-tile">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu&#39;s+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
            <span>map</span>
          </div>
        </a>
      </div>
    </div>
    },
    false); 
}


// Given array of category objects, returns a random category object.
function chooseRandomCategory (categories) {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  var randomArrayIndex = Math.floor(Math.random() * categories.length);

  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
}

<h2 id="menu-categories-title" class="text-center">{{name}} Menu</h2>
<div class="text-center">{{special_instructions}}</div>
dc.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    buildAndShowCategoriesHTML);
};
<div class="menu-item-tile col-md-6">
  <div class="row">
    <div class="col-sm-5">
      <div class="menu-item-photo">
        <div>{{short_name}}</div>
        <img class="img-responsive" width="250" height="150" src="images/menu/{{catShortName}}/{{short_name}}.jpg" alt="Item">
      </div>
      <div class="menu-item-price">{{price_small}}<span> {{small_portion_name}}</span> {{price_large}} <span>{{large_portion_name}}</span></div>
    </div>
    <div class="menu-item-description col-sm-7">
      <h3 class="menu-item-title">{{name}}</h3>
      <p class="menu-item-details">{{description}}</p>
    </div>
  </div>
  <hr class="visible-xs">
</div>

dc.loadMenuItems = function (categoryShort) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuItemsUrl + categoryShort,
    buildAndShowMenuItemsHTML);
};



function buildAndShowCategoriesHTML (categories) {
 <h2 id="menu-categories-title" class="text-center">Menu Categories</h2>
<div class="text-center">
  Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.
</div>
 
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      
      $ajaxUtils.sendGetRequest(
        categoryHtml,
        function (categoryHtml) {
         
          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
                                    categoriesTitleHtml,
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}



function buildCategoriesViewHtml(categories,
                                 categoriesTitleHtml,
                                 categoryHtml) {

  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'>";

 
  for (var i = 0; i < categories.length; i++) {
    
    var html = categoryHtml;
    var name = "" + categories[i].name;
    var short_name = categories[i].short_name;
    html =
      insertProperty(html, "name", name);
    html =
      insertProperty(html,
                     "short_name",
                     short_name);
    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}


function buildAndShowMenuItemsHTML (categoryMenuItems) {
  <h2 id="menu-categories-title" class="text-center">Menu Categories</h2>
<div class="text-center">
  Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.
</div>
  $ajaxUtils.sendGetRequest(
    menuItemsTitleHtml,
    function (menuItemsTitleHtml) {
      
      $ajaxUtils.sendGetRequest(
        menuItemHtml,
        function (menuItemHtml) {
         
          switchMenuToActive();

          var menuItemsViewHtml =
            buildMenuItemsViewHtml(categoryMenuItems,
                                   menuItemsTitleHtml,
                                   menuItemHtml);
          insertHtml("#main-content", menuItemsViewHtml);
        },
        false);
    },
    false);
}
<div class="col-md-3 col-sm-4 col-xs-6 col-xxs-12">
  <a href="#" onclick="$dc.loadMenuItems('{{short_name}}');">
    <div class="category-tile">
      <img width="200" height="200" src="images/menu/{{short_name}}/{{short_name}}.jpg" alt="{{name}}">
      <span>{{name}}</span>
    </div>
  </a>
</div>



function buildMenuItemsViewHtml(categoryMenuItems,
                                menuItemsTitleHtml,
                                menuItemHtml) {

  menuItemsTitleHtml =
    insertProperty(menuItemsTitleHtml,
                   "name",
                   categoryMenuItems.category.name);
  menuItemsTitleHtml =
    insertProperty(menuItemsTitleHtml,
                   "special_instructions",
                   categoryMenuItems.category.special_instructions);

  var finalHtml = menuItemsTitleHtml;
  finalHtml += "<section class='row'>";

 
  var menuItems = categoryMenuItems.menu_items;
  var catShortName = categoryMenuItems.category.short_name;
  for (var i = 0; i < menuItems.length; i++) {
    
    var html = menuItemHtml;
    html =
      insertProperty(html, "short_name", menuItems[i].short_name);
    html =
      insertProperty(html,
                     "catShortName",
                     catShortName);
    html =
      insertItemPrice(html,
                      "price_small",
                      menuItems[i].price_small);
    html =
      insertItemPortionName(html,
                            "small_portion_name",
                            menuItems[i].small_portion_name);
    html =
      insertItemPrice(html,
                      "price_large",
                      menuItems[i].price_large);
    html =
      insertItemPortionName(html,
                            "large_portion_name",
                            menuItems[i].large_portion_name);
    html =
      insertProperty(html,
                     "name",
                     menuItems[i].name);
    html =
      insertProperty(html,
                     "description",
                     menuItems[i].description);

  
    if (i % 2 !== 0) {
      html +=
        "<div class='clearfix visible-lg-block visible-md-block'></div>";
    }

    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}



function insertItemPrice(html,
                         pricePropName,
                         priceValue) {
 
  if (!priceValue) {
    return insertProperty(html, pricePropName, "");
  }

  priceValue = "$" + priceValue.toFixed(2);
  html = insertProperty(html, pricePropName, priceValue);
  return html;
}



function insertItemPortionName(html,
                               portionPropName,
                               portionValue) {
  
  if (!portionValue) {
    return insertProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = insertProperty(html, portionPropName, portionValue);
  return html;
}


global.$dc = dc;

})(window);
