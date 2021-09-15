(function (vue) {
  'use strict';

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$2 = typeof global == 'object' && global && global.Object === Object && global;

  var freeGlobal$3 = freeGlobal$2;

  /** Detect free variable `self`. */
  var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$9 = freeGlobal$3 || freeSelf$1 || Function('return this')();

  var root$a = root$9;

  /** Built-in value references. */
  var Symbol$5 = root$a.Symbol;

  var Symbol$6 = Symbol$5;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$3 = objectProto$5.toString;

  /** Built-in value references. */
  var symToStringTag$3 = Symbol$6 ? Symbol$6.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$2(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$3),
        tag = value[symToStringTag$3];

    try {
      value[symToStringTag$3] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$3.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$3] = tag;
      } else {
        delete value[symToStringTag$3];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$2 = objectProto$4.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$3(value) {
    return nativeObjectToString$2.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag$1 = '[object Null]',
      undefinedTag$1 = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$2 = Symbol$6 ? Symbol$6.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$4(value) {
    if (value == null) {
      return value === undefined ? undefinedTag$1 : nullTag$1;
    }
    return (symToStringTag$2 && symToStringTag$2 in Object(value))
      ? getRawTag$2(value)
      : objectToString$3(value);
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
  function isObjectLike$3(value) {
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
      (isObjectLike$3(value) && baseGetTag$4(value) == symbolTag);
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
  function isObject$3(value) {
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
    if (isObject$3(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$3(other) ? (other + '') : other;
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
    return root$a.Date.now();
  };

  var now$1 = now;

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
  function debounce$1(func, wait, options) {
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
    if (isObject$3(options)) {
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
      var time = now$1();
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
      return timerId === undefined ? result : trailingEdge(now$1());
    }

    function debounced() {
      var time = now$1(),
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

  var script$6 = vue.defineComponent({
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

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.Transition, vue.toHandlers(_ctx.on), {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3 /* FORWARDED */
    }, 16 /* FULL_PROPS */))
  }

  script$6.render = render$4;
  script$6.__file = "src/js/el-collapse-transition.vue";

  var script$5 = vue.defineComponent({
    name: "blog-toc-ul",
    components: {
      'el-collapse-transition': script$6
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

  const _hoisted_1$3 = { class: "toc-collapse" };
  const _hoisted_2$3 = ["data-toc-toggle"];
  const _hoisted_3$3 = ["onClick"];
  const _hoisted_4$2 = /*#__PURE__*/vue.createElementVNode("i", { class: "material-icons" }, "chevron_right", -1 /* HOISTED */);
  const _hoisted_5$2 = [
    _hoisted_4$2
  ];
  const _hoisted_6$2 = ["href", "textContent"];

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_blog_toc_ul = vue.resolveComponent("blog-toc-ul", true);
    const _component_el_collapse_transition = vue.resolveComponent("el-collapse-transition");

    return (vue.openBlock(), vue.createBlock(_component_el_collapse_transition, null, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", null, [
          vue.createElementVNode("ul", _hoisted_1$3, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.listData.items, (item) => {
              return (vue.openBlock(), vue.createElementBlock("li", {
                key: item.anchor,
                "data-toc-toggle": !!item.children
              }, [
                (item.children)
                  ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      onClick: $event => (_ctx.btnClick(item.children)),
                      class: vue.normalizeClass(["btn-toc-collapse", {'sub-toc-close':!item.children.show,'sub-toc-open':item.children.show}])
                    }, _hoisted_5$2, 10 /* CLASS, PROPS */, _hoisted_3$3))
                  : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("span", null, [
                  vue.createElementVNode("a", {
                    href: item.anchor,
                    class: vue.normalizeClass({'toc-active': item.active}),
                    textContent: vue.toDisplayString(item.label)
                  }, null, 10 /* CLASS, PROPS */, _hoisted_6$2)
                ]),
                (item.children)
                  ? (vue.openBlock(), vue.createBlock(_component_blog_toc_ul, {
                      key: 1,
                      "list-data": item.children
                    }, null, 8 /* PROPS */, ["list-data"]))
                  : vue.createCommentVNode("v-if", true)
              ], 8 /* PROPS */, _hoisted_2$3))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, _ctx.listData.show]
        ])
      ]),
      _: 1 /* STABLE */
    }))
  }

  script$5.render = render$3;
  script$5.__file = "src/js/blog-toc-ul.vue";

  var script$4 = vue.defineComponent({
    name: "blog-toc",
    components: {
      "blog-toc-ul": script$5
    },
    props: {
      tocList: {
        type: Object,
        require: true
      },
      activeAnchor: String,
      autoCollapse: Boolean
    },
    setup(props) {

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

  const _hoisted_1$2 = { class: "toc" };
  const _hoisted_2$2 = { class: "toc-content" };
  const _hoisted_3$2 = {
    key: 0,
    class: "toc-title"
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_blog_toc_ul = vue.resolveComponent("blog-toc-ul");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
      vue.createElementVNode("div", _hoisted_2$2, [
        (_ctx.tocList)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$2, "- 目录 -"))
          : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_blog_toc_ul, { "list-data": _ctx.listRef }, null, 8 /* PROPS */, ["list-data"])
      ])
    ]))
  }

  script$4.render = render$2;
  script$4.__file = "src/js/blog-toc.vue";

  let $ELEMENT = {};
  const getConfig = (key) => {
      return $ELEMENT[key];
  };

  class ElementPlusError extends Error {
      constructor(m) {
          super(m);
          this.name = 'ElementPlusError';
      }
  }
  function throwError(scope, m) {
      throw new ElementPlusError(`[${scope}] ${m}`);
  }
  function debugWarn(scope, message) {
      {
          // eslint-disable-next-line no-console
          console.warn(new ElementPlusError(`[${scope}] ${message}`));
      }
  }

  var isServer = typeof window === 'undefined';

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   * IMPORTANT: all calls of this function must be prefixed with
   * \/\*#\_\_PURE\_\_\*\/
   * So that rollup can tree-shake them if necessary.
   */
  Object.freeze({})
      ;
  Object.freeze([]) ;
  const NOOP = () => { };
  const isArray = Array.isArray;
  const isString = (val) => typeof val === 'string';
  const objectToString$2 = Object.prototype.toString;
  const toTypeString = (value) => objectToString$2.call(value);
  const toRawType = (value) => {
      // extract "RawType" from strings like "[object RawType]"
      return toTypeString(value).slice(8, -1);
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$8;

  var root$7 = _root;

  /** Built-in value references. */
  var Symbol$4 = root$7.Symbol;

  var _Symbol = Symbol$4;

  var Symbol$3 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$3.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$2.call(value, symToStringTag$1),
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

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$2.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$2 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$3(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$3;

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

  function isObject$2(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$2;

  var baseGetTag$2 = _baseGetTag,
      isObject$1 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$1(value) {
    if (!isObject$1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$2(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$1;

  var root$6 = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__'];

  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource$2;

  var isFunction = isFunction_1,
      isMasked = _isMasked,
      isObject = isObject_1,
      toSource$1 = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$1 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$6(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$6;

  var getNative$5 = _getNative,
      root$5 = _root;

  /* Built-in method references that are verified to be native. */
  var Map$2 = getNative$5(root$5, 'Map');

  var _Map = Map$2;

  var getNative$4 = _getNative;

  /* Built-in method references that are verified to be native. */
  getNative$4(Object, 'create');

  var root$4 = _root;

  /** Built-in value references. */
  root$4.Uint8Array;

  var Symbol$1 = _Symbol;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
      symbolProto ? symbolProto.valueOf : undefined;

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

  function isObjectLike$2(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$2;

  var baseGetTag$1 = _baseGetTag,
      isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$1(value) && baseGetTag$1(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isBuffer = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
  }(isBuffer, isBuffer.exports));

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  }(_nodeUtil, _nodeUtil.exports));

  var nodeUtil = _nodeUtil.exports;

  /* Node.js helper references. */
  nodeUtil && nodeUtil.isTypedArray;

  var getNative$3 = _getNative,
      root$3 = _root;

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$3(root$3, 'DataView');

  var _DataView = DataView$1;

  var getNative$2 = _getNative,
      root$2 = _root;

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$2(root$2, 'Promise');

  var _Promise = Promise$2;

  var getNative$1 = _getNative,
      root$1 = _root;

  /* Built-in method references that are verified to be native. */
  var Set$2 = getNative$1(root$1, 'Set');

  var _Set = Set$2;

  var getNative = _getNative,
      root = _root;

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root, 'WeakMap');

  var _WeakMap = WeakMap$1;

  var DataView = _DataView,
      Map$1 = _Map,
      Promise$1 = _Promise,
      Set$1 = _Set,
      WeakMap = _WeakMap,
      baseGetTag = _baseGetTag,
      toSource = _toSource;

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]';

  var dataViewTag = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map$1 && getTag(new Map$1) != mapTag) ||
      (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
      (Set$1 && getTag(new Set$1) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Generate random number in range [0, 1000]
   * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
   */
  const generateId = () => Math.floor(Math.random() * 10000);
  const isBool = (val) => typeof val === 'boolean';
  const isHTMLElement$1 = (val) => toRawType(val).startsWith('HTML');
  /**
   * Unwraps refed value
   * @param ref Refed value
   */
  function $(ref) {
      return ref.value;
  }

  /* istanbul ignore next */
  const trim = function (s) {
      return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  };
  /* istanbul ignore next */
  const on = function (element, event, handler, useCapture = false) {
      if (element && event && handler) {
          element === null || element === void 0 ? void 0 : element.addEventListener(event, handler, useCapture);
      }
  };
  /* istanbul ignore next */
  function hasClass(el, cls) {
      if (!el || !cls)
          return false;
      if (cls.indexOf(' ') !== -1)
          throw new Error('className should not contain space.');
      if (el.classList) {
          return el.classList.contains(cls);
      }
      else {
          return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }
  }
  /* istanbul ignore next */
  function addClass(el, cls) {
      if (!el)
          return;
      let curClass = el.className;
      const classes = (cls || '').split(' ');
      for (let i = 0, j = classes.length; i < j; i++) {
          const clsName = classes[i];
          if (!clsName)
              continue;
          if (el.classList) {
              el.classList.add(clsName);
          }
          else if (!hasClass(el, clsName)) {
              curClass += ' ' + clsName;
          }
      }
      if (!el.classList) {
          el.className = curClass;
      }
  }
  /* istanbul ignore next */
  function removeClass(el, cls) {
      if (!el || !cls)
          return;
      const classes = cls.split(' ');
      let curClass = ' ' + el.className + ' ';
      for (let i = 0, j = classes.length; i < j; i++) {
          const clsName = classes[i];
          if (!clsName)
              continue;
          if (el.classList) {
              el.classList.remove(clsName);
          }
          else if (hasClass(el, clsName)) {
              curClass = curClass.replace(' ' + clsName + ' ', ' ');
          }
      }
      if (!el.classList) {
          el.className = trim(curClass);
      }
  }
  const stop = (e) => e.stopPropagation();

  const EVENT_CODE = {
      tab: 'Tab',
      enter: 'Enter',
      space: 'Space',
      left: 'ArrowLeft',
      up: 'ArrowUp',
      right: 'ArrowRight',
      down: 'ArrowDown',
      esc: 'Escape',
      delete: 'Delete',
      backspace: 'Backspace',
  };

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var round$1 = Math.round;
  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (isHTMLElement(element) && includeScale) {
      var offsetHeight = element.offsetHeight;
      var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
      // Fallback to 1 in case both values are `0`

      if (offsetWidth > 0) {
        scaleX = rect.width / offsetWidth || 1;
      }

      if (offsetHeight > 0) {
        scaleY = rect.height / offsetHeight || 1;
      }
    }

    return {
      width: round$1(rect.width / scaleX),
      height: round$1(rect.height / scaleY),
      top: round$1(rect.top / scaleY),
      right: round$1(rect.right / scaleX),
      bottom: round$1(rect.bottom / scaleY),
      left: round$1(rect.left / scaleX),
      x: round$1(rect.left / scaleX),
      y: round$1(rect.top / scaleY)
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
      }

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

      if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;

      {
        console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return [].concat(args).reduce(function (p, c) {
      return p.replace(/%s/, c);
    }, str);
  }

  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function validateModifiers(modifiers) {
    modifiers.forEach(function (modifier) {
      [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }).forEach(function (key) {
        switch (key) {
          case 'name':
            if (typeof modifier.name !== 'string') {
              console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
            }

            break;

          case 'enabled':
            if (typeof modifier.enabled !== 'boolean') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
            }

            break;

          case 'phase':
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
            }

            break;

          case 'fn':
            if (typeof modifier.fn !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'effect':
            if (modifier.effect != null && typeof modifier.effect !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'requires':
            if (modifier.requires != null && !Array.isArray(modifier.requires)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
            }

            break;

          case 'requiresIfExists':
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
            }

            break;

          case 'options':
          case 'data':
            break;

          default:
            console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
              return "\"" + s + "\"";
            }).join(', ') + "; but \"" + key + "\" was provided.");
        }

        modifier.requires && modifier.requires.forEach(function (requirement) {
          if (modifiers.find(function (mod) {
            return mod.name === requirement;
          }) == null) {
            console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function (item) {
      var identifier = fn(item);

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
  var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function (_ref2) {
                var name = _ref2.name;
                return name === 'flip';
              });

              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
              }
            }

            var _getComputedStyle = getComputedStyle(popper),
                marginTop = _getComputedStyle.marginTop,
                marginRight = _getComputedStyle.marginRight,
                marginBottom = _getComputedStyle.marginBottom,
                marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer


            if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
            }
          }

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1;

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        {
          console.error(INVALID_ELEMENT_ERROR);
        }

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  const nodeList = new Map();
  let startClick;
  if (!isServer) {
      on(document, 'mousedown', (e) => (startClick = e));
      on(document, 'mouseup', (e) => {
          for (const handlers of nodeList.values()) {
              for (const { documentHandler } of handlers) {
                  documentHandler(e, startClick);
              }
          }
      });
  }
  function createDocumentHandler(el, binding) {
      let excludes = [];
      if (Array.isArray(binding.arg)) {
          excludes = binding.arg;
      }
      else if (binding.arg instanceof HTMLElement) {
          // due to current implementation on binding type is wrong the type casting is necessary here
          excludes.push(binding.arg);
      }
      return function (mouseup, mousedown) {
          const popperRef = binding.instance.popperRef;
          const mouseUpTarget = mouseup.target;
          const mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target;
          const isBound = !binding || !binding.instance;
          const isTargetExists = !mouseUpTarget || !mouseDownTarget;
          const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
          const isSelf = el === mouseUpTarget;
          const isTargetExcluded = (excludes.length &&
              excludes.some((item) => item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget))) ||
              (excludes.length && excludes.includes(mouseDownTarget));
          const isContainedByPopper = popperRef &&
              (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
          if (isBound ||
              isTargetExists ||
              isContainedByEl ||
              isSelf ||
              isTargetExcluded ||
              isContainedByPopper) {
              return;
          }
          binding.value(mouseup, mousedown);
      };
  }
  const ClickOutside = {
      beforeMount(el, binding) {
          // there could be multiple handlers on the element
          if (!nodeList.has(el)) {
              nodeList.set(el, []);
          }
          nodeList.get(el).push({
              documentHandler: createDocumentHandler(el, binding),
              bindingFn: binding.value,
          });
      },
      updated(el, binding) {
          if (!nodeList.has(el)) {
              nodeList.set(el, []);
          }
          const handlers = nodeList.get(el);
          const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
          const newHandler = {
              documentHandler: createDocumentHandler(el, binding),
              bindingFn: binding.value,
          };
          if (oldHandlerIndex >= 0) {
              // replace the old handler to the new handler
              handlers.splice(oldHandlerIndex, 1, newHandler);
          }
          else {
              handlers.push(newHandler);
          }
      },
      unmounted(el) {
          // remove all listeners when a component unmounted
          nodeList.delete(el);
      },
  };
  var ClickOutside$1 = ClickOutside;

  const TEMPLATE = 'template';
  var PatchFlags;
  (function (PatchFlags) {
      PatchFlags[PatchFlags["TEXT"] = 1] = "TEXT";
      PatchFlags[PatchFlags["CLASS"] = 2] = "CLASS";
      PatchFlags[PatchFlags["STYLE"] = 4] = "STYLE";
      PatchFlags[PatchFlags["PROPS"] = 8] = "PROPS";
      PatchFlags[PatchFlags["FULL_PROPS"] = 16] = "FULL_PROPS";
      PatchFlags[PatchFlags["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
      PatchFlags[PatchFlags["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
      PatchFlags[PatchFlags["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
      PatchFlags[PatchFlags["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
      PatchFlags[PatchFlags["NEED_PATCH"] = 512] = "NEED_PATCH";
      PatchFlags[PatchFlags["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
      PatchFlags[PatchFlags["HOISTED"] = -1] = "HOISTED";
      PatchFlags[PatchFlags["BAIL"] = -2] = "BAIL";
  })(PatchFlags || (PatchFlags = {}));
  const isFragment = (node) => node.type === vue.Fragment;
  const isComment = (node) => node.type === vue.Comment;
  const isTemplate = (node) => node.type === TEMPLATE;
  /**
   * get a valid child node (not fragment nor comment)
   * @param node {VNode} node to be searched
   * @param depth {number} depth to be searched
   */
  function getChildren(node, depth) {
      if (isComment(node))
          return;
      if (isFragment(node) || isTemplate(node)) {
          return depth > 0
              ? getFirstValidNode(node.children, depth - 1)
              : undefined;
      }
      return node;
  }
  const getFirstValidNode = (nodes, maxDepth = 3) => {
      if (Array.isArray(nodes)) {
          return getChildren(nodes[0], maxDepth);
      }
      else {
          return getChildren(nodes, maxDepth);
      }
  };
  function renderIf(condition, node, props, children, patchFlag, patchProps) {
      return condition
          ? renderBlock(node, props, children, patchFlag, patchProps)
          : vue.createCommentVNode('v-if', true);
  }
  function renderBlock(node, props, children, patchFlag, patchProps) {
      return vue.openBlock(), vue.createBlock(node, props, children, patchFlag, patchProps);
  }

  const onTouchMove = (e) => {
      e.preventDefault();
      e.stopPropagation();
  };
  const onModalClick = () => {
      PopupManager === null || PopupManager === void 0 ? void 0 : PopupManager.doOnModalClick();
  };
  let hasModal = false;
  let zIndex;
  const getModal = function () {
      if (isServer)
          return;
      let modalDom = PopupManager.modalDom;
      if (modalDom) {
          hasModal = true;
      }
      else {
          hasModal = false;
          modalDom = document.createElement('div');
          PopupManager.modalDom = modalDom;
          on(modalDom, 'touchmove', onTouchMove);
          on(modalDom, 'click', onModalClick);
      }
      return modalDom;
  };
  const instances = {};
  const PopupManager = {
      modalFade: true,
      modalDom: undefined,
      zIndex,
      getInstance(id) {
          return instances[id];
      },
      register(id, instance) {
          if (id && instance) {
              instances[id] = instance;
          }
      },
      deregister(id) {
          if (id) {
              instances[id] = null;
              delete instances[id];
          }
      },
      nextZIndex() {
          return ++PopupManager.zIndex;
      },
      modalStack: [],
      doOnModalClick() {
          const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
          if (!topItem)
              return;
          const instance = PopupManager.getInstance(topItem.id);
          if (instance && instance.closeOnClickModal.value) {
              instance.close();
          }
      },
      openModal(id, zIndex, dom, modalClass, modalFade) {
          if (isServer)
              return;
          if (!id || zIndex === undefined)
              return;
          this.modalFade = modalFade;
          const modalStack = this.modalStack;
          for (let i = 0, j = modalStack.length; i < j; i++) {
              const item = modalStack[i];
              if (item.id === id) {
                  return;
              }
          }
          const modalDom = getModal();
          addClass(modalDom, 'v-modal');
          if (this.modalFade && !hasModal) {
              addClass(modalDom, 'v-modal-enter');
          }
          if (modalClass) {
              const classArr = modalClass.trim().split(/\s+/);
              classArr.forEach((item) => addClass(modalDom, item));
          }
          setTimeout(() => {
              removeClass(modalDom, 'v-modal-enter');
          }, 200);
          if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
              dom.parentNode.appendChild(modalDom);
          }
          else {
              document.body.appendChild(modalDom);
          }
          if (zIndex) {
              modalDom.style.zIndex = String(zIndex);
          }
          modalDom.tabIndex = 0;
          modalDom.style.display = '';
          this.modalStack.push({ id, zIndex, modalClass });
      },
      closeModal(id) {
          const modalStack = this.modalStack;
          const modalDom = getModal();
          if (modalStack.length > 0) {
              const topItem = modalStack[modalStack.length - 1];
              if (topItem.id === id) {
                  if (topItem.modalClass) {
                      const classArr = topItem.modalClass.trim().split(/\s+/);
                      classArr.forEach((item) => removeClass(modalDom, item));
                  }
                  modalStack.pop();
                  if (modalStack.length > 0) {
                      modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                  }
              }
              else {
                  for (let i = modalStack.length - 1; i >= 0; i--) {
                      if (modalStack[i].id === id) {
                          modalStack.splice(i, 1);
                          break;
                      }
                  }
              }
          }
          if (modalStack.length === 0) {
              if (this.modalFade) {
                  addClass(modalDom, 'v-modal-leave');
              }
              setTimeout(() => {
                  if (modalStack.length === 0) {
                      if (modalDom.parentNode)
                          modalDom.parentNode.removeChild(modalDom);
                      modalDom.style.display = 'none';
                      // off(modalDom, 'touchmove', onTouchMove)
                      // off(modalDom, 'click', onModalClick)
                      PopupManager.modalDom = undefined;
                  }
                  removeClass(modalDom, 'v-modal-leave');
              }, 200);
          }
      },
  };
  Object.defineProperty(PopupManager, 'zIndex', {
      configurable: true,
      get() {
          if (zIndex === undefined) {
              zIndex = getConfig('zIndex') || 2000;
          }
          return zIndex;
      },
      set(value) {
          zIndex = value;
      },
  });
  const getTopPopup = function () {
      if (isServer)
          return;
      if (PopupManager.modalStack.length > 0) {
          const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
          if (!topPopup)
              return;
          const instance = PopupManager.getInstance(topPopup.id);
          return instance;
      }
  };
  if (!isServer) {
      // handle `esc` key when the popup is shown
      on(window, 'keydown', function (event) {
          if (event.code === EVENT_CODE.esc) {
              const topPopup = getTopPopup();
              if (topPopup && topPopup.closeOnPressEscape.value) {
                  topPopup.handleClose
                      ? topPopup.handleClose()
                      : topPopup.handleAction
                          ? topPopup.handleAction('cancel')
                          : topPopup.close();
              }
          }
      });
  }
  var PopupManager$1 = PopupManager;

  function buildModifier(props, externalModifiers = []) {
    const { arrow, arrowOffset, offset, gpuAcceleration, fallbackPlacements } = props;
    const modifiers = [
      {
        name: "offset",
        options: {
          offset: [0, offset != null ? offset : 12]
        }
      },
      {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      },
      {
        name: "flip",
        options: {
          padding: 5,
          fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
        }
      },
      {
        name: "computeStyles",
        options: {
          gpuAcceleration,
          adaptive: gpuAcceleration
        }
      }
    ];
    if (arrow) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow,
          padding: arrowOffset != null ? arrowOffset : 5
        }
      });
    }
    modifiers.push(...externalModifiers);
    return modifiers;
  }

  var __defProp$1$1 = Object.defineProperty;
  var __defProps$2 = Object.defineProperties;
  var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1$1 = (obj, key, value) => key in obj ? __defProp$1$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1$1.call(b, prop))
        __defNormalProp$1$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1$1)
      for (var prop of __getOwnPropSymbols$1$1(b)) {
        if (__propIsEnum$1$1.call(b, prop))
          __defNormalProp$1$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
  function usePopperOptions(props, state) {
    return vue.computed(() => {
      var _a;
      return __spreadProps$2(__spreadValues$1$1({
        placement: props.placement
      }, props.popperOptions), {
        modifiers: buildModifier({
          arrow: state.arrow.value,
          arrowOffset: props.arrowOffset,
          offset: props.offset,
          gpuAcceleration: props.gpuAcceleration,
          fallbackPlacements: props.fallbackPlacements
        }, (_a = props.popperOptions) == null ? void 0 : _a.modifiers)
      });
    });
  }

  var Effect;
  (function(Effect2) {
    Effect2["DARK"] = "dark";
    Effect2["LIGHT"] = "light";
  })(Effect || (Effect = {}));
  const DEFAULT_FALLBACK_PLACEMENTS = [];
  var defaultProps = {
    arrowOffset: {
      type: Number,
      default: 5
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Number,
      default: 0
    },
    boundariesPadding: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: Object,
    hideAfter: {
      type: Number,
      default: 200
    },
    cutoff: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: Effect.DARK
    },
    enterable: {
      type: Boolean,
      default: true
    },
    manualMode: {
      type: Boolean,
      default: false
    },
    showAfter: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 12
    },
    placement: {
      type: String,
      default: "bottom"
    },
    popperClass: {
      type: String,
      default: ""
    },
    pure: {
      type: Boolean,
      default: false
    },
    popperOptions: {
      type: Object,
      default: () => null
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    strategy: {
      type: String,
      default: "fixed"
    },
    transition: {
      type: String,
      default: "el-fade-in-linear"
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    stopPopperMouseEvent: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    fallbackPlacements: {
      type: Array,
      default: DEFAULT_FALLBACK_PLACEMENTS
    }
  };

  const UPDATE_VISIBLE_EVENT$1 = "update:visible";
  function usePopper(props, { emit }) {
    const arrowRef = vue.ref(null);
    const triggerRef = vue.ref(null);
    const popperRef = vue.ref(null);
    const popperId = `el-popper-${generateId()}`;
    let popperInstance = null;
    let showTimer = null;
    let hideTimer = null;
    let triggerFocused = false;
    const isManualMode = () => props.manualMode || props.trigger === "manual";
    const popperStyle = vue.ref({ zIndex: PopupManager$1.nextZIndex() });
    const popperOptions = usePopperOptions(props, {
      arrow: arrowRef
    });
    const state = vue.reactive({
      visible: !!props.visible
    });
    const visibility = vue.computed({
      get() {
        if (props.disabled) {
          return false;
        } else {
          return isBool(props.visible) ? props.visible : state.visible;
        }
      },
      set(val) {
        if (isManualMode())
          return;
        isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT$1, val) : state.visible = val;
      }
    });
    function _show() {
      if (props.autoClose > 0) {
        hideTimer = window.setTimeout(() => {
          _hide();
        }, props.autoClose);
      }
      visibility.value = true;
    }
    function _hide() {
      visibility.value = false;
    }
    function clearTimers() {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    }
    const show = () => {
      if (isManualMode() || props.disabled)
        return;
      clearTimers();
      if (props.showAfter === 0) {
        _show();
      } else {
        showTimer = window.setTimeout(() => {
          _show();
        }, props.showAfter);
      }
    };
    const hide = () => {
      if (isManualMode())
        return;
      clearTimers();
      if (props.hideAfter > 0) {
        hideTimer = window.setTimeout(() => {
          close();
        }, props.hideAfter);
      } else {
        close();
      }
    };
    const close = () => {
      _hide();
      if (props.disabled) {
        doDestroy(true);
      }
    };
    function onPopperMouseEnter() {
      if (props.enterable && props.trigger !== "click") {
        clearTimeout(hideTimer);
      }
    }
    function onPopperMouseLeave() {
      const { trigger } = props;
      const shouldPrevent = isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
      if (shouldPrevent)
        return;
      hide();
    }
    function initializePopper() {
      if (!$(visibility)) {
        return;
      }
      const unwrappedTrigger = $(triggerRef);
      const _trigger = isHTMLElement$1(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
      popperInstance = createPopper(_trigger, $(popperRef), $(popperOptions));
      popperInstance.update();
    }
    function doDestroy(forceDestroy) {
      if (!popperInstance || $(visibility) && !forceDestroy)
        return;
      detachPopper();
    }
    function detachPopper() {
      var _a;
      (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
      popperInstance = null;
    }
    const events = {};
    function update() {
      if (!$(visibility)) {
        return;
      }
      if (popperInstance) {
        popperInstance.update();
      } else {
        initializePopper();
      }
    }
    function onVisibilityChange(toState) {
      if (toState) {
        popperStyle.value.zIndex = PopupManager$1.nextZIndex();
        initializePopper();
      }
    }
    if (!isManualMode()) {
      const toggleState = () => {
        if ($(visibility)) {
          hide();
        } else {
          show();
        }
      };
      const popperEventsHandler = (e) => {
        e.stopPropagation();
        switch (e.type) {
          case "click": {
            if (triggerFocused) {
              triggerFocused = false;
            } else {
              toggleState();
            }
            break;
          }
          case "mouseenter": {
            show();
            break;
          }
          case "mouseleave": {
            hide();
            break;
          }
          case "focus": {
            triggerFocused = true;
            show();
            break;
          }
          case "blur": {
            triggerFocused = false;
            hide();
            break;
          }
        }
      };
      const triggerEventsMap = {
        click: ["onClick"],
        hover: ["onMouseenter", "onMouseleave"],
        focus: ["onFocus", "onBlur"]
      };
      const mapEvents = (t) => {
        triggerEventsMap[t].forEach((event) => {
          events[event] = popperEventsHandler;
        });
      };
      if (isArray(props.trigger)) {
        Object.values(props.trigger).forEach(mapEvents);
      } else {
        mapEvents(props.trigger);
      }
    }
    vue.watch(popperOptions, (val) => {
      if (!popperInstance)
        return;
      popperInstance.setOptions(val);
      popperInstance.update();
    });
    vue.watch(visibility, onVisibilityChange);
    return {
      update,
      doDestroy,
      show,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter: () => {
        emit("after-enter");
      },
      onAfterLeave: () => {
        detachPopper();
        emit("after-leave");
      },
      onBeforeEnter: () => {
        emit("before-enter");
      },
      onBeforeLeave: () => {
        emit("before-leave");
      },
      initializePopper,
      isManualMode,
      arrowRef,
      events,
      popperId,
      popperInstance,
      popperRef,
      popperStyle,
      triggerRef,
      visibility
    };
  }

  function renderPopper(props, children) {
    const {
      effect,
      name,
      stopPopperMouseEvent,
      popperClass,
      popperStyle,
      popperRef,
      pure,
      popperId,
      visibility,
      onMouseenter,
      onMouseleave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave
    } = props;
    const kls = [popperClass, "el-popper", "is-" + effect, pure ? "is-pure" : ""];
    const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP;
    return vue.h(vue.Transition, {
      name,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.h("div", {
          "aria-hidden": String(!visibility),
          class: kls,
          style: popperStyle != null ? popperStyle : {},
          id: popperId,
          ref: popperRef != null ? popperRef : "popperRef",
          role: "tooltip",
          onMouseenter,
          onMouseleave,
          onClick: stop,
          onMousedown: mouseUpAndDown,
          onMouseup: mouseUpAndDown
        }, children), [[vue.vShow, visibility]])
      ])
    });
  }

  function renderTrigger(trigger, extraProps) {
    const firstElement = getFirstValidNode(trigger, 1);
    if (!firstElement)
      throwError("renderTrigger", "trigger expects single rooted node");
    return vue.cloneVNode(firstElement, extraProps, true);
  }

  function renderArrow(showArrow) {
    return showArrow ? vue.h("div", {
      ref: "arrowRef",
      class: "el-popper__arrow",
      "data-popper-arrow": ""
    }, null) : vue.h(vue.Comment, null, "");
  }

  var __defProp$2 = Object.defineProperty;
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(b)) {
        if (__propIsEnum$2.call(b, prop))
          __defNormalProp$2(a, prop, b[prop]);
      }
    return a;
  };
  const compName = "ElPopper";
  const UPDATE_VISIBLE_EVENT = "update:visible";
  var script$3 = vue.defineComponent({
    name: compName,
    props: defaultProps,
    emits: [
      UPDATE_VISIBLE_EVENT,
      "after-enter",
      "after-leave",
      "before-enter",
      "before-leave"
    ],
    setup(props, ctx) {
      if (!ctx.slots.trigger) {
        throwError(compName, "Trigger must be provided");
      }
      const popperStates = usePopper(props, ctx);
      const forceDestroy = () => popperStates.doDestroy(true);
      vue.onMounted(popperStates.initializePopper);
      vue.onBeforeUnmount(forceDestroy);
      vue.onActivated(popperStates.initializePopper);
      vue.onDeactivated(forceDestroy);
      return popperStates;
    },
    render() {
      var _a;
      const {
        $slots,
        appendToBody,
        class: kls,
        style,
        effect,
        hide,
        onPopperMouseEnter,
        onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        popperClass,
        popperId,
        popperStyle,
        pure,
        showArrow,
        transition,
        visibility,
        stopPopperMouseEvent
      } = this;
      const isManual = this.isManualMode();
      const arrow = renderArrow(showArrow);
      const popper = renderPopper({
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility
      }, [
        vue.renderSlot($slots, "default", {}, () => {
          return [vue.toDisplayString(this.content)];
        }),
        arrow
      ]);
      const _t = (_a = $slots.trigger) == null ? void 0 : _a.call($slots);
      const triggerProps = __spreadValues$2({
        "aria-describedby": popperId,
        class: kls,
        style,
        ref: "triggerRef"
      }, this.events);
      const trigger = isManual ? renderTrigger(_t, triggerProps) : vue.withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside$1, hide]]);
      return vue.h(vue.Fragment, null, [
        trigger,
        vue.h(vue.Teleport, {
          to: "body",
          disabled: !appendToBody
        }, [popper])
      ]);
    }
  });

  script$3.__file = "packages/components/popper/src/index.vue";

  script$3.install = (app) => {
    app.component(script$3.name, script$3);
  };
  const _Popper = script$3;

  var __defProp$1 = Object.defineProperty;
  var __defProps$1 = Object.defineProperties;
  var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
  const SHOW_EVENT = "show";
  const HIDE_EVENT = "hide";
  function usePopover(props, ctx) {
    const zIndex = vue.ref(PopupManager$1.nextZIndex());
    const width = vue.computed(() => {
      if (isString(props.width)) {
        return props.width;
      }
      return props.width + "px";
    });
    const popperStyle = vue.computed(() => {
      return {
        width: width.value,
        zIndex: zIndex.value
      };
    });
    const popperProps = usePopper(props, ctx);
    vue.watch(popperProps.visibility, (val) => {
      if (val) {
        zIndex.value = PopupManager$1.nextZIndex();
      }
      ctx.emit(val ? SHOW_EVENT : HIDE_EVENT);
    });
    return __spreadProps$1(__spreadValues$1({}, popperProps), {
      popperStyle
    });
  }

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const emits = [
    "update:visible",
    "after-enter",
    "after-leave",
    SHOW_EVENT,
    HIDE_EVENT
  ];
  const NAME = "ElPopover";
  const _hoist = { key: 0, class: "el-popover__title", role: "title" };
  var script$2 = vue.defineComponent({
    name: NAME,
    components: {
      ElPopper: _Popper
    },
    props: __spreadProps(__spreadValues({}, defaultProps), {
      content: {
        type: String
      },
      trigger: {
        type: String,
        default: "click"
      },
      title: {
        type: String
      },
      transition: {
        type: String,
        default: "fade-in-linear"
      },
      width: {
        type: [String, Number],
        default: 150
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      tabindex: [String, Number]
    }),
    emits,
    setup(props, ctx) {
      if (props.visible && !ctx.slots.reference) {
        debugWarn(NAME, `
        You cannot init popover without given reference
      `);
      }
      const states = usePopover(props, ctx);
      return states;
    },
    render() {
      const { $slots } = this;
      const trigger = $slots.reference ? $slots.reference() : null;
      const title = renderIf(this.title, "div", _hoist, vue.toDisplayString(this.title), PatchFlags.TEXT);
      const content = vue.renderSlot($slots, "default", {}, () => [
        vue.createTextVNode(vue.toDisplayString(this.content), PatchFlags.TEXT)
      ]);
      const {
        events,
        onAfterEnter,
        onAfterLeave,
        onPopperMouseEnter,
        onPopperMouseLeave,
        popperStyle,
        popperId,
        popperClass,
        showArrow,
        transition,
        visibility,
        tabindex
      } = this;
      const kls = [
        this.content ? "el-popover--plain" : "",
        "el-popover",
        popperClass
      ].join(" ");
      const popover = renderPopper({
        effect: Effect.LIGHT,
        name: transition,
        popperClass: kls,
        popperStyle,
        popperId,
        visibility,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        stopPopperMouseEvent: false
      }, [title, content, renderArrow(showArrow)]);
      const _trigger = trigger ? renderTrigger(trigger, __spreadValues({
        ariaDescribedby: popperId,
        ref: "triggerRef",
        tabindex
      }, events)) : vue.createCommentVNode("v-if", true);
      return vue.h(vue.Fragment, null, [
        this.trigger === "click" ? vue.withDirectives(_trigger, [[ClickOutside$1, this.hide]]) : _trigger,
        vue.h(vue.Teleport, {
          disabled: !this.appendToBody,
          to: "body"
        }, [popover])
      ]);
    }
  });

  script$2.__file = "packages/components/popover/src/index.vue";

  const attachEvents = (el, binding, vnode) => {
    const _ref = binding.arg || binding.value;
    const popover = vnode.dirs[0].instance.$refs[_ref];
    if (popover) {
      popover.triggerRef = el;
      el.setAttribute("tabindex", popover.tabindex);
      Object.entries(popover.events).forEach(([eventName, e]) => {
        on(el, eventName.toLowerCase().slice(2), e);
      });
    }
  };
  var PopoverDirective = {
    mounted(el, binding, vnode) {
      attachEvents(el, binding, vnode);
    },
    updated(el, binding, vnode) {
      attachEvents(el, binding, vnode);
    }
  };
  const VPopover = "popover";

  script$2.install = (app) => {
    app.component(script$2.name, script$2);
  };
  PopoverDirective.install = (app) => {
    app.directive(VPopover, PopoverDirective);
  };
  const _PopoverDirective = PopoverDirective;
  script$2.directive = _PopoverDirective;
  const _Popover = script$2;
  const ElPopover = _Popover;

  var script$1 = vue.defineComponent({
    components: {
      'el-collapse-transition': script$6,
      'el-popover': ElPopover,
    },
    name: "blog-code",
    props: {
      language: String,
    },
    setup() {
      let codeNode = vue.ref(null);

      let copied_popover = vue.ref(false);

      function copyNode(node) {
        if ('clipboard' in navigator) {
          return navigator.clipboard.writeText(node.textContent);
        }

        const selection = window.getSelection();

        if (selection == null) {
          return Promise.reject(new Error());
        }

        selection.removeAllRanges();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        return Promise.resolve();
      }

      let copy = () => {
        let res = copyNode(codeNode.value);
        res.then(() => {
          copied_popover.value = true;
          setTimeout(() => {
            copied_popover.value = false;
          }, 1500);
        });
      };
      return {
        copied_popover,
        fold:vue.ref(false),
        codeNode,
        copy
      }
    }
  });

  const _hoisted_1$1 = { class: "blog-code" };
  const _hoisted_2$1 = { class: "blog-code__title-container" };
  const _hoisted_3$1 = { class: "blog-code__title" };
  const _hoisted_4$1 = { class: "blog-code__controls" };
  const _hoisted_5$1 = /*#__PURE__*/vue.createElementVNode("p", null, "已复制！", -1 /* HOISTED */);
  const _hoisted_6$1 = /*#__PURE__*/vue.createElementVNode("span", { class: "material-icons" }, "content_copy", -1 /* HOISTED */);
  const _hoisted_7$1 = /*#__PURE__*/vue.createElementVNode("span", null, "复制", -1 /* HOISTED */);
  const _hoisted_8 = [
    _hoisted_6$1,
    _hoisted_7$1
  ];
  const _hoisted_9 = { class: "code-container" };
  const _hoisted_10 = { ref: "codeNode" };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_popover = vue.resolveComponent("el-popover");
    const _component_el_collapse_transition = vue.resolveComponent("el-collapse-transition");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
      vue.createElementVNode("div", _hoisted_2$1, [
        vue.createElementVNode("div", _hoisted_3$1, [
          vue.createElementVNode("span", null, vue.toDisplayString(_ctx.language), 1 /* TEXT */)
        ]),
        vue.createElementVNode("div", _hoisted_4$1, [
          vue.createVNode(_component_el_popover, {
            placement: "top",
            trigger: "manual",
            visible: _ctx.copied_popover,
            "onUpdate:visible": _cache[1] || (_cache[1] = $event => (_ctx.copied_popover = $event))
          }, {
            reference: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("button", {
                class: "btn-copy",
                name: "copy",
                type: "button",
                onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.copy && _ctx.copy(...args)))
              }, _hoisted_8, 512 /* NEED_PATCH */), [
                [vue.vShow, !_ctx.fold]
              ])
            ]),
            default: vue.withCtx(() => [
              _hoisted_5$1
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["visible"]),
          vue.createElementVNode("button", {
            class: "btn-expand",
            type: "button",
            onClick: _cache[2] || (_cache[2] = $event => (_ctx.fold = !_ctx.fold))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass([_ctx.fold?'btn-expand-icon':'btn-fold-icon', " material-icons"])
            }, "expand_more", 2 /* CLASS */),
            vue.createElementVNode("span", null, vue.toDisplayString(_ctx.fold ? "展开" : "折叠"), 1 /* TEXT */)
          ])
        ])
      ]),
      vue.createVNode(_component_el_collapse_transition, null, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", _hoisted_9, [
            vue.createElementVNode("div", _hoisted_10, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 512 /* NEED_PATCH */)
          ], 512 /* NEED_PATCH */), [
            [vue.vShow, !_ctx.fold]
          ])
        ]),
        _: 3 /* FORWARDED */
      })
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/js/blog-code.vue";

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

  var zoom = mediumZoom;

  try{self["workbox:window:6.2.4"]&&_();}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data);},n.postMessage(t,[e.port2]);}))}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e);}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return "Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return (e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.2.4"]&&_();}catch(n){}var i=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r;}));};function o(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var u=function(n,t){this.type=n,Object.assign(this,t);};function a(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var f={type:"SKIP_WAITING"};function s(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}var v=function(r){var e,c;function v(n,t){var e,c;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new i,e.en=new i,e.on=new i,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!o(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln);},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,a={sw:r,isExternal:o,originalEvent:n};!o&&e.mn&&(a.isUpdate=!0),e.dispatchEvent(new u(i,a)),"installed"===i?e.wn=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new u("waiting",a));}),200):"activating"===i&&(clearTimeout(e.wn),o||e.en.resolve(r));},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new u("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t);},e.gn=(c=function(n){var t=n.data,r=n.ports,i=n.source;return a(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new u("message",{data:t,originalEvent:n,ports:r,sw:i}));}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener("message",e.gn),e}c=r,(e=v).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c;var h,l,w=v.prototype;return w.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return s(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),a(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&o(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new u("waiting",{sw:t,wasWaitingBeforeRegister:!0}));})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},w.update=function(){try{return this.fn?s(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},w.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},w.messageSW=function(t){try{return a(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},w.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,f);},w.pn=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.sn.toString())?n:void 0},w.bn=function(){try{var n=this;return function(n,t){try{var r=n();}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return a(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},h=v,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&t(h.prototype,l),v}(function(){function n(){this.Pn=new Map;}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t);},t.removeEventListener=function(n,t){this.Sn(n).delete(t);},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;){(0, t.value)(n);}},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());

  var script = vue.defineComponent({
    name: "blog-notification",
    props: {
      title: {
        type: String,
        default: '',
      },
      message: {
        type: [String, Object],
        default: '',
      },
      id: {type: String, default: '',},
      duration: {
        type: Number,
        default: 4500,
      },
      offset: {
        type: Number,
        default: 0,
      },
      position: {
        type: String,
        default: 'top',
      },

      onClick: {
        type: Function,
        default: () => void 0,
      },
      onClose: {
        type: Function,
        default: () => void 0,
      },
    },
    emits: ['destroy'],

    setup(props) {

      const visible = vue.ref(false);
      let timer = null;

      function startTimer() {
        if (props.duration > 0) {
          timer = setTimeout(() => {
            if (visible.value) {
              close();
            }
          }, props.duration);
        }
      }

      function clearTimer() {
        clearTimeout(timer);
        timer = null;
      }

      function close() {
        visible.value = false;
      }

      // lifecycle
      vue.onMounted(() => {
        startTimer();
        visible.value = true;
      });

      // styles
      const verticalProperty = vue.computed(() => {
        return props.position.startsWith('top') ? 'top' : 'bottom';
      });

      const positionStyle = vue.computed(() => {
        return {
          [verticalProperty.value]: `${props.offset}px`,
        }
      });

      return {
        visible,
        positionStyle,

        startTimer,
        clearTimer,
        close,
      }
    },

  });

  const _hoisted_1 = ["id"];
  const _hoisted_2 = { class: "tj-notification__group" };
  const _hoisted_3 = ["textContent"];
  const _hoisted_4 = { class: "tj-notification__content" };
  const _hoisted_5 = ["textContent"];
  const _hoisted_6 = /*#__PURE__*/vue.createElementVNode("span", { class: "material-icons" }, "close", -1 /* HOISTED */);
  const _hoisted_7 = [
    _hoisted_6
  ];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "tj-notification-fade",
      onBeforeLeave: _ctx.onClose,
      onAfterLeave: _cache[4] || (_cache[4] = $event => (_ctx.$emit('destroy')))
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          class: "tj-notification",
          style: vue.normalizeStyle(_ctx.positionStyle),
          id: _ctx.id,
          onMouseenter: _cache[1] || (_cache[1] = (...args) => (_ctx.clearTimer && _ctx.clearTimer(...args))),
          onMouseleave: _cache[2] || (_cache[2] = (...args) => (_ctx.startTimer && _ctx.startTimer(...args))),
          onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
        }, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createElementVNode("h2", {
              class: "tj-notification__title",
              textContent: vue.toDisplayString(_ctx.title)
            }, null, 8 /* PROPS */, _hoisted_3),
            vue.withDirectives(vue.createElementVNode("div", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("p", {
                  textContent: vue.toDisplayString(_ctx.message)
                }, null, 8 /* PROPS */, _hoisted_5)
              ])
            ], 512 /* NEED_PATCH */), [
              [vue.vShow, _ctx.message]
            ]),
            vue.createElementVNode("div", {
              class: "tj-notification__closeBtn",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.close && _ctx.close(...args)), ["stop"]))
            }, _hoisted_7)
          ])
        ], 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["onBeforeLeave"]))
  }

  script.render = render;
  script.__file = "src/js/notification/index.vue";

  const notifications = {
    'top': [],
    'bottom': [],
  };
  let GAP_SIZE = 16;
  let seed = 1;
  const notify = function (options) {
    const position = options.position || 'top';

    let verticalOffset = options.offset || 0;
    notifications[position].forEach(({vm}) => {
      verticalOffset += (vm.el.offsetHeight || 0) + GAP_SIZE;
    });
    verticalOffset += GAP_SIZE;

    const id = 'notification_' + seed++;
    const userOnClose = options.onClose;
    options = {
      ...options,
      onClose: () => {
        close(id, position, userOnClose);
      },
      offset: verticalOffset,
      id,
    };

    const container = document.createElement('div');
    const vm = vue.createVNode(script, options);

    vm.props.onDestroy = () => {
      vue.render(null, container);
    };

    vue.render(vm, container);
    notifications[position].push({vm});
    document.body.appendChild(container.firstElementChild);
    return {
      close: () => {
        vm.component.proxy.visible = false;
      }
    }
  };

  function close(
    id, position, userOnClose
  ) {
    // maybe we can store the index when inserting the vm to notification list.
    const orientedNotifications = notifications[position];
    const idx = orientedNotifications.findIndex(({ vm }) => vm.component.props.id === id);
    if (idx === -1) return
    const { vm } = orientedNotifications[idx];
    if (!vm) return
    // calling user's on close function before notification gets removed from DOM.
    userOnClose?.(vm);

    // note that this is called @before-leave, that's why we were able to fetch this property.
    const removedHeight = vm.el.offsetHeight;
    const verticalPos = position.split('-')[0];
    orientedNotifications.splice(idx, 1);
    const len = orientedNotifications.length;
    if (len < 1) return
    // starting from the removing item.
    for (let i = idx; i < len; i++) {
      // new position equals the current offsetTop minus removed height plus 16px(the gap size between each item)
      const { el, component } = orientedNotifications[i].vm;
      component.props.offset = parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    }
  }

  const _notify = notify;
  _notify.install = (app) => {
    app.config.globalProperties.$notify = _notify;
  };

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
      "handleScroll": debounce$1(function f() {
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
      initServiceWorker(){
        const wb =  new v(sw_path);
        wb.addEventListener('message',(event)=>{
          if(event.data.type === 'CACHE_UPDATED'){
            this.$notify({
              title:'发现新版本',
              message:'发现新版本，点击更新',
              duration:0,
              onClick:()=>{
                location.reload();
              }
            });
          }
        });
        wb.register();
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
        if (zoom) {
          setTimeout(() => {
            if (this.zoom) {
              this.zoom.detach();

            }
            this.zoom = zoom('.post-body img', {});
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

      let sw_path = window.sw_path || undefined;
      if(sw_path){
        this.initServiceWorker();
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
  app.component(script$4.name, script$4);
  app.component(script$1.name, script$1);

  app.use(_notify);
  app.mount('#app');

}(Vue));
