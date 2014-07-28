/**
 * uvn namespace + top level utils.
 */
(function () {
    'use strict';

    var root = this,
        uvn = root.uvn || (root.uvn = {});

    /**
     * Empty function reference.
     */
    uvn.emptyFn = function () {
        return true;
    };

    /**
     * Extends the first object with the rest.
     * @param args {Object...} first argument is the target,
     * the rest are merged in order, overwriting duplicate properties.
     * @returns {Object} the merged object.
     */
    uvn.extend = function () {
        var args = Array.prototype.slice.call(arguments, 0),
            len = args.length, i = 1, obj = len ? args[0] : null, arg,
            nativeIsArray = Array.isArray,
            type;
        for (; i < len; i++) {
            arg = args[i];
            if (typeof arg === 'object') {
                if (nativeIsArray ? !nativeIsArray(arg) : Object.prototype.toString.call(arg) !== '[object Array]') {
                    for (var k in arg) {
                        if (arg.hasOwnProperty(k)) {
                            obj[k] = arg[k];
                        }
                    }
                }
                else {
                    throw new Error('Invalid type [Array] passed to extend function.');
                }
            }
            else {
                throw new Error('Invalid type [' + typeof arg + '] passed to extend function.');
            }
        }
        return obj;
    };

    /**
     * Safely defines a namespace.
     * @param namespace {String} the namespace to define e.g. `uvn.foo.bar`
     * @return the most significant scope.  if `uvn.foo.bar` is passed, `bar` scope is returned.
     */
    uvn.ns = uvn.namespace = function (namespace, scope) {
        scope = scope || root;
        var parts = namespace.split('.'),
            i = 0, len = parts.length,
            loopScope = scope, part;
        for (; i < len; i++) {
            part = parts[i]
            loopScope = loopScope[part] || (loopScope[part] = {});
        }
        return loopScope;
    };


}).call(this);
;(function() { this.JST = {"util/mask": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="uvn-mask">\n</div>';

}
return __p
},
"video/ooyala/plugin/adobepass-faq": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="mvpd">\n    <section data-role="faq" class="mvpd-body"><a title="' +
((__t = ( __('common.closeThisWindow') )) == null ? '' : __t) +
'" class="close"></a><a\n            title="' +
((__t = ( __('mvpd.faq.backToProviders') )) == null ? '' : __t) +
'" class="back-to-providers">' +
((__t = (
        __('mvpd.faq.backToProviders') )) == null ? '' : __t) +
'</a>\n\n        <h2 class="small">' +
((__t = ( __('mvpd.faq.heading') )) == null ? '' : __t) +
'</h2>\n        <ol class="faq">\n            ';
 _.each(__('mvpd.faq.items'),function(item) { ;
__p += '\n            <li>' +
((__t = ( item )) == null ? '' : __t) +
'</li>\n            ';
 }); ;
__p += '\n        </ol>\n        <a title="' +
((__t = ( __('mvpd.faq.viewMoreFaqs') )) == null ? '' : __t) +
'" class="view-more-faqs">' +
((__t = ( __('mvpd.faq.viewMoreFaqs')
            )) == null ? '' : __t) +
'</a></section>\n</div>';

}
return __p
},
"video/ooyala/plugin/adobepass-step1": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="mvpd" data-role="step1">\n    <section class="mvpd-body"><a title="' +
((__t = ( __('common.closeThisWindow') )) == null ? '' : __t) +
'" class="close"></a>\n        <h2>' +
((__t = ( __('mvpd.providerSelection.heading') )) == null ? '' : __t) +
'</h2>\n        <h3>' +
((__t = ( __('mvpd.providerSelection.subHeading') )) == null ? '' : __t) +
'</h3>\n        <div class="image-wrap"><img data-role="step" name="step1" src="/media/mvpd/step1.png" class="step1"/><label\n                for="step1" class="selected first">' +
((__t = ( __('mvpd.providerSelection.step1') )) == null ? '' : __t) +
'</label><label\n                for="step2">' +
((__t = ( __('mvpd.providerSelection.step2') )) == null ? '' : __t) +
'</label><label for="step3">' +
((__t = (
            __('mvpd.providerSelection.step3') )) == null ? '' : __t) +
'</label></div>\n        <ul class="providers">\n            ';
 _.each(providers,function(provider) { ;
__p += '\n            <li><a title="' +
((__t = ( __('mvpd.providerSelection.selectProvider',{provider:provider.displayName}) )) == null ? '' : __t) +
'"\n                   mvpd_id="' +
((__t = ( provider.ID )) == null ? '' : __t) +
'"\n                   class="provider-' +
((__t = ( provider.ID.toLowerCase() )) == null ? '' : __t) +
'">' +
((__t = ( __('mvpd.providerSelection.selectProvider',{provider:provider.displayName}) )) == null ? '' : __t) +
'</a></li>\n            ';
 }); ;
__p += '\n        </ul>\n        <a title="' +
((__t = ( __('mvpd.providerSelection.viewAllProviders') )) == null ? '' : __t) +
'" class="view-all-providers">' +
((__t = (
            __('mvpd.providerSelection.viewAllProviders') )) == null ? '' : __t) +
'</a><a\n                title="' +
((__t = ( __('mvpd.providerSelection.viewFaq') )) == null ? '' : __t) +
'" class="faq">' +
((__t = (
            __('mvpd.providerSelection.viewFaq') )) == null ? '' : __t) +
'</a></section>\n</div>';

}
return __p
},
"video/ooyala/plugin/adobepass-step2": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="mvpd">\n    <section class="mvpd-body"><a title="' +
((__t = ( __('common.closeThisWindow') )) == null ? '' : __t) +
'" class="close"></a>\n\n        <h2>' +
((__t = ( __('mvpd.providerSelection.loginWithNetwork') )) == null ? '' : __t) +
'</h2>\n\n        <div class="image-wrap"><img data-role="step" name="step2" src="/images/step2.png" class="step1"><label\n                for="step1" class="first complete">' +
((__t = ( __('mvpd.providerSelection.step1') )) == null ? '' : __t) +
'</label><label\n                for="step2" class="selected">' +
((__t = ( __('mvpd.providerSelection.step2') )) == null ? '' : __t) +
'</label><label for="step3">\n            ' +
((__t = ( __('mvpd.providerSelection.step3') )) == null ? '' : __t) +
'</label></div>\n        <iframe src="/provider-iframe.html" class="provider-frame"></iframe>\n        <a title="' +
((__t = ( __('mvpd.providerSelection.backToProviders') )) == null ? '' : __t) +
'" class="back-to-providers">' +
((__t = (
            __('mvpd.providerSelection.backToProviders') )) == null ? '' : __t) +
'</a></section>\n</div>';

}
return __p
},
"video/ooyala/plugin/adobepass-step3": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="mvpd">\n    <section class="mvpd-body"><a title="' +
((__t = ( __('common.closeThisWindow') )) == null ? '' : __t) +
'" class="close"></a>\n\n        <h2>' +
((__t = ( __('mvpd.providerSelection.successHeading') )) == null ? '' : __t) +
'</h2>\n\n        <div class="image-wrap"><img data-role="step" name="step2" src="/images/step3.png" class="step1"><label\n                for="step1" class="first complete">' +
((__t = ( __('mvpd.providerSelection.step1') )) == null ? '' : __t) +
'</label><label\n                for="step2" class="complete">' +
((__t = ( __('mvpd.providerSelection.step2') )) == null ? '' : __t) +
'</label><label for="step3"\n                                                                                                     class="complete">\n            ' +
((__t = ( __('mvpd.providerSelection.step3') )) == null ? '' : __t) +
'</label></div>\n    </section>\n</div>';

}
return __p
},
"video/ooyala/plugin/ratingsbug": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="ratings-bug">\n    <div class="head">' +
((__t = ( head )) == null ? '' : __t) +
'</div>\n    <div class="body ' +
((__t = ( obj.foot ? '' : 'large')) == null ? '' : __t) +
'">' +
((__t = ( body )) == null ? '' : __t) +
'</div>\n    <div class="foot ' +
((__t = ( obj.foot ? '' : 'hidden')) == null ? '' : __t) +
'">' +
((__t = ( obj.foot || '&nbsp;')) == null ? '' : __t) +
'</div>\n    <div class="bg">&nbsp;</div>\n</div>';

}
return __p
}}; }).call(this.uvn || (this.uvn = {}));
/*jshint strict: false, expr: true */
!(function () {

    var win = this,
        uvn = win.uvn || (win.uvn = {}),
        util = uvn.util || (uvn.util = {}),
        /**
         * @class uvn.Utils
         */
        LibraryUtils = function () {
        },
        proto = {
            /**
             * Returns a <script> tag for a given url.
             * @param url {string} url to search for.
             * @param scope {Object} [optional] optional scope to search for the script, defaults to `window.document` when in a browser.
             * @return the <script> DOM element from the document, or null if not found.
             */
            getScriptTag: function (url, scope) {
                scope = scope || win.document;

                var scripts = scope.getElementsByTagName("SCRIPT"),
                    len = scripts.length,
                    script, src;

                while (--len > -1) {
                    script = scripts[len];
                    src = script.getAttribute("src");
                    if (src) {
                        if(src.toLowerCase() === url) {
                            return script;
                        }
                        else {
                            var qs = src.indexOf('?');
                            if(qs !== -1 && src.substring(0,qs) === url) {
                                return script;
                            }
                        }
                    }

                }
                return null;
            },
            /**
             * Loads a script and fires a callback when complete.
             * @param url {string} url to load.
             * @param callback {Function} to fire when complete.
             */
            loadScript: function (url, callback) {
                var me = this,
                    el = document.createElement("script"),
                    readyState = el.readyState;
                el.type = "text/javascript";


                if (readyState) {
                    el.onreadystatechange = function () {
                        if (el.readyState === "loaded" || el.readyState === "complete") {
                            el.onreadystatechange = null;
                            callback.call(me, el);
                        }
                        else {
                            uvn.DEBUG && win.console.log('el.readyState: %s', el.readyState);
                        }
                    };
                } else {
                    el.onload = function () {
                        callback.call(me,el);
                    };
                }
                if(typeof url === 'object') {
                    for(var k in url) {
                        el.setAttribute(k, url[k]);
                    }
                }
                else {
                    el.src = url;
                }
                document.getElementsByTagName("head")[0].appendChild(el);
            },
            /**
             * Loads a library without conflict e.g. `jQuery.noConflict()`.
             * @param lib {string} library, currently either 'underscore' or 'jquery'
             * @returns {Object} library reference e.g. `$` or `_`
             * @method loadLibrary
             */
            loadLibrary: function (lib) {
                var obj, scope = {};
                switch (lib.toLowerCase()) {
                    case 'jquery':
                        obj = win.jQuery;
                        break;
                    case 'underscore':
                        scope = win;
                        obj = scope._;
                        break;
                    default:
                        throw new Error('Library "' + lib + '" has not been configured; unable to load library.');
                }
                return obj;
            }
        };

    for (var k in proto) {
        if (proto.hasOwnProperty(k)) {
            LibraryUtils.prototype[k] = proto[k];
        }
    }
    util.LibraryUtils = new LibraryUtils();

}).call(this);
/*global expr:true */
(function () {
    'use strict';

    var win = this,
        uvn = win.uvn || (win.uvn = {}),
        util = uvn.util || (uvn.util = {}),

        ALL_KEY = '-all-';

    /**
     * Adds a listener to an observer.
     * @param observer {Observer} observer
     * @param eventName {string} event name e.g. 'play'
     * @param fn {Function}
     * @param scope {Object} optional function scope
     * @param repeat {boolean,Number} true to repeat until removed, false to fire once, a number, N, will fire N times.
     */
    function addListener(observer, eventName, fn, scope, repeat) {

        var eventKey = eventName === '*' ? ALL_KEY : eventName.toLowerCase(),
            eventMap = observer.eventMap[eventKey] || (observer.eventMap[eventKey] = []);
        eventMap.push({
            fn: scope ? fn.bind(scope) : fn,
            repeat: repeat
        });
    }

    /**
     * Observer encapsulates event (un)registration and dispatching.
     * @constructor
     * @class uvn.utils.Observer
     */
    var Observer = util.Observer = function () {
            this.eventMap = {};
        },
        proto = {
            /**
             * Adds a listener to an event.
             * @param eventName {string} event name e.g. 'play'
             * @param fn {Function}
             * @param scope {Object} optional function scope
             * @returns {Observer} this
             */
            on: function (eventName, fn, scope) {
                addListener(this, eventName, fn, scope, true);
                return this;
            },
            /**
             * Adds a listener to an event that will fire at most one time.
             * @param eventName {string} event name e.g. 'play'
             * @param fn {Function}
             * @param scope {Object} optional function scope
             * @returns {Observer} this
             */
            once: function (eventName, fn, scope) {
                addListener(this, eventName, fn, scope, false);
                return this;
            },
            /**
             * Adds a listener to an event that will fire at most `count` times.
             * @param count {Number} maximum times the listener will be fired; count > 0
             * @param eventName {string} event name e.g. 'play'
             * @param fn {Function}
             * @param scope {Object} optional function scope
             * @returns {Observer} this
             */
            times: function (maxCount, eventName, fn, scope) {
                addListener(this, eventName, fn, scope, maxCount);
                return this;
            },
            /**
             * Removes an event listener.
             * @param eventName {string} event name e.g. `play`
             * @param fn {Function} function to remove from the list of listeners.
             * @returns {Observer} this
             */
            off: function (eventName, fn) {
                var key = eventName.toLowerCase(),
                    events = this.eventMap[key],
                    i = 0, len = events ? events.length : 0,
                    newEvents = [];
                for (; i < len; i++) {
                    if (events[i].fn !== fn) {
                        newEvents.push(events[i]);
                    }
                }
                events.length = 0;
                this.eventMap[key] = events.concat(newEvents);
                return this;
            },
            /**
             * Fires an event.
             * @param eventName {String} event name.
             * @param args {Array} event arguments.
             * @returns {Observer}
             */
            fire: function (eventName, args) {
                var key = eventName.toLowerCase(),
                    events = (this.eventMap[key] || []).concat(this.eventMap[ALL_KEY] || []),
                    i = 0, len = events ? events.length : 0, event,
                    newEvents = [];
                for (; i < len; i++) {
                    event = events[i];
                    var repeatType = typeof event.repeat,
                        repeat = event.repeat;
                    try {
                        event.fn.apply(this, args);
                    }
                    catch (ex) {
                        throw new Error('Caught exception when executing event listener: ' + ex.message, ex);
                    }
                    if (repeatType === 'boolean' && event.repeat) {
                        newEvents.push(event);
                    }
                    else {
                        repeat = parseInt(repeat);
                        if (!isNaN(repeat) && --event.repeat) {
                            newEvents.push(event);
                        }
                    }
                    events.length = 0;
                    this.eventMap[key] = events.concat(newEvents);
                }
                return this;
            }
        };
    Observer.prototype = proto;

}).call(this);
/*jshint expr:true */
/*global jQuery, _, uvn */
!(function () {

    'use strict';

    var win = this,
        uvn = win.uvn,
        video = uvn.ns('uvn.video'),
        libraryUtils = uvn.util.LibraryUtils;

    /**
     * Creates a new player instance:
     * ```html
     *          <div id="player"></div>
     * ```
     * ```javascript
     *  var thePlayer = new uvn.video.Player('onePlayer',392104,{
     *      autoplay:false
     *  }).ready(function(player) {
     *     console.log('Player ready!');
     *     player.play();
     *  });
     * ```
     * @class uvn.video.Player
     * @parma el {DOMElement,String} id, DOM or jQuery node in which the player will be rendered.  NOTE: contents + attributes of this node
     * i.e. `innerHTML` will be decorated.  It is recommended to have a simple `<div>` e.g. `<div id="onePlayer"></div>` when possible.
     * @param videoId {String.Number} video id to load in the player.
     * @param params {Object} player parameters:
     * ```javascript
     * {
     *      aspectRatio: 9/16, // optional aspect ratio to enforce ( width priority )
     *      autoplay: false, // defaults to false.  if true, video will play as soon as the player is ready
     *      language: 'en' // defaults to 'en' - uses 2-digit ISO language codes.
     *      height: 480, // defaults to 100%
     *      width: 640, // defaults to 100%
     * }
     * ```
     */
    var Player = video.Player = function (el, videoId, params) {
            this.init(el);
            this.videoId = videoId;
            if (videoId) {
                this.load(videoId, params);
            }
        },
        proto = {
            /**
             * Initializes this object.
             */
            init: function (el) {
                var $ = this.$ = win.jQuery || libraryUtils.loadLibrary.call(win, 'jquery'),
                    _ = this._ = win._ && typeof win._.template === 'function' ? win._ : libraryUtils.loadLibrary.call(win, 'underscore');

                // resolves the element, accepting DOM, jQuery, string CSS selector or element ID.
                var $container = this.$container = $(el),
                    elType = typeof el;

                if (!$container.length && elType === 'string') {
                    $container = this.$container = $('#' + el);
                    if (!$container.length) {
                        throw new Error('Invalid player container; unable to lookup element with id/selector: ' + el);
                    }
                }
            },
            /**
             * Destroys the player.
             */
            destroy: function () {
                // no-op right now.
            },
            /**
             * Get authentication.
             */
            getAuthentication: function () {
                throw new Error('This player does not support authentication.');
            },
            /**
             * Gets the player url.
             * @param params {Object} [optional] player params.
             */
            getPlayerUrl: function (params) {
                throw new Error('This method must be implemented by player implementations.');
            },
            /**
             * Returns player status e.g. 'paused', 'playing'.
             */
            getState: function () {
                throw new Error('This method must be implemented by player implementations.');
            },
            /**
             * Loads a new video.
             * @param videoId {string|number} video id
             * @param params {Object} player parameters
             */
            load: function (videoId, params) {
                var me = this,
                    urls = this.getPlayerUrl(params),
                    i = 0, len,
                    callback = function (el) {
                        if (el.getAttribute('src') === urls[len - 1]) {
                            me.onPlayerLoaded(videoId, params);
                        }
                    };

                if (typeof urls === 'string') {
                    urls = [urls];
                }

                for (len = urls.length; i < len; i++) {
                    var url = urls[i],
                        el = libraryUtils.getScriptTag(url);
                    if (!el) {
                        libraryUtils.loadScript(url, callback);
                    }
                    else {
                        callback(el);
                    }
                }
            },
            login: function () {
                throw new Error('This player does not support authentication.');
            },
            logout: function () {
                throw new Error('This player does not support authentication.');
            },
            /**
             * Pauses the player; if player is paused or no video is loaded, no-op.
             */
            pause: function () {
                throw new Error('This method must be implemented by player implementations.');
            },
            /**
             * Plays the player; if player is alraedy playing, no-op.
             */
            play: function () {
                throw new Error('This method must be implemented by player implementations.');
            },
            /**
             * Player `onReady` hook.
             * @param fn {function} function to execute when the player is ready.
             * @return player
             */
            ready: function (fn) {
                if (typeof fn === 'function') {
                    var me = this,
                        _ = this._;
                    if (this.isReady) {
                        fn(me);
                    }
                    else {
                        this.once('ready', function () {
                            fn(me);
                        });
                    }
                }
                else {
                    throw new Error('Invalid argument type: ' + (typeof fn) + ' -- a function is required.');
                }
                return this;
            }
        };

    // define player events.
    /**
     * Player events
     * @type {Array}
     */
    var playerEvents = Player.Events = [],
        events = [
            'AUTH_STATUS',
            'INITIAL_PLAY',
            'ERROR',
            'READY',
            'PLAY',
            'PLAYING',
            'PAUSE',
            'PAUSED',
            'DESTROY',
            'DESTROYED'
        ];
    for (var i = 0, len = events.length; i < len; i++) {
        playerEvents[events[i]] = events[i].toLowerCase();
    }

    /**
     * Creates a new player.
     * @returns {uvn.video.Player} instance.
     */
    Player.create = function (el, id, params) {
        return new uvn.video.ooyala.OoyalaPlayer(el, id, params);
    };

    /**
     * Registers a global player implementation.
     * @param impl {uvn.video.Player} a player implementation.
     * @returns {uvn.video.Player} object
     */
    Player.register = function (impl) {
        var strategies = Player.strategies || (Player.strategies = []);
        strategies.push(impl);
        return this;
    };

    // extend Observer.
    Player.prototype = new uvn.util.Observer();
    // apply our prototype.
    for (var k in proto) {
        if (proto.hasOwnProperty(k)) {
            Player.prototype[k] = proto[k];
        }
    }

}).call(this);
/*jshint expr:true */
/*global jQuery, _ */
!(function () {

    'use strict';

    var win = this,
        uvn = win.uvn,
        video = uvn.ns('uvn.video'),
        ooyala = uvn.ns('ooyala', video),
        console = win.console || { log: uvn.emptyFn },


    // android detection
        ua = win.navigator ? win.navigator.userAgent.toLowerCase() : '',
        isAndroid = ua.indexOf('android') !== -1,

        libraryUtils = uvn.util.LibraryUtils,

        DEFAULT_PLAYER_ID = 'eafc57d4c5f6450086d627bb096d3e51',

        /**
         * Ooyala video player implementation.
         * @type {uvn.video.OoyalaPlayer}
         */
        player = ooyala.OoyalaPlayer = function (el, id, params) {

            // ooyala ids are either:
            // <number>  or "extId:<number>" -- or -- an embed code "19023dh21nlk2m1_m29j210i"
            var videoId = parseInt(id);
            videoId = isNaN(videoId) ? id : 'extId:' + id;

            video.Player.apply(this, [el, videoId, params]);
            /**
             * The default player id.
             * @property
             * @type {string}
             */
            this.defaultPlayerId = DEFAULT_PLAYER_ID;
        },
        proto = {
            /**
             * Destroys the player, cleaning up resources as necessary.
             * @see {uvn.video.Player#destroy}
             */
            destroy: function () {
                video.Player.prototype.destroy.apply(this, arguments);
                var ooPlayer = this.ooPlayer;
                ooPlayer && ooPlayer.destroy();
            },
            /**
             * Provides a hook for initializing the player once its external resources i.e. `<script>`'s have been loaded.
             */
            onPlayerLoaded: function (videoId, params) {
                var OO = win.OO || OO,
                    me = this,
                    $ = this.$,
                    plugins = this.plugins = [];

                var plugin = ooyala.plugin;
                if (plugin) {

                    for (var p in plugin) {
                        if (plugin.hasOwnProperty(p)) {
                            // initialize the plugin.
                            var obj = plugin[p];
                            try {
                                obj.init && obj.init(this);
                                // save it on this.plugins.
                                plugins.push(obj);
                            }
                            catch (ex) {
                                console.log('ERROR: ' + ex.message);
                            }
                        }
                    }
                }
                OO.ready(function () {
                    me.isReady = true;
                    me.fire('ready',me);
                    me.ooPlayer = OO.Player.create(me.$container.attr('id'), videoId, $.extend({}, params, {
                        onCreate: $.proxy(me.onPlayerCreate, me)
                    }));
                });
            },
            /**
             * @see {uvn.video.Player#getNamespace}
             */
            getNamespace: function () {
                return 'OO';
            },
            /**
             * @see {uvn.video.Player#getPlayerUrl}
             */
            getPlayerUrl: function (params) {

                params = params || {};

                var $ = this.$,
                    playerParams = $.extend({}, params.player || {}, this.playerParams || {}),
                    playerId = playerParams.playerId,
                    protocol = location.protocol.match(/http/i) ? '' : 'http:',
                    playerUrl = protocol + '//player.ooyala.com/v3/' + (playerId || this.defaultPlayerId || DEFAULT_PLAYER_ID),
                    qs = {
                        platform: 'html5-priority'
                    };
                if (isAndroid) {
                    qs.tweaks = 'enable-android-hls';
                }
                return playerUrl + '?' + this.$.param(qs);
            },
            getState: function () {
                var ooPlayer = this.ooPlayer;
                return ooPlayer ? ooPlayer.getState() : 'loaded';
            },
            /**
             * Called when the Ooyala player has been created; this method initializes/binds events to the Ooyala player.
             * @param player {OO.Player} ooyala player.
             */
            onPlayerCreate: function (player) {
                var OO = win.OO || OO,
                    bus = this.ooPlayerEventBus = player.mb,
                    me = this;
                bus.subscribe('*', 'uvn-video-ooyalaplayer', function (event) {
                    var count = arguments.length,
                        args = count > 1 ? Array.prototype.slice.call(arguments, 1) : [],
                        ooEvents = OO.EVENTS,
                        playerEvents = video.Player.Events;
                    //uvn.DEBUG && event !== ooEvents.DOWNLOADING && win.console.log('OoyalaEvent [%s]', event);
                    // normalize Ooyala player events.
                    switch (event) {
                        case ooEvents.PLAYER_CREATED:
                            me.fire(playerEvents.LOADED, args);
                            break;
                        case ooEvents.PLAYBACK_READY:
                            me.fire(playerEvents.READY, args);
                            break;
                        case ooEvents.ERROR:
                            me.fire(playerEvents.ERROR, args);
                            break;
                        case ooEvents.INITIAL_PLAY:
                            me.fire(playerEvents.INITIAL_PLAY, args);
                            break;
                        case ooEvents.PLAYHEAD_TIME_CHANGED:
                            me.fire(playerEvents.PLAYING, args);
                            break;
                        case ooEvents.PLAY:
                            me.fire(playerEvents.PLAY, args);
                            break;
                        case ooEvents.PAUSE:
                            me.fire(playerEvents.PAUSE, args);
                            break;
                        case ooEvents.PAUSED:
                            me.fire(playerEvents.PAUSED, args);
                            break;
                        default:
                            // win.console.log('No event mapping for Ooyala event: %s, %O', event, args);
                            // pass through raw ooyala events to support legacy code.
                            me.fire(event, args);
                            break;
                    }
                });
            },
            /**
             * @see {uvn.video.Player#pause}
             */
            pause: function () {
                var ooPlayer = this.ooPlayer;
                if (ooPlayer) {
                    ooPlayer.pause();
                }
            },
            /**
             * @see {uvn.video.Player#play}
             */
            play: function () {
                var ooPlayer = this.ooPlayer;
                if (ooPlayer) {
                    ooPlayer.play();
                }
            }
        };

    player.prototype = Object.create(video.Player.prototype);

    for (var k in proto) {
        if (proto.hasOwnProperty(k)) {
            player.prototype[k] = proto[k];
        }
    }

}).call(this);

/* expr=true */
(function () {
    'use strict';

    var root = this,
        OO = root.OO,
        uvn = root.uvn,
        plugin = uvn.ns('video.ooyala.plugin', uvn),
        pluginKey = 'uvnOoyalaPluginAdobePass',
        jst = uvn.JST,
        /**
         * localized data
         * todo: move to centralized location / possibly CMS.
         */
        locales = {
            "en": {
                "common": {
                    "close": "Close",
                    "closeThisWindow": "Close This Window",
                    "continue": "Continue"
                },
                "mvpd": {
                    "pproviders": {
                        "att": "AT&T",
                        "brighthouse": "Bright House",
                        "charter": "Charter",
                        "cox": "Cox",
                        "direct": "DirecTV"
                    },
                    "providerSelection": {
                        "heading": "Select your TV Provider below",
                        "successHeading": "Start watching UVideos!",

                        "subHeading": "to watch the most recent episodes.",

                        "step1": "TV Provider",
                        "step2": "Sign In",
                        "step3": "Watch!",

                        "selectProvider": "Select {{provider}}",
                        "viewAllProviders": "I don't see my TV Provider",
                        "viewFaq": "Questions about signing in?",

                        "providerSearchPlaceholder": "Search TV Providers",
                        "loginWithNetwork": "Login with {{network}}",
                        "backToProviders": "Choose a different Cable Provider",
                        "noProvider": "I do not have a provider"
                    },
                    "faq": {
                        "heading": "5 things you need to know about signing in:",
                        "items": [
                            "<strong>No extra cost.</strong> If you already pay a cable, satellite, or telephone company for TV service - this is an added benefit of that service.",
                            "Only your TV Service Provider sees your sign in info.  Univision has no access to that information.",
                            "<strong>No spam.</strong>  Univision will not send you any additional emails unless you specifically request them.",
                            "If you're having trouble with a user name or password, your TV Service Provider can help you.",
                            "You'll only have to sign in once every few weeks.  The term varies by TV Service Provider."
                        ],
                        "viewMoreFaqs": "See more in FAQs",
                        "backToProviders": "Back to sign in"
                    }
                }
            }
        },
        /**
         * templates used by this plugin.
         */
        templates = {
            mask: jst['util/mask'],
            step1: jst['video/ooyala/plugin/adobepass-step1'],
            step2: jst['video/ooyala/plugin/adobepass-faq']
        },
        console = root.console || { log: function () {
        } },

        /**
         * Creates a new AdobePass plugin.  Called by Ooyala player framework.
         * @param mb {Object} message bus
         * @param id {string} player id
         * @type {uvn.video.ooyala.plugin.AdobePass}
         */
        adobePass = plugin.AdobePass = function (mb, id) {
            var $ = OO.$;
            this.mb = mb;
            this.id = id;

            // bind our handlers to `this` and hold onto their bound reference to
            // unbind when player is destroyed.
            var handlers = this.handlers || (this.handlers = {
                onPlayerCreated: $.proxy(this.onPlayerCreated, this)
            });

            // can use '*' here to get everything.
            mb.subscribe(OO.EVENTS.PLAYER_CREATED, pluginKey, handlers.onPlayerCreated);
        },
        proto = {
            closeProviderDialog: function () {
                this.$mask.fadeOut().off('click').remove();
                this.$activeStep.fadeOut().off('click').remove();
            },
            /**
             * Custom provider dialog implementation.
             * @param event {String} event name.
             * @param providers {Array} provider list.
             */
            displayProviderDialog: function (event, providers) {

                console.log('displayProviderDialog: event ', event, ', providers: ', providers);

                var me = this,
                    $ = OO.$,
                    ooPass = adobePass.ooPass,
                    $mask = $('.uvn-mask'),
                    exists = $mask.length > 0,
                    boundCloseFn = $.proxy(this.closeProviderDialog, this),
                    providerCount = providers.length;

                if (!exists) {
                    $mask = this.$mask = $(templates.mask()).appendTo(document.body);
                }

                this.providers = providers;


                // pop mask.
                $mask.show();
                $mask.on('click', boundCloseFn);

                this.displayStep(1);
            },
            displayStep: function (step) {
                // build data model.
                var me = this,
                    $ = OO.$,
                    ooPass = adobePass.ooPass,
                    data = {
                        providers: this.providers,
                        __: function (key, params) {
                            params = params || {};
                            var obj;
                            /* todo: remove eval for more robust impl. */
                            /* jshint ignore:start */
                            obj = eval('locales.en.' + key);
                            /* jshint ignore:end */
                            if (typeof obj === 'string') {
                                for (var k in params) {
                                    if (params.hasOwnProperty(k)) {
                                        obj = obj.replace(new RegExp('{{' + k + '}}', 'g'), params[k]);
                                    }
                                }
                            }
                            return obj ? obj : key;
                        }
                    },
                    boundCloseFn = $.proxy(this.closeProviderDialog, this),
                // render template.
                    $activeStep = this.$activeStep;

                if ($activeStep && $activeStep.length) {
                    $activeStep.remove();
                }
                $activeStep = this.$activeStep = $(templates['step' + step](data)).appendTo(document.body);

                // live events.
                $activeStep.on('click', 'a[class^=provider-]', ooPass.selectProvider);
                $activeStep.on('click', 'a.close', boundCloseFn);
                $activeStep.on('click', 'a.faq', function (e) {
                    me.displayStep(2);
                    e.preventDefault();
                    return false;
                });
                $activeStep.on('click', 'a.back-to-providers', function(e) {
                    me.displayStep(1);
                    e.preventDefault();
                    return false;
                });
            },
            /**
             * Called when player is created.
             * @param event {string} event name.
             * @param elementId {string} element id.
             * @param params {object} params passed to create player function.
             */
            onPlayerCreated: function (event, elementId, params) {
                var $ = OO.$,
                    ooPass = adobePass.ooPass,
                    $playerRoot = this.$playerRoot = $('#' + elementId);

                // tell Adobe Pass to use our custom provider dialog.
                ooPass.useProviderDialog($.proxy(this.displayProviderDialog, this));
            }
        },

        initialized = false;

    /**
     * Initializes the plugin, must be called after Ooyala player script is loaded ( `OO` must be defined ).
     * @param player {uvn.video.Player} player instance.
     */
    adobePass.init = function (player) {
        if (!initialized) {
            // safely init via top-level scoped OO.
            OO = OO || root.OO;
            if (!OO) {
                throw new Error("OO namespace does not exist; this is an Ooyala plugin and must be loaded *after* the core Ooyala framework.");
            }
            // use .ready to do anything.
            OO.ready(function () {
                var ooPass = adobePass.ooPass = OO.Pass;
                if (!ooPass) {
                    console.log('OO.Pass unavailable; Adobe Pass plugin disabled.');
                }
                else {
                    console.log('OO.Pass detected.');
                    OO.plugin(pluginKey, function (OO, $, _, W) {
                        return adobePass;
                    });
                    OO.Pass.onSetAuthenticationStatus(function(event,loggedIn) {
                        loggedIn = !!loggedIn;
                        player.fire(uvn.video.Player.Events.AUTH_STATUS,[
                            {
                                loggedIn:loggedIn,
                                provider:OO.Pass.getSelectedProvider()
                            }
                        ]);
                        return true;
                    });

                    uvn.extend(player, {
                        /**
                         * Adobe Pass `getAuthentication` implementation for Ooyala core player.
                         * @returns {{loggedIn: boolean, provider: (Object|null)}}
                         */
                        getAuthentication: function () {
                            var $ = OO.$,
                                providers = this.providers || [],
                                selectedProvider = ooPass.getSelectedProvider(),
                                i=0,len=providers.length;
                            if(selectedProvider) {
                                for(;i<len;i++) {
                                    if(providers[i].ID === selectedProvider) {
                                        break;
                                    }
                                }
                            }
                            return {
                                loggedIn: ooPass.isAuthenticated(),
                                provider: i < len ? providers[i] : null
                            };
                        },
                        login:function() {
                            // todo: check if logged in first?
                            ooPass.login();
                        },
                        logout:function() {
                            // todo: check if logged in first?
                            ooPass.logout();
                        }
                    });
                }
            });
            // init complete
            initialized = true;
        }
    };

    // apply the methods to the prototype.
    uvn.extend(adobePass.prototype, proto);


}).call(this);


/* expr: true */
!(function () {
    'use strict';
    var root = this,
        OO = root.OO,
        console = root.console || { log: function () {
        } },
        uvn = root.uvn,
        plugin = uvn.ns('uvn.video.ooyala.plugin'),
        /**
         * Creates a new HelloWorld plugin.  Called by Ooyala player framework.
         * @param mb {Object} message bus
         * @param id {string} player id
         * @type {uvn.video.ooyala.plugin.HelloWorld}
         */
        helloWorld = plugin.HelloWorld = function (mb, id) {
            var $ = OO.$;
            this.mb = mb;
            this.id = id;

            // bind our handlers to `this` and hold onto their bound reference to
            // unbind when player is destroyed.
            var handlers = this.handlers || (this.handlers = {
                playercreated: $.proxy(this.onPlayerCreated, this)
            });

            // can use '*' here to get everything.
            mb.subscribe(OO.EVENTS.PLAYER_CREATED, 'uvnVideoOoyalaPluginHelloWorld', handlers.playercreated);
        },
        proto = {
            /**
             * Called when a player is created.
             * @param event {String} event name.
             * @param elementId {String} player dom element id.
             * @param params {Object} player parameters.
             */
            onPlayerCreated: function (event, elementId, params) {
                var $ = OO.$,
                    id = this.elementId;

                this.$player = $('#' + id);
                this.params = params || {};
                console.log('Hello World!! player id: %s --> %O', id, this.$player);
            }
        },

        initialized = false;

    /**
     * Initializes the plugin, must be called after Ooyala player script is loaded ( `OO` must be defined ).
     */
    helloWorld.init = function () {
        if (!initialized) {
            // safely init via top-level scoped OO.
            OO = OO || root.OO;
            if (!OO) {
                throw new Error("OO namespace does not exist; this is an Ooyala plugin and must be loaded *after* the core Ooyala framework.");
            }
            // use .ready to do anything.
            OO.ready(function () {

                // the.package.name --> thePluginId
                OO.plugin("uvnVideoOoyalaHelloWorld", function (OO, $, _, W) {
                    return helloWorld;
                });
            });
            // init complete
            initialized = true;
        }
    };

    // apply the methods to the prototype.
    uvn.extend(helloWorld.prototype, proto);


}).call(this);
/* expr=true */
(function () {
    'use strict';

    var root = this,
        OO = root.OO,
        $ = OO ? OO.$ : root.jQuery,
        uvn = root.uvn,
        plugin = uvn.ns('video.ooyala.plugin', uvn),
        pluginKey = 'uvnVideoOoyalaPluginRatingsBug',
        console = root.console || { log: function () {
        } },

        template = uvn.JST ? uvn.JST['video/ooyala/plugin/ratingsbug'] : null,

        ratingsSourceNetworks = [ /univision/i, /unimas/i ],

        bugDisplayDurationMs = 15 * 1000,

        ratingsBugWidthRatio = 200 / 1030,

        ratingsBugFontWidthToHeight = 4 / 3,

        pluginRegistered = false,

        /**
         * @constructor
         * @type {uvn.video.ooyala.plugin.RatingsBug}
         */
        ratingsBug = plugin.RatingsBug = function (mb, id) {
            this.mb = mb;
            this.id = id;
            this.firstPlay = true;

            // bind our handlers to `this` and hold onto their bound reference to
            // unbind when player is destroyed.
            var handlers = this.handlers || (this.handlers = {
                playerCreated: $.proxy(this.onPlayerCreated, this),
                metadataFetched: $.proxy(this.onMetadataFetched, this),
                playing: $.proxy(this.onPlaying, this),
                resize: $.proxy(this.onPlayerResize, this)
            });

            mb.subscribe(OO.EVENTS.PLAYER_CREATED, id, handlers.playerCreated);
            mb.subscribe(OO.EVENTS.METADATA_FETCHED, id, handlers.metadataFetched);
            mb.subscribe(OO.EVENTS.PLAYING, id, handlers.playing);
            $(window).on('resize',handlers.resize);
        },

        proto = {
            /**
             * Hides the bug.
             */
            hideBug: function () {
                var me = this;
                this.$ratingsBug.fadeOut(function () {
                    $(window).off('resize', me.handlers.resize);
                });
            },
            /**
             * Called when player is created.
             * @param event {string} event name.
             * @param elementId {string} element id.
             * @param params {object} params passed to create player function.
             */
            onPlayerCreated: function (event, elementId, params) {
                this.$playerRoot = $('#' + elementId);
            },
            /**
             * Handles resizing of the ratings bug when the player is resized.
             */
            onPlayerResize: function () {
                var $ratingsBug = this.$ratingsBug,
                    $playerRoot = this.$playerRoot,
                    width = $playerRoot.width() * ratingsBugWidthRatio,
                    height = width / ratingsBugFontWidthToHeight,
                    ratios = this.fontRatios;
                if ($ratingsBug && $ratingsBug.is(":visible")) {
                    $ratingsBug.width(width);
                    $ratingsBug.height(height);
                    $('.head', $ratingsBug).css('font-size', Math.ceil(height * ratios.head));
                    $('.body', $ratingsBug).css({
                        'font-size': Math.ceil(height * ratios.body),
                        'line-height': Math.ceil(2 / 3 * height * ratios.body) + 'px'
                    });
                    $('.foot', $ratingsBug).css('font-size', Math.ceil(height * ratios.foot));
                }
            },
            /**
             * Event handler for the `OO.EVENTS.PLAYING` player event.  This implementation displays the
             * ratings bug iff it's the first play.
             */
            onPlaying: function () {
                if (this.firstPlay) {
                    this.firstPlay = false;
                    this.showBug();
                    setTimeout($.proxy(this.hideBug, this), bugDisplayDurationMs);
                }
            },
            /**
             * Called when metadata payload is received from backlot.
             * @param event {string} `metadataFetched`
             * @param metadata {object} asset metadata.
             */
            onMetadataFetched: function (event, metadata) {
                this.assetMetadata = metadata;
                window.ASSET = metadata;
            },
            /**
             * Renders the ratings bug.
             * @returns {jQuery} ratings bug el.
             */
            renderBug: function () {
                var meta = this.assetMetadata,
                    base = meta ? meta.base : {},
                    source = base.source,
                    tvRating = (base.tvrating || '').split('-'),
                    subRating = base.subRating || '',
                    templateVars = {};

                if (this.shouldDisplayBug(source)) {
                    // makes sure a valid tv rating was passed.
                    if (tvRating.length === 2) {
                        templateVars = {
                            head: tvRating[0],
                            body: tvRating[1]
                        };
                        if (subRating) {
                            templateVars.foot = subRating.replace(/,/g, '');
                        }
                        var $ratingsBug = this.$ratingsBug,
                            ratingsHtml = template(templateVars), height;
                        if (!$ratingsBug) {
                            $ratingsBug = this.$ratingsBug = $(ratingsHtml).appendTo($('.oo_controls_wrap', this.$playerRoot));
                            height = $ratingsBug.height();
                            this.fontRatios = {
                                head: parseInt($('.head', $ratingsBug).css('font-size')) / height,
                                body: parseInt($('.body', $ratingsBug).css('font-size')) / height,
                                foot: parseInt($('.foot', $ratingsBug).css('font-size')) / height
                            };
                            this.onPlayerResize();
                            $ratingsBug.hide();
                        }
                        else {
                            $ratingsBug.html(ratingsHtml);
                        }
                    }
                    else {
                        console.log('ERROR: invalid rating received from backlot: %s -- ratings bug will not be displayed.', base.tvRating);
                    }
                }
                else {
                    // set to a 'safe' value so that our plugin will not throw errors when the bug is disabled.
                    this.$ratingsBug = $('<div></div>');
                }
                return this.$ratingsBug;
            },
            /**
             * Checks whether ratings bug should be displayed for the currently playing asset.
             * @param source {string} source ( typically the network ).
             * @returns {boolean} true if ratings bug should be displayed, false otherwise.
             */
            shouldDisplayBug: function (source) {
                var count = ratingsSourceNetworks.length;
                while (--count > -1) {
                    if (source.match(ratingsSourceNetworks[count])) {
                        return true;
                    }
                }
                return false;
            },
            /**
             * Displays the ratings bug.
             */
            showBug: function () {
                var $ratingsBug = this.$ratingsBug || this.renderBug();
                $ratingsBug.show();
                this.onPlayerResize();
                $ratingsBug.hide();
                $ratingsBug.fadeIn();
            }
        },

        initialized = false;

    /**
     * Initializes the plugin, must be called after Ooyala player script is loaded ( `OO` must be defined ).
     */
    ratingsBug.init = function () {
        if (!initialized) {
            // safely init via top-level scoped OO.
            OO = OO || root.OO;
            if (!OO) {
                throw new Error("OO namespace does not exist; this is an Ooyala plugin and must be loaded *after* the core Ooyala framework.");
            }
            // use .ready to do anything.
            OO.ready(function () {
                $ = OO.$ || $ || root.jQuery;
                // the.package.name --> thePluginId
                OO.plugin(pluginKey, function (OO, $, _, W) {
                    return ratingsBug;
                });
            });
            // init complete
            initialized = true;
        }
    };

    // apply the methods to the prototype.
    uvn.extend(ratingsBug.prototype, proto);

}).call(this);

