var dataCtrl = {

  getAll: function(req, res) {
    var allProducts = data; // Spoof a DB call
    res.json(allProducts);
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var product = data[0]; // Spoof a DB call
    res.json(product);
  },

  create: function(req, res) {
    var newProduct = req.body;
    data.push(newProduct); // Spoof a DB call
    res.json(newProduct);
  },

  update: function(req, res) {
    var updateProduct = req.body;
    var id = req.params.id;
    data[id] = updateProduct // Spoof a DB call
    res.json(updateProduct);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
    "unlimitedGemsStatus" : "0",
    "RateOtherAppsStatus" : "1",
    "RateAppOnePackageName" : "com.gameguides.eight_ball_pool_free_coins_cash",
    "RateAppTwoPackageName" : "com.gameguides.coc_free_gold_gems",
    "RateAppThreePakageName" : "",
    "OriginalGameName":"8 Ball",
    "RateAppNameOne":"8 Ball Cheat",
    "RateAppNameTwo":"Clash of Clans Guide",
    "RateAppNameThree":"Hay Day Guide",
    "RequestConnectionStatus" : "0",
    "admobBannerId" : "ca-app-pub-XXXXXXXXXXXXXXXXXXXXXX",
    "admobInterId" : "ca-app-pub-XXXXXXXXXXXXXXXXXXXXXX",
    "homePageTextOne": "Tip & Trick 1",
    "isHomePageTextOne": true,
    "homePageTextTwo": "Tip & Trick 2",
    "isHomePageTextTwo": true,
    "homePageTextThree": "Tip & Trick 3",
    "isHomePageTextThree": true,
    "homePageTextFour": "Tip & Trick 4",
    "isHomePageTextFour": true,
    "homePageTextFive": "Tip & Trick 5",
    "isHomePageTextFive": true,
    "homePageTextSix": "Tip & Trick 6",
    "isHomePageTextSix": true,
    "GetFreeCoinsButton" : "Get Free Coins!",
    "GenerateText":"Welcome to our resources generator where you can generate Coins and Cash For 8 Ball Pool!",
    "RateAppTextOne": "You're almost done! You only now have to install our app, rate it 5 stars and leave a positive comment in Google Play! Also don't forget to keep the app for 48h in order for us to complete the process ! After we verify your actions we will be able to send you your resources!",
    "RateAppTextOther": "You're almost done! You only have to rate our 2 Apps 5 stars and leave a positive comment in Google Play! Also don't forget to keep the apps for 48h in order for us to complete the process ! After we verify your actions we will be able to send you your resources!",
    "WarningText": "Warning: You have to keep this app for 72 hours in order for the process to be completed!",
    "LoadingLineOne":"Connecting to server ...",
    "LoadingLineTwo":"Searching for player ",
    "LoadingLineThree":"Player ",
    "LoadingLineFour":"Generating Coins ...",
    "LoadingLineFive":"Generating Cash ...",
    "LoadingLineSix":"Processing ...",
    "BackgroundImageLink" : "http://chamaluxurycar.com/api/register/8ball/background-8ball.png",
    "GuideLinkOne":"http://chamaluxurycar.com/api/register/clash-of-clans-helper/clash-of-clans-helper/www/#/clash/limit/camp",
    "GuideLinkTwo":"http://chamaluxurycar.com/api/register/clash-of-clans-helper/clash-of-clans-helper/www/#/clash/troops/light",
    "GuideLinkThree":"http://chamaluxurycar.com/api/register/clash-of-clans-helper/clash-of-clans-helper/www/#/clash/spells/light",
    "TipsAndTricksImgStatus": "0",
    "TipsAndTricksImgOne":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks1.jpg",
    "TipsAndTricksTextOne":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "TipsAndTricksImgTwo":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks2.jpg",
    "TipsAndTricksTextTwo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "TipsAndTricksImgThree":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks3.jpg",
    "TipsAndTricksTextThree":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "TipsAndTricksImgFour":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks4.jpg",
    "TipsAndTricksTextFour":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "TipsAndTricksImgFive":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks5.jpg",
    "TipsAndTricksTextFive":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "TipsAndTricksImgSix":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks6.jpg",
    "TipsAndTricksTextSix":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "enableBackgroundMode" : "0"
}];

module.exports = dataCtrl;
