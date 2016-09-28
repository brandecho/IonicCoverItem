(function() {
  'use strict';

  angular
    .module('dbaq.ionCoverItem', [])
    .directive('ionCoverItem', [function () {

    var appendCss = function(headElem) {
      var css =  '<style type="text/css">@charset "UTF-8";' +
                    '.ion-cover-item {' +
                    '    min-height: 180px;' +
                    '    background-size: cover;' +
                    '    background-color: #efefef;' +
                    '    display: flex;' +
                    '    display: -webkit-flex;' +
                    '    flex-direction: column;' +
                    '    -webkit-flex-direction: column;' +
                    '    justify-content: flex-end;' +
                    '    -webkit-justify-content: flex-end;' +
                    '}' +
                    '.ion-cover-item h2 {' +
                    '    font-size: 20px;' +
                    '    font-weight: bold;' +
                    '}' +
                    '.ion-cover-item h2, ' +
                    '.ion-cover-item p {' +
                    '    color: white;' +
                    '    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);' +
                    '}' +
                  '</style>';
      headElem.append(css);
    };

    var updateBackground = function(element, bg) {
        element.css({'background-image': 'url(' + bg +')'});
    };

    return {
        restrict: 'E',
        scope:{
            cover: '='
        },
        compile: function($element) {
            
            appendCss(angular.element(document).find('head')); // add default css to <head>

            return function link($scope, $element, $attrs) {
                // add classes
                $element.addClass('item ion-cover-item');

                // add background element
                updateBackground($element, $scope.cover);

                // watch the cover attribute and update it if needed
                $scope.$watch('cover', function(newValue, oldValue) {
                    if (newValue != oldValue) {
                        updateBackground($element, newValue);
                    }
                });
            }
        }
    };
  }]);
})();