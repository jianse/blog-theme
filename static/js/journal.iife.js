(function (vue) {
  'use strict';

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto$1.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var script$2 = vue.defineComponent({
    name: 'el-collapse-transition',
    data() {
      return {
        on: {
          beforeEnter(el) {
            el.classList.add('collapse-transition');
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          },

          enter(el) {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
              el.style.height = el.scrollHeight + 'px';
              el.style.paddingTop = el.dataset.oldPaddingTop;
              el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
              el.style.height = '';
              el.style.paddingTop = el.dataset.oldPaddingTop;
              el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
          },

          afterEnter(el) {
            // for safari: remove class then reset height is necessary
            el.classList.remove('collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
          },

          beforeLeave(el) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;
            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
          },

          leave(el) {
            if (el.scrollHeight !== 0) {
              // for safari: add class after set height, or it will jump to zero height suddenly, weired
              el.classList.add('collapse-transition');
              el.style.height = 0;
              el.style.paddingTop = 0;
              el.style.paddingBottom = 0;
            }
          },

          afterLeave(el) {
            el.classList.remove('collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          }
        }
      }
    },

  });

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.Transition, vue.toHandlers(_ctx.on), {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3 /* FORWARDED */
    }, 16 /* FULL_PROPS */))
  }

  script$2.render = render$2;
  script$2.__file = "src/js/el-collapse-transition.vue";

  var script$1 = vue.defineComponent({
    name: "blog-toc-ul",
    components: {
      'el-collapse-transition': script$2
    },
    props: {
      listData: Object,
    },
    methods: {
      btnClick(e) {
        e.show = !e.show;
      },
    },
  });

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-1fcdf19a");

  vue.pushScopeId("data-v-1fcdf19a");
  const _hoisted_1$1 = { class: "toc-collapse" };
  const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("i", { class: "material-icons" }, "chevron_right", -1 /* HOISTED */);
  vue.popScopeId();

  const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
    const _component_blog_toc_ul = vue.resolveComponent("blog-toc-ul", true);
    const _component_el_collapse_transition = vue.resolveComponent("el-collapse-transition");

    return (vue.openBlock(), vue.createBlock(_component_el_collapse_transition, null, {
      default: _withId$1(() => [
        vue.withDirectives(vue.createVNode("div", null, [
          vue.createVNode("ul", _hoisted_1$1, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.listData.items, (item) => {
              return (vue.openBlock(), vue.createBlock("li", {
                key: item.anchor,
                "data-toc-toggle": !!item.children
              }, [
                (item.children)
                  ? (vue.openBlock(), vue.createBlock("span", {
                      key: 0,
                      onClick: $event => (_ctx.btnClick(item.children)),
                      class: ["btn-toc-collapse", {'sub-toc-close':!item.children.show,'sub-toc-open':item.children.show}]
                    }, [
                      _hoisted_2$1
                    ], 10 /* CLASS, PROPS */, ["onClick"]))
                  : vue.createCommentVNode("v-if", true),
                vue.createVNode("span", null, [
                  vue.createVNode("a", {
                    href: item.anchor,
                    class: {'toc-active': item.active},
                    textContent: vue.toDisplayString(item.label)
                  }, null, 10 /* CLASS, PROPS */, ["href", "textContent"])
                ]),
                (item.children)
                  ? (vue.openBlock(), vue.createBlock(_component_blog_toc_ul, {
                      key: 1,
                      "list-data": item.children
                    }, null, 8 /* PROPS */, ["list-data"]))
                  : vue.createCommentVNode("v-if", true)
              ], 8 /* PROPS */, ["data-toc-toggle"]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, _ctx.listData.show]
        ])
      ]),
      _: 1 /* STABLE */
    }))
  });

  script$1.render = render$1;
  script$1.__scopeId = "data-v-1fcdf19a";
  script$1.__file = "src/js/blog-toc-ul.vue";

  var script = vue.defineComponent({
    name: "blog-toc",
    components: {
      "blog-toc-ul": script$1
    },
    props: {
      tocList: {
        type: Object,
        require: true
      },
      activeAnchor: String,
      autoCollapse: Boolean
    },
    setup(props, context) {

      let treeContains = (tree, anchor) => {
        for (const item of tree.items) {
          if (item.anchor === anchor) {
            return true;
          }
          if (item.children) {
            if (treeContains(item.children, anchor)) {
              return true;
            }
          }
        }
        return false;
      };

      let toggleCollapse = (tree, anchor) => {
        let res = false;
        tree.items.forEach((item) => {
          if (item.children) {
            let temp = toggleCollapse(item.children, anchor);
            res = res || temp;
          }
          item.active = (item.anchor === anchor);
          res = res || item.active;
        });
        tree.show = res;
        return res;
      };

      const listRef = vue.computed(() => {
        let hasA = treeContains(props.tocList, props.activeAnchor);
        if (hasA) {
          toggleCollapse(props.tocList, props.activeAnchor);
        }
        return props.tocList;
      });

      return {
        listRef
      };
    }
  });

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-2cbf69da");

  vue.pushScopeId("data-v-2cbf69da");
  const _hoisted_1 = { class: "toc" };
  const _hoisted_2 = { class: "toc-content" };
  const _hoisted_3 = {
    key: 0,
    class: "toc-title"
  };
  vue.popScopeId();

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    const _component_blog_toc_ul = vue.resolveComponent("blog-toc-ul");

    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createVNode("div", _hoisted_2, [
        (_ctx.tocList)
          ? (vue.openBlock(), vue.createBlock("div", _hoisted_3, "- 目录 -"))
          : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_blog_toc_ul, { "list-data": _ctx.listRef }, null, 8 /* PROPS */, ["list-data"])
      ])
    ]))
  });

  script.render = render;
  script.__scopeId = "data-v-2cbf69da";
  script.__file = "src/js/blog-toc.vue";

  /*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var isSupported = function isSupported(node) {
    return node.tagName === 'IMG';
  };

  /* eslint-disable-next-line no-prototype-builtins */
  var isNodeList = function isNodeList(selector) {
    return NodeList.prototype.isPrototypeOf(selector);
  };

  var isNode = function isNode(selector) {
    return selector && selector.nodeType === 1;
  };

  var isSvg = function isSvg(image) {
    var source = image.currentSrc || image.src;
    return source.substr(-4).toLowerCase() === '.svg';
  };

  var getImagesFromSelector = function getImagesFromSelector(selector) {
    try {
      if (Array.isArray(selector)) {
        return selector.filter(isSupported);
      }

      if (isNodeList(selector)) {
        // Do not use spread operator or Array.from() for IE support
        return [].slice.call(selector).filter(isSupported);
      }

      if (isNode(selector)) {
        return [selector].filter(isSupported);
      }

      if (typeof selector === 'string') {
        // Do not use spread operator or Array.from() for IE support
        return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
      }

      return [];
    } catch (err) {
      throw new TypeError('The provided selector is invalid.\n' + 'Expects a CSS selector, a Node element, a NodeList or an array.\n' + 'See: https://github.com/francoischalifour/medium-zoom');
    }
  };

  var createOverlay = function createOverlay(background) {
    var overlay = document.createElement('div');
    overlay.classList.add('medium-zoom-overlay');
    overlay.style.background = background;

    return overlay;
  };

  var cloneTarget = function cloneTarget(template) {
    var _template$getBounding = template.getBoundingClientRect(),
        top = _template$getBounding.top,
        left = _template$getBounding.left,
        width = _template$getBounding.width,
        height = _template$getBounding.height;

    var clone = template.cloneNode();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    clone.removeAttribute('id');
    clone.style.position = 'absolute';
    clone.style.top = top + scrollTop + 'px';
    clone.style.left = left + scrollLeft + 'px';
    clone.style.width = width + 'px';
    clone.style.height = height + 'px';
    clone.style.transform = '';

    return clone;
  };

  var createCustomEvent = function createCustomEvent(type, params) {
    var eventParams = _extends({
      bubbles: false,
      cancelable: false,
      detail: undefined
    }, params);

    if (typeof window.CustomEvent === 'function') {
      return new CustomEvent(type, eventParams);
    }

    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);

    return customEvent;
  };

  var mediumZoom = function mediumZoom(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    /**
     * Ensure the compatibility with IE11 if no Promise polyfill are used.
     */
    var Promise = window.Promise || function Promise(fn) {
      function noop() {}
      fn(noop, noop);
    };

    var _handleClick = function _handleClick(event) {
      var target = event.target;


      if (target === overlay) {
        close();
        return;
      }

      if (images.indexOf(target) === -1) {
        return;
      }

      toggle({ target: target });
    };

    var _handleScroll = function _handleScroll() {
      if (isAnimating || !active.original) {
        return;
      }

      var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
        setTimeout(close, 150);
      }
    };

    var _handleKeyUp = function _handleKeyUp(event) {
      var key = event.key || event.keyCode;

      // Close if escape key is pressed
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        close();
      }
    };

    var update = function update() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var newOptions = options;

      if (options.background) {
        overlay.style.background = options.background;
      }

      if (options.container && options.container instanceof Object) {
        newOptions.container = _extends({}, zoomOptions.container, options.container);
      }

      if (options.template) {
        var template = isNode(options.template) ? options.template : document.querySelector(options.template);

        newOptions.template = template;
      }

      zoomOptions = _extends({}, zoomOptions, newOptions);

      images.forEach(function (image) {
        image.dispatchEvent(createCustomEvent('medium-zoom:update', {
          detail: { zoom: zoom }
        }));
      });

      return zoom;
    };

    var clone = function clone() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return mediumZoom(_extends({}, zoomOptions, options));
    };

    var attach = function attach() {
      for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
        selectors[_key] = arguments[_key];
      }

      var newImages = selectors.reduce(function (imagesAccumulator, currentSelector) {
        return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
      }, []);

      newImages.filter(function (newImage) {
        return images.indexOf(newImage) === -1;
      }).forEach(function (newImage) {
        images.push(newImage);
        newImage.classList.add('medium-zoom-image');
      });

      eventListeners.forEach(function (_ref) {
        var type = _ref.type,
            listener = _ref.listener,
            options = _ref.options;

        newImages.forEach(function (image) {
          image.addEventListener(type, listener, options);
        });
      });

      return zoom;
    };

    var detach = function detach() {
      for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        selectors[_key2] = arguments[_key2];
      }

      if (active.zoomed) {
        close();
      }

      var imagesToDetach = selectors.length > 0 ? selectors.reduce(function (imagesAccumulator, currentSelector) {
        return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
      }, []) : images;

      imagesToDetach.forEach(function (image) {
        image.classList.remove('medium-zoom-image');
        image.dispatchEvent(createCustomEvent('medium-zoom:detach', {
          detail: { zoom: zoom }
        }));
      });

      images = images.filter(function (image) {
        return imagesToDetach.indexOf(image) === -1;
      });

      return zoom;
    };

    var on = function on(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      images.forEach(function (image) {
        image.addEventListener('medium-zoom:' + type, listener, options);
      });

      eventListeners.push({ type: 'medium-zoom:' + type, listener: listener, options: options });

      return zoom;
    };

    var off = function off(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      images.forEach(function (image) {
        image.removeEventListener('medium-zoom:' + type, listener, options);
      });

      eventListeners = eventListeners.filter(function (eventListener) {
        return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());
      });

      return zoom;
    };

    var open = function open() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          target = _ref2.target;

      var _animate = function _animate() {
        var container = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        var viewportWidth = void 0;
        var viewportHeight = void 0;

        if (zoomOptions.container) {
          if (zoomOptions.container instanceof Object) {
            // The container is given as an object with properties like width, height, left, top
            container = _extends({}, container, zoomOptions.container);

            // We need to adjust custom options like container.right or container.bottom
            viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
            viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
          } else {
            // The container is given as an element
            var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);

            var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(),
                _width = _zoomContainer$getBou.width,
                _height = _zoomContainer$getBou.height,
                _left = _zoomContainer$getBou.left,
                _top = _zoomContainer$getBou.top;

            container = _extends({}, container, {
              width: _width,
              height: _height,
              left: _left,
              top: _top
            });
          }
        }

        viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
        viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;

        var zoomTarget = active.zoomedHd || active.original;
        var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
        var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;

        var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(),
            top = _zoomTarget$getBoundi.top,
            left = _zoomTarget$getBoundi.left,
            width = _zoomTarget$getBoundi.width,
            height = _zoomTarget$getBoundi.height;

        var scaleX = Math.min(naturalWidth, viewportWidth) / width;
        var scaleY = Math.min(naturalHeight, viewportHeight) / height;
        var scale = Math.min(scaleX, scaleY);
        var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
        var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
        var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';

        active.zoomed.style.transform = transform;

        if (active.zoomedHd) {
          active.zoomedHd.style.transform = transform;
        }
      };

      return new Promise(function (resolve) {
        if (target && images.indexOf(target) === -1) {
          resolve(zoom);
          return;
        }

        var _handleOpenEnd = function _handleOpenEnd() {
          isAnimating = false;
          active.zoomed.removeEventListener('transitionend', _handleOpenEnd);
          active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
            detail: { zoom: zoom }
          }));

          resolve(zoom);
        };

        if (active.zoomed) {
          resolve(zoom);
          return;
        }

        if (target) {
          // The zoom was triggered manually via a click
          active.original = target;
        } else if (images.length > 0) {
  var _images = images;
          active.original = _images[0];
        } else {
          resolve(zoom);
          return;
        }

        active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
          detail: { zoom: zoom }
        }));

        scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        isAnimating = true;
        active.zoomed = cloneTarget(active.original);

        document.body.appendChild(overlay);

        if (zoomOptions.template) {
          var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
          active.template = document.createElement('div');
          active.template.appendChild(template.content.cloneNode(true));

          document.body.appendChild(active.template);
        }

        document.body.appendChild(active.zoomed);

        window.requestAnimationFrame(function () {
          document.body.classList.add('medium-zoom--opened');
        });

        active.original.classList.add('medium-zoom-image--hidden');
        active.zoomed.classList.add('medium-zoom-image--opened');

        active.zoomed.addEventListener('click', close);
        active.zoomed.addEventListener('transitionend', _handleOpenEnd);

        if (active.original.getAttribute('data-zoom-src')) {
          active.zoomedHd = active.zoomed.cloneNode();

          // Reset the `scrset` property or the HD image won't load.
          active.zoomedHd.removeAttribute('srcset');
          active.zoomedHd.removeAttribute('sizes');

          active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');

          active.zoomedHd.onerror = function () {
            clearInterval(getZoomTargetSize);
            console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);
            active.zoomedHd = null;
            _animate();
          };

          // We need to access the natural size of the full HD
          // target as fast as possible to compute the animation.
          var getZoomTargetSize = setInterval(function () {
            if ( active.zoomedHd.complete) {
              clearInterval(getZoomTargetSize);
              active.zoomedHd.classList.add('medium-zoom-image--opened');
              active.zoomedHd.addEventListener('click', close);
              document.body.appendChild(active.zoomedHd);
              _animate();
            }
          }, 10);
        } else if (active.original.hasAttribute('srcset')) {
          // If an image has a `srcset` attribuet, we don't know the dimensions of the
          // zoomed (HD) image (like when `data-zoom-src` is specified).
          // Therefore the approach is quite similar.
          active.zoomedHd = active.zoomed.cloneNode();

          // Resetting the sizes attribute tells the browser to load the
          // image best fitting the current viewport size, respecting the `srcset`.
          active.zoomedHd.removeAttribute('sizes');

          // In Firefox, the `loading` attribute needs to be set to `eager` (default
          // value) for the load event to be fired.
          active.zoomedHd.removeAttribute('loading');

          // Wait for the load event of the hd image. This will fire if the image
          // is already cached.
          var loadEventListener = active.zoomedHd.addEventListener('load', function () {
            active.zoomedHd.removeEventListener('load', loadEventListener);
            active.zoomedHd.classList.add('medium-zoom-image--opened');
            active.zoomedHd.addEventListener('click', close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          });
        } else {
          _animate();
        }
      });
    };

    var close = function close() {
      return new Promise(function (resolve) {
        if (isAnimating || !active.original) {
          resolve(zoom);
          return;
        }

        var _handleCloseEnd = function _handleCloseEnd() {
          active.original.classList.remove('medium-zoom-image--hidden');
          document.body.removeChild(active.zoomed);
          if (active.zoomedHd) {
            document.body.removeChild(active.zoomedHd);
          }
          document.body.removeChild(overlay);
          active.zoomed.classList.remove('medium-zoom-image--opened');
          if (active.template) {
            document.body.removeChild(active.template);
          }

          isAnimating = false;
          active.zoomed.removeEventListener('transitionend', _handleCloseEnd);

          active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
            detail: { zoom: zoom }
          }));

          active.original = null;
          active.zoomed = null;
          active.zoomedHd = null;
          active.template = null;

          resolve(zoom);
        };

        isAnimating = true;
        document.body.classList.remove('medium-zoom--opened');
        active.zoomed.style.transform = '';

        if (active.zoomedHd) {
          active.zoomedHd.style.transform = '';
        }

        // Fade out the template so it's not too abrupt
        if (active.template) {
          active.template.style.transition = 'opacity 150ms';
          active.template.style.opacity = 0;
        }

        active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
          detail: { zoom: zoom }
        }));

        active.zoomed.addEventListener('transitionend', _handleCloseEnd);
      });
    };

    var toggle = function toggle() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          target = _ref3.target;

      if (active.original) {
        return close();
      }

      return open({ target: target });
    };

    var getOptions = function getOptions() {
      return zoomOptions;
    };

    var getImages = function getImages() {
      return images;
    };

    var getZoomedImage = function getZoomedImage() {
      return active.original;
    };

    var images = [];
    var eventListeners = [];
    var isAnimating = false;
    var scrollTop = 0;
    var zoomOptions = options;
    var active = {
      original: null,
      zoomed: null,
      zoomedHd: null,
      template: null

      // If the selector is omitted, it's replaced by the options
    };if (Object.prototype.toString.call(selector) === '[object Object]') {
      zoomOptions = selector;
    } else if (selector || typeof selector === 'string' // to process empty string as a selector
    ) {
        attach(selector);
      }

    // Apply the default option values
    zoomOptions = _extends({
      margin: 0,
      background: '#fff',
      scrollOffset: 40,
      container: null,
      template: null
    }, zoomOptions);

    var overlay = createOverlay(zoomOptions.background);

    document.addEventListener('click', _handleClick);
    document.addEventListener('keyup', _handleKeyUp);
    document.addEventListener('scroll', _handleScroll);
    window.addEventListener('resize', close);

    var zoom = {
      open: open,
      close: close,
      toggle: toggle,
      update: update,
      clone: clone,
      attach: attach,
      detach: detach,
      on: on,
      off: off,
      getOptions: getOptions,
      getImages: getImages,
      getZoomedImage: getZoomedImage
    };

    return zoom;
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
  styleInject(css);

  const app = vue.createApp({
    data() {
      return {
        scrollY: 0,
        navOpacity: 0,
        isDrawerOpen: false,
        mounted: false,
        isDarkMode: false,
        zoom: null,
        anchors: [],
        tocCollapses: null,
        tocEl: null,
        tocData: null,
        hasToc: false,
        isMobile: false,
        activeAnchor: ''
      }
    },
    methods: {
      sgn(t, x) {
        let k = 1. / (1. - 2 * t);
        if (x <= t) return 0;
        else if (x >= 1 - t) return 1;
        else {
          return k * (x - t);
        }
      },
      "handleScroll": debounce(function f() {
        this.scrollY = window.scrollY;
        this.navOpacity = this.sgn(.0, Math.min(1, Math.max(0, window.scrollY / (this.pageHeadHeight() - this.navBarHeight() * 0.8))));
        const {navBackground, navTitle} = this.$refs;

        if (this.navOpacity >= 1) {
          navBackground.style.opacity = "1";
          navTitle.style.opacity = 1;
        } else {
          navBackground.style.opacity = "0";
          navTitle.style.opacity = "0";
        }
        this.activeAnchor = this.tocSpy();
      }, 16),
      tocSpy() {
        if (this.anchors.length === 0) {
          return ""
        }
        let currentTop = window.pageYOffset;
        let lastAnchor = null;
        this.anchors.forEach(el => {
          let elTop = el.offsetTop;
          if (currentTop + el.scrollHeight >= elTop) {
            lastAnchor = el.id;
          }
        });
        if (!lastAnchor) {
          return ""
        }
        return '#' + lastAnchor

      },
      initToc() {
        this.hasToc = true;
        this.tocData = window.tocObj;
        this.anchors = document.querySelectorAll(".post-body h1,h2,h3,h4,h5,h6");
        let e = window.matchMedia('screen and (max-width:1020px');
        e.addEventListener('change', (e) => {
          this.isMobile = e.matches;
        });
        this.isMobile = e.matches;
      },
      handleResize() {
        const {extraContainer, streamContainer} = this.$refs;
        extraContainer.style.left = (streamContainer.offsetWidth - extraContainer.offsetWidth) + 'px';
      },
      navBarHeight() {
        return this.$refs.navBar.offsetHeight;
      },
      pageHeadHeight() {
        return this.$refs.pageHead.offsetHeight;
      },
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
        document.getElementsByTagName('html')[0].style.overflow = this.isDrawerOpen ? 'hidden' : 'unset';
      },
      switchTheme(themeName) {
        this.isDarkMode = themeName !== "light";
        window.localStorage.setItem("theme", themeName);
        window.document.documentElement.setAttribute("data-theme", themeName);
      },
      updateZoom() {
        if (mediumZoom) {
          setTimeout(() => {
            if (this.zoom) {
              this.zoom.detach();

            }
            this.zoom = mediumZoom('.post-body img', {});
          }, 1000);
        }

      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
      window._nonDesktop = function () {
        let check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };
      let theme = window.localStorage.getItem("theme");
      if (theme) {
        window.document.documentElement.setAttribute("data-theme", theme);
        if (theme === "dark") {
          this.isDarkMode = true;
        }
      }
    },
    mounted() {
      let tocObj = window.tocObj || undefined;
      if (tocObj) {
        this.initToc();
      }

      this.updateZoom();
      this.handleScroll();
      this.handleResize();
      this.mounted = true;

      if (document.body.dataset.enableValine === "true") {
        new Valine({
          el: '#vcomments',
          appId: document.body.dataset.valineAppid,
          appKey: document.body.dataset.valineAppkey,
          requiredFields: ['nick', 'mail'],
          enableQQ: true,
          recordIP: true,
        });
      }
    },
    updated() {
      this.updateZoom();
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  });
  app.component(script.name, script);

  app.mount('#app');

}(Vue));
