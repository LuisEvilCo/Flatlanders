(function(){
    var app = angular.module('store',[ ]);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Description for the dodecahedron gem',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: 'Description for the pentagonal gem',
            canPurchase: true,
            soldOut: false
        }
    ]
})();