# angular-veasy-toastr

### Instalation
```sh
$ bower install angular-veasy-toastr --save
```

### Configuration

##### In your HTML
```html
<head>
  <link rel="stylesheet" href="./bower_components/angular-veasy-toastr/dist/css/veasy-toastr.min.css">
</head>
<body>
  <veasy-toastr></veasy-toastr>
  <script type="text/javascript" src="./bower_components/angular-veasy-toastr/dist/js/veasy-toastr-tpls.min.js"></script>
  <script type="text/javascript" src="./bower_components/angular-veasy-toastr/dist/js/veasy-toastr.min.js"></script>
</body>
```

##### In your angular app
```js
angular.module('myModule', ['veasyToastr']);
```

### How to use
###### You need inject 'veasyToastrNotify' in your controller, service, ...
```js
angular.module('myModule', ['veasyToastr'])
  .controller('notificationCtrl', [ 'veasyToastrNotify', function (veasyToastrNotify) {
    veasyToastrNotify.success('Hello', 'World', 5000);
    veasyToastrNotify.info('Hello', 'World', 5000);
    veasyToastrNotify.warning('Hello', 'World', 5000);
    veasyToastrNotify.error('Hello', 'World', 5000);
    veasyToastrNotify.default('Hello', 'World', 5000);
  }]);
```

### Customization
```js
.config(['veasyToastrProvider', function (veasyToastrProvider) {

  var config = {
    width: 300,     // Size of notifications. (in pixels, default is 300).

    success: {      // Success notification configuration's object.
      ...
    },
    info: {         // Info notification configuration's object.
      ...
    },
    warning: {      // Warning notification configuration's object.
      ...
    },
    error: {        // Error notification configuration's object.
      ...
    },
    default: {      // Default notification configuration's object.
      ...
    }
  };

  veasyToastrProvider.setConfig(config);      // Define custom config.

}])
```

### You can customize default types of notifications: success, info, warning and default.
```js
success: {                        // You can change success object to info, warning, error or default
  
  icon: string,                   // Define primary icon. 
                                  //      Default is:
                                  //        'fa-check-circle' to success messages;
                                  //        'fa-info-circle' to info messages;
                                  //        'fa-exclamation-triangle' to warning messages;
                                  //        'fa-ban' to error messages;
                                  //        'fa-bell' to default messages;
  
  showIcon: boolean,              // Define if show primary icon or not. (default is true)                
  
  close: boolean,                 // Icon to close notification. (default is true)
  
  timeout: Number,                // Timeout to close notification. If you define with 0 and
                                  // the property above ('close') is true, the notification will
                                  // never close automatically. (in milliseconds, default is 2000)

  style: {                          
    
    backgroundColor: '#000',      // The default background color of notification success.
    
    close: {
      fontSize: 20,               // The font size of close icon.
      color: 'red'                // The color of close icon.
    },
    
    icon: {
      color: '#777'               // The color of primary icon.
    },
    
    title: {
      fontSize: 25,               // The font size of title.
      color: 'rgb(255, 143, 28)'  // The color of title.
    },
    
    message: {
      fontSize: 30,               // The font size of message.
      color: '#F5F5F5'            // The color of message.
    }

  }
}
```
