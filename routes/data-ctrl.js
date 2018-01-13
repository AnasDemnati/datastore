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
  "appsGuideName" : "SimCity",
  "unlimitedGemsStatus" : "0",
  "RateOtherAppsStatus" : "0",
  "RateAppOnePackageName" : "",
  "RateAppTwoPackageName" : "",
  "RateAppThreePakageName" : "",
  "OriginalGameName":"",
  "RateAppNameOne":"",
  "RateAppNameTwo":"",
  "RateAppNameThree":"",
  "RequestConnectionStatus" : "0",
  "admobBannerId" : "",
  "admobInterId" : "",
  "homePageTextOne": "",
  "isHomePageTextOne": "",
  "homePageTextTwo": "",
  "isHomePageTextTwo": "",
  "homePageTextThree": "",
  "isHomePageTextThree": "",
  "homePageTextFour": "",
  "isHomePageTextFour": "",
  "homePageTextFive": "",
  "isHomePageTextFive": "",
  "homePageTextSix": "",
  "isHomePageTextSix": "",
  "GetFreeCoinsButton" : "Get free Coins",
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
  "BackgroundImageLink" : "",
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
