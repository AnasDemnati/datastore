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
  "unlimitedGemsStatus" : "1",
  "RateOtherAppsStatus" : "1",
  "RateAppOnePackageName" : "com.guidesfindergames.guide_lords_mobile_unlimited_free_coins",
  "RateAppTwoPackageName" : "com.unlimitedcoins.quizonepiece",
  "RateAppThreePakageName" : "",
  "OriginalGameName":"",
  "RateAppNameOne":"Unlimited gems and gold for Lords Mobile",
  "RateAppNameTwo":"Guess One Piece Characters",
  "RateAppNameThree":"",
  "RequestConnectionStatus" : "0",
  "admobBannerId" : "",
  "admobInterId" : "",
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
  "GetFreeCoinsButton" : "",
  "GenerateText":"",
  "RateAppTextOne": "",
  "RateAppTextOther": "",
  "WarningText": "",
  "LoadingLineOne":"",
  "LoadingLineTwo":"",
  "LoadingLineThree":"",
  "LoadingLineFour":"",
  "LoadingLineFive":"",
  "LoadingLineSix":"",
  "BackgroundImageLink" : "https://cdn.pixabay.com/photo/2017/09/03/06/12/abstract-2709402_960_720.png",
  "GuideLinkOne":"",
  "GuideLinkTwo":"",
  "GuideLinkThree":"",
  "TipsAndTricksImgStatus": "0",
  "TipsAndTricksImgOne":"",
  "TipsAndTricksTextOne":"",
  "TipsAndTricksImgTwo":"",
  "TipsAndTricksTextTwo":"",
  "TipsAndTricksImgThree":"",
  "TipsAndTricksTextThree":"",
  "TipsAndTricksImgFour":"",
  "TipsAndTricksTextFour":"",
  "TipsAndTricksImgFive":"",
  "TipsAndTricksTextFive":"",
  "TipsAndTricksImgSix":"",
  "TipsAndTricksTextSix":"",
  "enableBackgroundMode" : "0"
}
];

module.exports = dataCtrl;
