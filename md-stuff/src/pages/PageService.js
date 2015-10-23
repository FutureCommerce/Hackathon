(function(){
  'use strict';

  angular.module('pages')
         .service('pageService', ['$q', PageService]);

  /**
   * Pages DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PageService($q){
    var pages = [
      {
        name: 'Home',
        avatar: 'home',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
        html : './assets/partials/home.html'
      },
      // {
      //   name: 'Dashboard',
      //   avatar: 'equalizer',
      //   content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
      //   html : './assets/partials/dashboard.html'
      // },
      {
        name: 'Join',
        avatar: 'add',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
        html : './assets/partials/enroll.html'
      },
      {
        name: 'Propose',
        avatar: 'extension',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
        html : './assets/partials/session-proposal.html'
      },
      {
        name: 'Participants',
        avatar: 'people',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
        html : './assets/partials/questions.html'
      },
      // {
      //   name: 'Hackathon Program',
      //   avatar: 'adb',
      //   content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
      //   html : './assets/partials/blockchain.html'
      // },
      // {
      //   name: 'Systemposium Program',
      //   avatar: 'public',
      //   content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
      //   html : './assets/partials/commerce.html'
      // },
      // {
      //   name: 'Program Timeline',
      //   avatar: 'timer',
      //   content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
      //   html : './assets/partials/dashboard.html'
      // },
      {
        name: 'Contact',
        avatar: 'comment',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
        html : './assets/partials/questions.html'
      },
      {
        name: 'Sponsors',
        avatar: 'layers',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
        html : './assets/partials/sponsors.html'
      }
    ];

    // Promise-based API
    return {
      loadAllPages : function() {
        // Simulate async nature of real remote calls
        return $q.when(pages);
      }
    };
  }

})();
