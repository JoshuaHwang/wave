
app.controller('SeshController', function() {
  var vm = this;

  vm.createSesh = function() {
    vm.submissions.push({ 
      name: vm.seshName,
      description: vm.seshDescription
    })
  }

  vm.submissions = theSessions;
});

var theSessions = [
    {
      images:      'public/images/vapor-untouchable-2.jpg',
      name:        'Vapor Untouchable',
      description: 'Lorem ipsum dore ma proto cato',
      likes:       540,
      comments:    39 
    },
    {
      images:      'public/images/air-max-1.jpg',
      name:        'Air Max 1',
      description: 'Lorem iasufh dore ma proto cato',
      likes:       420,
      comments:    51 
    },
    {
      images:      'public/images/eqt-support.jpg',
      name:        'EQT Support',
      description: 'Lorem asdfawfguyewagf dore ma proto cato',
      likes:       387,
      comments:    12 
    }
  ];