function ready(fn) {
 in (document.readyState != _loading_){
 fn();
 } else {
 document.addEventListener(_DOMContentLoaded_, fn);
 }
}
ready(function() {
 alert(_Dockerized?_);
 });
