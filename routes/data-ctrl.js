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
  "RateAppOnePackageName" : "com.gameguides.eight_ball_pool_free_coins_cash",
  "RateAppTwoPackageName" : "com.gameguides.coc_free_gold_gems",
  "RateAppThreePakageName" : "",
  "OriginalGameName":"8 Ball",
  "RateAppNameOne":"8 Ball Cheat",
  "RateAppNameTwo":"Clash of Clans Guide",
  "RateAppNameThree":"Hay Day Guide",
  "RequestConnectionStatus" : "0",
  "admobBannerId" : "ca-app-pub-4383266118044171/8803055155",
  "admobInterId" : "ca-app-pub-4383266118044171/3760813168",
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
  "TipsAndTricksTextOne":"If you are just getting started, you don't need to get hustled out of your meager gold coin collection by some shark! There are many tables in the beginning open to play, but as you swipe sideways you'll spot the dining tables have larger admittance fees. At the start, adhere to the Downtown London Pub until you get a good take care of on your pool cue, and then try shifting to Sydney. As the admittance charge raises, the pots increase accordingly, and that means you can make money considerably faster as you go to more complex tables, but wait around until your skills are prepared for the high-stakes desks.",
  "TipsAndTricksImgTwo":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks2.jpg",
  "TipsAndTricksTextTwo":"Even though you don't have period to play a complete round, it's wise to start the software daily. Each day you get one free spin on the Spin and Gain lever. Spins can earn your cash, cash, or even puzzle boxes which enable you to create better pool cues part by part. You can always purchase more spins (and sometimes earn additional free spins), but this is a fairly easy way to start out accumulating your gold coin and cash collection without even participating in a circular of pool.",
  "TipsAndTricksImgThree":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks3.jpg",
  "TipsAndTricksTextThree":"This is a quick way to give yourself an advantage right out of the gate. By using the few coins you initially earn to upgrade your cue, you'll have more success at winning your matches. The first cues you will have access to purchase can give you slight advantages to make you shoot with more power, extend your aiming guides, improve your cue ball control, or increase the amount of time you have to shoot. The more you play, the more cues you can unlock for purchase. Initially the cues you can access are just okay, but as you log more hours and wins you can use the coins you earn in the game to buy cues with some really great benefits.",
  "TipsAndTricksImgFour":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks4.jpg",
  "TipsAndTricksTextFour":"English refers to the spin you put on the cue ball when taking your shot. Sometimes you'll have a tricky shot where the ball you want to sink is dangerously close to the pocket. Instead of shooting with minimal power, tap on the cue ball button in the top right corner of the screen. From here you can cap on the spot you want to make contact with on the cue ball. Tapping near the bottom adds backspin, which is handy if the ball you're aiming for is close to the pocket. Tapping near the top adds front spin, propelling your ball forward even after it hits your target ball (handy for breaking). Tapping the sides can help the cue ball move in a desired direction after you hit your target ball, setting you up for your next shot. English can be a bit tricky to use, so give it some practice. Experiment with different contact spots on the cueball and different ratios of English to power on each shot until you become a full-on pool shark.",
  "TipsAndTricksImgFive":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks5.jpg",
  "TipsAndTricksTextFive":"There's nothing even worse in 8 Ball Pool than getting your shot prearranged perfectly then out of the blue your move is up before you have made your shot! Rather than a time clock to time your photos, a little renewable square envelopes your avatar and starts off counting down your time and effort. To fall into line your shots more rapidly, accomplish that by tapping and dragging on the pool desk surface before the end of the cue (this will move the cue faster), then make more specific shot changes by dragging from the cue's take care of until it's located wherever you want.",
  "TipsAndTricksImgSix":"http://chamaluxurycar.com/api/register/8ball/Tips&Tricks6.jpg",
  "TipsAndTricksTextSix":"With the basic cue, once you line up your cue ball with the ball your are targeting, very short lines will appear to show you in what direction the target ball will roll. A simple cheat to give yourself a little better aim is to have a small piece of paper, Post-it note, or anything with a straight edge nearby. Once your shot is lined up, hold the straight edge between the aiming lines and the pocket you want to sink, to have a better idea if your aim is accurate. Just make sure to do this quickly because the clock is still ticking!",
  "enableBackgroundMode" : "0"
}
];

module.exports = dataCtrl;
