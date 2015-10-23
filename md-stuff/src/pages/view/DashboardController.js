(function(){

  angular
       .module('pages')
       .controller('DashboardController', [
          '$scope', '$http', '$log', '$q',
          DashboardController
       ]);


  function DashboardController($scope, $http, $log, $q) {
    
    $scope.feed = [];
 

    $http.get('http://localhost:3000/commits').then(function(data){
      data.data.forEach(function(d, i){
        $scope.feed.push({
          'id' : i,
          'content' : d.title, 
          'start' : d.published, 
          'type' : 'point'
        });
      });
      $scope.drawTimeline($scope.feed)

    });


    $scope.drawTimeline = function(feedz){


      // DOM element where the Timeline will be attached
      var container = document.getElementById('visualization');

      // Create a DataSet (allows two way data-binding)
      var itemz = new vis.DataSet(feedz);

      // Configuration for the Timeline
      var options = {};

      // Create a Timeline
      var timeline = new vis.Timeline(container, itemz, options);


    };



  }

})();
