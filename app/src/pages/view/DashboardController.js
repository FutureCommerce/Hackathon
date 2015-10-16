(function(){

  angular
       .module('pages')
       .controller('DashboardController', [
          '$scope', '$http', '$log', '$q',
          DashboardController
       ]);


  function DashboardController($scope, $http, $log, $q) {
    
    $scope.feed = [];
 

    $http.get('http://192.168.1.3:3000/commits').then(function(data){
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
      // var items = new vis.DataSet([
      //   {id: 1, content: 'item 1', start: '2014-04-20'},
      //   {id: 2, content: 'item 2', start: '2014-04-14'},
      //   {id: 3, content: 'item 3', start: '2014-04-18'},
      //   {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
      //   {id: 5, content: 'item 5', start: '2014-04-25'},
      //   {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
      // ]);



      // Configuration for the Timeline
      var options = {};

      // Create a Timeline
      var timeline = new vis.Timeline(container, itemz, options);


    };



  }

})();
