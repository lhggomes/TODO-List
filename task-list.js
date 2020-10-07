(function (){
    "use strict"; 

    // Creating the Module
    angular.module('taskListApp', []); 

    // Controller 
    angular.module('taskListApp')
        .controller('taskListController', taskListController); 

    
    taskListController.$inject = ['$scope']

    function taskListController($scope){
        var ctr = this; 

        ctr.tasks = [
            {text: 'Study how to user AngularJS', done: true},
            {text: 'Make my first application in AngularJS', done: false}
        ]; 

        ctr.remain = remain; 
        ctr.addTask = addTask;
        ctr.record = record; 

        function remain(){
            var count = 0; 
            angular.forEach(ctr.tasks, function(trf){
                if (!trf.done){
                    count++; 
                }
            });
            return count; 

        }

        function addTask(){
            ctr.tasks.push({text: ctr.taskText, done:false});
            ctr.taskText = ''
        }

        function record(){
            ctr.tasks = ctr.tasks.filter(function (trf) {return !trf.done});
        }


    }

})();