/*---------------
| Personal Lib   |
----------------*/
function ready(a){"loading"!=document.readyState?a():document.addEventListener?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&a()})}
window.dataStorage={_storage:new WeakMap,put:function(a,b,c){this._storage.has(a)||this._storage.set(a,new Map);this._storage.get(a).set(b,c)},get:function(a,b){return this._storage.get(a).get(b)},has:function(a,b){return this._storage.has(a)&&this._storage.get(a).has(b)},remove:function(a,b){var c=this._storage.get(a)["delete"](b);0===!this._storage.get(a).size&&this._storage["delete"](a);return c}};var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document);
