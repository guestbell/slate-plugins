(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(109));t.default=function(e){return function(t,n){var r=t.document.getParent(n.key);return r&&a.default(e)(r)?r:null}}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return e.types.includes(t.type)}}},110:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(171));t.getCurrentBlockquote=a.default;var o=r(n(464));t.isSelectionInBlockquote=o.default},111:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(465));t.unwrapBlockquote=a.default;var o=r(n(466));t.wrapInBlockquote=o.default},146:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({types:["ul_list","ol_list"],typeItem:"list_item",typeDefault:"paragraph",canMerge:function(e,t){return e.type===t.type}}));t.default=a},166:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(n(109)),c=r(n(54));t.default=function(e){return function(t,n){if(!(n=n||t.selection).start.key)return a.List();var r=t.document,i=r.getClosestBlock(n.start.key),u=r.getClosestBlock(n.end.key);if(i===u){var l=c.default(e)(t,i);return l?a.List([l]):a.List()}var s=r.getCommonAncestor(i.key,u.key);if(o.default(e)(s)){var f=s.getPath(i.key),d=s.getPath(u.key);return s.nodes.slice(f[0],d[0]+1)}return s.type===e.typeItem?a.List([s]):a.List()}}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindAndScopeChange=function(e,t,n){return function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return t(e,r)?n.apply(void 0,[e,r].concat(a)):r}}},169:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({type:"blockquote",typeDefault:"paragraph"}));t.default=a},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(110),a=n(111);t.default=function(e,t,n,o){var c=t.value;return r.getCurrentBlockquote(n)(c)&&c.selection.isCollapsed?0!==c.selection.start.offset?o():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):o()}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.type?a:null}}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(110),a=n(111);t.default=function(e,t,n,o){var c=t.value,i=c.startBlock;return r.getCurrentBlockquote(n)(c)?0!==i.text.length?o():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):o()}},186:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(146)),c=n(336),i=a(n(445));var u=function(e){return function(t,n,r){var a=t;switch(a.key){case"Enter":return c.onEnter(a,n,e,r);case"Tab":return c.onTab(a,n,e,r);case"Backspace":return c.onBackspace(a,n,e,r);default:return r()}}};t.default=function(e){void 0===e&&(e={});var t=new o.default(e),n=i.default(e);return r({},n,{onKeyDown:u(t)})}},193:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(169)),c=n(463),i=a(n(468));t.default=function(e){void 0===e&&(e={});var t=new o.default(e),n=i.default(e);return r({},n,{onKeyDown:c.onKeyDown(t)})}},199:function(e,t,n){e.exports=n(476)},204:function(e,t,n){},27:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));t.getCurrentItem=a.default;var o=r(n(435));t.getCurrentList=o.default;var c=r(n(436));t.getItemDepth=c.default;var i=r(n(166));t.getItemsAtRange=i.default;var u=r(n(108));t.getListForItem=u.default;var l=r(n(437));t.getPreviousItem=l.default;var s=r(n(109));t.isList=s.default;var f=r(n(438));t.isSelectionInList=f.default},336:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(337));t.onEnter=a.default;var o=r(n(443));t.onTab=o.default;var c=r(n(444));t.onBackspace=c.default},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(65),a=n(27);t.default=function(e,t,n,o){if(e.shiftKey)return o();var c=t.value,i=a.getCurrentItem(n)(c);return i?(e.preventDefault(),c.selection.isExpanded&&t.delete(),i.nodes.every(function(e){return""===e.text})?a.getItemDepth(n)(c)>1?r.decreaseItemDepth(n,t):r.unwrapList(n,t):r.splitListItem(n,t)):o()}},338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(1),o=n(27);t.default=function(e){return function(t,n,c){var i=function(e){var t=e.selection,n=e.document,r=n.getClosestBlock(t.start.key),o=n.getClosestBlock(t.end.key);if(r===o)return a.List([r]);var c=n.getCommonAncestor(r.key,o.key),i=c.getPath(r.key),u=c.getPath(o.key);return c.nodes.slice(i.get(0),u.get(0)+1)}(t.value);return n=n||e.types[0],t.withoutNormalizing(function(){t.wrapBlock({type:n,data:r.Data.create(c)})}),i.forEach(function(n){o.isList(e)(n)?n.nodes.forEach(function(e){var n=e.key;t.withoutNormalizing(function(){t.unwrapNodeByKey(n)})}):t.withoutNormalizing(function(){t.wrapBlockByKey(n.key,e.typeItem)})}),t.normalize()}}},435:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54)),o=r(n(108));t.default=function(e){return function(t,n){var r=a.default(e)(t,n);return r?o.default(e)(t,r):null}}},436:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));t.default=function e(t){return function(n,r){var o=n.document,c=n.startBlock;r=r||c;var i=a.default(t)(n,r);if(!i)return 0;var u=o.getParent(i.key);return 1+e(t)(n,u)}}},437:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));t.default=function(e){return function(t,n){var r=t.document,o=t.startBlock;n=n||o;var c=a.default(e)(t,n);if(!c)return null;var i=r.getPreviousSibling(c.key);return i&&i.type===e.typeItem?i:null}}},438:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(166)),o=r(n(108));t.default=function(e){return function(t,n){var r=a.default(e)(t);return!r.isEmpty()&&(!n||o.default(e)(t,r.first()).get("type")===n)}}},439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e,t){var n=r.getItemsAtRange(e)(t.value);return n.isEmpty()?t:t.withoutNormalizing(function(){n.forEach(function(e){t.unwrapNodeByKey(e.key)});var e=n.first(),r=t.value.document.getParent(e.key);if(r){var a=r.nodes.findIndex(function(t){return t.key===e.key});n.forEach(function(e){e.nodes.forEach(function(e){t.moveNodeByKey(e.key,r.key,a),a+=1})}),n.forEach(function(e){t.removeNodeByKey(e.key)})}})}},440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e,t){var n=t.value,a=r.getCurrentItem(e)(n);return a?t.splitDescendantsByKey(a.key,n.selection.start.key,n.selection.start.offset):t}},441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(27);t.default=function(e,t){var n=a.getPreviousItem(e)(t.value),o=a.getCurrentItem(e)(t.value);return n&&o?function(e,t,n,o){var c=t.value.document.getDescendant(o),i=c.nodes.size,u=c.nodes.last(),l=a.isList(e)(u)?u:null;if(l)return t.moveNodeByKey(n.key,l.key,l.nodes.size);var s=a.getListForItem(e)(t.value,c);if(!s)throw new Error("Destination is not in a list");var f=r.Block.create({object:"block",type:s.type,data:s.data});return f.validate(t),t.withoutNormalizing(function(){t.insertNodeByKey(o,i,f),t.moveNodeByKey(n.key,f.key,0)})}(e,t,o,n.key):t}},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(27);t.default=function(e,t){var n=t.value,o=n.document;if(1===a.getItemDepth(e)(n))return t;var c=a.getCurrentItem(e)(n);if(!c)return t;var i=o.getParent(c.key),u=o.getParent(i.key),l=o.getParent(u.key),s=i.nodes.skipUntil(function(e){return e===c}).rest(),f=i.nodes.size===s.size+1;if(s.isEmpty())t.moveNodeByKey(c.key,l.key,l.nodes.indexOf(u)+1);else{var d=r.Block.create({object:"block",type:i.type,data:i.data});t.withoutNormalizing(function(){t.insertNodeByKey(c.key,c.nodes.size,d)}),t.withoutNormalizing(function(){t.moveNodeByKey(c.key,l.key,l.nodes.indexOf(u)+1)}),s.forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,d.key,d.nodes.size+n)})})}return f&&t.removeNodeByKey(i.key),t}},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(65),a=n(27);t.default=function(e,t,n,o){var c=t.value;return c.selection.isCollapsed&&a.getCurrentItem(n)(c)?e.shiftKey?(e.preventDefault(),r.decreaseItemDepth(n,t)):(e.preventDefault(),r.increaseItemDepth(n,t)):o()}},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(65),a=n(27);t.default=function(e,t,n,o){var c=t.value,i=c.selection,u=c.selection.start.offset;if(i.isExpanded)return o();if(u>0)return o();var l=a.getCurrentItem(n)(c);return l?!i.isCollapsed&&i.anchor.isAtEndOfNode(l)?o():(e.preventDefault(),r.unwrapList(n,t)):o()}},445:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(167),o=r(n(146)),c=n(446),i=n(65),u=n(27);var l=function(e,t){return u.isSelectionInList(e)(t.value)};t.default=function(e){void 0===e&&(e={});var t=new o.default(e);return{schema:c.schema(t),normalizeNode:c.normalizeNode(t),utils:{getCurrentItem:u.getCurrentItem(t),getCurrentList:u.getCurrentList(t),getItemDepth:u.getItemDepth(t),getItemsAtRange:u.getItemsAtRange(t),getPreviousItem:u.getPreviousItem(t),isList:u.isList(t),isSelectionInList:u.isSelectionInList(t)},changes:{decreaseItemDepth:a.bindAndScopeChange(t,l,i.decreaseItemDepth),increaseItemDepth:a.bindAndScopeChange(t,l,i.increaseItemDepth),splitListItem:a.bindAndScopeChange(t,l,i.splitListItem),unwrapList:a.bindAndScopeChange(t,l,i.unwrapList),wrapInList:i.wrapInList(t)}}}},446:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(447));t.schema=a.default;var o=r(n(448));t.normalizeNode=o.default},447:function(e,t,n){"use strict";function r(e){return function(t,n){var r=e[n.code];r&&r(t,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n={blocks:(t={},t[e.typeItem]={parent:e.types.map(function(e){return{type:e}}),nodes:[{match:{object:"block"}}],normalize:r({parent_type_invalid:function(e,t){e.withoutNormalizing(function(){e.unwrapNodeByKey(t.node.key)})},child_object_invalid:function(t,n){!function(e,t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.nodes.first().key,e.typeDefault)});var r=t.value.document.getDescendant(n.key).nodes.first();n.nodes.rest().forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,r.key,n+1)})})}(e,t,n.node)}})},t)};return e.types.forEach(function(t){n.blocks[t]={nodes:[{match:{type:e.typeItem}}],normalize:r({child_type_invalid:function(t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.child.key,e.typeItem)})}})}}),n}},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);t.default=function(e){return function(t){return function(e,t){if("document"===t.object||"block"===t.object){var n=t.nodes.map(function(n,a){if(!r.isList(e)(n))return null;var o=t.nodes.get(a+1);return o&&r.isList(e)(o)&&e.canMerge(n,o)?[n,o]:null}).filter(Boolean);if(!n.isEmpty())return function(e){n.reverse().forEach(function(t){var n=t,r=n[0],a=n[1],o=e.value.document.getDescendant(a.key);o.nodes.forEach(function(t,n){e.withoutNormalizing(function(){e.moveNodeByKey(t.key,r.key,r.nodes.size+n)})}),e.withoutNormalizing(function(){e.removeNodeByKey(a.key)})})}}}(e,t)}}},463:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(170));t.onBackspace=a.default;var o=r(n(172));t.onEnter=o.default;var c=r(n(467));t.onKeyDown=c.default},464:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(171));t.default=function(e){return function(t){return Boolean(a.default(e)(t))}}},465:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.unwrapBlock(e.type)}},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return t.wrapBlock(e.type)}}},467:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(172)),o=r(n(170));t.default=function(e){return function(t,n,r){var c=t;switch(c.key){case"Enter":return a.default(c,n,e,r);case"Backspace":return o.default(c,n,e,r);default:return r()}}}},468:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(167),o=r(n(169)),c=n(110),i=n(111),u=n(469);var l=function(e,t){return c.isSelectionInBlockquote(e)(t.value)};t.default=function(e){var t=new o.default(e);return{schema:u.schema(t),utils:{isSelectionInBlockquote:c.isSelectionInBlockquote(t)},changes:{wrapInBlockquote:i.wrapInBlockquote(t),unwrapBlockquote:a.bindAndScopeChange(t,l,i.unwrapBlockquote)}}}},469:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(470));t.schema=a.default},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default=function(e){var t;return{blocks:(t={},t[e.type]={nodes:[{match:{type:e.typeDefault}}],normalize:function(t,n){switch(n.code){case"child_type_invalid":return function(e,t,n){var a=n.node.nodes.filter(function(e){return"block"!==e.object});if(!a.isEmpty()){var o=r.Block.create({type:e.typeDefault});return t.withoutNormalizing(function(){t.insertNodeByKey(n.node.key,0,o),a.forEach(function(e,n){t.moveNodeByKey(e.key,o.key,n)})})}}(e,t,n)}}},t)}}},476:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),c=n.n(o),i=(n(204),n(478)),u=n(180),l=n(477),s=n(479),f=n(12),d=n.n(f),p=n(174),m=n.n(p),h=n(175),v=n.n(h),y=n(25),g=n.n(y),_=n(176),k=n.n(_),b=n(177),E=n.n(b),w=n(8),O=n.n(w),j=n(178),M=n.n(j),B=n(179),N=n.n(B),I=n(78),P=n.n(I),C=n(79),D=n.n(C),x=n(80),z=n.n(x),L=n(183),S=n.n(L),q=n(55),K=n.n(q)()()(O()({svg:{height:"34px",maxHeight:"34px",marginRight:"1rem"}})(function(e){var t={fill:e.theme.palette.background.paper},n={fill:e.theme.typography.body1.color},a=e.classes;return r.createElement("svg",{className:a.svg,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 268 50.6",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{style:t,d:"M29.4,45.8c-0.5,0.2-1.5,0.4-3,0.7c-1.5,0.2-3.3,0.4-5.5,0.4c-2.7,0-5.1-0.4-7.1-1.3s-3.8-2.2-5.2-3.9\r S6.2,38,5.5,35.6c-0.7-2.4-1-5-1-8c0-3.2,0.4-5.9,1.2-8.3s2-4.4,3.4-6c1.5-1.6,3.2-2.8,5.1-3.6c2-0.8,4.1-1.2,6.3-1.2\r c2.4,0,4.6,0.3,6.7,0.8c2,0.5,3.7,1.2,4.9,2.1l1.5-3.7c-1-0.6-2.5-1.3-4.7-2c-2.1-0.7-4.8-1.1-8.1-1.1c-2.9,0-5.5,0.5-8.1,1.5\r C10.2,7,8,8.5,6.1,10.4s-3.4,4.4-4.5,7.2c-1,2.8-1.6,6.1-1.6,9.9s0.5,7,1.5,9.9s2.4,5.3,4.3,7.2c1.8,1.9,4,3.4,6.4,4.4\r c2.5,1,5.2,1.5,8.1,1.5c3.5,0,6.4-0.3,8.7-0.8c2.4-0.5,4-1,4.8-1.3V28.8h-4.4V45.8z"}),r.createElement("path",{style:t,d:"M64.9,45.6c-0.4,0.2-1.3,0.4-2.8,0.6c-1.5,0.2-3.2,0.3-5.1,0.3c-1.8,0-3.2-0.2-4.4-0.7c-1.2-0.4-2.2-1.2-3-2.2\r s-1.3-2.3-1.7-3.9c-0.3-1.6-0.5-3.6-0.5-6V16.6h-4.2v18.6c0,2.3,0.2,4.3,0.7,6.2c0.4,1.9,1.2,3.5,2.2,4.8s2.4,2.3,4,3.1\r c1.7,0.7,3.7,1.1,6.2,1.1c3,0,5.6-0.2,7.7-0.6c2.1-0.4,3.8-0.8,5-1.2v-32h-4.2L64.9,45.6L64.9,45.6z"}),r.createElement("path",{style:t,d:"M99.8,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C102.1,45.3,101.2,45.5,99.8,46z"}),r.createElement("path",{style:t,d:"M102.2,19.8c-0.7-0.8-1.5-1.5-2.4-2c0.2-0.7,0.3-1.4,0.3-2.2c0-4.5-3.6-8.1-8.1-8.1s-8.1,3.6-8.1,8.1\r c0,1,0.2,2,0.5,2.9c-0.6,0.5-1.2,1-1.8,1.6c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h4.4h3.3h20\r c0-0.3,0.1-0.6,0.1-1c0-0.3,0-0.7,0-1C105.9,26.5,104.6,22.4,102.2,19.8z M92,10.7c2.7,0,4.8,2.2,4.8,4.8s-2.2,4.8-4.8,4.8\r s-4.8-2.2-4.8-4.8S89.3,10.7,92,10.7z M82.6,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5c0.3-0.4,0.7-0.8,1.1-1.1\r c1.4,1.2,3.3,2,5.3,2c2.3,0,4.4-1,5.9-2.6c0.5,0.4,0.9,0.8,1.2,1.2c1.5,1.9,2.3,4.6,2.4,8.1H82.6V30.5z"}),r.createElement("path",{style:t,d:"M131.5,34.8c-0.9-0.7-1.9-1.4-3.1-1.9c-1.2-0.5-2.4-1.1-3.7-1.6c-1.2-0.5-2.3-1-3.3-1.4s-1.8-0.9-2.4-1.4\r c-0.7-0.5-1.2-1.1-1.5-1.7s-0.5-1.4-0.5-2.3s0.2-1.7,0.6-2.3c0.4-0.6,0.9-1.1,1.5-1.5s1.4-0.7,2.2-0.9s1.7-0.3,2.7-0.3\r c2.3,0,4.1,0.2,5.3,0.6s2.1,0.8,2.6,1l1-3.7c-0.6-0.3-1.6-0.6-3.1-1s-3.3-0.6-5.6-0.6c-3.5,0-6.3,0.8-8.4,2.5c-2,1.7-3,3.8-3,6.5\r c0,1.4,0.3,2.6,0.8,3.6s1.2,1.8,2,2.5c0.9,0.7,1.8,1.3,2.9,1.9c1.1,0.5,2.3,1.1,3.5,1.6c1.5,0.6,2.8,1.2,3.9,1.7\r c1,0.5,1.9,1,2.5,1.5c0.6,0.5,1.1,1.1,1.4,1.7c0.3,0.6,0.4,1.4,0.4,2.3c0,1.9-0.8,3.2-2.3,4c-1.6,0.8-3.5,1.2-5.9,1.2\r c-1.3,0-2.5-0.1-3.5-0.3s-1.9-0.4-2.6-0.6c-0.7-0.2-1.3-0.4-1.7-0.6c-0.4-0.2-0.7-0.3-0.8-0.4l-1.1,3.8c0.5,0.3,1.5,0.6,3.1,1.1\r c1.5,0.5,3.8,0.7,6.7,0.7c3.9,0,6.9-0.8,9.2-2.3c2.2-1.5,3.4-3.8,3.4-6.8c0-1.6-0.3-2.9-0.8-3.9C133.1,36.5,132.4,35.5,131.5,34.8z\r "}),r.createElement("path",{style:t,d:"M157.5,46c-1.1,0.4-2.5,0.6-4.2,0.6c-1,0-2-0.1-2.8-0.3c-0.9-0.2-1.6-0.6-2.2-1.3c-0.6-0.6-1.1-1.5-1.4-2.7\r c-0.3-1.2-0.5-2.7-0.5-4.6V20.1h13.2v-3.5h-13.2V6.1l-4.2,0.8v30.5c0,2.2,0.2,4.1,0.5,5.8c0.3,1.6,0.9,3,1.8,4.1\r c0.8,1.1,1.9,1.9,3.3,2.4c1.4,0.5,3.1,0.8,5.2,0.8c1.7,0,3.4-0.2,4.9-0.7s2.5-0.9,3.1-1.3l-1-3.5C159.4,45.3,158.6,45.6,157.5,46z"}),r.createElement("path",{style:n,d:"M196,29.4c-0.8-0.9-1.8-1.6-2.8-2.1c-1.1-0.6-2.2-1-3.5-1.3c2-0.6,3.7-1.8,4.9-3.5s1.8-3.7,1.8-6.1\r c0-2.2-0.5-4-1.4-5.5c-1-1.5-2.3-2.7-3.9-3.5c-1.6-0.9-3.5-1.5-5.7-1.9s-4.4-0.6-6.8-0.6c-0.8,0-1.7,0-2.7,0.1\r c-1,0-1.9,0.1-2.9,0.2s-2,0.2-2.9,0.4c-0.9,0.1-1.8,0.3-2.6,0.5v42.7c0.6,0.2,1.4,0.3,2.3,0.5c0.9,0.1,1.8,0.3,2.8,0.4\r c1,0.1,2,0.2,2.9,0.3s1.8,0.1,2.5,0.1c7,0,12.1-1.1,15.4-3.3s5-5.4,5-9.6c0-1.8-0.2-3.3-0.7-4.5C197.5,31.4,196.8,30.3,196,29.4z\r M171.9,9.1c0.7-0.1,1.6-0.2,2.7-0.3c1.1-0.1,2.4-0.1,4-0.1c2,0,3.8,0.1,5.4,0.4c1.6,0.3,3,0.7,4.2,1.4c1.2,0.6,2.1,1.5,2.7,2.5\r c0.6,1,1,2.2,1,3.7c0,1.6-0.3,2.9-0.9,4c-0.6,1-1.4,1.9-2.5,2.5c-1,0.6-2.3,1-3.7,1.3s-2.9,0.4-4.5,0.4h-8.4V9.1z M192.7,41.8\r c-0.9,1.2-2,2.1-3.4,2.8s-3,1.2-4.9,1.4c-1.9,0.3-3.8,0.4-5.7,0.4c-1.3,0-2.6-0.1-3.9-0.2c-1.3-0.1-2.2-0.2-2.9-0.3V28.4h9.2\r c2,0,3.7,0.1,5.3,0.4s3,0.7,4.1,1.4c1.1,0.7,2,1.6,2.6,2.7s0.9,2.6,0.9,4.3C194,39,193.6,40.5,192.7,41.8z"}),r.createElement("path",{style:n,d:"M227.4,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C229.7,45.3,228.7,45.5,227.4,46z"}),r.createElement("path",{style:n,d:"M247.9,45.5c-0.4-0.4-0.7-0.9-0.9-1.5s-0.3-1.4-0.3-2.5V0l-4.2,0.8v41c0,1.6,0.2,2.9,0.5,3.9\r c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5c-0.9-0.1-1.6-0.3-2.2-0.4C248.8,46.3,248.3,46,247.9,45.5\r z"}),r.createElement("path",{style:n,d:"M265.8,46.3c-0.6-0.2-1.1-0.4-1.5-0.8c-0.4-0.4-0.7-0.9-0.9-1.5c-0.2-0.6-0.3-1.4-0.3-2.5V0l-4.2,0.8v41\r c0,1.6,0.2,2.9,0.5,3.9c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5C267.1,46.8,266.4,46.5,265.8,46.3z\r "}),r.createElement("path",{style:n,d:"M229.8,19.8c-2-2.2-4.7-3.5-7.8-3.8v-5h3.6V7.4h-10.8V11h3.6v5c-1.3,0.1-2.5,0.4-3.7,0.9\r c-1.7,0.7-3.3,1.8-4.6,3.2c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h27h0.6c0-0.3,0.1-0.6,0.1-1\r c0-0.3,0-0.7,0-1C233.4,26.5,232.2,22.4,229.8,19.8z M210.2,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5\r c0.9-1,1.9-1.8,3.1-2.4c1.2-0.6,2.5-0.9,4-0.9c2.8,0,5,1,6.5,2.9s2.3,4.6,2.4,8.1H210.2z"})))})),T=n(182),A=n.n(T),R=n(74),V=n.n(R),F=n(184),H=n.n(F),J=n(480),U=n(481),G=function(e){return r.createElement("a",Object.assign({target:"blank",href:"https://github.com/guestbell/slate-plugins"},e))},W=O()(function(e){return{whiteText:{color:"white"},root:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar}})(Object(U.a)(function(e){var t=e.classes;return r.createElement(r.Fragment,null,r.createElement(m.a,{position:"fixed",className:t.appBar},r.createElement(v.a,null,r.createElement("a",{target:"blank",href:"https://guestbell.com"},r.createElement(K,null)),r.createElement(g.a,{variant:"h6",className:d()(t.grow,t.whiteText)},"Slate plugins"),r.createElement(k.a,{component:G},r.createElement(E.a,{className:d()("fa fa-github",t.whiteText)})))),r.createElement(M.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper}},r.createElement("div",{className:t.toolbar}),r.createElement(N.a,null,r.createElement(P.a,{button:!0,color:"inherit",component:function(e){return r.createElement(J.a,{to:"/",className:e.className,exact:!0},e.children)}},r.createElement(D.a,null,r.createElement(A.a,null)),r.createElement(z.a,{primary:"Home"})),r.createElement(S.a,null),r.createElement(P.a,{button:!0,color:"inherit",component:function(e){return r.createElement(J.a,{to:"/slate-edit-list",className:e.className},e.children)}},r.createElement(D.a,null,r.createElement(V.a,null)),r.createElement(z.a,{primary:"Edit list"})),r.createElement(P.a,{button:!0,color:"inherit",component:function(e){return r.createElement(J.a,{to:"/slate-edit-blockquote",className:e.className},e.children)}},r.createElement(D.a,null,r.createElement(H.a,null)),r.createElement(z.a,{primary:"Edit blockquote"})))))})),Q=O()(function(e){return{root:{display:"flex",flexDirection:"column"},content:{flexGrow:1,padding:3*e.spacing.unit,marginLeft:240},toolbar:e.mixins.toolbar}})(function(e){var t=e.classes;return r.createElement("div",{className:d()("main-layout",e.className,t.root)},r.createElement(W,null),r.createElement("main",{className:d()(t.content)},r.createElement("div",{className:t.toolbar}),e.children))}),X=n(118),$=function(e){return r.createElement("h2",null,"Not found what you were looking for")},Y=n(43),Z=n(44),ee=n(46),te=n(45),ne=n(47),re=n(186),ae=n.n(re),oe=n(75),ce=Object(oe.a)({blocks:{heading:"heading",paragraph:"paragraph",ul_list:"ul_list",ol_list:"ol_list",list_item:"list_item"}}),ie=ce("value",null,ce("document",null,ce("heading",null,"Slate + List Edition"),ce("paragraph",null,"This page is a basic example of Slate + slate-edit-list plugin. Press Enter in a list to create a new list item. Press Enter again to exit and Shift+Enter to create a paragraph in a list. The items at range are detected and highlighted, for demonstration purpose."),ce("ul_list",{style:{listStyleType:"disc"}},ce("list_item",null,ce("paragraph",null,"First item in the list")),ce("list_item",null,ce("paragraph",null,"List item can contain blocks"),ce("heading",null,"Here is a heading"),ce("paragraph",null,"And another paragraph")),ce("list_item",null,ce("paragraph",null,"Third item in the list, with a nested list"),ce("ol_list",{style:{listStyleType:"decimal"}},ce("list_item",null,ce("paragraph",null,"First item in the nested list")),ce("list_item",null,ce("paragraph",null,"Second item in the nested list"))))),ce("paragraph",null,"End paragraph"))),ue=n(77),le=n(190),se=n.n(le),fe=function(e){return r.createElement(se.a,Object.assign({style:{marginRight:"1rem"},variant:"outlined"},e))},de=n(191),pe=n.n(de),me=n(192),he=n.n(me),ve=ae()(),ye=[ve];function ge(e){var t=e.node,n=e.attributes,a=e.children,o=e.editor,c=ve.utils.getItemsAtRange(o.value).contains(t);switch(t.type){case"ul_list":return r.createElement("ul",n,a);case"ol_list":return r.createElement("ol",n,a);case"list_item":return r.createElement("li",Object.assign({className:c?"current-item":"",title:c?"Current Item":""},e.attributes),e.children);case"paragraph":return r.createElement("p",n,a);case"heading":return r.createElement("h1",n,a);default:return r.createElement("p",n,a)}}var _e=function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:ie},n.editor=r.createRef(),n}return Object(ne.a)(t,e),Object(Z.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=ve.changes,n=t.wrapInList,a=t.unwrapList,o=t.increaseItemDepth,c=t.decreaseItemDepth,i=ve.utils.isSelectionInList(this.state.value);return r.createElement("div",null,r.createElement(fe,{color:i?"secondary":"primary",onClick:function(){return e.call(i?a:n)}},r.createElement(V.a,null)),r.createElement(fe,{disabled:!i,onClick:function(){return e.call(c)}},r.createElement(pe.a,null)),r.createElement(fe,{disabled:!i,onClick:function(){return e.call(o)}},r.createElement(he.a,null)),r.createElement(fe,{onClick:function(){return e.call(n)}},"Wrap in list"),r.createElement(fe,{onClick:function(){return e.call(a)}},"Unwrap from list"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(ue.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:ye,value:this.state.value,onChange:this.onChange,renderNode:ge,shouldNodeComponentUpdate:function(e){return"list_item"===e.node.type}}))}}]),t}(r.Component),ke=n(193),be=n.n(ke),Ee=Object(oe.a)({blocks:{heading:"heading",paragraph:"paragraph",blockquote:"blockquote"}}),we=Ee("value",null,Ee("document",null,Ee("heading",null,"Slate + Quote Editing"),Ee("paragraph",null,"This page is a basic example of Slate + slate-edit-blockquote plugin."),Ee("blockquote",null,Ee("paragraph",null,"Some text in the blockquote")),Ee("paragraph",null,"End paragraph"))),Oe=be()(),je=[Oe];function Me(e){var t=e.node,n=e.children,a=e.attributes;switch(t.type){case"blockquote":return r.createElement("blockquote",a,n);case"paragraph":return r.createElement("p",a,n);case"heading":return r.createElement("h1",a,n);default:return null}}var Be=function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:we},n.editor=r.createRef(),n}return Object(ne.a)(t,e),Object(Z.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=Oe.changes,n=t.wrapInBlockquote,a=t.unwrapBlockquote,o=Oe.utils.isSelectionInBlockquote(this.state.value);return r.createElement("div",null,r.createElement(fe,{onClick:function(){return e.call(n)}},"Blockquote"),r.createElement(fe,{disabled:!o,onClick:function(){return e.call(a)}},"Unwrap"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(ue.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:je,value:this.state.value,onChange:this.onChange,renderNode:Me}))}}]),t}(r.Component),Ne=n(198),Ie=n(194),Pe={overrides:{h1:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"h4"},e))}},h2:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"h6"},e))}},h3:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"subtitle1"},e))}},h4:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"caption",paragraph:!0},e))}},p:{component:function(e){return r.createElement(g.a,Object.assign({paragraph:!0},e))}},li:{component:O()(function(e){return{listItem:{marginTop:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(Ne.a)(e,["classes"]);return r.createElement("li",{className:t.listItem},r.createElement(g.a,Object.assign({component:"span"},n)))})}}},Ce=function(e){return r.createElement("div",{className:"slate-editor"},r.createElement(Ie.a,Object.assign({options:Pe},e)))},De=n(196),xe=n.n(De),ze=function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).state={},n}return Object(ne.a)(t,e),Object(Z.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(xe.a.join("/slate-plugins","docs",this.props.packageName,"Readme.md")).then(function(e){return e.text()}).then(function(t){e.setState({docsMarkdown:t})}).catch(function(t){e.setState({docsMarkdown:"##Unable to load docs\n```".concat(JSON.stringify(t))})})}},{key:"render",value:function(){var e=this.props.classes;return r.createElement("div",null,this.props.children&&r.createElement(g.a,{variant:"h2",gutterBottom:!0},"Demo"),this.props.children,this.state.docsMarkdown&&r.createElement("div",{className:e.docsContainer},r.createElement(g.a,{variant:"h2",gutterBottom:!0},"Docs"),r.createElement(Ce,{className:e.documentationMarkdown},this.state.docsMarkdown)))}}]),t}(r.Component),Le=O()(function(e){return{documentationMarkdown:{padding:"".concat(3*e.spacing.unit,"px"),backgroundColor:"white"},docsContainer:{marginTop:"".concat(3*e.spacing.unit,"px")}}})(ze),Se=X.b.div({enter:{y:0,opacity:1,delay:100,beforeChildren:!0},exit:{y:-20,opacity:0,transition:{duration:200}}}),qe=function(e,t){return function(n){return r.createElement(Le,{packageName:e},r.createElement(t,n))}},Ke=[{exact:!0,path:"/",component:function(){return r.createElement(Le,{packageName:""})},className:"home"},{path:"/slate-edit-list",component:qe("slate-edit-list",_e),className:"slate-edit-list"},{path:"/slate-edit-blockquote",component:qe("slate-edit-blockquote",Be),className:"slate-edit-blockquote"},{component:$}],Te=r.createElement(u.a,{render:function(e){var t=e.location,n=Ke.find(function(e){var n=Object(l.a)(t.pathname,{path:e.path,exact:e.exact,strict:e.strict});return Boolean(n)}),a=n&&n.className;return r.createElement(Q,{className:a},r.createElement(X.a,null,r.createElement(Se,{key:t.pathname,className:"d-flex flex-column"},r.createElement(s.a,{location:t},Ke.map(function(e,t){return r.createElement(u.a,Object.assign({},e,{key:t}))})))))}}),Ae=n(112),Re=n.n(Ae),Ve=n(56),Fe=n.n(Ve),He=n(197),Je=n.n(He),Ue=Fe()({palette:{primary:{main:"#10bdc7"},secondary:{main:"#555555"},background:{default:"#eee"}},typography:{useNextVariants:!0}}),Ge=function(e){return r.createElement(Re.a,{theme:Ue},r.createElement(Je.a,null),r.createElement(i.a,{basename:"/slate-plugins"},Te))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.typeItem?a:null}}},65:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(338));t.wrapInList=a.default;var o=r(n(439));t.unwrapList=o.default;var c=r(n(440));t.splitListItem=c.default;var i=r(n(441));t.increaseItemDepth=i.default;var u=r(n(442));t.decreaseItemDepth=u.default}},[[199,2,1]]]);
//# sourceMappingURL=main.e23d4bf6.chunk.js.map