# ngNotification
angularJS &amp; Font Awesome

<a href="http://jsbin.com/zaveze" target"_blank">DEMO</a>

use Font Awesome

<a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">Font Awesome</a>


<h2>CDN like</h2>

<pre>
<span class="pl-s2">  &lt;<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s1"><span class="pl-pds">"</span>//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css<span class="pl-pds">"</span></span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s1"><span class="pl-pds">"</span>https://rawgit.com/yi-chan-chiang/ngNotification/master/ngNotification.css<span class="pl-pds">"</span></span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>https://rawgit.com/yi-chan-chiang/ngNotification/master/ngNotification.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</span>
</pre>

<h2>angular like</h2>

<pre>
var app = angular.module('myApp', ['chiang.ngPace']);
app.run(function($rootScope,$ngNotification){

  $rootScope.notification = {};
  $rootScope.notification.type = $ngNotification.type;
  $rootScope.notification.alerts = $ngNotification.alerts;
  $rootScope.notification.addAlert = $ngNotification.addAlert;
  $rootScope.notification.closeAlert = $ngNotification.closeAlert;

  $rootScope.alert=function(){
    $rootScope.notification.addAlert({type: 'primary', msg: 'primary'});
    $rootScope.notification.addAlert({type: 'warning', msg: 'warning'});
    $rootScope.notification.addAlert({type: 'danger', msg: 'danger'});
    $rootScope.notification.addAlert({type: 'success', msg: 'success'});
    $rootScope.notification.addAlert({type: 'default', msg: 'default'});
  };
  $rootScope.alert();
});
</pre>

<h2>set Times</h2>

<pre>
  $ngNotification.successTime=1000;
</pre>

<h2>License</h2>
The MIT License (MIT)

Copyright (c) 2015 yi-chan-chiang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.