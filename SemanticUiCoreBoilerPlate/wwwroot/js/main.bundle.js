/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

 /*
 * # Fomantic UI - 2.8.6
 * https://github.com/fomantic/Fomantic-UI
 * http://fomantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.isFunction=p.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},p.site=p.fn.site=function(e){var s,l,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,c=[].slice.call(arguments,1),u=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=u.namespace,d=u.error,r="module-"+a,f=p(v),m=this,g=f.data(r);return s={initialize:function(){s.instantiate()},instantiate:function(){s.verbose("Storing instance of site",s),g=s,f.data(r,s)},normalize:function(){s.fix.console(),s.fix.requestAnimationFrame()},fix:{console:function(){s.debug("Normalizing window.console"),console!==b&&console.log!==b||(s.verbose("Console not available, normalizing events"),s.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(s.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(s.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){s.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){s.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(s.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?u.modules:[e]:e||u.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!s.moduleExists(t)||(p.fn[t].settings.namespace||!1);s.moduleExists(t)&&(s.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||u.modules,o=o===b||o,p.each(e,function(e,t){var n;s.moduleExists(t)&&(s.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){s.console(!0)},debug:function(e,t){e=e||u.modules,s.debug("Enabling debug for modules",e),s.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Enabling verbose debug for modules",e),s.change.setting("verbose",!0,e,t)}},disable:{console:function(){s.console(!1)},debug:function(e,t){e=e||u.modules,s.debug("Disabling debug for modules",e),s.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Disabling verbose debug for modules",e),s.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(g.cache.console===b)return void s.error(d.console);s.debug("Restoring console function"),h.console=g.cache.console}else s.debug("Disabling console function"),g.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){s.verbose("Destroying previous site for",f),f.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,u,e);else{if(t===b)return u[e];u[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,s,e);else{if(t===b)return s[e];s[e]=t}},debug:function(){u.debug&&(u.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,u.name+":"),s.debug.apply(console,arguments)))},verbose:function(){u.verbose&&u.debug&&(u.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),s.verbose.apply(console,arguments)))},error:function(){s.error=Function.prototype.bind.call(console.error,console,u.name+":"),s.error.apply(console,arguments)},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:m,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=u.name+":",n=0;i=!1,clearTimeout(s.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||c,t=m||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:s.error(d.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),Array.isArray(l)?l.push(n):l!==b?l=[l,n]:n!==b&&(l=n),a}},n?(g===b&&s.initialize(),s.invoke(t)):(g!==b&&s.destroy(),s.initialize()),l!==b?l:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","calendar","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","slider","rating","shape","sidebar","state","sticky","tab","toast","transition","visibility","visit"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(M,I,j,L){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.form=function(k){var T,S=M(this),D=S.selector||"",A=(new Date).getTime(),E=[],F=k,P=arguments[1],O="string"==typeof F,R=[].slice.call(arguments,1);return S.each(function(){var n,f,t,e,g,l,m,p,h,i,u,o,a,s,c,v,d=M(this),b=this,y=[],x=!1,r=!1,C=!1,w=["clean","clean"];(v={initialize:function(){v.get.settings(),O?(c===L&&v.instantiate(),v.invoke(F)):(c!==L&&c.invoke("destroy"),v.verbose("Initializing form validation",d,g),v.bindEvents(),v.set.defaults(),g.autoCheckRequired&&v.set.autoCheck(),v.instantiate())},instantiate:function(){v.verbose("Storing instance of module",v),c=v,d.data(a,v)},destroy:function(){v.verbose("Destroying previous module",c),v.removeEvents(),d.removeData(a)},refresh:function(){v.verbose("Refreshing selector cache"),n=d.find(p.field),f=d.find(p.group),t=d.find(p.message),d.find(p.prompt),e=d.find(p.submit),d.find(p.clear),d.find(p.reset)},submit:function(){v.verbose("Submitting form",d),r=!0,d.submit()},attachEvents:function(e,t){t=t||"submit",M(e).on("click"+s,function(e){v[t](),e.preventDefault()})},bindEvents:function(){v.verbose("Attaching form events"),d.on("submit"+s,v.validate.form).on("blur"+s,p.field,v.event.field.blur).on("click"+s,p.submit,v.submit).on("click"+s,p.reset,v.reset).on("click"+s,p.clear,v.clear),g.keyboardShortcuts&&d.on("keydown"+s,p.field,v.event.field.keydown),n.each(function(e,t){var n=M(t),i=n.prop("type"),o=v.get.changeEvent(i,n);n.on(o+s,v.event.field.change)}),g.preventLeaving&&M(I).on("beforeunload"+s,v.event.beforeUnload),n.on("change click keyup keydown blur",function(e){M(this).triggerHandler(e.type+".dirty")}),n.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty",v.determine.isDirty),d.on("dirty"+s,function(e){g.onDirty.call()}),d.on("clean"+s,function(e){g.onClean.call()})},clear:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=o.find(p.prompt),r=n.closest(p.uiCalendar),s=n.data(m.defaultValue)||"",l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<r.length&&v.can.useElement("calendar");o.hasClass(h.error)&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),a.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("clear",!0)):l?n.prop("checked",!1):u?r.calendar("clear"):(v.verbose("Resetting field value",n,s),n.val(""))}),v.remove.states()},reset:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=n.closest(p.uiCalendar),r=o.find(p.prompt),s=n.data(m.defaultValue),l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<a.length&&v.can.useElement("calendar"),d=o.hasClass(h.error);s!==L&&(d&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),r.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("restore defaults",!0)):l?(v.verbose("Resetting checkbox value",i,s),n.prop("checked",s)):u?a.calendar("set date",s):(v.verbose("Resetting field value",n,s),n.val(s)))}),v.remove.states()},determine:{isValid:function(){var n=!0;return M.each(l,function(e,t){v.validate.field(t,e,!0)||(n=!1)}),n},isDirty:function(e){var o=!1;n.each(function(e,t){var n,i=M(t);n=0<i.filter(p.checkbox).length?v.is.checkboxDirty(i):v.is.fieldDirty(i),i.data(g.metadata.isDirty,n),o|=n}),o?v.set.dirty():v.set.clean(),e&&"dirty"===e.namespace&&(e.stopImmediatePropagation(),e.preventDefault())}},is:{bracketedRule:function(e){return e.type&&e.type.match(g.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return v.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||Array.isArray(e)},empty:function(e){return!e||0===e.length||(e.is(p.checkbox)?!e.is(":checked"):v.is.blank(e))},blank:function(e){return""===String(e.val()).trim()},valid:function(e,n){var i=!0;return e?(v.verbose("Checking if field is valid",e),v.validate.field(l[e],e,!!n)):(v.verbose("Checking if form is valid"),M.each(l,function(e,t){v.is.valid(e,n)||(i=!1)}),i)},dirty:function(){return C},clean:function(){return!C},fieldDirty:function(e){var t=e.data(m.defaultValue);null==t?t="":Array.isArray(t)&&(t=t.toString());var n=e.val();null==n?n="":Array.isArray(n)&&(n=n.toString());var i=/^(true|false)$/i;return i.test(t)&&i.test(n)?!new RegExp("^"+t+"$","i").test(n):n!==t},checkboxDirty:function(e){return e.data(m.defaultValue)!==e.is(":checked")},justDirty:function(){return"dirty"===w[0]},justClean:function(){return"clean"===w[0]}},removeEvents:function(){d.off(s),n.off(s),e.off(s),n.off(s)},event:{field:{keydown:function(e){var t=M(this),n=e.which,i=t.is(p.input),o=t.is(p.checkbox),a=0<t.closest(p.uiDropdown).length,r=13;n==27&&(v.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(x||(t.one("keyup"+s,v.event.field.keyup),v.submit(),v.debug("Enter pressed on input submitting form")),x=!0)},keyup:function(){x=!1},blur:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);n.hasClass(h.error)?(v.debug("Revalidating field",t,i),i&&v.validate.field(i)):"blur"==g.on&&i&&v.validate.field(i)},change:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);i&&("change"==g.on||n.hasClass(h.error)&&g.revalidate)&&(clearTimeout(v.timer),v.timer=setTimeout(function(){v.debug("Revalidating field",t,v.get.validation(t)),v.validate.field(i),g.inline||v.validate.form(!1,!0)},g.delay))}},beforeUnload:function(e){if(v.is.dirty()&&!r)return(e=e||I.event)&&(e.returnValue=g.text.leavingMessage),g.text.leavingMessage}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!v.is.bracketedRule(e))&&(e.value!==L?e.value:e.type.match(g.regExp.bracket)[1]+"")},ruleName:function(e){return v.is.bracketedRule(e)?e.type.replace(e.type.match(g.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":v.get.inputEvent()},inputEvent:function(){return j.createElement("input").oninput!==L?"input":j.createElement("input").onpropertychange!==L?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return M.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},M.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=v.get.ruleName(e),a=v.get.ancillaryValue(e),r=v.get.field(t.identifier),s=r.val(),l=M.isFunction(e.prompt)?e.prompt(s):e.prompt||g.prompt[o]||g.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace(/\{value\}/g,r.val())),u&&(i=1==(n=r.closest(p.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||g.text.unspecifiedField,l=l.replace(/\{name\}/g,i)),l=(l=l.replace(/\{identifier\}/g,t.identifier)).replace(/\{ruleValue\}/g,a),e.prompt||v.verbose("Using default validation prompt for type",l,o),l},settings:function(){if(M.isPlainObject(k)){var e=Object.keys(k);0<e.length&&(k[e[0]].identifier!==L&&k[e[0]].rules!==L)?(g=M.extend(!0,{},M.fn.form.settings,P),l=M.extend({},M.fn.form.settings.defaults,k),v.error(g.error.oldSyntax,b),v.verbose("Extending settings from legacy parameters",l,g)):(k.fields&&v.is.shorthandFields(k.fields)&&(k.fields=v.get.fieldsFromShorthand(k.fields)),g=M.extend(!0,{},M.fn.form.settings,k),l=M.extend({},M.fn.form.settings.defaults,g.fields),v.verbose("Extending settings",l,g))}else g=M.fn.form.settings,l=M.fn.form.settings.defaults,v.verbose("Using default form validation",l,g);o=g.namespace,m=g.metadata,p=g.selector,h=g.className,i=g.regExp,u=g.error,a="module-"+o,s="."+o,c=d.data(a),v.refresh()},field:function(e){var t;return v.verbose("Finding field with identifier",e),e=v.escape.string(e),0<(t=n.filter("#"+e)).length?t:0<(t=n.filter('[name="'+e+'"]')).length?t:0<(t=n.filter('[name="'+e+'[]"]')).length?t:0<(t=n.filter("[data-"+m.validate+'="'+e+'"]')).length?t:M("<input/>")},fields:function(e){var n=M();return M.each(e,function(e,t){n=n.add(v.get.field(t))}),n},validation:function(i){var o,a;return!!l&&(M.each(l,function(e,n){a=n.identifier||e,M.each(v.get.field(a),function(e,t){if(t==i[0])return n.identifier=a,o=n,!1})}),o||!1)},value:function(e){var t=[];return t.push(e),v.get.values.call(b,t)[e]},values:function(e){var t=Array.isArray(e)?v.get.fields(e):n,m={};return t.each(function(e,t){var n=M(t),i=n.closest(p.uiCalendar),o=n.prop("name"),a=n.val(),r=n.is(p.checkbox),s=n.is(p.radio),l=-1!==o.indexOf("[]"),c=0<i.length&&v.can.useElement("calendar"),u=!!r&&n.is(":checked");if(o)if(l)o=o.replace("[]",""),m[o]||(m[o]=[]),r?u?m[o].push(a||!0):m[o].push(!1):m[o].push(a);else if(s)m[o]!==L&&!1!==m[o]||(m[o]=!!u&&(a||!0));else if(r)m[o]=!!u&&(a||!0);else if(c){var d=i.calendar("get date");if(null!==d){if("date"==g.dateHandling)m[o]=d;else if("input"==g.dateHandling)m[o]=i.calendar("get input date");else if("formatter"==g.dateHandling){var f=i.calendar("setting","type");switch(f){case"date":m[o]=g.formatter.date(d);break;case"datetime":m[o]=g.formatter.datetime(d);break;case"time":m[o]=g.formatter.time(d);break;case"month":m[o]=g.formatter.month(d);break;case"year":m[o]=g.formatter.year(d);break;default:v.debug("Wrong calendar mode",i,f),m[o]=""}}}else m[o]=""}else m[o]=a}),m},dirtyFields:function(){return n.filter(function(e,t){return M(t).data(m.isDirty)})}},has:{field:function(e){return v.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=v.escape.string(e))&&v.error(u.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+m.validate+'="'+e+'"]').length)}},can:{useElement:function(e){return M.fn[e]!==L||(v.error(u.noElement.replace("{element}",e)),!1)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){v.add.field(e,t)},field:function(n,e){l[n]!==L&&l[n].rules!==L||(l[n]={rules:[]});var i={rules:[]};v.is.shorthandRules(e)?(e=Array.isArray(e)?e:[e],M.each(e,function(e,t){i.rules.push({type:t})})):i.rules=e.rules,M.each(i.rules,function(e,t){0==M.grep(l[n].rules,function(e){return e.type==t.type}).length&&l[n].rules.push(t)}),v.debug("Adding rules",i.rules,l)},fields:function(e){var t;t=e&&v.is.shorthandFields(e)?v.get.fieldsFromShorthand(e):e,l=M.extend({},l,t)},prompt:function(e,t,n){var i=v.get.field(e).closest(f),o=i.children(p.prompt),a=0!==o.length;t="string"==typeof t?[t]:t,v.verbose("Adding field error state",e),n||i.addClass(h.error),g.inline&&(a||(o=g.templates.prompt(t,h.label)).appendTo(i),o.html(t[0]),a?v.verbose("Inline errors are disabled, no inline error added",e):g.transition&&v.can.useElement("transition")&&d.transition("is supported")?(v.verbose("Displaying error with css transition",g.transition),o.transition(g.transition+" in",g.duration)):(v.verbose("Displaying error with fallback javascript animation"),o.fadeIn(g.duration)))},errors:function(e){v.debug("Adding form error messages",e),v.set.error(),t.html(g.templates.error(e))}},remove:{errors:function(){v.debug("Removing form error messages"),t.empty()},states:function(){d.removeClass(h.error).removeClass(h.success),g.inline||v.remove.errors(),v.determine.isDirty()},rule:function(n,e){var i=Array.isArray(e)?e:[e];if(l[n]!==L&&Array.isArray(l[n].rules))return e===L?(v.debug("Removed all rules"),void(l[n].rules=[])):void M.each(l[n].rules,function(e,t){t&&-1!==i.indexOf(t.type)&&(v.debug("Removed rule",t.type),l[n].rules.splice(e,1))})},field:function(e){var t=Array.isArray(e)?e:[e];M.each(t,function(e,t){v.remove.rule(t)})},rules:function(e,n){Array.isArray(e)?M.each(e,function(e,t){v.remove.rule(t,n)}):v.remove.rule(e,n)},fields:function(e){v.remove.field(e)},prompt:function(e){var t=v.get.field(e).closest(f),n=t.children(p.prompt);t.removeClass(h.error),g.inline&&n.is(":visible")&&(v.verbose("Removing prompt for field",e),g.transition&&v.can.useElement("transition")&&d.transition("is supported")?n.transition(g.transition+" out",g.duration,function(){n.remove()}):n.fadeOut(g.duration,function(){n.remove()}))}},set:{success:function(){d.removeClass(h.error).addClass(h.success)},defaults:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=0<n.filter(p.checkbox).length,a=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),r=n.closest(p.uiCalendar),s=0<r.length&&v.can.useElement("calendar"),l=o?n.is(":checked"):n.val();a?i.dropdown("save defaults"):s&&r.calendar("refresh"),n.data(m.defaultValue,l),n.data(m.isDirty,!1)})},error:function(){d.removeClass(h.success).addClass(h.error)},value:function(e,t){var n={};return n[e]=t,v.set.values.call(b,n)},values:function(e){M.isEmptyObject(e)||M.each(e,function(e,t){var n,i=v.get.field(e),o=i.parent(),a=i.closest(p.uiCalendar),r=Array.isArray(t),s=o.is(p.uiCheckbox)&&v.can.useElement("checkbox"),l=o.is(p.uiDropdown)&&v.can.useElement("dropdown"),c=i.is(p.radio)&&s,u=0<a.length&&v.can.useElement("calendar");0<i.length&&(r&&s?(v.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),M.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):c?(v.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(p.uiCheckbox).checkbox("check")):s?(v.verbose("Setting checkbox value",t,o),!0===t||1===t?o.checkbox("check"):o.checkbox("uncheck")):l?(v.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):u?a.calendar("set date",t):(v.verbose("Setting field value",t,i),i.val(t)))})},dirty:function(){v.verbose("Setting state dirty"),C=!0,w[0]=w[1],w[1]="dirty",v.is.justClean()&&d.trigger("dirty")},clean:function(){v.verbose("Setting state clean"),C=!1,w[0]=w[1],w[1]="clean",v.is.justDirty()&&d.trigger("clean")},asClean:function(){v.set.defaults(),v.set.clean()},asDirty:function(){v.set.defaults(),v.set.dirty()},autoCheck:function(){v.debug("Enabling auto check on required fields"),n.each(function(e,t){var n=M(t),i=M(t).closest(f),o=0<n.filter(p.checkbox).length,a=n.prop("required")||i.hasClass(h.required)||i.parent().hasClass(h.required),r=n.is(":disabled")||i.hasClass(h.disabled)||i.parent().hasClass(h.disabled),s=v.get.validation(n),l=!!s&&0!==M.grep(s.rules,function(e){return"empty"==e.type}),c=s.identifier||n.attr("id")||n.attr("name")||n.data(m.validate);!a||r||l||c===L||(o?(v.verbose("Adding 'checked' rule on field",c),v.add.rule(c,"checked")):(v.verbose("Adding 'empty' rule on field",c),v.add.rule(c,"empty")))})}},validate:{form:function(e,t){var n=v.get.values();if(x)return!1;if(y=[],v.determine.isValid()){if(v.debug("Form has no validation errors, submitting"),v.set.success(),g.inline||v.remove.errors(),!0!==t)return g.onSuccess.call(b,e,n)}else if(v.debug("Form has errors"),r=!1,v.set.error(),g.inline||v.add.errors(y),e&&d.data("moduleApi")!==L&&e.stopImmediatePropagation(),!0!==t)return g.onFailure.call(b,y,n)},field:function(i,e,o){o=o===L||o,"string"==typeof i&&(v.verbose("Validating field",i),i=l[e=i]);var a=i.identifier||e,t=v.get.field(a),n=!!i.depends&&v.get.field(i.depends),r=!0,s=[];return i.identifier||(v.debug("Using field name as identifier",a),i.identifier=a),!t.filter(":not(:disabled)").length?v.debug("Field is disabled. Skipping",a):i.optional&&v.is.blank(t)?v.debug("Field is optional and blank. Skipping",a):i.depends&&v.is.empty(n)?v.debug("Field depends on another value that is not present or empty. Skipping",n):i.rules!==L&&(o&&t.closest(f).removeClass(h.error),M.each(i.rules,function(e,t){if(v.has.field(a)){var n=v.validate.rule(i,t,!0)||[];0<n.length&&(v.debug("Field is invalid",a,t.type),s.push(v.get.prompt(t,i)),r=!1,o&&M(n).closest(f).addClass(h.error))}})),r?(o&&(v.remove.prompt(a,s),g.onValid.call(t)),!0):(o&&(y=y.concat(s),v.add.prompt(a,s,!0),g.onInvalid.call(t,s)),!1)},rule:function(e,t,n){function i(e){var t=c?M(e).filter(":checked").val():M(e).val();return t=t===L||""===t||null===t?"":g.shouldTrim?String(t+"").trim():String(t+""),s.call(e,t,a,d)}var o=v.get.field(e.identifier),a=v.get.ancillaryValue(t),r=v.get.ruleName(t),s=g.rules[r],l=[],c=o.is(p.checkbox);if(M.isFunction(s))return c?i(o)||(l=o):M.each(o,function(e,t){i(t)||l.push(t)}),n?l:!(0<l.length);v.error(u.noRule,r)}},setting:function(e,t){if(M.isPlainObject(e))M.extend(!0,g,e);else{if(t===L)return g[e];g[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,v,e);else{if(t===L)return v[e];v[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,g.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),v.verbose.apply(console,arguments)))},error:function(){g.silent||(v.error=Function.prototype.bind.call(console.error,console,g.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var e=g.name+":",n=0;A=!1,clearTimeout(v.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),1<S.length&&(e+=" ("+S.length+")"),(console.group!==L||console.table!==L)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=c;return e=e||R,t=b||t,"string"==typeof i&&r!==L&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==L)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==L&&(a=r[t]),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==L&&(n=a),Array.isArray(T)?T.push(n):T!==L?T=[T,n]:n!==L&&(T=n),a}}).initialize()}),T!==L?T:this},M.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,shouldTrim:!0,transition:"scale",duration:200,autoCheckRequired:!1,preventLeaving:!1,dateHandling:"date",onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},onDirty:function(){},onClean:function(){},metadata:{defaultValue:"default",validate:"validate",isDirty:"isDirty"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field",leavingMessage:"There are unsaved changes on this page which will be discarded if you continue."},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input:not(.search), textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown",uiCalendar:".ui.calendar"},className:{error:"error",label:"ui basic red pointing prompt label",pressed:"down",success:"success",required:"required",disabled:"disabled"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",noElement:"This module requires ui {element}"},templates:{error:function(e){var n='<ul class="list">';return M.each(e,function(e,t){n+="<li>"+t+"</li>"}),M(n+="</ul>")},prompt:function(e,t){return M("<div/>").addClass(t).html(e[0])}},formatter:{date:function(e){return Intl.DateTimeFormat("en-GB").format(e)},datetime:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},time:function(e){return Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},month:function(e){return Intl.DateTimeFormat("en-GB",{month:"2-digit",year:"numeric"}).format(e)},year:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(e)}},rules:{empty:function(e){return!(e===L||""===e||Array.isArray(e)&&0===e.length)},checked:function(){return 0<M(this).filter(":checked").length},email:function(e){return M.fn.form.settings.regExp.email.test(e)},url:function(e){return M.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(M.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=M.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(i=o[1]-0))),a.test(e)&&(n===L||n<=e)&&(i===L||e<=i)},decimal:function(e){return M.fn.form.settings.regExp.decimal.test(e)},number:function(e){return M.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==L&&e.length>=t},length:function(e,t){return e!==L&&e.length>=t},exactLength:function(e,t){return e!==L&&e.length==t},maxLength:function(e,t){return e!==L&&e.length<=t},match:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==L&&e.toString()==i.toString()},different:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==L&&e.toString()!==i.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(M.each(s,function(e,t){(i=o[t])&&(a={length:-1!==M.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==M.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(k,T,e,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},T=void 0!==T&&T.Math==Math?T:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.accordion=function(a){var v,r=k(this),b=(new Date).getTime(),y=[],x=a,C="string"==typeof x,w=[].slice.call(arguments,1);return r.each(function(){var e,c,u=k.isPlainObject(a)?k.extend(!0,{},k.fn.accordion.settings,a):k.extend({},k.fn.accordion.settings),d=u.className,t=u.namespace,f=u.selector,s=u.error,n="."+t,i="module-"+t,o=r.selector||"",m=k(this),g=m.find(f.title),p=m.find(f.content),l=this,h=m.data(i);c={initialize:function(){c.debug("Initializing",m),c.bind.events(),u.observeChanges&&c.observeChanges(),c.instantiate()},instantiate:function(){h=c,m.data(i,c)},destroy:function(){c.debug("Destroying previous instance",m),m.off(n).removeData(i)},refresh:function(){g=m.find(f.title),p=m.find(f.content)},observeChanges:function(){"MutationObserver"in T&&((e=new MutationObserver(function(e){c.debug("DOM tree modified, updating selector cache"),c.refresh()})).observe(l,{childList:!0,subtree:!0}),c.debug("Setting up mutation observer",e))},bind:{events:function(){c.debug("Binding delegated events"),m.on(u.on+n,f.trigger,c.event.click)}},event:{click:function(){c.toggle.call(this)}},toggle:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active),a=o&&!i,r=!o&&i;c.debug("Toggling visibility of content",t),a||r?u.collapsible?c.close.call(t):c.debug("Cannot close accordion content collapsing is disabled"):c.open.call(t)},open:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating);n.hasClass(d.active)||i?c.debug("Accordion already open, skipping",n):(c.debug("Opening accordion content",t),u.onOpening.call(n),u.onChanging.call(n),u.exclusive&&c.closeOthers.call(t),t.addClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0,onComplete:function(){n.children().removeClass(d.transition)}}):n.children().stop(!0,!0).animate({opacity:1},u.duration,c.resetOpacity)),n.slideDown(u.duration,u.easing,function(){n.removeClass(d.animating).addClass(d.active),c.reset.display.call(this),u.onOpen.call(this),u.onChange.call(this)}))},close:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active);!o&&!(!o&&i)||o&&i||(c.debug("Closing accordion content",n),u.onClosing.call(n),u.onChanging.call(n),t.removeClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):n.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),n.slideUp(u.duration,u.easing,function(){n.removeClass(d.animating).removeClass(d.active),c.reset.display.call(this),u.onClose.call(this),u.onChange.call(this)}))},closeOthers:function(e){var t,n,i,o=e!==S?g.eq(e):k(this).closest(f.title),a=o.parents(f.content).prev(f.title),r=o.closest(f.accordion),s=f.title+"."+d.active+":visible",l=f.content+"."+d.active+":visible";i=u.closeNested?(t=r.find(s).not(a)).next(p):(t=r.find(s).not(a),n=r.find(l).find(s).not(a),(t=t.not(n)).next(p)),0<t.length&&(c.debug("Exclusive enabled, closing other content",t),t.removeClass(d.active),i.removeClass(d.animating).stop(!0,!0),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?i.children().transition({animation:"fade out",useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):i.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),i.slideUp(u.duration,u.easing,function(){k(this).removeClass(d.active),c.reset.display.call(this)}))},reset:{display:function(){c.verbose("Removing inline display from element",this),k(this).css("display",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")},opacity:function(){c.verbose("Removing inline opacity from element",this),k(this).css("opacity",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(c.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,u,e);else{if(t===S)return u[e];k.isPlainObject(u[e])?k.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(c.debug("Changing internal",e,t),t===S)return c[e];k.isPlainObject(e)?k.extend(!0,c,e):c[e]=t},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;b=!1,clearTimeout(c.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||w,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:c.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(v)?v.push(n):v!==S?v=[v,n]:n!==S&&(v=n),a}},C?(h===S&&c.initialize(),c.invoke(x)):(h!==S&&h.invoke("destroy"),c.initialize())}),v!==S?v:this},k.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating",transition:"transition"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},k.extend(k.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(ve,S,D,be){"use strict";ve.isFunction=ve.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},S=void 0!==S&&S.Math==Math?S:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),ve.fn.calendar=function(h){var v,e=ve(this),b=e.selector||"",y=(new Date).getTime(),x=[],C=h,w="string"==typeof C,k=[].slice.call(arguments,1),T={5:{row:4,column:3},10:{row:3,column:2},15:{row:2,column:2},20:{row:3,column:1},30:{row:2,column:1}},he=["","one","two","three","four","five","six","seven","eight"];return e.each(function(){var f,e,le,ce=ve.isPlainObject(h)?ve.extend(!0,{},ve.fn.calendar.settings,h):ve.extend({},ve.fn.calendar.settings),ue=ce.className,t=ce.namespace,r=ce.selector,de=ce.formatter,n=ce.parser,fe=ce.metadata,me=T[ce.minTimeGap],s=ce.error,i="."+t,o="module-"+t,l=ve(this),c=l.find(r.input),ge=l.find(r.popup),u=l.find(r.activator),d=this,m=l.data(o),g=!1,pe=l.hasClass(ue.inverted),p=!1,a=!1;le={initialize:function(){le.debug("Initializing calendar for",d,l),f=le.get.isTouch(),le.setup.config(),le.setup.popup(),le.setup.inline(),le.setup.input(),le.setup.date(),le.create.calendar(),le.bind.events(),le.observeChanges(),le.instantiate()},instantiate:function(){le.verbose("Storing instance of calendar"),m=le,l.data(o,m)},destroy:function(){le.verbose("Destroying previous calendar for",d),l.removeData(o),le.unbind.events(),le.disconnect.classObserver()},setup:{config:function(){null!==le.get.minDate()&&le.set.minDate(l.data(fe.minDate)),null!==le.get.maxDate()&&le.set.maxDate(l.data(fe.maxDate)),le.setting("type",le.get.type()),le.setting("on",ce.on||(c.length?"focus":"click"))},popup:function(){if(!ce.inline&&(u.length||(u=l.children().first()).length))if(ve.fn.popup!==be){if(!ge.length){var e=u.parent(),t=0!==e.closest(r.append).length?"appendTo":"prependTo";ge=ve("<div/>").addClass(ue.popup)[t](e)}ge.addClass(ue.calendar),pe&&ge.addClass(ue.inverted);var n=function(){return le.refreshTooltips(),ce.onVisible.apply(ge,arguments)},i=ce.onHidden;c.length||(ge.attr("tabindex","0"),n=function(){return le.refreshTooltips(),le.focus(),ce.onVisible.apply(ge,arguments)},i=function(){return le.blur(),ce.onHidden.apply(ge,arguments)});var o=le.setting("on"),a=ve.extend({},ce.popupOptions,{popup:ge,on:o,hoverable:"hover"===o,closable:"click"===o,onShow:function(){return le.set.focusDate(le.get.date()),le.set.mode(le.get.validatedMode(ce.startMode)),ce.onShow.apply(ge,arguments)},onVisible:n,onHide:ce.onHide,onHidden:i});le.popup(a)}else le.error(s.popup)},inline:function(){u.length&&!ce.inline||(ce.inline=!0,ge=ve("<div/>").addClass(ue.calendar).appendTo(l),c.length||ge.attr("tabindex","0"))},input:function(){ce.touchReadonly&&c.length&&f&&c.prop("readonly",!0),le.check.disabled()},date:function(){var e;ce.initialDate?e=n.date(ce.initialDate,ce):l.data(fe.date)!==be?e=n.date(l.data(fe.date),ce):c.length&&(e=n.date(c.val(),ce)),le.set.date(e,ce.formatInput,!1),le.set.mode(le.get.mode(),!1)}},trigger:{change:function(){var e=c[0];if(e){var t=D.createEvent("HTMLEvents");le.verbose("Triggering native change event"),t.initEvent("change",!0,!1),e.dispatchEvent(t)}}},create:{calendar:function(){var e,t,n,i,o,a,r,s=le.get.mode(),l=new Date,c=le.get.date(),u=le.get.focusDate(),d=le.helper.dateInRange(u||c||ce.initialDate||l);u||(u=d,le.set.focusDate(u,!1,!1));var f="year"===s,m="month"===s,g="day"===s,p="hour"===s,h="minute"===s,v="time"===ce.type,b=Math.max(ce.multiMonth,1),y=g?le.get.monthOffset():0,x=d.getMinutes(),C=d.getHours(),w=d.getDate(),k=d.getMonth()+y,T=d.getFullYear(),S=g?ce.showWeekNumbers?8:7:p?4:me.column,D=g||p?6:me.row,A=g?b:1,E=ge,F=E.hasClass("left")?"right center":"left center";for(E.empty(),1<A&&(r=ve("<div/>").addClass(ue.grid).appendTo(E)),i=0;i<A;i++){if(1<A)E=ve("<div/>").addClass(ue.column).appendTo(r);var P=k+i,O=(new Date(T,P,1).getDay()-ce.firstDayOfWeek%7+7)%7;if(!ce.constantHeight&&g){var R=new Date(T,P+1,0).getDate()+O;D=Math.ceil(R/7)}var M=f?10:m?1:0,I=g?1:0,j=p||h?1:0,L=p||h?w:1,q=new Date(T-M,P-I,L-j,C),V=new Date(T+M,P+I,L+j,C),z=f?new Date(10*Math.ceil(T/10)-9,0,0):m?new Date(T,0,0):g?new Date(T,P,0):new Date(T,P,w,-1),N=f?new Date(10*Math.ceil(T/10)+1,0,1):m?new Date(T+1,0,1):g?new Date(T,P+1,1):new Date(T,P,w+1),H=s;g&&ce.showWeekNumbers&&(H+=" andweek");var U=ve("<table/>").addClass(ue.table).addClass(H).addClass(he[S]+" column").appendTo(E);pe&&U.addClass(ue.inverted);var B=S;if(!v){var W=ve("<thead/>").appendTo(U);o=ve("<tr/>").appendTo(W),a=ve("<th/>").attr("colspan",""+S).appendTo(o);var Y=f||m?new Date(T,0,1):g?new Date(T,P,1):new Date(T,P,w,C,x),Q=ve("<span/>").addClass(ue.link).appendTo(a);Q.text(de.header(Y,s,ce));var X=m?ce.disableYear?"day":"year":g?ce.disableMonth?"year":"month":"day";if(Q.data(fe.mode,X),0===i){var $=ve("<span/>").addClass(ue.prev).appendTo(a);$.data(fe.focusDate,q),$.toggleClass(ue.disabledCell,!le.helper.isDateInRange(z,s)),ve("<i/>").addClass(ue.prevIcon).appendTo($)}if(i===A-1){var G=ve("<span/>").addClass(ue.next).appendTo(a);G.data(fe.focusDate,V),G.toggleClass(ue.disabledCell,!le.helper.isDateInRange(N,s)),ve("<i/>").addClass(ue.nextIcon).appendTo(G)}if(g)for(o=ve("<tr/>").appendTo(W),ce.showWeekNumbers&&((a=ve("<th/>").appendTo(o)).text(ce.text.weekNo),a.addClass(ue.weekCell),B--),e=0;e<B;e++)(a=ve("<th/>").appendTo(o)).text(de.dayColumnHeader((e+ce.firstDayOfWeek)%7,ce))}var K=ve("<tbody/>").appendTo(U);for(e=f?10*Math.ceil(T/10)-9:g?1-O:0,t=0;t<D;t++)for(o=ve("<tr/>").appendTo(K),g&&ce.showWeekNumbers&&((a=ve("<th/>").appendTo(o)).text(le.get.weekOfYear(T,P,e+1-ce.firstDayOfWeek)),a.addClass(ue.weekCell)),n=0;n<B;n++,e++){var J=f?new Date(e,P,1,C,x):m?new Date(T,e,1,C,x):g?new Date(T,P,e,C,x):p?new Date(T,P,w,e):new Date(T,P,w,C,e*ce.minTimeGap),Z=f?e:m?ce.text.monthsShort[e]:g?J.getDate():de.time(J,ce,!0);(a=ve("<td/>").addClass(ue.cell).appendTo(o)).text(Z),a.data(fe.date,J);var _=g&&J.getMonth()!==(P+12)%12,ee=!ce.selectAdjacentDays&&_||!le.helper.isDateInRange(J,s)||ce.isDisabled(J,s)||le.helper.isDisabled(J,s)||!le.helper.isEnabled(J,s);if(ee){var te=le.helper.findDayAsObject(J,s,ce.disabledDates);null!==te&&te[fe.message]&&(a.attr("data-tooltip",te[fe.message]),a.attr("data-position",te[fe.position]||F),(te[fe.inverted]||pe&&te[fe.inverted]===be)&&a.attr("data-inverted",""),te[fe.variation]&&a.attr("data-variation",te[fe.variation]))}else{var ne=le.helper.findDayAsObject(J,s,ce.eventDates);null!==ne&&(a.addClass(ne[fe.class]||ce.eventClass),ne[fe.message]&&(a.attr("data-tooltip",ne[fe.message]),a.attr("data-position",ne[fe.position]||F),(ne[fe.inverted]||pe&&ne[fe.inverted]===be)&&a.attr("data-inverted",""),ne[fe.variation]&&a.attr("data-variation",ne[fe.variation])))}var ie=le.helper.dateEqual(J,c,s),oe=le.helper.dateEqual(J,l,s);a.toggleClass(ue.adjacentCell,_),a.toggleClass(ue.disabledCell,ee),a.toggleClass(ue.activeCell,ie&&!_),p||h||a.toggleClass(ue.todayCell,!_&&oe);var ae={mode:s,adjacent:_,disabled:ee,active:ie,today:oe};de.cell(a,J,ae),le.helper.dateEqual(J,u,s)&&le.set.focusDate(J,!1,!1)}if(ce.today){var re=ve("<tr/>").appendTo(K),se=ve("<td/>").attr("colspan",""+S).addClass(ue.today).appendTo(re);se.text(de.today(ce)),se.data(fe.date,l)}le.update.focus(!1,U),ce.inline&&le.refreshTooltips()}}},update:{focus:function(e,t){t=t||ge;var s=le.get.mode(),n=le.get.date(),l=le.get.focusDate(),c=le.get.startDate(),u=le.get.endDate(),d=(e?l:null)||n||(f?null:l);t.find("td").each(function(){var e=ve(this),t=e.data(fe.date);if(t){var n=e.hasClass(ue.disabledCell),i=e.hasClass(ue.activeCell),o=e.hasClass(ue.adjacentCell),a=le.helper.dateEqual(t,l,s),r=!!d&&(!!c&&le.helper.isDateInRange(t,s,c,d)||!!u&&le.helper.isDateInRange(t,s,d,u));e.toggleClass(ue.focusCell,a&&(!f||g)&&(!o||ce.selectAdjacentDays&&o)&&!n),le.helper.isTodayButton(e)||e.toggleClass(ue.rangeCell,r&&!i&&!n)}})}},refresh:function(){le.create.calendar()},refreshTooltips:function(){var o=ve(S).width();ge.find("td[data-position]").each(function(){var e=ve(this),t=S.getComputedStyle(e[0],":after").width.replace(/[^0-9\.]/g,""),n=e.attr("data-position"),i=o-e.width()-(parseInt(t,10)||250)>e.offset().left?"right":"left";-1===n.indexOf(i)&&e.attr("data-position",n.replace(/(left|right)/,i))})},bind:{events:function(){le.debug("Binding events"),ge.on("mousedown"+i,le.event.mousedown),ge.on("touchstart"+i,le.event.mousedown),ge.on("mouseup"+i,le.event.mouseup),ge.on("touchend"+i,le.event.mouseup),ge.on("mouseover"+i,le.event.mouseover),c.length?(c.on("input"+i,le.event.inputChange),c.on("focus"+i,le.event.inputFocus),c.on("blur"+i,le.event.inputBlur),c.on("keydown"+i,le.event.keydown)):ge.on("keydown"+i,le.event.keydown)}},unbind:{events:function(){le.debug("Unbinding events"),ge.off(i),c.length&&c.off(i)}},event:{mouseover:function(e){var t=ve(e.target).data(fe.date),n=1===e.buttons;t&&le.set.focusDate(t,!1,!0,n)},mousedown:function(e){c.length&&e.preventDefault(),g=0<=e.type.indexOf("touch");var t=ve(e.target).data(fe.date);t&&le.set.focusDate(t,!1,!0,!0)},mouseup:function(e){le.focus(),e.preventDefault(),e.stopPropagation(),g=!1;var t=ve(e.target);if(!t.hasClass("disabled")){var n=t.parent();(n.data(fe.date)||n.data(fe.focusDate)||n.data(fe.mode))&&(t=n);var i=t.data(fe.date),o=t.data(fe.focusDate),a=t.data(fe.mode);if(i&&!1!==ce.onSelect.call(d,i,le.get.mode())){var r=t.hasClass(ue.today);le.selectDate(i,r)}else o?le.set.focusDate(o):a&&le.set.mode(a)}},keydown:function(e){var t=e.which;if(27!==t&&9!==t||le.popup("hide"),le.popup("is visible"))if(37===t||38===t||39===t||40===t){var n="day"===(d=le.get.mode())?7:"hour"===d?4:"minute"===d?me.column:3,i=37===t?-1:38===t?-n:39==t?1:n;i*="minute"===d?ce.minTimeGap:1;var o=le.get.focusDate()||le.get.date()||new Date,a=o.getFullYear()+("year"===d?i:0),r=o.getMonth()+("month"===d?i:0),s=o.getDate()+("day"===d?i:0),l=o.getHours()+("hour"===d?i:0),c=o.getMinutes()+("minute"===d?i:0),u=new Date(a,r,s,l,c);"time"===ce.type&&(u=le.helper.mergeDateTime(o,u)),le.helper.isDateInRange(u,d)&&le.set.focusDate(u)}else if(13===t){var d=le.get.mode(),f=le.get.focusDate();f&&!ce.isDisabled(f,d)&&!le.helper.isDisabled(f,d)&&le.helper.isEnabled(f,d)&&le.selectDate(f),e.preventDefault(),e.stopPropagation()}38!==t&&40!==t||(e.preventDefault(),le.popup("show"))},inputChange:function(){var e=c.val(),t=n.date(e,ce);le.set.date(t,!1)},inputFocus:function(){ge.addClass(ue.active)},inputBlur:function(){if(ge.removeClass(ue.active),ce.formatInput){var e=le.get.date(),t=de.datetime(e,ce);c.val(t)}a&&(le.trigger.change(),a=!1)},class:{mutation:function(e){e.forEach(function(e){"class"===e.attributeName&&le.check.disabled()})}}},observeChanges:function(){"MutationObserver"in S&&(e=new MutationObserver(le.event.class.mutation),le.debug("Setting up mutation observer",e),le.observe.class())},disconnect:{classObserver:function(){c.length&&e&&e.disconnect()}},observe:{class:function(){c.length&&e&&e.observe(l[0],{attributes:!0})}},is:{disabled:function(){return l.hasClass(ue.disabled)}},check:{disabled:function(){c.attr("tabindex",le.is.disabled()?-1:0)}},get:{weekOfYear:function(e,t,n){var i,o,a;return i=Date.UTC(e,t,n+3)/864e5,o=Math.floor(i/7),a=new Date(6048e5*o).getUTCFullYear(),o-Math.floor(Date.UTC(a,0,7)/6048e5)+1},date:function(){return le.helper.sanitiseDate(l.data(fe.date))||null},inputDate:function(){return c.val()},focusDate:function(){return l.data(fe.focusDate)||null},startDate:function(){var e=le.get.calendarModule(ce.startCalendar);return(e?e.get.date():l.data(fe.startDate))||null},endDate:function(){var e=le.get.calendarModule(ce.endCalendar);return(e?e.get.date():l.data(fe.endDate))||null},minDate:function(){return l.data(fe.minDate)||null},maxDate:function(){return l.data(fe.maxDate)||null},monthOffset:function(){return l.data(fe.monthOffset)||0},mode:function(){var e=l.data(fe.mode)||ce.startMode;return le.get.validatedMode(e)},validatedMode:function(e){var t=le.get.validModes();return 0<=ve.inArray(e,t)?e:"time"===ce.type?"hour":"month"===ce.type?"month":"year"===ce.type?"year":"day"},type:function(){return l.data(fe.type)||ce.type},validModes:function(){var e=[];return"time"!==ce.type&&(ce.disableYear&&"year"!==ce.type||e.push("year"),(ce.disableMonth||"year"===ce.type)&&"month"!==ce.type||e.push("month"),0<=ce.type.indexOf("date")&&e.push("day")),0<=ce.type.indexOf("time")&&(e.push("hour"),ce.disableMinute||e.push("minute")),e},isTouch:function(){try{return D.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(e){return e?(e instanceof ve||(e=ve(e).first()),e.data(o)):null}},set:{date:function(e,t,n){t=!1!==t,n=!1!==n,e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var i=le.get.mode(),o=de.datetime(e,ce);if(n&&!1===ce.onBeforeChange.call(d,e,o,i))return!1;if(le.set.focusDate(e),ce.isDisabled(e,i))return!1;var a=le.get.endDate();a&&e&&a<e&&le.set.endDate(be),le.set.dataKeyValue(fe.date,e),t&&c.length&&c.val(o),n&&ce.onChange.call(d,e,o,i)},startDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.startCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.startDate,e,t)},endDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.endCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.endDate,e,t)},focusDate:function(e,t,n,i){e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var o="day"===le.get.mode(),a=le.get.focusDate();if(o&&e&&a){var r=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth();if(r){var s=le.get.monthOffset()-r;le.set.monthOffset(s,!1)}}var l=le.set.dataKeyValue(fe.focusDate,e,!!e&&t);n=!1!==n&&l&&!1===t||p!=i,p=i,n&&le.update.focus(i)},minDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.maxDate&&ce.maxDate<=e?le.verbose("Unable to set minDate variable bigger that maxDate variable",e,ce.maxDate):(le.setting("minDate",e),le.set.dataKeyValue(fe.minDate,e))},maxDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.minDate&&ce.minDate>=e?le.verbose("Unable to set maxDate variable lower that minDate variable",e,ce.minDate):(le.setting("maxDate",e),le.set.dataKeyValue(fe.maxDate,e))},monthOffset:function(e,t){var n=Math.max(ce.multiMonth,1);e=Math.max(1-n,Math.min(0,e)),le.set.dataKeyValue(fe.monthOffset,e,t)},mode:function(e,t){le.set.dataKeyValue(fe.mode,e,t)},dataKeyValue:function(e,t,n){var i=l.data(e),o=i===t||i<=t&&t<=i;return t?l.data(e,t):l.removeData(e),(n=!1!==n&&!o)&&le.refresh(),!o}},selectDate:function(e,t){le.verbose("New date selection",e);var n=le.get.mode();if(t||"minute"===n||ce.disableMinute&&"hour"===n||"date"===ce.type&&"day"===n||"month"===ce.type&&"month"===n||"year"===ce.type&&"year"===n){if(!(!1===le.set.date(e))&&(a=!0,ce.closable)){le.popup("hide");var i=le.get.calendarModule(ce.endCalendar);i&&("focus"!==i.setting("on")&&i.popup("show"),i.focus())}}else{var o="year"===n?ce.disableMonth?"day":"month":"month"===n?"day":"day"===n?"hour":"minute";le.set.mode(o),"hour"===n||"day"===n&&le.get.date()?le.set.date(e,!0,!1):le.set.focusDate(e)}},changeDate:function(e){le.set.date(e)},clear:function(){le.set.date(be)},popup:function(){return u.popup.apply(u,arguments)},focus:function(){c.length?c.focus():ge.focus()},blur:function(){c.length?c.blur():ge.blur()},helper:{isDisabled:function(n,i){return("day"===i||"month"===i||"year"===i)&&(-1!==ce.disabledDaysOfWeek.indexOf(n.getDay())||ce.disabledDates.some(function(e){if("string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date)return le.helper.dateEqual(n,e,i);if(null!==e&&"object"==typeof e)if(e[fe.year]){if("number"==typeof e[fe.year])return n.getFullYear()==e[fe.year];if(Array.isArray(e[fe.year]))return-1<e[fe.year].indexOf(n.getFullYear())}else if(e[fe.month]){if("number"==typeof e[fe.month])return n.getMonth()==e[fe.month];if(Array.isArray(e[fe.month]))return-1<e[fe.month].indexOf(n.getMonth());if(e[fe.month]instanceof Date){var t=le.helper.sanitiseDate(e[fe.month]);return n.getMonth()==t.getMonth()&&n.getFullYear()==t.getFullYear()}}else if(e[fe.date]&&"day"===i){if(e[fe.date]instanceof Date)return le.helper.dateEqual(n,le.helper.sanitiseDate(e[fe.date]),i);if(Array.isArray(e[fe.date]))return e[fe.date].some(function(e){return le.helper.dateEqual(n,e,i)})}}))},isEnabled:function(t,n){return"day"!==n||(0===ce.enabledDates.length||ce.enabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},findDayAsObject:function(t,n,e){if("day"===n||"month"===n||"year"===n)for(var i,o=0;o<e.length;o++){if("string"==typeof(i=e[o])&&(i=le.helper.sanitiseDate(i)),i instanceof Date&&le.helper.dateEqual(t,i,n)){var a={};return a[fe.date]=i,a}if(null!==i&&"object"==typeof i)if(i[fe.year]){if("number"==typeof i[fe.year]&&t.getFullYear()==i[fe.year])return i;if(Array.isArray(i[fe.year])&&-1<i[fe.year].indexOf(t.getFullYear()))return i}else if(i[fe.month]){if("number"==typeof i[fe.month]&&t.getMonth()==i[fe.month])return i;if(Array.isArray(i[fe.month])){if(-1<i[fe.month].indexOf(t.getMonth()))return i}else if(i[fe.month]instanceof Date){var r=le.helper.sanitiseDate(i[fe.month]);if(t.getMonth()==r.getMonth()&&t.getFullYear()==r.getFullYear())return i}}else if(i[fe.date]&&"day"===n){if(i[fe.date]instanceof Date&&le.helper.dateEqual(t,le.helper.sanitiseDate(i[fe.date]),n))return i;if(Array.isArray(i[fe.date])&&i[fe.date].some(function(e){return le.helper.dateEqual(t,e,n)}))return i}}return null},sanitiseDate:function(e){return e?(e instanceof Date||(e=n.date(""+e,ce)),!e||null===e||isNaN(e.getTime())?be:e):be},dateDiff:function(e,t,n){n=n||"day";var i="time"===ce.type,o="year"===n,a=o||"month"===n,r="minute"===n,s=r||"hour"===n;return e=new Date(i?2e3:e.getFullYear(),i?0:o?0:e.getMonth(),i?1:a?1:e.getDate(),s?e.getHours():0,r?ce.minTimeGap*Math.floor(e.getMinutes()/ce.minTimeGap):0),(t=new Date(i?2e3:t.getFullYear(),i?0:o?0:t.getMonth(),i?1:a?1:t.getDate(),s?t.getHours():0,r?ce.minTimeGap*Math.floor(t.getMinutes()/ce.minTimeGap):0)).getTime()-e.getTime()},dateEqual:function(e,t,n){return!!e&&!!t&&0===le.helper.dateDiff(e,t,n)},isDateInRange:function(e,t,n,i){if(!n&&!i){var o=le.get.startDate();n=o&&ce.minDate?new Date(Math.max(o,ce.minDate)):o||ce.minDate,i=ce.maxDate}return n=n&&new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),ce.minTimeGap*Math.ceil(n.getMinutes()/ce.minTimeGap)),!(!e||n&&0<le.helper.dateDiff(e,n,t)||i&&0<le.helper.dateDiff(i,e,t))},dateInRange:function(e,t,n){if(!t&&!n){var i=le.get.startDate();t=i&&ce.minDate?new Date(Math.max(i,ce.minDate)):i||ce.minDate,n=ce.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),ce.minTimeGap*Math.ceil(t.getMinutes()/ce.minTimeGap));var o="time"===ce.type;return e?t&&0<le.helper.dateDiff(e,t,"minute")?o?le.helper.mergeDateTime(e,t):t:n&&0<le.helper.dateDiff(n,e,"minute")?o?le.helper.mergeDateTime(e,n):n:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t},isTodayButton:function(e){return e.text()===ce.text.today}},setting:function(e,t){if(le.debug("Changing setting",e,t),ve.isPlainObject(e))ve.extend(!0,ce,e);else{if(t===be)return ce[e];ve.isPlainObject(ce[e])?ve.extend(!0,ce[e],t):ce[e]=t}},internal:function(e,t){if(ve.isPlainObject(e))ve.extend(!0,le,e);else{if(t===be)return le[e];le[e]=t}},debug:function(){!ce.silent&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.debug=Function.prototype.bind.call(console.info,console,ce.name+":"),le.debug.apply(console,arguments)))},verbose:function(){!ce.silent&&ce.verbose&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.verbose=Function.prototype.bind.call(console.info,console,ce.name+":"),le.verbose.apply(console,arguments)))},error:function(){ce.silent||(le.error=Function.prototype.bind.call(console.error,console,ce.name+":"),le.error.apply(console,arguments))},performance:{log:function(e){var t,n;ce.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(le.performance.timer),le.performance.timer=setTimeout(le.performance.display,500)},display:function(){var e=ce.name+":",n=0;y=!1,clearTimeout(le.performance.timer),ve.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==be||console.table!==be)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):ve.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||k,t=d||t,"string"==typeof i&&r!==be&&(i=i.split(/[\. ]/),o=i.length-1,ve.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(ve.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==be)return a=r[n],!1;if(!ve.isPlainObject(r[t])||e==o)return r[t]!==be?a=r[t]:le.error(s.method,i),!1;r=r[t]}})),ve.isFunction(a)?n=a.apply(t,e):a!==be&&(n=a),Array.isArray(v)?v.push(n):v!==be?v=[v,n]:n!==be&&(v=n),a}},w?(m===be&&le.initialize(),le.invoke(C)):(m!==be&&m.invoke("destroy"),le.initialize())}),v!==be?v:this},ve.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,minTimeGap:5,showWeekNumbers:null,disabledDates:[],disabledDaysOfWeek:[],enabledDates:[],eventDates:[],centuryBreak:60,currentCentury:2e3,selectAdjacentDays:!1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM",weekNo:"Week"},formatter:{header:function(e,t,n){return"year"===t?n.formatter.yearHeader(e,n):"month"===t?n.formatter.monthHeader(e,n):"day"===t?n.formatter.dayHeader(e,n):"hour"===t?n.formatter.hourHeader(e,n):n.formatter.minuteHeader(e,n)},yearHeader:function(e,t){var n=10*Math.ceil(e.getFullYear()/10);return n-9+" - "+(2+n)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){return t.text.months[e.getMonth()]+" "+e.getFullYear()},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var n="time"===t.type?"":t.formatter.date(e,t),i=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1);return n+("datetime"===t.type?" ":"")+i},date:function(e,t){if(!e)return"";var n=e.getDate(),i=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?i+" "+o:(t.monthFirst?i+" "+n:n+" "+i)+", "+o},time:function(e,t,n){if(!e)return"";var i=e.getHours(),o=e.getMinutes(),a="";return t.ampm&&(a=" "+(i<12?t.text.am:t.text.pm),i=0===i?12:12<i?i-12:i),i+":"+(o<10?"0":"")+o+a},today:function(e){return"date"===e.type?e.text.today:e.text.now},cell:function(e,t,n){}},parser:{date:function(e,t){if(e instanceof Date)return e;if(!e)return null;if(0===(e=String(e).trim()).length)return null;e.match(/^[0-9]{4}[\/\-\.][0-9]{2}[\/\-\.][0-9]{2}$/)&&(e=e.replace(/[\/\-\.]/g,"/")+" 00:00:00"),e=t.monthFirst||!e.match(/^[0-9]{2}[\/\-\.]/)?e:e.replace(/[\/\-\.]/g,"/").replace(/([0-9]+)\/([0-9]+)/,"$2/$1");var n,i,o,a=new Date(e);if(!(null!==e.match(/^[0-9]+$/))&&!isNaN(a.getDate()))return a;e=e.toLowerCase();var r,s,l,c=-1,u=-1,d=-1,f=-1,m=-1,g=be,p="time"===t.type,h=t.type.indexOf("time")<0,v=e.split(t.regExp.dateWords),b=e.split(t.regExp.dateNumbers);if(!h)for(g=0<=ve.inArray(t.text.am.toLowerCase(),v)||!(0<=ve.inArray(t.text.pm.toLowerCase(),v))&&be,n=0;n<b.length;n++)if(0<=(s=b[n]).indexOf(":")){if(u<0||c<0)for(l=s.split(":"),o=0;o<Math.min(2,l.length);o++)i=parseInt(l[o]),isNaN(i)&&(i=0),0===o?u=i%24:c=i%60;b.splice(n,1)}if(!p){for(n=0;n<v.length;n++)if(!((r=v[n]).length<=0)){for(i=0;i<t.text.months.length;i++)if(t.text.months[i].substring(0,r.length).toLowerCase()===r){f=i+1;break}if(0<=f)break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&i>=t.centuryBreak&&n===b.length-1){i<=99&&(i+=t.currentCentury-100),m=i,b.splice(n,1);break}if(f<0)for(n=0;n<b.length;n++)if(o=1<n||t.monthFirst?n:1===n?0:1,i=parseInt(b[o]),!isNaN(i)&&1<=i&&i<=12){f=i,b.splice(o,1);break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&1<=i&&i<=31){d=i,b.splice(n,1);break}if(m<0)for(n=b.length-1;0<=n;n--)if(i=parseInt(b[n]),!isNaN(i)){i<=99&&(i+=t.currentCentury),m=i,b.splice(n,1);break}}if(!h){if(u<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=23){u=i,b.splice(n,1);break}if(c<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=59){c=i,b.splice(n,1);break}}if(c<0&&u<0&&d<0&&f<0&&m<0)return null;c<0&&(c=0),u<0&&(u=0),d<0&&(d=1),f<0&&(f=1),m<0&&(m=(new Date).getFullYear()),g!==be&&(g?12===u&&(u=0):u<12&&(u+=12));var y=new Date(m,f-1,d,u,c);return y.getMonth()===f-1&&y.getFullYear()===m||(y=new Date(m,f,0,u,c)),isNaN(y.getTime())?null:y}},onBeforeChange:function(e,t,n){return!0},onChange:function(e,t,n){},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},onSelect:function(e,t){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input",append:".inline.field,.inline.fields"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",inverted:"inverted",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",weekCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link",disabled:"disabled"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",minDate:"minDate",maxDate:"maxDate",mode:"mode",type:"type",monthOffset:"monthOffset",message:"message",class:"class",inverted:"inverted",variation:"variation",position:"position",month:"month",year:"year"},eventClass:"blue"}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.checkbox=function(u){var d,e=S(this),f=e.selector||"",x=(new Date).getTime(),C=[],w=u,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var e,m,g=S.extend(!0,{},S.fn.checkbox.settings,u),t=g.className,n=g.namespace,p=g.selector,s=g.error,i="."+n,o="module-"+n,h=S(this),a=S(this).children(p.label),v=S(this).children(p.input),b=v[0],r=!1,y=!1,l=h.data(o),c=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),l=m,h.data(o,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),h.removeData(o)},fix:{reference:function(){h.is(p.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),h=h.closest(p.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){a=h.children(p.label),v=h.children(p.input),b=v[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),v.addClass(t.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),v.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in D&&((e=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()})).observe(c,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=S(e);t=S.isFunction(m[t])?m[t]:m.toggle,0<n.length?(m.debug("Attaching checkbox events to element",e,t),n.on("click"+i,t)):m.error(s.notFound)},preventDefaultOnInputTarget:function(){"undefined"!=typeof event&&null!==event&&S(event.target).is(p.input)&&(m.verbose("Preventing default check action after manual check action"),event.preventDefault())},event:{change:function(e){m.should.ignoreCallbacks()||g.onChange.call(b)},click:function(e){var t=S(e.target);t.is(p.input)?m.verbose("Using default check action on initialized checkbox"):t.is(p.link)?m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),v.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32,o=27,a=37,r=38,s=39,l=40,c=m.get.radios(),u=c.index(h),d=c.length,f=!1;if(t==a||t==r?f=(0===u?d:u)-1:t!=s&&t!=l||(f=u===d-1?0:u+1),!m.should.ignoreCallbacks()&&!1!==f){if(!1===g.beforeUnchecked.apply(b))return m.verbose("Option not allowed to be unchecked, cancelling key navigation"),!1;if(!1===g.beforeChecked.apply(S(c[f]).children(p.input)[0]))return m.verbose("Next option should not allow check, cancelling key navigation"),!1}y=t==o?(m.verbose("Escape key pressed blurring field"),v.blur(),!0):!(e.ctrlKey||!(t==i||t==n&&g.enableEnterKey))&&(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),!0)},keyup:function(e){y&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",v),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},indeterminate:function(){m.should.allowIndeterminate()?m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),m.should.ignoreCallbacks()||(g.onIndeterminate.call(b),m.trigger.change()))},determinate:function(){m.should.allowDeterminate()?m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),m.should.ignoreCallbacks()||(g.onDeterminate.call(b),m.trigger.change()))},enable:function(){m.is.enabled()?m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),m.should.ignoreCallbacks()||(g.onEnable.call(b),g.onEnabled.call(b),m.trigger.change()))},disable:function(){m.is.disabled()?m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),m.should.ignoreCallbacks()||(g.onDisable.call(b),g.onDisabled.call(b),m.trigger.change()))},get:{radios:function(){var e=m.get.name();return S('input[name="'+e+'"]').closest(p.checkbox)},otherRadios:function(){return m.get.radios().not(h)},name:function(){return v.attr("name")}},is:{initialLoad:function(){return r},radio:function(){return v.hasClass(t.radio)||"radio"==v.attr("type")},indeterminate:function(){return v.prop("indeterminate")!==E&&v.prop("indeterminate")},checked:function(){return v.prop("checked")!==E&&v.prop("checked")},disabled:function(){return v.prop("disabled")!==E&&v.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.is.initialLoad()?(m.debug("Should not allow check, checkbox is already checked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeChecked.apply(b))||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.is.initialLoad()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeUnchecked.apply(b))||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.is.initialLoad()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeIndeterminate.apply(b))||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.is.initialLoad()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeDeterminate.apply(b))||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},ignoreCallbacks:function(){return r&&!g.fireOnInit}},can:{change:function(){return!(h.hasClass(t.disabled)||h.hasClass(t.readOnly)||v.prop("disabled")||v.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){r=!0},checked:function(){m.verbose("Setting class to checked"),h.removeClass(t.indeterminate).addClass(t.checked),m.is.radio()&&m.uncheckOthers(),m.is.indeterminate()||!m.is.checked()?(m.verbose("Setting state to checked",b),v.prop("indeterminate",!1).prop("checked",!0)):m.debug("Input is already checked, skipping input property change")},unchecked:function(){m.verbose("Removing checked class"),h.removeClass(t.indeterminate).removeClass(t.checked),m.is.indeterminate()||!m.is.unchecked()?(m.debug("Setting state to unchecked"),v.prop("indeterminate",!1).prop("checked",!1)):m.debug("Input is already unchecked")},indeterminate:function(){m.verbose("Setting class to indeterminate"),h.addClass(t.indeterminate),m.is.indeterminate()?m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),v.prop("indeterminate",!0))},determinate:function(){m.verbose("Removing indeterminate class"),h.removeClass(t.indeterminate),m.is.determinate()?m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),v.prop("indeterminate",!1))},disabled:function(){m.verbose("Setting class to disabled"),h.addClass(t.disabled),m.is.disabled()?m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),v.prop("disabled","disabled"))},enabled:function(){m.verbose("Removing disabled class"),h.removeClass(t.disabled),m.is.enabled()?m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),v.prop("disabled",!1))},tabbable:function(){m.verbose("Adding tabindex to checkbox"),v.attr("tabindex")===E&&v.attr("tabindex",0)}},remove:{initialLoad:function(){r=!1}},trigger:{change:function(){var e=v[0];if(e){var t=A.createEvent("HTMLEvents");m.verbose("Triggering native change event"),t.initEvent("change",!0,!1),e.dispatchEvent(t)}}},create:{label:function(){0<v.prevAll(p.label).length?(v.prev(p.label).detach().insertAfter(v),m.debug("Moving existing label",a)):m.has.label()||(a=S("<label>").insertAfter(v),m.debug("Creating label",a))}},has:{label:function(){return 0<a.length}},bind:{events:function(){m.verbose("Attaching checkbox events"),h.on("click"+i,m.event.click).on("change"+i,m.event.change).on("keydown"+i,p.input,m.event.keydown).on("keyup"+i,p.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),h.off(i)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(t.checked)},toggle:function(){m.can.change()?m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck()):m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(e,t){if(m.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,g,e);else{if(t===E)return g[e];S.isPlainObject(g[e])?S.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,m,e);else{if(t===E)return m[e];m[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var e=g.name+":",n=0;x=!1,clearTimeout(m.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||T,t=c||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E?a=r[t]:m.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(d)?d.push(n):d!==E?d=[d,n]:n!==E&&(d=n),a}},k?(l===E&&m.initialize(),m.invoke(w)):(l!==E&&l.invoke("destroy"),m.initialize())}),d!==E?d:this},S.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,enableEnterKey:!0,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(k,e,T,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.dimmer=function(p){var h,v=k(this),b=(new Date).getTime(),y=[],x=p,C="string"==typeof x,w=[].slice.call(arguments,1);return v.each(function(){var o,t,s,a=k.isPlainObject(p)?k.extend(!0,{},k.fn.dimmer.settings,p):k.extend({},k.fn.dimmer.settings),n=a.selector,e=a.namespace,i=a.className,l=a.error,r="."+e,c="module-"+e,u=v.selector||"",d="ontouchstart"in T.documentElement?"touchstart":"click",f=k(this),m=this,g=f.data(c);(s={preinitialize:function(){o=s.is.dimmer()?(t=f.parent(),f):(t=f,s.has.dimmer()?a.dimmerName?t.find(n.dimmer).filter("."+a.dimmerName):t.find(n.dimmer):s.create())},initialize:function(){s.debug("Initializing dimmer",a),s.bind.events(),s.set.dimmable(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,f.data(c,g)},destroy:function(){s.verbose("Destroying previous module",o),s.unbind.events(),s.remove.variation(),t.off(r)},bind:{events:function(){"hover"==a.on?t.on("mouseenter"+r,s.show).on("mouseleave"+r,s.hide):"click"==a.on&&t.on(d+r,s.toggle),s.is.page()&&(s.debug("Setting as a page dimmer",t),s.set.pageDimmer()),s.is.closable()&&(s.verbose("Adding dimmer close event",o),t.on(d+r,n.dimmer,s.event.click))}},unbind:{events:function(){f.removeData(c),t.off(r)}},event:{click:function(e){s.verbose("Determining if event occured on dimmer",e),0!==o.find(e.target).length&&!k(e.target).is(n.content)||(s.hide(),e.stopImmediatePropagation())}},addContent:function(e){var t=k(e);s.debug("Add content to dimmer",t),t.parent()[0]!==o[0]&&t.detach().appendTo(o)},create:function(){var e=k(a.template.dimmer(a));return a.dimmerName&&(s.debug("Creating named dimmer",a.dimmerName),e.addClass(a.dimmerName)),e.appendTo(t),e},show:function(e){e=k.isFunction(e)?e:function(){},s.debug("Showing dimmer",o,a),s.set.variation(),s.is.dimmed()&&!s.is.animating()||!s.is.enabled()?s.debug("Dimmer is already shown or disabled"):(s.animate.show(e),a.onShow.call(m),a.onChange.call(m))},hide:function(e){e=k.isFunction(e)?e:function(){},s.is.dimmed()||s.is.animating()?(s.debug("Hiding dimmer",o),s.animate.hide(e),a.onHide.call(m),a.onChange.call(m)):s.debug("Dimmer is not visible")},toggle:function(){s.verbose("Toggling dimmer visibility",o),s.is.dimmed()?s.is.closable()&&s.hide():s.show()},animate:{show:function(e){e=k.isFunction(e)?e:function(){},a.useCSS&&k.fn.transition!==S&&o.transition("is supported")?(a.useFlex?(s.debug("Using flex dimmer"),s.remove.legacy()):(s.debug("Using legacy non-flex dimmer"),s.set.legacy()),"auto"!==a.opacity&&s.set.opacity(),o.transition({displayType:a.useFlex?"flex":"block",animation:a.transition+" in",queue:!1,duration:s.get.duration(),useFailSafe:!0,onStart:function(){s.set.dimmed()},onComplete:function(){s.set.active(),e()}})):(s.verbose("Showing dimmer animation with javascript"),s.set.dimmed(),"auto"==a.opacity&&(a.opacity=.8),o.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(s.get.duration(),a.opacity,function(){o.removeAttr("style"),s.set.active(),e()}))},hide:function(e){e=k.isFunction(e)?e:function(){},a.useCSS&&k.fn.transition!==S&&o.transition("is supported")?(s.verbose("Hiding dimmer with css"),o.transition({displayType:a.useFlex?"flex":"block",animation:a.transition+" out",queue:!1,duration:s.get.duration(),useFailSafe:!0,onComplete:function(){s.remove.dimmed(),s.remove.variation(),s.remove.active(),e()}})):(s.verbose("Hiding dimmer with javascript"),o.stop().fadeOut(s.get.duration(),function(){s.remove.dimmed(),s.remove.active(),o.removeAttr("style"),e()}))}},get:{dimmer:function(){return o},duration:function(){return"object"==typeof a.duration?s.is.active()?a.duration.hide:a.duration.show:a.duration}},has:{dimmer:function(){return a.dimmerName?0<f.find(n.dimmer).filter("."+a.dimmerName).length:0<f.find(n.dimmer).length}},is:{active:function(){return o.hasClass(i.active)},animating:function(){return o.is(":animated")||o.hasClass(i.animating)},closable:function(){return"auto"==a.closable?"hover"!=a.on:a.closable},dimmer:function(){return f.hasClass(i.dimmer)},dimmable:function(){return f.hasClass(i.dimmable)},dimmed:function(){return t.hasClass(i.dimmed)},disabled:function(){return t.hasClass(i.disabled)},enabled:function(){return!s.is.disabled()},page:function(){return t.is("body")},pageDimmer:function(){return o.hasClass(i.pageDimmer)}},can:{show:function(){return!o.hasClass(i.disabled)}},set:{opacity:function(e){var t=o.css("background-color"),n=t.split(","),i=n&&3<=n.length;e=0===a.opacity?0:a.opacity||e,t=i?(n[2]=n[2].replace(")",""),n[3]=e+")",n.join(",")):"rgba(0, 0, 0, "+e+")",s.debug("Setting opacity to",e),o.css("background-color",t)},legacy:function(){o.addClass(i.legacy)},active:function(){o.addClass(i.active)},dimmable:function(){t.addClass(i.dimmable)},dimmed:function(){t.addClass(i.dimmed)},pageDimmer:function(){o.addClass(i.pageDimmer)},disabled:function(){o.addClass(i.disabled)},variation:function(e){(e=e||a.variation)&&o.addClass(e)}},remove:{active:function(){o.removeClass(i.active)},legacy:function(){o.removeClass(i.legacy)},dimmed:function(){t.removeClass(i.dimmed)},disabled:function(){o.removeClass(i.disabled)},variation:function(e){(e=e||a.variation)&&o.removeClass(e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,a,e);else{if(t===S)return a[e];k.isPlainObject(a[e])?k.extend(!0,a[e],t):a[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!a.silent&&a.debug&&(a.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,a.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!a.silent&&a.verbose&&a.debug&&(a.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,a.name+":"),s.verbose.apply(console,arguments)))},error:function(){a.silent||(s.error=Function.prototype.bind.call(console.error,console,a.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;a.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=a.name+":",n=0;b=!1,clearTimeout(s.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",u&&(e+=" '"+u+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||w,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}}).preinitialize(),C?(g===S&&s.initialize(),s.invoke(x)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},k.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},displayLoader:!1,loaderText:!1,loaderVariation:"",onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show",loader:"ui loader"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(e){var t,n=k("<div/>").addClass("ui dimmer");return e.displayLoader&&(t=k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation),e.loaderText&&(t.text(e.loaderText),t.addClass("text")),n.append(t)),n}}}}(jQuery,window,document),function(ee,te,ne,ie){"use strict";ee.isFunction=ee.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},te=void 0!==te&&te.Math==Math?te:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),ee.fn.dropdown=function(U){var B,W=ee(this),Y=ee(ne),Q=W.selector||"",X="ontouchstart"in ne.documentElement,$=X?"touchstart":"click",G=(new Date).getTime(),K=[],J=U,Z="string"==typeof J,_=[].slice.call(arguments,1);return W.each(function(n){var c,e,t,i,o,a,r,s,l,p,g=ee.isPlainObject(U)?ee.extend(!0,{},ee.fn.dropdown.settings,U):ee.extend({},ee.fn.dropdown.settings),h=g.className,u=g.message,d=g.fields,v=g.keys,b=g.metadata,f=g.namespace,m=g.regExp,y=g.selector,x=g.error,C=g.templates,w="."+f,k="module-"+f,T=ee(this),S=ee(g.context),D=T.find(y.text),A=T.find(y.search),E=T.find(y.sizer),F=T.find(y.input),P=T.find(y.icon),O=T.find(y.clearIcon),R=0<T.prev().find(y.text).length?T.prev().find(y.text):T.prev(),M=T.children(y.menu),I=M.find(y.item),j=g.hideDividers?I.parent().children(y.divider):ee(),L=!1,q=!1,V=!1,z=!1,N=this,H=T.data(k);p={initialize:function(){p.debug("Initializing dropdown",g),p.is.alreadySetup()?p.setup.reference():(g.ignoreDiacritics&&!String.prototype.normalize&&(g.ignoreDiacritics=!1,p.error(x.noNormalize,N)),p.setup.layout(),g.values&&(p.set.initialLoad(),p.change.values(g.values),p.remove.initialLoad()),p.refreshData(),p.save.defaults(),p.restore.selected(),p.create.id(),p.bind.events(),p.observeChanges(),p.instantiate())},instantiate:function(){p.verbose("Storing instance of dropdown",p),H=p,T.data(k,p)},destroy:function(){p.verbose("Destroying previous dropdown",T),p.remove.tabbable(),p.remove.active(),M.transition("stop all"),M.removeClass(h.visible).addClass(h.hidden),T.off(w).removeData(k),M.off(w),Y.off(o),p.disconnect.menuObserver(),p.disconnect.selectObserver(),p.disconnect.classObserver()},observeChanges:function(){"MutationObserver"in te&&(r=new MutationObserver(p.event.select.mutation),s=new MutationObserver(p.event.menu.mutation),l=new MutationObserver(p.event.class.mutation),p.debug("Setting up mutation observer",r,s,l),p.observe.select(),p.observe.menu(),p.observe.class())},disconnect:{menuObserver:function(){s&&s.disconnect()},selectObserver:function(){r&&r.disconnect()},classObserver:function(){l&&l.disconnect()}},observe:{select:function(){p.has.input()&&r&&r.observe(T[0],{childList:!0,subtree:!0})},menu:function(){p.has.menu()&&s&&s.observe(M[0],{childList:!0,subtree:!0})},class:function(){p.has.search()&&l&&l.observe(T[0],{attributes:!0})}},create:{id:function(){a=(Math.random().toString(16)+"000000000").substr(2,8),o="."+a,p.verbose("Creating unique id for element",a)},userChoice:function(e){var n,i,o;return!!(e=e||p.get.userValues())&&(e=Array.isArray(e)?e:[e],ee.each(e,function(e,t){!1===p.get.item(t)&&(o=g.templates.addition(p.add.variables(u.addResult,t)),i=ee("<div />").html(o).attr("data-"+b.value,t).attr("data-"+b.text,t).addClass(h.addition).addClass(h.item),g.hideAdditions&&i.addClass(h.hidden),n=n===ie?i:n.add(i),p.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=p.get.userValues();t&&(p.debug("Adding user labels",t),ee.each(t,function(e,t){p.verbose("Adding custom user value"),p.add.label(t,t)}))},menu:function(){M=ee("<div />").addClass(h.menu).appendTo(T)},sizer:function(){E=ee("<span />").addClass(h.sizer).insertAfter(A)}},search:function(e){e=e!==ie?e:p.get.query(),p.verbose("Searching for query",e),p.has.minCharacters(e)?p.filter(e):p.hide(null,!0)},select:{firstUnfiltered:function(){p.verbose("Selecting first non-filtered element"),p.remove.selectedItem(),I.not(y.unselectable).not(y.addition+y.hidden).eq(0).addClass(h.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),n=e.prevAll(y.item).not(y.unselectable).eq(0);0<t.length?(p.verbose("Moving selection to",t),t.addClass(h.selected)):(p.verbose("Moving selection to",n),n.addClass(h.selected))}},setup:{api:function(){var e={debug:g.debug,urlData:{value:p.get.value(),query:p.get.query()},on:!1};p.verbose("First request, initializing API"),T.api(e)},layout:function(){T.is("select")&&(p.setup.select(),p.setup.returnedObject()),p.has.menu()||p.create.menu(),p.is.selection()&&p.is.clearable()&&!p.has.clearItem()&&(p.verbose("Adding clear icon"),O=ee("<i />").addClass("remove icon").insertBefore(D)),p.is.search()&&!p.has.search()&&(p.verbose("Adding search input"),A=ee("<input />").addClass(h.search).prop("autocomplete","off").insertBefore(D)),p.is.multiple()&&p.is.searchSelection()&&!p.has.sizer()&&p.create.sizer(),g.allowTab&&p.set.tabbable()},select:function(){var e=p.get.selectValues();p.debug("Dropdown initialized on a select",e),T.is("select")&&(F=T),0<F.parent(y.dropdown).length?(p.debug("UI dropdown already exists. Creating dropdown menu only"),T=F.closest(y.dropdown),p.has.menu()||p.create.menu(),M=T.children(y.menu),p.setup.menu(e)):(p.debug("Creating entire dropdown from select"),T=ee("<div />").attr("class",F.attr("class")).addClass(h.selection).addClass(h.dropdown).html(C.dropdown(e,d,g.preserveHTML,g.className)).insertBefore(F),F.hasClass(h.multiple)&&!1===F.prop("multiple")&&(p.error(x.missingMultiple),F.prop("multiple",!0)),F.is("[multiple]")&&p.set.multiple(),F.prop("disabled")&&(p.debug("Disabling dropdown"),T.addClass(h.disabled)),F.removeAttr("required").removeAttr("class").detach().prependTo(T)),p.refresh()},menu:function(e){M.html(C.menu(e,d,g.preserveHTML,g.className)),I=M.find(y.item),j=g.hideDividers?I.parent().children(y.divider):ee()},reference:function(){p.debug("Dropdown behavior was called on select, replacing with closest dropdown"),T=T.parent(y.dropdown),H=T.data(k),N=T.get(0),p.refresh(),p.setup.returnedObject()},returnedObject:function(){var e=W.slice(0,n),t=W.slice(n+1);W=e.add(T).add(t)}},refresh:function(){p.refreshSelectors(),p.refreshData()},refreshItems:function(){I=M.find(y.item),j=g.hideDividers?I.parent().children(y.divider):ee()},refreshSelectors:function(){p.verbose("Refreshing selector cache"),D=T.find(y.text),A=T.find(y.search),F=T.find(y.input),P=T.find(y.icon),R=0<T.prev().find(y.text).length?T.prev().find(y.text):T.prev(),M=T.children(y.menu),I=M.find(y.item),j=g.hideDividers?I.parent().children(y.divider):ee()},refreshData:function(){p.verbose("Refreshing cached metadata"),I.removeData(b.text).removeData(b.value)},clearData:function(){p.verbose("Clearing metadata"),I.removeData(b.text).removeData(b.value),T.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)},toggle:function(){p.verbose("Toggling menu visibility"),p.is.active()?p.hide():p.show()},show:function(e,t){if(e=ee.isFunction(e)?e:function(){},!p.can.show()&&p.is.remote()&&(p.debug("No API results retrieved, searching before show"),p.queryRemote(p.get.query(),p.show)),p.can.show()&&!p.is.active()){if(p.debug("Showing dropdown"),!p.has.message()||p.has.maxSelections()||p.has.allResultsFiltered()||p.remove.message(),p.is.allFiltered())return!0;!1!==g.onShow.call(N)&&p.animate.show(function(){p.can.click()&&p.bind.intent(),p.has.search()&&!t&&p.focusSearch(),p.set.visible(),e.call(N)})}},hide:function(e,t){e=ee.isFunction(e)?e:function(){},p.is.active()&&!p.is.animatingOutward()?(p.debug("Hiding dropdown"),!1!==g.onHide.call(N)&&p.animate.hide(function(){p.remove.visible(),p.is.focusedOnSearch()&&!0!==t&&A.blur(),e.call(N)})):p.can.click()&&p.unbind.intent(),z=!1},hideOthers:function(){p.verbose("Finding other dropdowns to hide"),W.not(T).has(y.menu+"."+h.visible).dropdown("hide")},hideMenu:function(){p.verbose("Hiding menu  instantaneously"),p.remove.active(),p.remove.visible(),M.transition("hide")},hideSubMenus:function(){var e=M.children(y.item).find(y.menu);p.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){p.bind.keyboardEvents(),p.bind.inputEvents(),p.bind.mouseEvents()},keyboardEvents:function(){p.verbose("Binding keyboard events"),T.on("keydown"+w,p.event.keydown),p.has.search()&&T.on(p.get.inputEvent()+w,y.search,p.event.input),p.is.multiple()&&Y.on("keydown"+o,p.event.document.keydown)},inputEvents:function(){p.verbose("Binding input change events"),T.on("change"+w,y.input,p.event.change)},mouseEvents:function(){p.verbose("Binding mouse events"),p.is.multiple()&&T.on($+w,y.label,p.event.label.click).on($+w,y.remove,p.event.remove.click),p.is.searchSelection()?(T.on("mousedown"+w,p.event.mousedown).on("mouseup"+w,p.event.mouseup).on("mousedown"+w,y.menu,p.event.menu.mousedown).on("mouseup"+w,y.menu,p.event.menu.mouseup).on($+w,y.icon,p.event.icon.click).on($+w,y.clearIcon,p.event.clearIcon.click).on("focus"+w,y.search,p.event.search.focus).on($+w,y.search,p.event.search.focus).on("blur"+w,y.search,p.event.search.blur).on($+w,y.text,p.event.text.focus),p.is.multiple()&&T.on($+w,p.event.click)):("click"==g.on?T.on($+w,y.icon,p.event.icon.click).on($+w,p.event.test.toggle):"hover"==g.on?T.on("mouseenter"+w,p.delay.show).on("mouseleave"+w,p.delay.hide):T.on(g.on+w,p.toggle),T.on("mousedown"+w,p.event.mousedown).on("mouseup"+w,p.event.mouseup).on("focus"+w,p.event.focus).on($+w,y.clearIcon,p.event.clearIcon.click),p.has.menuSearch()?T.on("blur"+w,y.search,p.event.search.blur):T.on("blur"+w,p.event.blur)),M.on((X?"touchstart":"mouseenter")+w,y.item,p.event.item.mouseenter).on("mouseleave"+w,y.item,p.event.item.mouseleave).on("click"+w,y.item,p.event.item.click)},intent:function(){p.verbose("Binding hide intent event to document"),X&&Y.on("touchstart"+o,p.event.test.touch).on("touchmove"+o,p.event.test.touch),Y.on($+o,p.event.test.hide)}},unbind:{intent:function(){p.verbose("Removing hide intent event from document"),X&&Y.off("touchstart"+o).off("touchmove"+o),Y.off($+o)}},filter:function(e){function t(){p.is.multiple()&&p.filterActive(),(e||!e&&0==p.get.activeItem().length)&&p.select.firstUnfiltered(),p.has.allResultsFiltered()?g.onNoResults.call(N,n)?g.allowAdditions?g.hideAdditions&&(p.verbose("User addition with no menu, setting empty style"),p.set.empty(),p.hideMenu()):(p.verbose("All items filtered, showing message",n),p.add.message(u.noResults)):(p.verbose("All items filtered, hiding dropdown",n),p.hideMenu()):(p.remove.empty(),p.remove.message()),g.allowAdditions&&p.add.userSuggestion(p.escape.htmlEntities(e)),p.is.searchSelection()&&p.can.show()&&p.is.focusedOnSearch()&&p.show()}var n=e!==ie?e:p.get.query();g.useLabels&&p.has.maxSelections()||(g.apiSettings?p.can.useAPI()?p.queryRemote(n,function(){g.filterRemoteData&&p.filterItems(n);var e=F.val();Array.isArray(e)||(e=e&&""!==e?e.split(g.delimiter):[]),ee.each(e,function(e,t){I.filter('[data-value="'+t+'"]').addClass(h.filtered)}),t()}):p.error(x.noAPI):(p.filterItems(n),t()))},queryRemote:function(e,i){var t={errorDuration:!1,cache:"local",throttle:g.throttle,urlData:{query:e},onError:function(){p.add.message(u.serverError),i()},onFailure:function(){p.add.message(u.serverError),i()},onSuccess:function(e){var t=e[d.remoteValues];Array.isArray(t)||(t=[]),p.remove.message();var n={};n[d.values]=t,p.setup.menu(n),0!==t.length||g.allowAdditions||p.add.message(u.noResults),i()}};T.api("get request")||p.setup.api(),t=ee.extend(!0,{},t,g.apiSettings),T.api("setting",t).api("query")},filterItems:function(e){var i=p.remove.diacritics(e!==ie?e:p.get.query()),o=null,t=p.escape.string(i),n=(g.ignoreSearchCase?"i":"")+"gm",a=new RegExp("^"+t,n);p.has.query()&&(o=[],p.verbose("Searching for matching values",i),I.each(function(){var e,t,n=ee(this);if(n.hasClass(h.unfilterable))return o.push(this),!0;if("both"===g.match||"text"===g.match){if(-1!==(e=p.remove.diacritics(String(p.get.choiceText(n,!1)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,e))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,e))return o.push(this),!0}if("both"===g.match||"value"===g.match){if(-1!==(t=p.remove.diacritics(String(p.get.choiceValue(n,e)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,t))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,t))return o.push(this),!0}})),p.debug("Showing only matched items",i),p.remove.filteredItem(),o&&I.not(o).addClass(h.filtered),p.has.query()?!0===g.hideDividers?j.addClass(h.hidden):"empty"===g.hideDividers&&j.removeClass(h.hidden).filter(function(){var e=ee(this).nextUntil(y.item);return 0===(e.length?e:ee(this)).nextUntil(y.divider).filter(y.item+":not(."+h.filtered+")").length}).addClass(h.hidden):j.removeClass(h.hidden)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=g.ignoreSearchCase?e.toLowerCase():e,t=g.ignoreSearchCase?t.toLowerCase():t,n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=g.ignoreSearchCase?e.toLowerCase():e,-1<(t=g.ignoreSearchCase?t.toLowerCase():t).indexOf(e)},filterActive:function(){g.useLabels&&I.filter("."+h.active).addClass(h.filtered)},focusSearch:function(e){p.has.search()&&!p.is.focusedOnSearch()&&(e?(T.off("focus"+w,y.search),A.focus(),T.on("focus"+w,y.search,p.event.search.focus)):A.focus())},blurSearch:function(){p.has.search()&&A.blur()},forceSelection:function(){var e=I.not(h.filtered).filter("."+h.selected).eq(0),t=I.not(h.filtered).filter("."+h.active).eq(0),n=0<e.length?e:t,i=0<n.length;g.allowAdditions||i&&!p.is.multiple()?(p.debug("Forcing partial selection to selected item",n),p.event.item.click.call(n,{},!0)):p.remove.searchTerm()},change:{values:function(e){g.allowAdditions||p.clear(),p.debug("Creating dropdown with specified values",e);var t={};t[d.values]=e,p.setup.menu(t),ee.each(e,function(e,t){if(1==t.selected&&(p.debug("Setting initial selection to",t[d.value]),p.set.selected(t[d.value]),!p.is.multiple()))return!1}),p.has.selectInput()&&(p.disconnect.selectObserver(),F.html(""),F.append("<option disabled selected value></option>"),ee.each(e,function(e,t){var n=g.templates.deQuote(t[d.value]),i=g.templates.escape(t[d.name]||"",g.preserveHTML);F.append('<option value="'+n+'">'+i+"</option>")}),p.observe.select())}},event:{change:function(){V||(p.debug("Input changed, updating selection"),p.set.selected())},focus:function(){g.showOnFocus&&!L&&p.is.hidden()&&!t&&p.show()},blur:function(e){t=ne.activeElement===this,L||t||(p.remove.activeLabel(),p.hide())},mousedown:function(){p.is.searchSelection()?i=!0:L=!0},mouseup:function(){p.is.searchSelection()?i=!1:L=!1},click:function(e){ee(e.target).is(T)&&(p.is.focusedOnSearch()?p.show():p.focusSearch())},search:{focus:function(e){L=!0,p.is.multiple()&&p.remove.activeLabel(),(g.showOnFocus||"focus"!==e.type&&"focusin"!==e.type)&&p.search()},blur:function(e){t=ne.activeElement===this,p.is.searchSelection()&&!i&&(q||t||(g.forceSelection?p.forceSelection():g.allowAdditions||p.remove.searchTerm(),p.hide())),i=!1}},clearIcon:{click:function(e){p.clear(),p.is.searchSelection()&&p.remove.searchTerm(),p.hide(),e.stopPropagation()}},icon:{click:function(e){z=!0,p.has.search()?p.is.active()?p.blurSearch():g.showOnFocus?p.focusSearch():p.toggle():p.toggle()}},text:{focus:function(e){L=!0,p.focusSearch()}},input:function(e){(p.is.multiple()||p.is.searchSelection())&&p.set.filtered(),clearTimeout(p.timer),p.timer=setTimeout(p.search,g.delay.search)},label:{click:function(e){var t=ee(this),n=T.find(y.label),i=n.filter("."+h.active),o=t.nextAll("."+h.active),a=t.prevAll("."+h.active),r=0<o.length?t.nextUntil(o).add(i).add(t):t.prevUntil(a).add(i).add(t);e.shiftKey?(i.removeClass(h.active),r.addClass(h.active)):e.ctrlKey?t.toggleClass(h.active):(i.removeClass(h.active),t.addClass(h.active)),g.onLabelSelect.apply(this,n.filter("."+h.active))}},remove:{click:function(){var e=ee(this).parent();e.hasClass(h.active)?p.remove.activeLabels():p.remove.activeLabels(e)}},test:{toggle:function(e){var t=p.is.multiple()?p.show:p.toggle;p.is.bubbledLabelClick(e)||p.is.bubbledIconClick(e)||p.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){p.determine.eventOnElement(e,function(){"touchstart"==e.type?p.timer=setTimeout(function(){p.hide()},g.delay.touch):"touchmove"==e.type&&clearTimeout(p.timer)}),e.stopPropagation()},hide:function(e){p.determine.eventInModule(e,p.hide)&&N.id&&ee(e.target).attr("for")===N.id&&e.preventDefault()}},class:{mutation:function(e){e.forEach(function(e){"class"===e.attributeName&&p.check.disabled()})}},select:{mutation:function(e){p.debug("<select> modified, recreating menu"),p.is.selectMutation(e)&&(p.disconnect.selectObserver(),p.refresh(),p.setup.select(),p.set.selected(),p.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?ee(t.addedNodes[0]):ee(!1),i=t.removedNodes?ee(t.removedNodes[0]):ee(!1),o=n.add(i),a=o.is(y.addition)||0<o.closest(y.addition).length,r=o.is(y.message)||0<o.closest(y.message).length;a||r?(p.debug("Updating item selector cache"),p.refreshItems()):(p.debug("Menu modified, updating selector cache"),p.refresh())},mousedown:function(){q=!0},mouseup:function(){q=!1}},item:{mouseenter:function(e){var t=ee(e.target),n=ee(this),i=n.children(y.menu),o=n.siblings(y.item).children(y.menu),a=0<i.length;0<i.find(t).length||!a||(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Showing sub-menu",i),ee.each(o,function(){p.animate.hide(!1,ee(this))}),p.animate.show(!1,i)},g.delay.show),e.preventDefault())},mouseleave:function(e){var t=ee(this).children(y.menu);0<t.length&&(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Hiding sub-menu",t),p.animate.hide(!1,t)},g.delay.hide))},click:function(e,t){var n=ee(this),i=ee(e?e.target:""),o=n.find(y.menu),a=p.get.choiceText(n),r=p.get.choiceValue(n,a),s=0<o.length,l=0<o.find(i).length;"input"!==ne.activeElement.tagName.toLowerCase()&&ee(ne.activeElement).blur(),l||s&&!g.allowCategorySelection||(p.is.searchSelection()&&(g.allowAdditions&&p.remove.userAddition(),p.remove.searchTerm(),p.is.focusedOnSearch()||1==t||p.focusSearch(!0)),g.useLabels||(p.remove.filteredItem(),p.set.scrollPosition(n)),p.determine.selectAction.call(this,a,r))}},document:{keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n=T.find(y.label),i=n.filter("."+h.active),o=(i.data(b.value),n.index(i)),a=n.length,r=0<i.length,s=1<i.length,l=0===o,c=o+1==a,u=p.is.searchSelection(),d=p.is.focusedOnSearch(),f=p.is.focused(),m=d&&0===p.get.caretPosition(!1),g=m&&0!==p.get.caretPosition(!0);if(u&&!r&&!d)return;t==v.leftArrow?!f&&!m||r?r&&(e.shiftKey?p.verbose("Adding previous label to selection"):(p.verbose("Selecting previous label"),n.removeClass(h.active)),l&&!s?i.addClass(h.active):i.prev(y.siblingLabel).addClass(h.active).end(),e.preventDefault()):(p.verbose("Selecting previous label"),n.last().addClass(h.active)):t==v.rightArrow?(f&&!r&&n.first().addClass(h.active),r&&(e.shiftKey?p.verbose("Adding next label to selection"):(p.verbose("Selecting next label"),n.removeClass(h.active)),c?u?d?n.removeClass(h.active):p.focusSearch():s?i.next(y.siblingLabel).addClass(h.active):i.addClass(h.active):i.next(y.siblingLabel).addClass(h.active),e.preventDefault())):t==v.deleteKey||t==v.backspace?r?(p.verbose("Removing active labels"),c&&u&&!d&&p.focusSearch(),i.last().next(y.siblingLabel).addClass(h.active),p.remove.activeLabels(i),e.preventDefault()):!m||g||r||t!=v.backspace||(p.verbose("Removing last label on input backspace"),i=n.last().addClass(h.active),p.remove.activeLabels(i)):i.removeClass(h.active)}}},keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n,i=I.not(y.unselectable).filter("."+h.selected).eq(0),o=M.children("."+h.active).eq(0),a=0<i.length?i:o,r=0<a.length?a.siblings(":not(."+h.filtered+")").addBack():M.children(":not(."+h.filtered+")"),s=a.children(y.menu),l=a.closest(y.menu),c=l.hasClass(h.visible)||l.hasClass(h.animating)||0<l.parent(y.menu).length,u=0<s.length,d=0<a.length,f=0<a.not(y.unselectable).length,m=t==v.delimiter&&g.allowAdditions&&p.is.multiple();if(g.allowAdditions&&g.hideAdditions&&(t==v.enter||m)&&f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&p.remove.searchTerm(),p.is.multiple()&&e.preventDefault()),p.is.visible()){if(t!=v.enter&&!m||(t==v.enter&&d&&u&&!g.allowCategorySelection?(p.verbose("Pressed enter on unselectable category, opening sub menu"),t=v.rightArrow):f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&(p.remove.searchTerm(),p.is.multiple()&&A.focus())),e.preventDefault()),d&&(t==v.leftArrow&&l[0]!==M[0]&&(p.verbose("Left key pressed, closing sub-menu"),p.animate.hide(!1,l),a.removeClass(h.selected),l.closest(y.item).addClass(h.selected),e.preventDefault()),t==v.rightArrow&&u&&(p.verbose("Right key pressed, opening sub-menu"),p.animate.show(!1,s),a.removeClass(h.selected),s.find(y.item).eq(0).addClass(h.selected),e.preventDefault())),t==v.upArrow){if(n=d&&c?a.prevAll(y.item+":not("+y.unselectable+")").eq(0):I.eq(0),r.index(n)<0)return p.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();p.verbose("Up key pressed, changing active item"),a.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}if(t==v.downArrow){if(0===(n=d&&c?n=a.nextAll(y.item+":not("+y.unselectable+")").eq(0):I.eq(0)).length)return p.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();p.verbose("Down key pressed, changing active item"),I.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}t==v.pageUp&&(p.scrollPage("up"),e.preventDefault()),t==v.pageDown&&(p.scrollPage("down"),e.preventDefault()),t==v.escape&&(p.verbose("Escape key pressed, closing dropdown"),p.hide())}else m&&e.preventDefault(),t!=v.downArrow||p.is.visible()||(p.verbose("Down key pressed, showing dropdown"),p.show(),e.preventDefault())}else p.has.search()||p.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=F[0];if(e){var t=ne.createEvent("HTMLEvents");p.verbose("Triggering native change event"),t.initEvent("change",!0,!1),e.dispatchEvent(t)}}},determine:{selectAction:function(e,t){c=!0,p.verbose("Determining action",g.action),ee.isFunction(p.action[g.action])?(p.verbose("Triggering preset action",g.action,e,t),p.action[g.action].call(N,e,t,this)):ee.isFunction(g.action)?(p.verbose("Triggering user action",g.action,e,t),g.action.call(N,e,t,this)):p.error(x.action,g.action),c=!1},eventInModule:function(e,t){var n=ee(e.target),i=0<n.closest(ne.documentElement).length,o=0<n.closest(T).length;return t=ee.isFunction(t)?t:function(){},i&&!o?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=ee(e.target),i=n.closest(y.siblingLabel),o=ne.body.contains(e.target),a=0===T.find(i).length||!(p.is.multiple()&&g.useLabels),r=0===n.closest(M).length;return t=ee.isFunction(t)?t:function(){},o&&a&&r?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){t=t!==ie?t:e,p.can.activate(ee(n))&&(p.set.selected(t,ee(n)),p.is.multiple()||p.hideAndClear())},select:function(e,t,n){t=t!==ie?t:e,p.can.activate(ee(n))&&(p.set.value(t,e,ee(n)),p.is.multiple()||p.hideAndClear())},combo:function(e,t,n){t=t!==ie?t:e,p.set.selected(t,ee(n)),p.hideAndClear()},hide:function(e,t,n){p.set.value(t,e,ee(n)),p.hideAndClear()}},get:{id:function(){return a},defaultText:function(){return T.data(b.defaultText)},defaultValue:function(){return T.data(b.defaultValue)},placeholderText:function(){return"auto"!=g.placeholder&&"string"==typeof g.placeholder?g.placeholder:T.data(b.placeholderText)||""},text:function(){return g.preserveHTML?D.html():D.text()},query:function(){return String(A.val()).trim()},searchWidth:function(e){return e=e!==ie?e:A.val(),E.text(e),Math.ceil(E.width()+1)},selectionCount:function(){var e=p.get.values();return p.is.multiple()?Array.isArray(e)?e.length:0:""!==p.get.value()?1:0},transition:function(e){return"auto"==g.transition?p.is.upward(e)?"slide up":"slide down":g.transition},userValues:function(){var e=p.get.values();return!!e&&(e=Array.isArray(e)?e:[e],ee.grep(e,function(e){return!1===p.get.item(e)}))},uniqueArray:function(n){return ee.grep(n,function(e,t){return ee.inArray(e,n)===t})},caretPosition:function(e){var t,n,i=A.get(0);return e&&"selectionEnd"in i?i.selectionEnd:!e&&"selectionStart"in i?i.selectionStart:ne.selection?(i.focus(),n=(t=ne.selection.createRange()).text.length,e?n:(t.moveStart("character",-i.value.length),t.text.length-n)):void 0},value:function(){var e=0<F.length?F.val():T.data(b.value),t=Array.isArray(e)&&1===e.length&&""===e[0];return e===ie||t?"":e},values:function(){var e=p.get.value();return""===e?"":!p.has.selectInput()&&p.is.multiple()?"string"==typeof e?p.escape.htmlEntities(e).split(g.delimiter):"":e},remoteValues:function(){var e=p.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),ee.each(e,function(e,t){var n=p.read.remoteData(t);p.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==ie?t:g.preserveHTML,e)return 0<e.find(y.menu).length&&(p.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(y.menu).remove(),e.find(y.menuIcon).remove()),e.data(b.text)!==ie?e.data(b.text):t?e.html().trim():e.text().trim()},choiceValue:function(e,t){return t=t||p.get.choiceText(e),!!e&&(e.data(b.value)!==ie?String(e.data(b.value)):"string"==typeof t?String(g.ignoreSearchCase?t.toLowerCase():t).trim():String(t))},inputEvent:function(){var e=A[0];return!!e&&(e.oninput!==ie?"input":e.onpropertychange!==ie?"propertychange":"keyup")},selectValues:function(){var r={},s=[],l=[];return T.find("option").each(function(){var e=ee(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==ie?e.attr("value"):t,o=e.data(b.text)!==ie?e.data(b.text):t,a=e.parent("optgroup");"auto"===g.placeholder&&""===i?r.placeholder=t:(a.length===s.length&&a[0]===s[0]||(l.push({type:"header",divider:g.headerDivider,name:a.attr("label")||""}),s=a),l.push({name:t,value:i,text:o,disabled:n}))}),g.placeholder&&"auto"!==g.placeholder&&(p.debug("Setting placeholder value to",g.placeholder),r.placeholder=g.placeholder),g.sortSelect?(!0===g.sortSelect?l.sort(function(e,t){return e.name.localeCompare(t.name)}):"natural"===g.sortSelect?l.sort(function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}):ee.isFunction(g.sortSelect)&&l.sort(g.sortSelect),r[d.values]=l,p.debug("Retrieved and sorted values from select",r)):(r[d.values]=l,p.debug("Retrieved values from select",r)),r},activeItem:function(){return I.filter("."+h.active)},selectedItem:function(){var e=I.not(y.unselectable).filter("."+h.selected);return 0<e.length?e:I.eq(0)},itemWithAdditions:function(e){var t=p.get.item(e),n=p.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,o){var e,a,r=!1;return i=i!==ie?i:p.get.values()!==ie?p.get.values():p.get.text(),e=(a=p.is.multiple()&&Array.isArray(i))?0<i.length:i!==ie&&null!==i,o=""===i||!1===i||!0===i||(o||!1),e&&I.each(function(){var e=ee(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);if(null!==n&&n!==ie)if(a)-1!==ee.inArray(p.escape.htmlEntities(String(n)),i.map(function(e){return String(e)}))&&(r=r?r.add(e):e);else if(o){if(p.verbose("Ambiguous dropdown value using strict type check",e,i),n===i)return r=e,!0}else if(g.ignoreCase&&(n=n.toLowerCase(),i=i.toLowerCase()),p.escape.htmlEntities(String(n))===p.escape.htmlEntities(String(i)))return p.verbose("Found select item by value",n,i),r=e,!0}),r}},check:{maxSelections:function(e){return!g.maxSelections||((e=e!==ie?e:p.get.selectionCount())>=g.maxSelections?(p.debug("Maximum selection count reached"),g.useLabels&&(I.addClass(h.filtered),p.add.message(u.maxSelections)),!0):(p.verbose("No longer at maximum selection count"),p.remove.message(),p.remove.filteredItem(),p.is.searchSelection()&&p.filterItems(),!1))},disabled:function(){A.attr("tabindex",p.is.disabled()?-1:0)}},restore:{defaults:function(e){p.clear(e),p.restore.defaultText(),p.restore.defaultValue()},defaultText:function(){var e=p.get.defaultText();e===p.get.placeholderText?(p.debug("Restoring default placeholder text",e),p.set.placeholderText(e)):(p.debug("Restoring default text",e),p.set.text(e))},placeholderText:function(){p.set.placeholderText()},defaultValue:function(){var e=p.get.defaultValue();e!==ie&&(p.debug("Restoring default value",e),""!==e?(p.set.value(e),p.set.selected()):(p.remove.activeItem(),p.remove.selectedItem()))},labels:function(){g.allowAdditions&&(g.useLabels||(p.error(x.labels),g.useLabels=!0),p.debug("Restoring selected values"),p.create.userLabels()),p.check.maxSelections()},selected:function(){p.restore.values(),p.is.multiple()?(p.debug("Restoring previously selected values and labels"),p.restore.labels()):p.debug("Restoring previously selected values")},values:function(){p.set.initialLoad(),g.apiSettings&&g.saveRemoteData&&p.get.remoteValues()?p.restore.remoteValues():p.set.selected();var e=p.get.value();!e||""===e||Array.isArray(e)&&0===e.length?F.addClass(h.noselection):F.removeClass(h.noselection),p.remove.initialLoad()},remoteValues:function(){var e=p.get.remoteValues();p.debug("Recreating selected from session data",e),e&&(p.is.single()?ee.each(e,function(e,t){p.set.text(t)}):ee.each(e,function(e,t){p.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(te.Storage!==ie)return(t=sessionStorage.getItem(e))!==ie&&t;p.error(x.noStorage)}},save:{defaults:function(){p.save.defaultText(),p.save.placeholderText(),p.save.defaultValue()},defaultValue:function(){var e=p.get.value();p.verbose("Saving default value as",e),T.data(b.defaultValue,e)},defaultText:function(){var e=p.get.text();p.verbose("Saving default text as",e),T.data(b.defaultText,e)},placeholderText:function(){var e;!1!==g.placeholder&&D.hasClass(h.placeholder)&&(e=p.get.text(),p.verbose("Saving placeholder text as",e),T.data(b.placeholderText,e))},remoteData:function(e,t){te.Storage!==ie?(p.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):p.error(x.noStorage)}},clear:function(e){p.is.multiple()&&g.useLabels?p.remove.labels():(p.remove.activeItem(),p.remove.selectedItem(),p.remove.filteredItem()),p.set.placeholderText(),p.clearValue(e)},clearValue:function(e){p.set.value("",null,null,e)},scrollPage:function(e,t){var n,i,o=t||p.get.selectedItem(),a=o.closest(y.menu),r=a.outerHeight(),s=a.scrollTop(),l=I.eq(0).outerHeight(),c=Math.floor(r/l),u=(a.prop("scrollHeight"),"up"==e?s-l*c:s+l*c),d=I.not(y.unselectable);i="up"==e?d.index(o)-c:d.index(o)+c,0<(n=("up"==e?0<=i:i<d.length)?d.eq(i):"up"==e?d.first():d.last()).length&&(p.debug("Scrolling page",e,n),o.removeClass(h.selected),n.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),a.scrollTop(u))},set:{filtered:function(){var e=p.is.multiple(),t=p.is.searchSelection(),n=e&&t,i=t?p.get.query():"",o="string"==typeof i&&0<i.length,a=p.get.searchWidth(),r=""!==i;e&&o&&(p.verbose("Adjusting input width",a,g.glyphWidth),A.css("width",a)),o||n&&r?(p.verbose("Hiding placeholder text"),D.addClass(h.filtered)):e&&(!n||r)||(p.verbose("Showing placeholder text"),D.removeClass(h.filtered))},empty:function(){T.addClass(h.empty)},loading:function(){T.addClass(h.loading)},placeholderText:function(e){e=e||p.get.placeholderText(),p.debug("Setting placeholder text",e),p.set.text(e),D.addClass(h.placeholder)},tabbable:function(){p.is.searchSelection()?(p.debug("Added tabindex to searchable dropdown"),A.val(""),p.check.disabled(),M.attr("tabindex",-1)):(p.debug("Added tabindex to dropdown"),T.attr("tabindex")===ie&&(T.attr("tabindex",0),M.attr("tabindex",-1)))},initialLoad:function(){p.verbose("Setting initial load"),e=!0},activeItem:function(e){g.allowAdditions&&0<e.filter(y.addition).length?e.addClass(h.filtered):e.addClass(h.active)},partialSearch:function(e){var t=p.get.query().length;A.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r,s;n=(e=e||p.get.selectedItem()).closest(y.menu),i=e&&0<e.length,t=t!==ie&&t,0===p.get.activeItem().length&&(t=!1),e&&0<n.length&&i&&(e.position().top,n.addClass(h.loading),o=(a=n.scrollTop())-n.offset().top+e.offset().top,t||(s=a+n.height()<o+5,r=o-5<a),p.debug("Scrolling to active item",o),(t||r||s)&&n.scrollTop(o),n.removeClass(h.loading))},text:function(e){"combo"===g.action?(p.debug("Changing combo button text",e,R),g.preserveHTML?R.html(e):R.text(e)):"activate"===g.action&&(e!==p.get.placeholderText()&&D.removeClass(h.placeholder),p.debug("Changing text",e,D),D.removeClass(h.filtered),g.preserveHTML?D.html(e):D.text(e))},selectedItem:function(e){var t=p.get.choiceValue(e),n=p.get.choiceText(e,!1),i=p.get.choiceText(e,!0);p.debug("Setting user selection to item",e),p.remove.activeItem(),p.set.partialSearch(n),p.set.activeItem(e),p.set.selected(t,e),p.set.text(i)},selectedLetter:function(e){var t,n=I.filter("."+h.selected),i=0<n.length&&p.has.firstLetter(n,e),o=!1;i&&(t=n.nextAll(I).eq(0),p.has.firstLetter(t,e)&&(o=t)),o||I.each(function(){if(p.has.firstLetter(ee(this),e))return o=ee(this),!1}),o&&(p.verbose("Scrolling to next value with letter",e),p.set.scrollPosition(o),n.removeClass(h.selected),o.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(o))},direction:function(e){"auto"==g.direction?(e?p.is.upward(e)&&p.remove.upward(e):p.remove.upward(),p.can.openDownward(e)?p.remove.upward(e):p.set.upward(e),p.is.leftward(e)||p.can.openRightward(e)||p.set.leftward(e)):"upward"==g.direction&&p.set.upward(e)},upward:function(e){(e||T).addClass(h.upward)},leftward:function(e){(e||M).addClass(h.leftward)},value:function(e,t,n,i){e===ie||""===e||Array.isArray(e)&&0===e.length?F.addClass(h.noselection):F.removeClass(h.noselection);var o=p.escape.value(e),a=0<F.length,r=p.get.values(),s=e!==ie?String(e):e;if(a){if(!g.allowReselection&&s==r&&(p.verbose("Skipping value update already same value",e,r),!p.is.initialLoad()))return;p.is.single()&&p.has.selectInput()&&p.can.extendSelect()&&(p.debug("Adding user option",e),p.add.optionValue(e)),p.debug("Updating input value",o,r),V=!0,F.val(o),!1===g.fireOnInit&&p.is.initialLoad()?p.debug("Input native change event ignored on initial load"):!0!==i&&p.trigger.change(),V=!1}else p.verbose("Storing value in metadata",o,F),o!==r&&T.data(b.value,s);!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onChange):!0!==i&&g.onChange.call(N,e,t,n)},active:function(){T.addClass(h.active)},multiple:function(){T.addClass(h.multiple)},visible:function(){T.addClass(h.visible)},exactly:function(e,t){p.debug("Setting selected to exact values"),p.clear(),p.set.selected(e,t)},selected:function(e,s){var l=p.is.multiple();(s=g.allowAdditions?s||p.get.itemWithAdditions(e):s||p.get.item(e))&&(p.debug("Setting selected menu item to",s),p.is.multiple()&&p.remove.searchWidth(),p.is.single()?(p.remove.activeItem(),p.remove.selectedItem()):g.useLabels&&p.remove.selectedItem(),s.each(function(){var e=ee(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t),i=e.hasClass(h.filtered),o=e.hasClass(h.active),a=e.hasClass(h.addition),r=l&&1==s.length;l?!o||a?(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),g.useLabels?(p.add.label(n,t,r),p.add.value(n,t,e),p.set.activeItem(e),p.filterActive(),p.select.nextAvailable(s)):(p.add.value(n,t,e),p.set.text(p.add.variables(u.count)),p.set.activeItem(e))):i||!g.useLabels&&!c||(p.debug("Selected active value, removing label"),p.remove.selected(n)):(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),p.set.text(t),p.set.value(n,t,e),e.addClass(h.active).addClass(h.selected))}),p.remove.searchTerm())}},add:{label:function(e,t,n){var i,o=p.is.searchSelection()?A:D,a=p.escape.value(e);g.ignoreCase&&(a=a.toLowerCase()),i=ee("<a />").addClass(h.label).attr("data-"+b.value,a).html(C.label(a,t,g.preserveHTML,g.className)),i=g.onLabelCreate.call(i,a,t),p.has.label(e)?p.debug("User selection already exists, skipping",a):(g.label.variation&&i.addClass(g.label.variation),!0===n?(p.debug("Animating in label",i),i.addClass(h.hidden).insertBefore(o).transition({animation:g.label.transition,debug:g.debug,verbose:g.verbose,duration:g.label.duration})):(p.debug("Adding selection label",i),i.insertBefore(o)))},message:function(e){var t=M.children(y.message),n=g.templates.message(p.add.variables(e));0<t.length?t.html(n):t=ee("<div/>").html(n).addClass(h.message).appendTo(M)},optionValue:function(e){var t=p.escape.value(e);0<F.find('option[value="'+p.escape.string(t)+'"]').length||(p.disconnect.selectObserver(),p.is.single()&&(p.verbose("Removing previous user addition"),F.find("option."+h.addition).remove()),ee("<option/>").prop("value",t).addClass(h.addition).html(e).appendTo(F),p.verbose("Adding user addition as an <option>",e),p.observe.select())},userSuggestion:function(e){var t,n=M.children(y.addition),i=p.get.item(e),o=i&&i.not(y.addition).length,a=0<n.length;g.useLabels&&p.has.maxSelections()||(""===e||o?n.remove():(a?(n.data(b.value,e).data(b.text,e).attr("data-"+b.value,e).attr("data-"+b.text,e).removeClass(h.filtered),g.hideAdditions||(t=g.templates.addition(p.add.variables(u.addResult,e)),n.html(t)),p.verbose("Replacing user suggestion with new value",n)):((n=p.create.userChoice(e)).prependTo(M),p.verbose("Adding item choice to menu corresponding with user choice addition",n)),g.hideAdditions&&!p.is.allFiltered()||n.addClass(h.selected).siblings().removeClass(h.selected),p.refreshItems()))},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return p.verbose("Adding templated variables to message",e),o&&(n=p.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=p.get.selectionCount(),e=e.replace("{maxCount}",g.maxSelections)),r&&(i=t||p.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,o=p.get.values();p.has.value(e)?p.debug("Value already selected"):""!==e?(i=Array.isArray(o)?(i=o.concat([e]),p.get.uniqueArray(i)):[e],p.has.selectInput()?p.can.extendSelect()&&(p.debug("Adding value to select",e,i,F),p.add.optionValue(e)):(i=i.join(g.delimiter),p.debug("Setting hidden input to delimited value",i,F)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("Skipping onadd callback on initial load",g.onAdd):g.onAdd.call(N,e,t,n),p.set.value(i,t,n),p.check.maxSelections()):p.debug("Cannot select blank values from multiselect")}},remove:{active:function(){T.removeClass(h.active)},activeLabel:function(){T.find(y.label).removeClass(h.active)},empty:function(){T.removeClass(h.empty)},loading:function(){T.removeClass(h.loading)},initialLoad:function(){e=!1},upward:function(e){(e||T).removeClass(h.upward)},leftward:function(e){(e||M).removeClass(h.leftward)},visible:function(){T.removeClass(h.visible)},activeItem:function(){I.removeClass(h.active)},filteredItem:function(){g.useLabels&&p.has.maxSelections()||(g.useLabels&&p.is.multiple()?I.not("."+h.active).removeClass(h.filtered):I.removeClass(h.filtered),g.hideDividers&&j.removeClass(h.hidden),p.remove.empty())},optionValue:function(e){var t=p.escape.value(e),n=F.find('option[value="'+p.escape.string(t)+'"]');0<n.length&&n.hasClass(h.addition)&&(r&&(r.disconnect(),p.verbose("Temporarily disconnecting mutation observer")),n.remove(),p.verbose("Removing user addition as an <option>",t),r&&r.observe(F[0],{childList:!0,subtree:!0}))},message:function(){M.children(y.message).remove()},searchWidth:function(){A.css("width","")},searchTerm:function(){p.verbose("Cleared search term"),A.val(""),p.set.filtered()},userAddition:function(){I.filter(y.addition).remove()},selected:function(e,t){if(!(t=g.allowAdditions?t||p.get.itemWithAdditions(e):t||p.get.item(e)))return!1;t.each(function(){var e=ee(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);p.is.multiple()?g.useLabels?(p.remove.value(n,t,e),p.remove.label(n)):(p.remove.value(n,t,e),0===p.get.selectionCount()?p.set.placeholderText():p.set.text(p.add.variables(u.count))):p.remove.value(n,t,e),e.removeClass(h.filtered).removeClass(h.active),g.useLabels&&e.removeClass(h.selected)})},selectedItem:function(){I.removeClass(h.selected)},value:function(e,t,n){var i,o=p.get.values();e=p.escape.htmlEntities(e),p.has.selectInput()?(p.verbose("Input is <select> removing selected option",e),i=p.remove.arrayValue(e,o),p.remove.optionValue(e)):(p.verbose("Removing from delimited values",e),i=(i=p.remove.arrayValue(e,o)).join(g.delimiter)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onRemove):g.onRemove.call(N,e,t,n),p.set.value(i,t,n),p.check.maxSelections()},arrayValue:function(t,e){return Array.isArray(e)||(e=[e]),e=ee.grep(e,function(e){return t!=e}),p.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=T.find(y.label).filter("[data-"+b.value+'="'+p.escape.string(g.ignoreCase?e.toLowerCase():e)+'"]');p.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||T.find(y.label).filter("."+h.active),p.verbose("Removing active label selections",e),p.remove.labels(e)},labels:function(e){e=e||T.find(y.label),p.verbose("Removing labels",e),e.each(function(){var e=ee(this),t=e.data(b.value),n=t!==ie?String(t):t,i=p.is.userValue(n);!1!==g.onLabelRemove.call(e,t)?(p.remove.message(),i?(p.remove.value(n),p.remove.label(n)):p.remove.selected(n)):p.debug("Label remove callback cancelled removal")})},tabbable:function(){p.is.searchSelection()?(p.debug("Searchable dropdown initialized"),A.removeAttr("tabindex")):(p.debug("Simple selection dropdown initialized"),T.removeAttr("tabindex")),M.removeAttr("tabindex")},diacritics:function(e){return g.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},has:{menuSearch:function(){return p.has.search()&&0<A.closest(M).length},clearItem:function(){return 0<O.length},search:function(){return 0<A.length},sizer:function(){return 0<E.length},selectInput:function(){return F.is("select")},minCharacters:function(e){return g.minCharacters&&!z?(e=e!==ie?String(e):String(p.get.query())).length>=g.minCharacters:!(z=!1)},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=p.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<F.length},items:function(){return 0<I.length},menu:function(){return 0<M.length},message:function(){return 0!==M.children(y.message).length},label:function(e){var t=p.escape.value(e),n=T.find(y.label);return g.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+b.value+'="'+p.escape.string(t)+'"]').length},maxSelections:function(){return g.maxSelections&&p.get.selectionCount()>=g.maxSelections},allResultsFiltered:function(){var e=I.not(y.addition);return e.filter(y.unselectable).length===e.length},userSuggestion:function(){return 0<M.children(y.addition).length},query:function(){return""!==p.get.query()},value:function(e){return g.ignoreCase?p.has.valueIgnoringCase(e):p.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=p.get.values();return!!(Array.isArray(t)?t&&-1!==ee.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=p.get.values(),i=!1;return Array.isArray(e)||(e=[e]),ee.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return T.hasClass(h.active)},animatingInward:function(){return M.transition("is inward")},animatingOutward:function(){return M.transition("is outward")},bubbledLabelClick:function(e){return ee(e.target).is("select, input")&&0<T.closest("label").length},bubbledIconClick:function(e){return 0<ee(e.target).closest(P).length},alreadySetup:function(){return T.is("select")&&T.parent(y.dropdown).data(k)!==ie&&0===T.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):M.transition&&M.transition("is animating")},leftward:function(e){return(e||M).hasClass(h.leftward)},clearable:function(){return T.hasClass(h.clearable)||g.clearable},disabled:function(){return T.hasClass(h.disabled)},focused:function(){return ne.activeElement===T[0]},focusedOnSearch:function(){return ne.activeElement===A[0]},allFiltered:function(){return(p.is.multiple()||p.has.search())&&!(0==g.hideAdditions&&p.has.userSuggestion())&&!p.has.message()&&p.has.allResultsFiltered()},hidden:function(e){return!p.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return ee.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return T.hasClass(h.multiple)},remote:function(){return g.apiSettings&&p.can.useAPI()},single:function(){return!p.is.multiple()},selectMutation:function(e){var n=!1;return ee.each(e,function(e,t){if(ee(t.target).is("select")||ee(t.addedNodes).is("select"))return!(n=!0)}),n},search:function(){return T.hasClass(h.search)},searchSelection:function(){return p.has.search()&&1===A.parent(y.dropdown).length},selection:function(){return T.hasClass(h.selection)},userValue:function(e){return-1!==ee.inArray(e,p.get.userValues())},upward:function(e){return(e||T).hasClass(h.upward)},visible:function(e){return e?e.hasClass(h.visible):M.hasClass(h.visible)},verticallyScrollableContext:function(){var e=S.get(0)!==te&&S.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=S.get(0)!==te&&S.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!g.useLabels||(!p.has.maxSelections()||!(!p.has.maxSelections()||!e.hasClass(h.active)))},openDownward:function(e){var t,n,i=e||M,o=!0;return i.addClass(h.loading),n={context:{offset:S.get(0)===te?{top:0,left:0}:S.offset(),scrollTop:S.scrollTop(),height:S.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},p.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),o=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(p.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(p.verbose("Dropdown cannot fit below, opening upward",t),!1):(p.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(h.loading),o},openRightward:function(e){var t,n,i=e||M,o=!0;return i.addClass(h.loading),n={context:{offset:S.get(0)===te?{top:0,left:0}:S.offset(),scrollLeft:S.scrollLeft(),width:S.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},p.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(p.verbose("Dropdown cannot fit in context rightward",t),o=!1),i.removeClass(h.loading),o},click:function(){return X||"click"==g.on},extendSelect:function(){return g.allowAdditions||g.apiSettings},show:function(){return!p.is.disabled()&&(p.has.items()||p.has.message())},useAPI:function(){return ee.fn.api!==ie}},animate:{show:function(e,t){var n,i=t||M,o=t?function(){}:function(){p.hideSubMenus(),p.hideOthers(),p.set.active()};if(e=ee.isFunction(e)?e:function(){},p.verbose("Doing menu show animation",i),p.set.direction(t),n=p.get.transition(t),p.is.selection()&&p.set.scrollPosition(p.get.selectedItem(),!0),p.is.hidden(i)||p.is.animating(i)){var a=!!T.hasClass("column")&&"flex";"none"==n?(o(),i.transition({displayType:a}).transition("show"),e.call(N)):ee.fn.transition!==ie&&T.transition("is supported")?i.transition({animation:n+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0,onStart:o,displayType:a,onComplete:function(){e.call(N)}}):p.error(x.noTransition,n)}},hide:function(e,t){var n=t||M,i=t?function(){}:function(){p.can.click()&&p.unbind.intent(),p.remove.active()},o=p.get.transition(t);e=ee.isFunction(e)?e:function(){},(p.is.visible(n)||p.is.animating(n))&&(p.verbose("Doing menu hide animation",n),"none"==o?(i(),n.transition("hide"),e.call(N)):ee.fn.transition!==ie&&T.transition("is supported")?n.transition({animation:o+" out",duration:g.duration,debug:g.debug,verbose:g.verbose,queue:!1,onStart:i,onComplete:function(){e.call(N)}}):p.error(x.transition))}},hideAndClear:function(){p.remove.searchTerm(),p.has.maxSelections()||(p.has.search()?p.hide(function(){p.remove.filteredItem()}):p.hide())},delay:{show:function(){p.verbose("Delaying show event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.show,g.delay.show)},hide:function(){p.verbose("Delaying hide event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.hide,g.delay.hide)}},escape:{value:function(e){var t=Array.isArray(e),n="string"==typeof e,i=!n&&!t,o=n&&-1!==e.search(m.quote),a=[];return i||!o?e:(p.debug("Encoding quote values for use in select",e),t?(ee.each(e,function(e,t){a.push(t.replace(m.quote,"&quot;"))}),a):e.replace(m.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(m.escape,"\\$&")},htmlEntities:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e}},setting:function(e,t){if(p.debug("Changing setting",e,t),ee.isPlainObject(e))ee.extend(!0,g,e);else{if(t===ie)return g[e];ee.isPlainObject(g[e])?ee.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(ee.isPlainObject(e))ee.extend(!0,p,e);else{if(t===ie)return p[e];p[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,g.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),p.verbose.apply(console,arguments)))},error:function(){g.silent||(p.error=Function.prototype.bind.call(console.error,console,g.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(G||t),G=t,K.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:N,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var e=g.name+":",n=0;G=!1,clearTimeout(p.performance.timer),ee.each(K,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",Q&&(e+=" '"+Q+"'"),(console.group!==ie||console.table!==ie)&&0<K.length&&(console.groupCollapsed(e),console.table?console.table(K):ee.each(K,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),K=[]}},invoke:function(i,e,t){var o,a,n,r=H;return e=e||_,t=N||t,"string"==typeof i&&r!==ie&&(i=i.split(/[\. ]/),o=i.length-1,ee.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(ee.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==ie)return a=r[n],!1;if(!ee.isPlainObject(r[t])||e==o)return r[t]!==ie?a=r[t]:p.error(x.method,i),!1;r=r[t]}})),ee.isFunction(a)?n=a.apply(t,e):a!==ie&&(n=a),Array.isArray(B)?B.push(n):B!==ie?B=[B,n]:n!==ie&&(B=n),a}},Z?(H===ie&&p.initialize(),p.invoke(J)):(H!==ie&&H.invoke("destroy"),p.initialize())}),B!==ie?B:W},ee.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:te,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,ignoreDiacritics:!1,hideDividers:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,ignoreSearchCase:!0,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,headerDivider:!0,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return ee(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text",type:"type",image:"image",imageClass:"imageClass",icon:"icon",iconClass:"iconClass",class:"class",divider:"divider"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",divider:".divider, .header",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> span.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered",clearIcon:"> .remove.icon"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",icon:"icon",image:"image",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible",clearable:"clearable",noselection:"noselection",delete:"delete",header:"header",divider:"divider",groupIcon:"",unfilterable:"unfilterable"}},ee.fn.dropdown.settings.templates={deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},dropdown:function(e,t,n,i){var o=e.placeholder||!1,a="",r=ee.fn.dropdown.settings.templates.escape;return a+='<i class="dropdown icon"></i>',a+=o?'<div class="default text">'+r(o,n)+"</div>":'<div class="text"></div>',a+='<div class="'+i.menu+'">',a+=ee.fn.dropdown.settings.templates.menu(e,t,n,i),a+="</div>"},menu:function(e,s,l,c){var t=e[s.values]||[],u="",d=ee.fn.dropdown.settings.templates.escape,f=ee.fn.dropdown.settings.templates.deQuote;return ee.each(t,function(e,t){var n=t[s.type]?t[s.type]:"item";if("item"===n){var i=t[s.text]?' data-text="'+f(t[s.text])+'"':"",o=t[s.disabled]?c.disabled+" ":"";u+='<div class="'+o+(t[s.class]?f(t[s.class]):c.item)+'" data-value="'+f(t[s.value])+'"'+i+">",t[s.image]&&(u+='<img class="'+(t[s.imageClass]?f(t[s.imageClass]):c.image)+'" src="'+f(t[s.image])+'">'),t[s.icon]&&(u+='<i class="'+f(t[s.icon])+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=d(t[s.name]||"",l),u+="</div>"}else if("header"===n){var a=d(t[s.name]||"",l),r=t[s.icon]?f(t[s.icon]):c.groupIcon;""===a&&""===r||(u+='<div class="'+(t[s.class]?f(t[s.class]):c.header)+'">',""!==r&&(u+='<i class="'+r+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=a,u+="</div>"),t[s.divider]&&(u+='<div class="'+c.divider+'"></div>')}}),u},label:function(e,t,n,i){return(0,ee.fn.dropdown.settings.templates.escape)(t,n)+'<i class="'+i.delete+' icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(T,e,t,S){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.embed=function(p){var h,v=T(this),b=v.selector||"",y=(new Date).getTime(),x=[],C=p,w="string"==typeof C,k=[].slice.call(arguments,1);return v.each(function(){var s,i=T.isPlainObject(p)?T.extend(!0,{},T.fn.embed.settings,p):T.extend({},T.fn.embed.settings),e=i.selector,t=i.className,o=i.sources,l=i.error,a=i.metadata,n=i.namespace,r=i.templates,c="."+n,u="module-"+n,d=T(this),f=(d.find(e.placeholder),d.find(e.icon),d.find(e.embed)),m=this,g=d.data(u);s={initialize:function(){s.debug("Initializing embed"),s.determine.autoplay(),s.create(),s.bind.events(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,d.data(u,s)},destroy:function(){s.verbose("Destroying previous instance of embed"),s.reset(),d.removeData(u).off(c)},refresh:function(){s.verbose("Refreshing selector cache"),d.find(e.placeholder),d.find(e.icon),f=d.find(e.embed)},bind:{events:function(){s.has.placeholder()&&(s.debug("Adding placeholder events"),d.on("click"+c,e.placeholder,s.createAndShow).on("click"+c,e.icon,s.createAndShow))}},create:function(){s.get.placeholder()?s.createPlaceholder():s.createAndShow()},createPlaceholder:function(e){var t=s.get.icon(),n=s.get.url();s.generate.embed(n);e=e||s.get.placeholder(),d.html(r.placeholder(e,t)),s.debug("Creating placeholder for embed",e,t)},createEmbed:function(e){s.refresh(),e=e||s.get.url(),f=T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d),i.onCreate.call(m,e),s.debug("Creating embed object",f)},changeEmbed:function(e){f.html(s.generate.embed(e))},createAndShow:function(){s.createEmbed(),s.show()},change:function(e,t,n){s.debug("Changing video to ",e,t,n),d.data(a.source,e).data(a.id,t),n?d.data(a.url,n):d.removeData(a.url),s.has.embed()?s.changeEmbed():s.create()},reset:function(){s.debug("Clearing embed and showing placeholder"),s.remove.data(),s.remove.active(),s.remove.embed(),s.showPlaceholder(),i.onReset.call(m)},show:function(){s.debug("Showing embed"),s.set.active(),i.onDisplay.call(m)},hide:function(){s.debug("Hiding embed"),s.showPlaceholder()},showPlaceholder:function(){s.debug("Showing placeholder image"),s.remove.active(),i.onPlaceholderDisplay.call(m)},get:{id:function(){return i.id||d.data(a.id)},placeholder:function(){return i.placeholder||d.data(a.placeholder)},icon:function(){return i.icon?i.icon:d.data(a.icon)!==S?d.data(a.icon):s.determine.icon()},source:function(e){return i.source?i.source:d.data(a.source)!==S?d.data(a.source):s.determine.source()},type:function(){var e=s.get.source();return o[e]!==S&&o[e].type},url:function(){return i.url?i.url:d.data(a.url)!==S?d.data(a.url):s.determine.url()}},determine:{autoplay:function(){s.should.autoplay()&&(i.autoplay=!0)},source:function(n){var i=!1;return(n=n||s.get.url())&&T.each(o,function(e,t){if(-1!==n.search(t.domain))return i=e,!1}),i},icon:function(){var e=s.get.source();return o[e]!==S&&o[e].icon},url:function(){var e,t=i.id||d.data(a.id),n=i.source||d.data(a.source);return(e=o[n]!==S&&o[n].url.replace("{id}",t))&&d.data(a.url,e),e}},set:{active:function(){d.addClass(t.active)}},remove:{data:function(){d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)},active:function(){d.removeClass(t.active)},embed:function(){f.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){s.debug("Generating embed html");var t,n,i=s.get.source();return(e=s.get.url(e))?(n=s.generate.parameters(i),t=r.iframe(e,n)):s.error(l.noURL,d),t},parameters:function(e,t){var n=o[e]&&o[e].parameters!==S?o[e].parameters(i):{};return(t=t||i.parameters)&&(n=T.extend({},n,t)),n=i.onEmbed(n),s.encode.parameters(n)}},has:{embed:function(){return 0<f.length},placeholder:function(){return i.placeholder||d.data(a.placeholder)}},should:{autoplay:function(){return"auto"===i.autoplay?i.placeholder||d.data(a.placeholder)!==S:i.autoplay}},is:{video:function(){return"video"==s.get.type()}},setting:function(e,t){if(s.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,i,e);else{if(t===S)return i[e];T.isPlainObject(i[e])?T.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(s.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}},w?(g===S&&s.initialize(),s.invoke(C)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},T.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||S,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||S,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(V,z,N,H){"use strict";V.isFunction=V.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},z=void 0!==z&&z.Math==Math?z:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),V.fn.modal=function(D){var A,e=V(this),E=V(z),F=V(N),P=V("body"),O=e.selector||"",R=(new Date).getTime(),M=[],I=D,j="string"==typeof I,L=[].slice.call(arguments,1),q=z.requestAnimationFrame||z.mozRequestAnimationFrame||z.webkitRequestAnimationFrame||z.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var o,a,e,i,n,r,s,t,l,c,u,d=V.isPlainObject(D)?V.extend(!0,{},V.fn.modal.settings,D):V.extend({},V.fn.modal.settings),f=d.selector,m=d.className,g=d.namespace,p=d.error,h="."+g,v="module-"+g,b=V(this),y=V(d.context),x=b.find(f.close),C=this,w=b.data(v),k=!1,T="",S="";u={initialize:function(){u.cache={},u.verbose("Initializing dimmer",y),u.create.id(),u.create.dimmer(),d.allowMultiple&&u.create.innerDimmer(),d.centered||b.addClass("top aligned"),u.refreshModals(),u.bind.events(),d.observeChanges&&u.observeChanges(),u.instantiate()},instantiate:function(){u.verbose("Storing instance of modal"),w=u,b.data(v,w)},create:{dimmer:function(){var e={debug:d.debug,dimmerName:"modals"},t=V.extend(!0,e,d.dimmerSettings);V.fn.dimmer!==H?(u.debug("Creating dimmer"),i=y.dimmer(t),d.detachable?(u.verbose("Modal is detachable, moving content into dimmer"),i.dimmer("add content",b)):u.set.undetached(),n=i.dimmer("get dimmer")):u.error(p.dimmer)},id:function(){l=(Math.random().toString(16)+"000000000").substr(2,8),t="."+l,u.verbose("Creating unique id for element",l)},innerDimmer:function(){0==b.find(f.dimmer).length&&b.prepend('<div class="ui inverted dimmer"></div>')}},destroy:function(){c&&c.disconnect(),u.verbose("Destroying previous modal"),b.removeData(v).off(h),E.off(t),n.off(t),x.off(h),y.dimmer("destroy")},observeChanges:function(){"MutationObserver"in z&&((c=new MutationObserver(function(e){u.debug("DOM tree modified, refreshing"),u.refresh()})).observe(C,{childList:!0,subtree:!0}),u.debug("Setting up mutation observer",c))},refresh:function(){u.remove.scrolling(),u.cacheSizes(),u.can.useFlex()||u.set.modalOffset(),u.set.screenHeight(),u.set.type()},refreshModals:function(){a=b.siblings(f.modal),o=a.add(b)},attachEvents:function(e,t){var n=V(e);t=V.isFunction(u[t])?u[t]:u.toggle,0<n.length?(u.debug("Attaching modal events to element",e,t),n.off(h).on("click"+h,t)):u.error(p.notFound,e)},bind:{events:function(){u.verbose("Attaching events"),b.on("click"+h,f.close,u.event.close).on("click"+h,f.approve,u.event.approve).on("click"+h,f.deny,u.event.deny),E.on("resize"+t,u.event.resize)},scrollLock:function(){i.get(0).addEventListener("touchmove",u.event.preventScroll,{passive:!1})}},unbind:{scrollLock:function(){i.get(0).removeEventListener("touchmove",u.event.preventScroll,{passive:!1})}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){k||!1===d.onApprove.call(C,V(this))?u.verbose("Approve callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},preventScroll:function(e){-1!==e.target.className.indexOf("dimmer")&&e.preventDefault()},deny:function(){k||!1===d.onDeny.call(C,V(this))?u.verbose("Deny callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},close:function(){u.hide()},mousedown:function(e){var t=V(e.target),n=u.is.rtl();(r=0<t.closest(f.modal).length)&&u.verbose("Mouse down event registered inside the modal"),(s=u.is.scrolling()&&(!n&&V(z).outerWidth()-d.scrollbarWidth<=e.clientX||n&&d.scrollbarWidth>=e.clientX))&&u.verbose("Mouse down event registered inside the scrollbar")},mouseup:function(e){if(d.closable)if(r)u.debug("Dimmer clicked but mouse down was initially registered inside the modal");else if(s)u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");else{var t=0<V(e.target).closest(f.modal).length,n=V.contains(N.documentElement,e.target);if(!t&&n&&u.is.active()&&b.hasClass(m.front)){if(u.debug("Dimmer clicked, hiding all modals"),d.allowMultiple){if(!u.hideAll())return}else if(!u.hide())return;u.remove.clickaway()}}else u.verbose("Dimmer clicked but closable setting is disabled")},debounce:function(e,t){clearTimeout(u.timer),u.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(d.closable?(u.debug("Escape key pressed hiding modal"),b.hasClass(m.front)&&u.hide()):u.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){i.dimmer("is active")&&(u.is.animating()||u.is.active())&&q(u.refresh)}},toggle:function(){u.is.active()||u.is.animating()?u.hide():u.show()},show:function(e){e=V.isFunction(e)?e:function(){},u.refreshModals(),u.set.dimmerSettings(),u.set.dimmerStyles(),u.showModal(e)},hide:function(e){return e=V.isFunction(e)?e:function(){},u.refreshModals(),u.hideModal(e)},showModal:function(e){e=V.isFunction(e)?e:function(){},u.is.animating()||!u.is.active()?(u.showDimmer(),u.cacheSizes(),u.set.bodyMargin(),u.can.useFlex()?u.remove.legacy():(u.set.legacy(),u.set.modalOffset(),u.debug("Using non-flex legacy modal positioning.")),u.set.screenHeight(),u.set.type(),u.set.clickaway(),!d.allowMultiple&&u.others.active()?u.hideOthers(u.showModal):(k=!1,d.allowMultiple&&(u.others.active()&&a.filter("."+m.active).find(f.dimmer).addClass("active"),d.detachable&&b.detach().appendTo(n)),d.onShow.call(C),d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.debug("Showing modal with css animations"),b.transition({debug:d.debug,animation:d.transition+" in",queue:d.queue,duration:d.duration,useFailSafe:!0,onComplete:function(){d.onVisible.apply(C),d.keyboardShortcuts&&u.add.keyboardShortcuts(),u.save.focus(),u.set.active(),d.autofocus&&u.set.autofocus(),e()}})):u.error(p.noTransition))):u.debug("Modal is already visible")},hideModal:function(e,t,n){var i=a.filter("."+m.active).last();if(e=V.isFunction(e)?e:function(){},u.debug("Hiding modal"),!1===d.onHide.call(C,V(this)))return u.verbose("Hide callback returned false cancelling hide"),k=!1;(u.is.animating()||u.is.active())&&(d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.remove.active(),b.transition({debug:d.debug,animation:d.transition+" out",queue:d.queue,duration:d.duration,useFailSafe:!0,onStart:function(){u.others.active()||u.others.animating()||t||u.hideDimmer(),d.keyboardShortcuts&&!u.others.active()&&u.remove.keyboardShortcuts()},onComplete:function(){u.unbind.scrollLock(),d.allowMultiple&&(i.addClass(m.front),b.removeClass(m.front),n?o.find(f.dimmer).removeClass("active"):i.find(f.dimmer).removeClass("active")),d.onHidden.call(C),u.remove.dimmerStyles(),u.restore.focus(),e()}})):u.error(p.noTransition))},showDimmer:function(){i.dimmer("is animating")||!i.dimmer("is active")?(u.save.bodyMargin(),u.debug("Showing dimmer"),i.dimmer("show")):u.debug("Dimmer already visible")},hideDimmer:function(){i.dimmer("is animating")||i.dimmer("is active")?(u.unbind.scrollLock(),i.dimmer("hide",function(){u.restore.bodyMargin(),u.remove.clickaway(),u.remove.screenHeight()})):u.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var e=o.filter("."+m.active+", ."+m.animating);if(n=V.isFunction(n)?n:function(){},0<e.length){u.debug("Hiding all visible modals");var i=!0;return V(e.get().reverse()).each(function(e,t){i=i&&V(t).modal("hide modal",n,!1,!0)}),i&&u.hideDimmer(),i}},hideOthers:function(e){var t=a.filter("."+m.active+", ."+m.animating);e=V.isFunction(e)?e:function(){},0<t.length&&(u.debug("Hiding other modals",a),t.modal("hide modal",e,!0))},others:{active:function(){return 0<a.filter("."+m.active).length},animating:function(){return 0<a.filter("."+m.animating).length}},add:{keyboardShortcuts:function(){u.verbose("Adding keyboard shortcuts"),F.on("keyup"+h,u.event.keyboard)}},save:{focus:function(){0<V(N.activeElement).closest(b).length||(e=V(N.activeElement).blur())},bodyMargin:function(){T=P.css("margin-"+(u.can.leftBodyScrollbar()?"left":"right"));var e=parseInt(T.replace(/[^\d.]/g,"")),t=z.innerWidth-N.documentElement.clientWidth;S=e+t}},restore:{focus:function(){e&&0<e.length&&d.restoreFocus&&e.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";P.css("margin-"+e,T),P.find(f.bodyFixed.replace("right",e)).css("padding-"+e,T)}},remove:{active:function(){b.removeClass(m.active)},legacy:function(){b.removeClass(m.legacy)},clickaway:function(){d.detachable||b.off("mousedown"+t),n.off("mousedown"+t),n.off("mouseup"+t)},dimmerStyles:function(){n.removeClass(m.inverted),i.removeClass(m.blurring)},bodyStyle:function(){""===P.attr("style")&&(u.verbose("Removing style attribute"),P.removeAttr("style"))},screenHeight:function(){u.debug("Removing page height"),P.css("height","")},keyboardShortcuts:function(){u.verbose("Removing keyboard shortcuts"),F.off("keyup"+h)},scrolling:function(){i.removeClass(m.scrolling),b.removeClass(m.scrolling)}},cacheSizes:function(){b.addClass(m.loading);var e=b.prop("scrollHeight"),t=b.outerWidth(),n=b.outerHeight();u.cache.pageHeight!==H&&0===n||(V.extend(u.cache,{pageHeight:V(N).outerHeight(),width:t,height:n+d.offset,scrollHeight:e+d.offset,contextHeight:"body"==d.context?V(z).height():i.height()}),u.cache.topOffset=-u.cache.height/2),b.removeClass(m.loading),u.debug("Caching modal and container sizes",u.cache)},can:{leftBodyScrollbar:function(){return u.cache.leftBodyScrollbar===H&&(u.cache.leftBodyScrollbar=u.is.rtl()&&(u.is.iframe&&!u.is.firefox()||u.is.safari()||u.is.edge()||u.is.ie())),u.cache.leftBodyScrollbar},useFlex:function(){return"auto"===d.useFlex?d.detachable&&!u.is.ie():(d.useFlex&&u.is.ie()?u.debug("useFlex true is not supported in IE"):d.useFlex&&!d.detachable&&u.debug("useFlex true in combination with detachable false is not supported"),d.useFlex)},fit:function(){var e=u.cache.contextHeight,t=u.cache.contextHeight/2,n=u.cache.topOffset,i=u.cache.scrollHeight,o=u.cache.height,a=d.padding;return o<i?t+n+i+a<e:o+2*a<e}},is:{active:function(){return b.hasClass(m.active)},ie:function(){if(u.cache.isIE===H){var e=!z.ActiveXObject&&"ActiveXObject"in z,t="ActiveXObject"in z;u.cache.isIE=e||t}return u.cache.isIE},animating:function(){return b.transition("is supported")?b.transition("is animating"):b.is(":visible")},scrolling:function(){return i.hasClass(m.scrolling)},modernBrowser:function(){return!(z.ActiveXObject||"ActiveXObject"in z)},rtl:function(){return u.cache.isRTL===H&&(u.cache.isRTL="rtl"===P.attr("dir")||"rtl"===P.css("direction")),u.cache.isRTL},safari:function(){return u.cache.isSafari===H&&(u.cache.isSafari=/constructor/i.test(z.HTMLElement)||!!z.ApplePaySession),u.cache.isSafari},edge:function(){return u.cache.isEdge===H&&(u.cache.isEdge=!!z.setImmediate&&!u.is.ie()),u.cache.isEdge},firefox:function(){return u.cache.isFirefox===H&&(u.cache.isFirefox=!!z.InstallTrigger),u.cache.isFirefox},iframe:function(){return!(self===top)}},set:{autofocus:function(){var e=b.find("[tabindex], :input").filter(":visible").filter(function(){return 0===V(this).closest(".disabled").length}),t=e.filter("[autofocus]"),n=0<t.length?t.first():e.first();0<n.length&&n.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";(d.detachable||u.can.fit())&&P.css("margin-"+e,S+"px"),P.find(f.bodyFixed.replace("right",e)).css("padding-"+e,S+"px")},clickaway:function(){d.detachable||b.on("mousedown"+t,u.event.mousedown),n.on("mousedown"+t,u.event.mousedown),n.on("mouseup"+t,u.event.mouseup)},dimmerSettings:function(){if(V.fn.dimmer!==H){var e={debug:d.debug,dimmerName:"modals",closable:"auto",useFlex:u.can.useFlex(),duration:{show:d.duration,hide:d.duration}},t=V.extend(!0,e,d.dimmerSettings);d.inverted&&(t.variation=t.variation!==H?t.variation+" inverted":"inverted"),y.dimmer("setting",t)}else u.error(p.dimmer)},dimmerStyles:function(){d.inverted?n.addClass(m.inverted):n.removeClass(m.inverted),d.blurring?i.addClass(m.blurring):i.removeClass(m.blurring)},modalOffset:function(){if(d.detachable)b.css({marginTop:!b.hasClass("aligned")&&u.can.fit()?-u.cache.height/2:d.padding/2,marginLeft:-u.cache.width/2});else{var e=u.can.fit();b.css({top:!b.hasClass("aligned")&&e?V(N).scrollTop()+(u.cache.contextHeight-u.cache.height)/2:!e||b.hasClass("top")?V(N).scrollTop()+d.padding:V(N).scrollTop()+(u.cache.contextHeight-u.cache.height-d.padding),marginLeft:-u.cache.width/2})}u.verbose("Setting modal offset for legacy mode")},screenHeight:function(){u.can.fit()?P.css("height",""):b.hasClass("bottom")||(u.debug("Modal is taller than page content, resizing page height"),P.css("height",u.cache.height+2*d.padding))},active:function(){b.addClass(m.active+" "+m.front),a.filter("."+m.active).removeClass(m.front)},scrolling:function(){i.addClass(m.scrolling),b.addClass(m.scrolling),u.unbind.scrollLock()},legacy:function(){b.addClass(m.legacy)},type:function(){u.can.fit()?(u.verbose("Modal fits on screen"),u.others.active()||u.others.animating()||(u.remove.scrolling(),u.bind.scrollLock())):b.hasClass("bottom")?u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling"):(u.verbose("Modal cannot fit on screen setting to scrolling"),u.set.scrolling())},undetached:function(){i.addClass(m.undetached)}},setting:function(e,t){if(u.debug("Changing setting",e,t),V.isPlainObject(e))V.extend(!0,d,e);else{if(t===H)return d[e];V.isPlainObject(d[e])?V.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(V.isPlainObject(e))V.extend(!0,u,e);else{if(t===H)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,M.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;R=!1,clearTimeout(u.performance.timer),V.each(M,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",O&&(e+=" '"+O+"'"),(console.group!==H||console.table!==H)&&0<M.length&&(console.groupCollapsed(e),console.table?console.table(M):V.each(M,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),M=[]}},invoke:function(i,e,t){var o,a,n,r=w;return e=e||L,t=C||t,"string"==typeof i&&r!==H&&(i=i.split(/[\. ]/),o=i.length-1,V.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(V.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==H)return a=r[n],!1;if(!V.isPlainObject(r[t])||e==o)return r[t]!==H&&(a=r[t]),!1;r=r[t]}})),V.isFunction(a)?n=a.apply(t,e):a!==H&&(n=a),Array.isArray(A)?A.push(n):A!==H?A=[A,n]:n!==H&&(A=n),a}},j?(w===H&&u.initialize(),u.invoke(I)):(w!==H&&w.invoke("destroy"),u.initialize())}),A!==H?A:this},V.fn.modal.settings={name:"Modal",namespace:"modal",useFlex:"auto",offset:0,silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,restoreFocus:!0,inverted:!1,blurring:!1,centered:!0,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,transition:"scale",padding:50,scrollbarWidth:10,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal",dimmer:"> .ui.dimmer",bodyFixed:"> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",legacy:"legacy",loading:"loading",scrolling:"scrolling",undetached:"undetached",front:"front"}}}(jQuery,window,document),function(y,x,e,C){"use strict";y.isFunction=y.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=void 0!==x&&x.Math==Math?x:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),y.fn.nag=function(d){var f,e=y(this),m=e.selector||"",g=(new Date).getTime(),p=[],h=d,v="string"==typeof h,b=[].slice.call(arguments,1);return e.each(function(){var s,i=y.isPlainObject(d)?y.extend(!0,{},y.fn.nag.settings,d):y.extend({},y.fn.nag.settings),e=i.selector,l=i.error,t=i.namespace,n="."+t,o=t+"-module",a=y(this),r=i.context?y(i.context):y("body"),c=this,u=a.data(o);s={initialize:function(){s.verbose("Initializing element"),a.on("click"+n,e.close,s.dismiss).data(o,s),i.detachable&&a.parent()[0]!==r[0]&&a.detach().prependTo(r),0<i.displayTime&&setTimeout(s.hide,i.displayTime),s.show()},destroy:function(){s.verbose("Destroying instance"),a.removeData(o).off(n)},show:function(){s.should.show()&&!a.is(":visible")&&(s.debug("Showing nag",i.animation.show),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideDown(i.duration,i.easing))},hide:function(){s.debug("Showing nag",i.animation.hide),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideUp(i.duration,i.easing)},onHide:function(){s.debug("Removing nag",i.animation.hide),a.remove(),i.onHide&&i.onHide()},dismiss:function(e){i.storageMethod&&s.storage.set(i.key,i.value),s.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return i.persist?(s.debug("Persistent nag is set, can show nag"),!0):s.storage.get(i.key)!=i.value.toString()?(s.debug("Stored value is not set, can show nag",s.storage.get(i.key)),!0):(s.debug("Stored value is set, cannot show nag",s.storage.get(i.key)),!1)}},get:{storageOptions:function(){var e={};return i.expires&&(e.expires=i.expires),i.domain&&(e.domain=i.domain),i.path&&(e.path=i.path),e}},clear:function(){s.storage.remove(i.key)},storage:{set:function(e,t){var n=s.get.storageOptions();if("localstorage"==i.storageMethod&&x.localStorage!==C)x.localStorage.setItem(e,t),s.debug("Value stored using local storage",e,t);else if("sessionstorage"==i.storageMethod&&x.sessionStorage!==C)x.sessionStorage.setItem(e,t),s.debug("Value stored using session storage",e,t);else{if(y.cookie===C)return void s.error(l.noCookieStorage);y.cookie(e,t,n),s.debug("Value stored using cookie",e,t,n)}},get:function(e,t){var n;return"localstorage"==i.storageMethod&&x.localStorage!==C?n=x.localStorage.getItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?n=x.sessionStorage.getItem(e):y.cookie!==C?n=y.cookie(e):s.error(l.noCookieStorage),"undefined"!=n&&"null"!=n&&n!==C&&null!==n||(n=C),n},remove:function(e){var t=s.get.storageOptions();"localstorage"==i.storageMethod&&x.localStorage!==C?x.localStorage.removeItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?x.sessionStorage.removeItem(e):y.cookie!==C?y.removeCookie(e,t):s.error(l.noStorage)}},setting:function(e,t){if(s.debug("Changing setting",e,t),y.isPlainObject(e))y.extend(!0,i,e);else{if(t===C)return i[e];y.isPlainObject(i[e])?y.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(y.isPlainObject(e))y.extend(!0,s,e);else{if(t===C)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(g||t),g=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;g=!1,clearTimeout(s.performance.timer),y.each(p,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",m&&(e+=" '"+m+"'"),(console.group!==C||console.table!==C)&&0<p.length&&(console.groupCollapsed(e),console.table?console.table(p):y.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(i,e,t){var o,a,n,r=u;return e=e||b,t=c||t,"string"==typeof i&&r!==C&&(i=i.split(/[\. ]/),o=i.length-1,y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==C)return a=r[n],!1;if(!y.isPlainObject(r[t])||e==o)return r[t]!==C?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),y.isFunction(a)?n=a.apply(t,e):a!==C&&(n=a),Array.isArray(f)?f.push(n):f!==C?f=[f,n]:n!==C&&(f=n),a}},v?(u===C&&s.initialize(),s.invoke(h)):(u!==C&&u.invoke("destroy"),s.initialize())}),f!==C?f:this},y.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},y.extend(y.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(L,q,V,z){"use strict";L.isFunction=L.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},q=void 0!==q&&q.Math==Math?q:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),L.fn.popup=function(T){var S,e=L(this),D=L(V),A=L(q),E=L("body"),F=e.selector||"",P="ontouchstart"in V.documentElement?"touchstart":"click",O=(new Date).getTime(),R=[],M=T,I="string"==typeof M,j=[].slice.call(arguments,1);return e.each(function(){var u,d,e,t,n,f,m=L.isPlainObject(T)?L.extend(!0,{},L.fn.popup.settings,T):L.extend({},L.fn.popup.settings),o=m.selector,g=m.className,p=m.error,h=m.metadata,i=m.namespace,a="."+m.namespace,r="module-"+i,v=L(this),s=L(m.context),l=L(m.scrollContext),b=L(m.boundary),y=m.target?L(m.target):v,x=0,c=!1,C=!1,w=this,k=v.data(r);f={initialize:function(){f.debug("Initializing",v),f.createID(),f.bind.events(),!f.exists()&&m.preserve&&f.create(),m.observeChanges&&f.observeChanges(),f.instantiate()},instantiate:function(){f.verbose("Storing instance",f),k=f,v.data(r,k)},observeChanges:function(){"MutationObserver"in q&&((e=new MutationObserver(f.event.documentChanged)).observe(V,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",e))},refresh:function(){m.popup?u=L(m.popup).eq(0):m.inline&&(u=y.nextAll(o.popup).eq(0),m.popup=u),m.popup?(u.addClass(g.loading),d=f.get.offsetParent(),u.removeClass(g.loading),m.movePopup&&f.has.popup()&&f.get.offsetParent(u)[0]!==d[0]&&(f.debug("Moving popup to the same offset parent as target"),u.detach().appendTo(d))):d=m.inline?f.get.offsetParent(y):f.has.popup()?f.get.offsetParent(u):E,d.is("html")&&d[0]!==E[0]&&(f.debug("Setting page as offset parent"),d=E),f.get.variation()&&f.set.variation()},reposition:function(){f.refresh(),f.set.position()},destroy:function(){f.debug("Destroying previous module"),e&&e.disconnect(),u&&!m.preserve&&f.removePopup(),clearTimeout(f.hideTimer),clearTimeout(f.showTimer),f.unbind.close(),f.unbind.events(),v.removeData(r)},event:{start:function(e){var t=L.isPlainObject(m.delay)?m.delay.show:m.delay;clearTimeout(f.hideTimer),(!C||C&&m.addTouchEvents)&&(f.showTimer=setTimeout(f.show,t))},end:function(){var e=L.isPlainObject(m.delay)?m.delay.hide:m.delay;clearTimeout(f.showTimer),f.hideTimer=setTimeout(f.hide,e)},touchstart:function(e){C=!0,m.addTouchEvents&&f.show()},resize:function(){f.is.visible()&&f.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==w||0<L(e).find(w).length)&&(f.debug("Element removed from DOM, tearing down events"),f.destroy())})})},hideGracefully:function(e){var t=L(e.target),n=L.contains(V.documentElement,e.target),i=0<t.closest(o.popup).length;e&&!i&&n?(f.debug("Click occurred outside popup hiding popup"),f.hide()):f.debug("Click was inside popup, keeping popup open")}},create:function(){var e=f.get.html(),t=f.get.title(),n=f.get.content();e||n||t?(f.debug("Creating pop-up html"),e=e||m.templates.popup({title:t,content:n}),u=L("<div/>").addClass(g.popup).data(h.activator,v).html(e),m.inline?(f.verbose("Inserting popup element inline",u),u.insertAfter(v)):(f.verbose("Appending popup element to body",u),u.appendTo(s)),f.refresh(),f.set.variation(),m.hoverable&&f.bind.popup(),m.onCreate.call(u,w)):m.popup?(L(m.popup).data(h.activator,v),f.verbose("Used popup specified in settings"),f.refresh(),m.hoverable&&f.bind.popup()):0!==y.next(o.popup).length?(f.verbose("Pre-existing popup found"),m.inline=!0,m.popup=y.next(o.popup).data(h.activator,v),f.refresh(),m.hoverable&&f.bind.popup()):f.debug("No content specified skipping display",w)},createID:function(){n=(Math.random().toString(16)+"000000000").substr(2,8),t="."+n,f.verbose("Creating unique id for element",n)},toggle:function(){f.debug("Toggling pop-up"),f.is.hidden()?(f.debug("Popup is hidden, showing pop-up"),f.unbind.close(),f.show()):(f.debug("Popup is visible, hiding pop-up"),f.hide())},show:function(e){if(e=e||function(){},f.debug("Showing pop-up",m.transition),f.is.hidden()&&(!f.is.active()||!f.is.dropdown())){if(f.exists()||f.create(),!1===m.onShow.call(u,w))return void f.debug("onShow callback returned false, cancelling popup animation");m.preserve||m.popup||f.refresh(),u&&f.set.position()&&(f.save.conditions(),m.exclusive&&f.hideAll(),f.animate.show(e))}},hide:function(e){if(e=e||function(){},f.is.visible()||f.is.animating()){if(!1===m.onHide.call(u,w))return void f.debug("onHide callback returned false, cancelling popup animation");f.remove.visible(),f.unbind.close(),f.restore.conditions(),f.animate.hide(e)}},hideAll:function(){L(o.popup).filter("."+g.popupVisible).each(function(){L(this).data(h.activator).popup("hide")})},exists:function(){return!!u&&(m.inline||m.popup?f.has.popup():1<=u.closest(s).length)},removePopup:function(){f.has.popup()&&!m.popup&&(f.debug("Removing popup",u),u.remove(),u=z,m.onRemove.call(u,w))},save:{conditions:function(){f.cache={title:v.attr("title")},f.cache.title&&v.removeAttr("title"),f.verbose("Saving original attributes",f.cache.title)}},restore:{conditions:function(){return f.cache&&f.cache.title&&(v.attr("title",f.cache.title),f.verbose("Restoring original attributes",f.cache.title)),!0}},supports:{svg:function(){return"undefined"!=typeof SVGGraphicsElement}},animate:{show:function(e){e=L.isFunction(e)?e:function(){},m.transition&&L.fn.transition!==z&&v.transition("is supported")?(f.set.visible(),u.transition({animation:m.transition+" in",queue:!1,debug:m.debug,verbose:m.verbose,duration:m.duration,onComplete:function(){f.bind.close(),e.call(u,w),m.onVisible.call(u,w)}})):f.error(p.noTransition)},hide:function(e){e=L.isFunction(e)?e:function(){},f.debug("Hiding pop-up"),m.transition&&L.fn.transition!==z&&v.transition("is supported")?u.transition({animation:m.transition+" out",queue:!1,duration:m.duration,debug:m.debug,verbose:m.verbose,onComplete:function(){f.reset(),e.call(u,w),m.onHidden.call(u,w)}}):f.error(p.noTransition)}},change:{content:function(e){u.html(e)}},get:{html:function(){return v.removeData(h.html),v.data(h.html)||m.html},title:function(){return v.removeData(h.title),v.data(h.title)||m.title},content:function(){return v.removeData(h.content),v.data(h.content)||m.content||v.attr("title")},variation:function(){return v.removeData(h.variation),v.data(h.variation)||m.variation},popup:function(){return u},popupOffset:function(){return u.offset()},calculations:function(){var e,t=f.get.offsetParent(u),n=y[0],i=b[0]==q,o=y.offset(),a=m.inline||m.popup&&m.movePopup?y.offsetParent().offset():{top:0,left:0},r=i?{top:0,left:0}:b.offset(),s={},l=i?{top:A.scrollTop(),left:A.scrollLeft()}:{top:0,left:0};if(s={target:{element:y[0],width:y.outerWidth(),height:y.outerHeight(),top:o.top-a.top,left:o.left-a.left,margin:{}},popup:{width:u.outerWidth(),height:u.outerHeight()},parent:{width:d.outerWidth(),height:d.outerHeight()},screen:{top:r.top,left:r.left,scroll:{top:l.top,left:l.left},width:b.width(),height:b.height()}},t.get(0)!==d.get(0)){var c=t.offset();s.target.top-=c.top,s.target.left-=c.left,s.parent.width=t.outerWidth(),s.parent.height=t.outerHeight()}return m.setFluidWidth&&f.is.fluid()&&(s.container={width:u.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=m.inline?parseInt(q.getComputedStyle(n).getPropertyValue("margin-top"),10):0,s.target.margin.left=m.inline?f.is.rtl()?parseInt(q.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(q.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s},id:function(){return n},startEvent:function(){return"hover"==m.on?"mouseenter":"focus"==m.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==m.on?"mouseleave":"focus"==m.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return n=(t=t||f.get.calculations()).popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},f.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(e){var t=(e!==z?e[0]:y[0]).parentNode,n=L(t);if(t)for(var i="none"===n.css("transform"),o="static"===n.css("position"),a=n.is("body");t&&!a&&o&&i;)t=t.parentNode,i="none"===(n=L(t)).css("transform"),o="static"===n.css("position"),a=n.is("body");return n&&0<n.length?n:L()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o="top"==n||"bottom"==n,a=!1,r=!1,s=!1;return c||(f.verbose("All available positions available"),c=f.get.positions()),f.debug("Recording last position tried",e),c[e]=!0,"opposite"===m.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[n],i]).join(" "),a=!0===c[s],f.debug("Trying opposite strategy",s)),"adjacent"===m.prefer&&o&&(s=(s=[n,{left:"center",center:"right",right:"left"}[i]]).join(" "),r=!0===c[s],f.debug("Trying adjacent strategy",s)),(r||a)&&(f.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[e]),s}},set:{position:function(e,t){if(0!==y.length&&0!==u.length){var n,i,o,a,r,s,l,c;if(t=t||f.get.calculations(),e=e||v.data(h.position)||m.position,n=v.data(h.offset)||m.offset,i=m.distanceAway,o=t.target,a=t.popup,r=t.parent,f.should.centerArrow(t)&&(f.verbose("Adjusting offset to center arrow on small target element"),"top left"!=e&&"bottom left"!=e||(n+=o.width/2,n-=m.arrowPixelsFromEdge),"top right"!=e&&"bottom right"!=e||(n-=o.width/2,n+=m.arrowPixelsFromEdge)),0===o.width&&0===o.height&&!f.is.svg(o.element))return f.debug("Popup target is hidden, no action taken"),!1;switch(m.inline&&(f.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),f.debug("Determining popup position from calculations",e,t),f.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),f.debug("RTL: Popup position updated",e)),x==m.maxSearchDepth&&"string"==typeof m.lastResort&&(e=m.lastResort),e){case"top left":s={top:"auto",bottom:r.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":s={bottom:r.height-o.top+i,left:o.left+o.width/2-a.width/2+n,top:"auto",right:"auto"};break;case"top right":s={bottom:r.height-o.top+i,right:r.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":s={top:o.top+o.height/2-a.height/2+n,right:r.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":s={top:o.top+o.height/2-a.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":s={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":s={top:o.top+o.height+i,left:o.left+o.width/2-a.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":s={top:o.top+o.height+i,right:r.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(s===z&&f.error(p.invalidPosition,e),f.debug("Calculated popup positioning values",s),u.css(s).removeClass(g.position).addClass(e).addClass(g.loading),l=f.get.popupOffset(),c=f.get.distanceFromBoundary(l,t),!m.forcePosition&&f.is.offstage(c,e)){if(f.debug("Position is outside viewport",e),x<m.maxSearchDepth)return x++,e=f.get.nextPosition(e),f.debug("Trying new position",e),!!u&&f.set.position(e,t);if(!m.lastResort)return f.debug("Popup could not find a position to display",u),f.error(p.cannotPlace,w),f.remove.attempts(),f.remove.loading(),f.reset(),m.onUnplaceable.call(u,w),!1;f.debug("No position found, showing with last position")}return f.debug("Position is on stage",e),f.remove.attempts(),f.remove.loading(),m.setFluidWidth&&f.is.fluid()&&f.set.fluidWidth(t),!0}f.error(p.notFound)},fluidWidth:function(e){e=e||f.get.calculations(),f.debug("Automatically setting element width to parent width",e.parent.width),u.css("width",e.container.width)},variation:function(e){(e=e||f.get.variation())&&f.has.popup()&&(f.verbose("Adding variation to popup",e),u.addClass(e))},visible:function(){v.addClass(g.visible)}},remove:{loading:function(){u.removeClass(g.loading)},variation:function(e){(e=e||f.get.variation())&&(f.verbose("Removing variation",e),u.removeClass(e))},visible:function(){v.removeClass(g.visible)},attempts:function(){f.verbose("Resetting all searched positions"),x=0,c=!1}},bind:{events:function(){f.debug("Binding popup events to module"),"click"==m.on&&v.on(P+a,f.toggle),"hover"==m.on&&v.on("touchstart"+a,f.event.touchstart),f.get.startEvent()&&v.on(f.get.startEvent()+a,f.event.start).on(f.get.endEvent()+a,f.event.end),m.target&&f.debug("Target set to element",y),A.on("resize"+t,f.event.resize)},popup:function(){f.verbose("Allowing hover events on popup to prevent closing"),u&&f.has.popup()&&u.on("mouseenter"+a,f.event.start).on("mouseleave"+a,f.event.end)},close:function(){(!0===m.hideOnScroll||"auto"==m.hideOnScroll&&"click"!=m.on)&&f.bind.closeOnScroll(),f.is.closable()?f.bind.clickaway():"hover"==m.on&&C&&f.bind.touchClose()},closeOnScroll:function(){f.verbose("Binding scroll close event to document"),l.one(f.get.scrollEvent()+t,f.event.hideGracefully)},touchClose:function(){f.verbose("Binding popup touchclose event to document"),D.on("touchstart"+t,function(e){f.verbose("Touched away from popup"),f.event.hideGracefully.call(w,e)})},clickaway:function(){f.verbose("Binding popup close event to document"),D.on(P+t,function(e){f.verbose("Clicked away from popup"),f.event.hideGracefully.call(w,e)})}},unbind:{events:function(){A.off(t),v.off(a)},close:function(){D.off(t),l.off(t)}},has:{popup:function(){return u&&0<u.length}},should:{centerArrow:function(e){return!f.is.basic()&&e.target.width<=2*m.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==m.closable?"hover"!=m.on:m.closable},offstage:function(e,n){var i=[];return L.each(e,function(e,t){t<-m.jitter&&(f.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),0<i.length},svg:function(e){return f.supports.svg()&&e instanceof SVGGraphicsElement},basic:function(){return v.hasClass(g.basic)},active:function(){return v.hasClass(g.active)},animating:function(){return u!==z&&u.hasClass(g.animating)},fluid:function(){return u!==z&&u.hasClass(g.fluid)},visible:function(){return u!==z&&u.hasClass(g.popupVisible)},dropdown:function(){return v.hasClass(g.dropdown)},hidden:function(){return!f.is.visible()},rtl:function(){return"rtl"===v.attr("dir")||"rtl"===v.css("direction")}},reset:function(){f.remove.visible(),m.preserve?L.fn.transition!==z&&u.transition("remove transition"):f.removePopup()},setting:function(e,t){if(L.isPlainObject(e))L.extend(!0,m,e);else{if(t===z)return m[e];m[e]=t}},internal:function(e,t){if(L.isPlainObject(e))L.extend(!0,f,e);else{if(t===z)return f[e];f[e]=t}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;m.performance&&(n=(t=(new Date).getTime())-(O||t),O=t,R.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=m.name+":",n=0;O=!1,clearTimeout(f.performance.timer),L.each(R,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",F&&(e+=" '"+F+"'"),(console.group!==z||console.table!==z)&&0<R.length&&(console.groupCollapsed(e),console.table?console.table(R):L.each(R,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),R=[]}},invoke:function(i,e,t){var o,a,n,r=k;return e=e||j,t=w||t,"string"==typeof i&&r!==z&&(i=i.split(/[\. ]/),o=i.length-1,L.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(L.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==z)return a=r[n],!1;if(!L.isPlainObject(r[t])||e==o)return r[t]!==z&&(a=r[t]),!1;r=r[t]}})),L.isFunction(a)?n=a.apply(t,e):a!==z&&(n=a),Array.isArray(S)?S.push(n):S!==z?S=[S,n]:n!==z&&(S=n),a}},I?(k===z&&f.initialize(),f.invoke(M)):(k!==z&&k.invoke("destroy"),f.initialize())}),S!==z?S:this},L.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:q,addTouchEvents:!0,position:"top left",forcePosition:!1,variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:q,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e},popup:function(e){var t="",n=L.fn.popup.settings.templates.escape;return typeof e!==z&&(typeof e.title!==z&&e.title&&(e.title=n(e.title),t+='<div class="header">'+e.title+"</div>"),typeof e.content!==z&&e.content&&(e.content=n(e.content),t+='<div class="content">'+e.content+"</div>")),t}}}}(jQuery,window,document),function(T,e,S,D){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.progress=function(h){var v,e=T(this),b=e.selector||"",y=(new Date).getTime(),x=[],C=h,w="string"==typeof C,k=[].slice.call(arguments,1);return e.each(function(){var c,s=T.isPlainObject(h)?T.extend(!0,{},T.fn.progress.settings,h):T.extend({},T.fn.progress.settings),n=s.className,t=s.metadata,e=s.namespace,i=s.selector,l=s.error,o="."+e,a="module-"+e,u=T(this),d=T(this).find(i.bar),r=T(this).find(i.progress),f=T(this).find(i.label),m=this,g=u.data(a),p=!1;c={helper:{sum:function(e){return Array.isArray(e)?e.reduce(function(e,t){return e+Number(t)},0):0},derivePrecision:function(e,t){for(var n=0,i=1,o=e/t;n<10&&!(1<(o*=i));)i=Math.pow(10,n++);return i},forceArray:function(e){return Array.isArray(e)?e:isNaN(e)?"string"==typeof e?e.split(","):[]:[e]}},initialize:function(){c.set.duration(),c.set.transitionEvent(),c.debug(m),c.read.metadata(),c.read.settings(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of progress",c),g=c,u.data(a,c)},destroy:function(){c.verbose("Destroying previous progress for",u),clearInterval(g.interval),c.remove.state(),u.removeData(a),g=D},reset:function(){c.remove.nextValue(),c.update.progress(0)},complete:function(e){(c.percent===D||c.percent<100)&&(c.remove.progressPoll(),!0!==e&&c.set.percent(100))},read:{metadata:function(){var e={percent:c.helper.forceArray(u.data(t.percent)),total:u.data(t.total),value:c.helper.forceArray(u.data(t.value))};e.total!==D&&(c.debug("Total value set from metadata",e.total),c.set.total(e.total)),0<e.value.length&&(c.debug("Current value set from metadata",e.value),c.set.value(e.value),c.set.progress(e.value)),0<e.percent.length&&(c.debug("Current percent value set from metadata",e.percent),c.set.percent(e.percent))},settings:function(){!1!==s.total&&(c.debug("Current total set in settings",s.total),c.set.total(s.total)),!1!==s.value&&(c.debug("Current value set in settings",s.value),c.set.value(s.value),c.set.progress(c.value)),!1!==s.percent&&(c.debug("Current percent set in settings",s.percent),c.set.percent(s.percent))}},bind:{transitionEnd:function(t){var e=c.get.transitionEnd();d.one(e+o,function(e){clearTimeout(c.failSafeTimer),t.call(this,e)}),c.failSafeTimer=setTimeout(function(){d.triggerHandler(e)},s.duration+s.failSafeDelay),c.verbose("Adding fail safe timer",c.timer)}},increment:function(e){var t,n;e=c.has.total()?(t=c.get.value(),e||1):(t=c.get.percent(),e||c.get.randomValue()),n=t+e,c.debug("Incrementing percentage by",t,n,e),n=c.get.normalizedValue(n),c.set.progress(n)},decrement:function(e){var t,n;c.get.total()?(n=(t=c.get.value())-(e=e||1),c.debug("Decrementing value by",e,t)):(n=(t=c.get.percent())-(e=e||c.get.randomValue()),c.debug("Decrementing percentage by",e,t)),n=c.get.normalizedValue(n),c.set.progress(n)},has:{progressPoll:function(){return c.progressPoll},total:function(){return!1!==c.get.total()}},get:{text:function(e,t){var n=t||0,i=c.get.value(n),o=c.get.total(),a=p?c.get.displayPercent(n):c.get.percent(n),r=!1!==o?Math.max(0,o-i):100-a;return e=(e=e||"").replace("{value}",i).replace("{total}",o||0).replace("{left}",r).replace("{percent}",a).replace("{bar}",s.text.bars[n]||""),c.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return c.debug("Value cannot decrement below 0"),0;if(c.has.total()){if(e>c.total)return c.debug("Value cannot increment above total",c.total),c.total}else if(100<e)return c.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==s.updateInterval?s.duration:s.updateInterval},randomValue:function(){return c.debug("Generating random increment percentage"),Math.floor(Math.random()*s.random.max+s.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=S.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==D)return n[e]},displayPercent:function(e){var t=T(d[e]),n=t.width(),i=u.width(),o=parseInt(t.css("min-width"),10)<n?n/i*100:c.percent;return 0<s.precision?Math.round(o*(10*s.precision))/(10*s.precision):Math.round(o)},percent:function(e){return c.percent&&c.percent[e||0]||0},value:function(e){return c.nextValue||c.value&&c.value[e||0]||0},total:function(){return c.total!==D&&c.total}},create:{progressPoll:function(){c.progressPoll=setTimeout(function(){c.update.toNextValue(),c.remove.progressPoll()},c.get.updateInterval())}},is:{complete:function(){return c.is.success()||c.is.warning()||c.is.error()},success:function(){return u.hasClass(n.success)},warning:function(){return u.hasClass(n.warning)},error:function(){return u.hasClass(n.error)},active:function(){return u.hasClass(n.active)},visible:function(){return u.is(":visible")}},remove:{progressPoll:function(){c.verbose("Removing progress poll timer"),c.progressPoll&&(clearTimeout(c.progressPoll),delete c.progressPoll)},nextValue:function(){c.verbose("Removing progress value stored for next update"),delete c.nextValue},state:function(){c.verbose("Removing stored state"),delete c.total,delete c.percent,delete c.value},active:function(){c.verbose("Removing active state"),u.removeClass(n.active)},success:function(){c.verbose("Removing success state"),u.removeClass(n.success)},warning:function(){c.verbose("Removing warning state"),u.removeClass(n.warning)},error:function(){c.verbose("Removing error state"),u.removeClass(n.error)}},set:{barWidth:function(e){c.debug("set bar width with ",e),e=c.helper.forceArray(e);var o=-1,a=-1,r=c.helper.sum(e),s=d.length,l=1<s,t=e.map(function(e,t){var n=t===s-1&&0===r,i=T(d[t]);return 0===e&&l&&!n?i.css("display","none"):(l&&n&&i.css("background","transparent"),-1==o&&(o=t),a=t,i.css({display:"block",width:e+"%"})),parseFloat(e)});e.forEach(function(e,t){T(d[t]).css({borderTopLeftRadius:t==o?"":0,borderBottomLeftRadius:t==o?"":0,borderTopRightRadius:t==a?"":0,borderBottomRightRadius:t==a?"":0})}),u.attr("data-percent",t)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,c.verbose("Setting progress bar transition duration",e),d.css({"transition-duration":e})},percent:function(e){e=c.helper.forceArray(e).map(function(e){return"string"==typeof e?+e.replace("%",""):e});var t=c.has.total(),n=c.helper.sum(e),i=1<e.length&&t,o=c.helper.sum(c.helper.forceArray(c.value));if(i&&o>c.total)c.error(l.sumExceedsTotal,o,c.total);else if(!i&&100<n)c.error(l.tooHigh,n);else if(n<0)c.error(l.tooLow,n);else{var a=0<s.precision?s.precision:i?c.helper.derivePrecision(Math.min.apply(null,c.value),c.total):0,r=e.map(function(e){return 0<a?Math.round(e*(10*a))/(10*a):Math.round(e)});c.percent=r,t&&(c.value=r.map(function(e){return 0<a?Math.round(e/100*c.total*(10*a))/(10*a):Math.round(e/100*c.total*10)/10}),s.limitValues&&(c.value=c.value.map(function(e){return Math.max(0,Math.min(100,e))}))),c.set.barWidth(e),c.set.labelInterval(),c.set.labels()}s.onChange.call(m,e,c.value,c.total)},labelInterval:function(){clearInterval(c.interval),c.bind.transitionEnd(function(){c.verbose("Bar finished animating, removing continuous label updates"),clearInterval(c.interval),p=!1,c.set.labels()}),p=!0,c.interval=setInterval(function(){T.contains(S.documentElement,m)||(clearInterval(c.interval),p=!1),c.set.labels()},s.framerate)},labels:function(){c.verbose("Setting both bar progress and outer label text"),c.set.barLabel(),c.set.state()},label:function(e){(e=e||"")&&(e=c.get.text(e),c.verbose("Setting label to text",e),f.text(e))},state:function(e){100===(e=e!==D?e:c.helper.sum(c.percent))?s.autoSuccess&&1===d.length&&!(c.is.warning()||c.is.error()||c.is.success())?(c.set.success(),c.debug("Automatically triggering success at 100%")):(c.verbose("Reached 100% removing active state"),c.remove.active(),c.remove.progressPoll()):0<e?(c.verbose("Adjusting active progress bar label",e),c.set.active()):(c.remove.active(),c.set.label(s.text.active))},barLabel:function(i){r.map(function(e,t){var n=T(t);i!==D?n.text(c.get.text(i,e)):"ratio"==s.label&&c.has.total()?(c.verbose("Adding ratio to bar label"),n.text(c.get.text(s.text.ratio,e))):"percent"==s.label&&(c.verbose("Adding percentage to bar label"),n.text(c.get.text(s.text.percent,e)))})},active:function(e){e=e||s.text.active,c.debug("Setting active state"),s.showActivity&&!c.is.active()&&u.addClass(n.active),c.remove.warning(),c.remove.error(),c.remove.success(),(e=s.onLabelUpdate("active",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onActive.call(m,c.value,c.total)})},success:function(e,t){e=e||s.text.success||s.text.active,c.debug("Setting success state"),u.addClass(n.success),c.remove.active(),c.remove.warning(),c.remove.error(),c.complete(t),e=s.text.success?s.onLabelUpdate("success",e,c.value,c.total):s.onLabelUpdate("active",e,c.value,c.total),c.set.label(e),c.bind.transitionEnd(function(){s.onSuccess.call(m,c.total)})},warning:function(e,t){e=e||s.text.warning,c.debug("Setting warning state"),u.addClass(n.warning),c.remove.active(),c.remove.success(),c.remove.error(),c.complete(t),(e=s.onLabelUpdate("warning",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onWarning.call(m,c.value,c.total)})},error:function(e,t){e=e||s.text.error,c.debug("Setting error state"),u.addClass(n.error),c.remove.active(),c.remove.success(),c.remove.warning(),c.complete(t),(e=s.onLabelUpdate("error",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onError.call(m,c.value,c.total)})},transitionEvent:function(){c.get.transitionEnd()},total:function(e){c.total=e},value:function(e){c.value=c.helper.forceArray(e)},progress:function(e){c.has.progressPoll()?(c.debug("Updated within interval, setting next update to use new value",e),c.set.nextValue(e)):(c.debug("First update in progress update interval, immediately updating",e),c.update.progress(e),c.create.progressPoll())},nextValue:function(e){c.nextValue=e}},update:{toNextValue:function(){var e=c.nextValue;e&&(c.debug("Update interval complete using last updated value",e),c.update.progress(e),c.remove.nextValue())},progress:function(e){var n=c.has.total();n&&c.set.value(e);var t=c.helper.forceArray(e).map(function(e){var t;return!1===(e=c.get.numericValue(e))&&c.error(l.nonNumeric,e),e=c.get.normalizedValue(e),n?(t=0<c.total?e/c.total*100:100,c.debug("Calculating percent complete from total",t)):(t=e,c.debug("Setting value to exact percentage value",t)),t});c.set.percent(t)}},setting:function(e,t){if(c.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,s,e);else{if(t===D)return s[e];T.isPlainObject(s[e])?T.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,c,e);else{if(t===D)return c[e];c[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,s.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),c.verbose.apply(console,arguments)))},error:function(){s.silent||(c.error=Function.prototype.bind.call(console.error,console,s.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=s.name+":",n=0;y=!1,clearTimeout(c.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==D||console.table!==D)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:c.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),Array.isArray(v)?v.push(n):v!==D?v=[v,n]:n!==D&&(v=n),a}},w?(g===D&&c.initialize(),c.invoke(C)):(g!==D&&g.invoke("destroy"),c.initialize())}),v!==D?v:this},T.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%",sumExceedsTotal:"Sum of multple values exceed total"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}",bars:[""]},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(H,t,U,B){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),H.fn.slider=function(P){var O,e=H(this),R=H(t),M=e.selector||"",I=(new Date).getTime(),j=[],L=P,q="string"==typeof L,V=[].slice.call(arguments,1),z=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],N=0;return e.each(function(){var m,s,l,e,g,r,t,o,p,h,v,c,n,u,a,b,d=H.isPlainObject(P)?H.extend(!0,{},H.fn.slider.settings,P):H.extend({},H.fn.slider.settings),i=d.className,f=d.metadata,y=d.namespace,x=d.error,C=d.keys,w=d.interpretLabel,k=!1,T="."+y,S="module-"+y,D=H(this),A=this,E=D.data(S),F=1;b={initialize:function(){b.debug("Initializing slider",d),a=!0,t=N+=1,n=b.setup.testOutTouch(),b.setup.layout(),b.setup.labels(),b.is.disabled()||b.bind.events(),b.read.metadata(),b.read.settings(),a=!1,b.instantiate()},instantiate:function(){b.verbose("Storing instance of slider",b),E=b,D.data(S,b)},destroy:function(){b.verbose("Destroying previous slider for",D),clearInterval(E.interval),b.unbind.events(),b.unbind.slidingEvents(),D.removeData(S),E=B},setup:{layout:function(){D.attr("tabindex")===B&&D.attr("tabindex",0),0==D.find(".inner").length&&D.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"),c=b.get.precision(),s=D.find(".thumb:not(.second)"),m=s,b.is.range()&&(0==D.find(".thumb.second").length&&D.find(".inner").append("<div class='thumb second'></div>"),l=D.find(".thumb.second")),e=D.find(".track"),g=D.find(".track-fill"),v=s.width()/2},labels:function(){b.is.labeled()&&(0!=(r=D.find(".labels:not(.auto)")).length?b.setup.customLabel():b.setup.autoLabel(),d.showLabelTicks&&D.addClass(i.ticked))},testOutTouch:function(){try{return U.createEvent("TouchEvent"),!0}catch(e){return!1}},customLabel:function(){var n,e=r.find(".label"),i=e.length,o=b.get.min(),a=b.get.max();e.each(function(e){var t=H(this).attr("data-value");n=t?((t=a<t?a:t<o?o:t)-o)/(a-o):(e+1)/(i+1),b.update.labelPosition(n,H(this))})},autoLabel:function(){if(0!=b.get.step()){0!=(r=D.find(".labels")).length?r.empty():r=D.append('<ul class="auto labels"></ul>').find(".labels");for(var e=0,t=b.get.numLabels();e<=t;e++){var n=b.get.label(e),i=""!==n?e%b.get.gapRatio()?H('<li class="halftick label"></li>'):H('<li class="label">'+n+"</li>"):null,o=e/t;i&&(b.update.labelPosition(o,i),r.append(i))}}}},bind:{events:function(){b.bind.globalKeyboardEvents(),b.bind.keyboardEvents(),b.bind.mouseEvents(),b.is.touch()&&b.bind.touchEvents(),d.autoAdjustLabels&&b.bind.windowEvents()},keyboardEvents:function(){b.verbose("Binding keyboard events"),D.on("keydown"+T,b.event.keydown)},globalKeyboardEvents:function(){H(U).on("keydown"+T+t,b.event.activateFocus)},mouseEvents:function(){b.verbose("Binding mouse events"),D.find(".track, .thumb, .inner").on("mousedown"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("mousedown"+T,b.event.down),D.on("mouseenter"+T,function(e){k=!0}),D.on("mouseleave"+T,function(e){k=!1})},touchEvents:function(){b.verbose("Binding touch events"),D.find(".track, .thumb, .inner").on("touchstart"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("touchstart"+T,b.event.down)},slidingEvents:function(){b.verbose("Binding page wide events while handle is being draged"),b.is.touch()?(H(U).on("touchmove"+T,b.event.move),H(U).on("touchend"+T,b.event.up)):(H(U).on("mousemove"+T,b.event.move),H(U).on("mouseup"+T,b.event.up))},windowEvents:function(){R.on("resize"+T,b.event.resize)}},unbind:{events:function(){D.find(".track, .thumb, .inner").off("mousedown"+T),D.find(".track, .thumb, .inner").off("touchstart"+T),D.off("mousedown"+T),D.off("mouseenter"+T),D.off("mouseleave"+T),D.off("touchstart"+T),D.off("keydown"+T),D.off("focusout"+T),H(U).off("keydown"+T+t,b.event.activateFocus),R.off("resize"+T)},slidingEvents:function(){b.is.touch()?(H(U).off("touchmove"+T),H(U).off("touchend"+T)):(H(U).off("mousemove"+T),H(U).off("mouseup"+T))}},event:{down:function(e){if(e.preventDefault(),b.is.range()){var t=b.determine.eventPos(e),n=b.determine.pos(t);m=d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal?(u=n,B):b.determine.closestThumb(n)}b.is.disabled()||b.bind.slidingEvents()},move:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);if(m===B){var n=b.determine.eventPos(e),i=b.determine.pos(n);m=i<u?s:l}if(0==b.get.step()||b.is.smooth()){var o=b.thumbVal,a=b.secondThumbVal,r=b.determine.smoothValueFromEvent(e);m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(t=Math.max(o,t),r=Math.max(o,r)),a=t):(d.preventCrossover&&b.is.range()&&(t=Math.min(a,t),r=Math.min(a,r)),o=t),t=Math.abs(o-(a||0)),b.update.position(r),d.onMove.call(A,t,o,a)}else b.update.value(t,function(e,t,n){d.onMove.call(A,e,t,n)})},up:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);b.set.value(t),b.unbind.slidingEvents()},keydown:function(e,t){if(d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal&&(m=B),b.is.focused()&&H(U).trigger(e),t||b.is.focused()){var n=b.determine.keyMovement(e);if(0!=n)switch(e.preventDefault(),n){case 1:b.takeStep();break;case 2:b.takeStep(b.get.multiplier());break;case-1:b.backStep();break;case-2:b.backStep(b.get.multiplier())}}},activateFocus:function(e){!b.is.focused()&&b.is.hover()&&0!=b.determine.keyMovement(e)&&(e.preventDefault(),b.event.keydown(e,!0),D.focus())},resize:function(e){F!=b.get.gapRatio()&&(b.setup.labels(),F=b.get.gapRatio())}},resync:function(){b.verbose("Resyncing thumb position based on value"),b.is.range()&&b.update.position(b.secondThumbVal,l),b.update.position(b.thumbVal,s),b.setup.labels()},takeStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Taking a step"),0<t)b.set.value(n+t*e);else if(0==t){var i=b.get.precision(),o=n+e/i;b.set.value(Math.round(o*i)/i)}},backStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Going back a step"),0<t)b.set.value(n-t*e);else if(0==t){var i=b.get.precision(),o=n-e/i;b.set.value(Math.round(o*i)/i)}},is:{range:function(){return D.hasClass(d.className.range)},hover:function(){return k},focused:function(){return D.is(":focus")},disabled:function(){return D.hasClass(d.className.disabled)},labeled:function(){return D.hasClass(d.className.labeled)},reversed:function(){return D.hasClass(d.className.reversed)},vertical:function(){return D.hasClass(d.className.vertical)},smooth:function(){return d.smooth||D.hasClass(d.className.smooth)},touch:function(){return n}},get:{trackOffset:function(){return b.is.vertical()?e.offset().top:e.offset().left},trackLength:function(){return b.is.vertical()?e.height():e.width()},trackLeft:function(){return b.is.vertical()?e.position().top:e.position().left},trackStartPos:function(){return b.is.reversed()?b.get.trackLeft()+b.get.trackLength():b.get.trackLeft()},trackEndPos:function(){return b.is.reversed()?b.get.trackLeft():b.get.trackLeft()+b.get.trackLength()},trackStartMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-bottom"):D.css("padding-top"):b.is.reversed()?D.css("padding-right"):D.css("padding-left"))||"0px"},trackEndMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-top"):D.css("padding-bottom"):b.is.reversed()?D.css("padding-left"):D.css("padding-right"))||"0px"},precision:function(){var e,t=b.get.step();if(0!=t){var n=String(t).split(".");e=2==n.length?n[1].length:0}else e=d.decimalPlaces;var i=Math.pow(10,e);return b.debug("Precision determined",i),i},min:function(){return d.min},max:function(){var e=b.get.step(),t=b.get.min(),n=0===e?0:Math.floor((d.max-t)/e);return 0==(0===e?0:(d.max-t)%e)?d.max:t+n*e},step:function(){return d.step},numLabels:function(){var e=Math.round((b.get.max()-b.get.min())/b.get.step());return b.debug("Determined that there should be "+e+" labels"),e},labelType:function(){return d.labelType},label:function(e){if(w)return w(e);switch(d.labelType){case d.labelTypes.number:return Math.round((e*b.get.step()+b.get.min())*c)/c;case d.labelTypes.letter:return z[e%26];default:return e}},value:function(){return o},currentThumbValue:function(){return m!==B&&m.hasClass("second")?b.secondThumbVal:b.thumbVal},thumbValue:function(e){switch(e){case"second":if(b.is.range())return b.secondThumbVal;b.error(x.notrange);break;case"first":default:return b.thumbVal}},multiplier:function(){return d.pageMultiplier},thumbPosition:function(e){switch(e){case"second":if(b.is.range())return h;b.error(x.notrange);break;case"first":default:return p}},gapRatio:function(){var e=1;if(d.autoAdjustLabels){var t=b.get.numLabels(),n=b.get.trackLength(),i=1;if(0<n)for(;n/t*i<d.labelDistance;)t%i||(e=i),i+=1}return e}},determine:{pos:function(e){return b.is.reversed()?b.get.trackStartPos()-e+b.get.trackOffset():e-b.get.trackOffset()-b.get.trackStartPos()},closestThumb:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l)),o=Math.abs(e-i);return n===o&&b.get.thumbValue()===b.get.min()?l:n<=o?s:l},closestThumbPos:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l));return n<=Math.abs(e-i)?t:i},thumbPos:function(e){return b.is.vertical()?b.is.reversed()?e.css("bottom"):e.css("top"):b.is.reversed()?e.css("right"):e.css("left")},positionFromValue:function(e){var t=b.get.min(),n=b.get.max(),i=(e=n<e?n:e<t?t:e,b.get.trackLength()),o=(e-t)/(n-t),a=Math.round(o*i);return b.verbose("Determined position: "+a+" from value: "+e),a},positionFromRatio:function(e){var t=b.get.trackLength(),n=b.get.step(),i=Math.round(e*t);return 0==n?i:Math.round(i/n)*n},valueFromEvent:function(e){var t=b.determine.eventPos(e),n=b.determine.pos(t);return t<b.get.trackOffset()?b.is.reversed()?b.get.max():b.get.min():t>b.get.trackOffset()+b.get.trackLength()?b.is.reversed()?b.get.min():b.get.max():b.determine.value(n)},smoothValueFromEvent:function(e){var t,n=b.get.min(),i=b.get.max(),o=b.get.trackLength(),a=b.determine.eventPos(e)-b.get.trackOffset();return t=(a=a<0?0:o<a?o:a)/o,b.is.reversed()&&(t=1-t),t*(i-n)+n},eventPos:function(e){if(b.is.touch()){var t=e.changedTouches?e:e.originalEvent,n=t.changedTouches[0]?t.changedTouches:t.touches,i=n[0].pageY,o=n[0].pageX;return b.is.vertical()?i:o}var a=e.pageY||e.originalEvent.pageY,r=e.pageX||e.originalEvent.pageX;return b.is.vertical()?a:r},value:function(e){var t=b.is.reversed()?b.get.trackEndPos():b.get.trackStartPos(),n=(e-t)/((b.is.reversed()?b.get.trackStartPos():b.get.trackEndPos())-t),i=b.get.max()-b.get.min(),o=b.get.step(),a=n*i,r=0==o?a:Math.round(a/o)*o;return b.verbose("Determined value based upon position: "+e+" as: "+a),a!=r&&b.verbose("Rounding value to closest step: "+r),b.verbose("Cutting off additional decimal places"),Math.round((r+b.get.min())*c)/c},keyMovement:function(e){var t=e.which,n=b.is.vertical()?b.is.reversed()?C.downArrow:C.upArrow:C.downArrow,i=b.is.vertical()?b.is.reversed()?C.upArrow:C.downArrow:C.upArrow,o=b.is.vertical()?C.leftArrow:b.is.reversed()?C.rightArrow:C.leftArrow,a=b.is.vertical()?C.rightArrow:b.is.reversed()?C.leftArrow:C.rightArrow;return t==n||t==o?-1:t==i||t==a?1:t==C.pageDown?-2:t==C.pageUp?2:0}},handleNewValuePosition:function(e){var t=b.get.min(),n=b.get.max();return e<=t?e=t:n<=e&&(e=n),b.determine.positionFromValue(e)},set:{value:function(e){b.update.value(e,function(e,t,n){a&&!d.fireOnInit||(d.onChange.call(A,e,t,n),d.onMove.call(A,e,t,n))})},rangeValue:function(e,t){if(b.is.range()){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),t<=n?t=n:i<=t&&(t=i),b.thumbVal=e,b.secondThumbVal=t,o=Math.abs(b.thumbVal-b.secondThumbVal),b.update.position(b.thumbVal,s),b.update.position(b.secondThumbVal,l),a&&!d.fireOnInit||(d.onChange.call(A,o,b.thumbVal,b.secondThumbVal),d.onMove.call(A,o,b.thumbVal,b.secondThumbVal))}else b.error(x.notrange)},position:function(e,t){var n=b.determine.value(e);switch(t){case"second":b.secondThumbVal=n,b.update.position(n,l);break;default:b.thumbVal=n,b.update.position(n,s)}o=Math.abs(b.thumbVal-(b.secondThumbVal||0)),b.set.value(o)}},update:{value:function(e,t){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),b.is.range()?(m===B&&(m=e<=b.get.currentThumbValue()?s:l),m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(e=Math.max(b.thumbVal,e)),b.secondThumbVal=e):(d.preventCrossover&&b.is.range()&&(e=Math.min(b.secondThumbVal,e)),b.thumbVal=e),o=Math.abs(b.thumbVal-b.secondThumbVal)):(o=e,b.thumbVal=o),b.update.position(e),b.debug("Setting slider value to "+o),"function"==typeof t&&t(o,b.thumbVal,b.secondThumbVal)},position:function(e,t){var n=b.handleNewValuePosition(e),i=t!=B?t:m,o=b.thumbVal||b.get.min(),a=b.secondThumbVal||b.get.min();b.is.range()&&i.hasClass("second")?(h=n,a=e):(p=n,o=e);var r,s,l=b.get.min(),c=b.get.max(),u=100*(e-l)/(c-l),d=100*(Math.min(o,a)-l)/(c-l),f=100*(1-(Math.max(o,a)-l)/(c-l));r=b.is.vertical()?b.is.reversed()?(s={bottom:"calc("+u+"% - "+v+"px)",top:"auto"},{bottom:d+"%",top:f+"%"}):(s={top:"calc("+u+"% - "+v+"px)",bottom:"auto"},{top:d+"%",bottom:f+"%"}):b.is.reversed()?(s={right:"calc("+u+"% - "+v+"px)",left:"auto"},{right:d+"%",left:f+"%"}):(s={left:"calc("+u+"% - "+v+"px)",right:"auto"},{left:d+"%",right:f+"%"}),i.css(s),g.css(r),b.debug("Setting slider position to "+n)},labelPosition:function(e,t){var n=b.get.trackStartMargin(),i=b.get.trackEndMargin(),o=b.is.vertical()?b.is.reversed()?"bottom":"top":b.is.reversed()?"right":"left",a=b.is.reversed()&&!b.is.vertical()?" - ":" + ",r="(100% - "+n+" - "+i+") * "+e;t.css(o,"calc("+r+a+n+")")}},goto:{max:function(){b.set.value(b.get.max())},min:function(){b.set.value(b.get.min())}},read:{metadata:function(){var e={thumbVal:D.data(f.thumbVal),secondThumbVal:D.data(f.secondThumbVal)};e.thumbVal&&(b.is.range()&&e.secondThumbVal?(b.debug("Current value set from metadata",e.thumbVal,e.secondThumbVal),b.set.rangeValue(e.thumbVal,e.secondThumbVal)):(b.debug("Current value set from metadata",e.thumbVal),b.set.value(e.thumbVal)))},settings:function(){!1!==d.start&&(b.is.range()?(b.debug("Start position set from settings",d.start,d.end),b.set.rangeValue(d.start,d.end)):(b.debug("Start position set from settings",d.start),b.set.value(d.start)))}},setting:function(e,t){if(b.debug("Changing setting",e,t),H.isPlainObject(e))H.extend(!0,d,e);else{if(t===B)return d[e];H.isPlainObject(d[e])?H.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(H.isPlainObject(e))H.extend(!0,b,e);else{if(t===B)return b[e];b[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,d.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),b.verbose.apply(console,arguments)))},error:function(){d.silent||(b.error=Function.prototype.bind.call(console.error,console,d.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(I||t),I=t,j.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=d.name+":",n=0;I=!1,clearTimeout(b.performance.timer),H.each(j,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",M&&(e+=" '"+M+"'"),(console.group!==B||console.table!==B)&&0<j.length&&(console.groupCollapsed(e),console.table?console.table(j):H.each(j,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),j=[]}},invoke:function(i,e,t){var o,a,n,r=E;return e=e||V,t=A||t,"string"==typeof i&&r!==B&&(i=i.split(/[\. ]/),o=i.length-1,H.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(H.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==B)return a=r[n],!1;if(!H.isPlainObject(r[t])||e==o)return r[t]!==B?a=r[t]:b.error(x.method,i),!1;r=r[t]}})),H.isFunction(a)?n=a.apply(t,e):a!==B&&(n=a),H.isArray(O)?O.push(n):O!==B?O=[O,n]:n!==B&&(O=n),a}},q?(E===B&&b.initialize(),b.invoke(L)):(E!==B&&E.invoke("destroy"),b.initialize())}),O!==B?O:this},H.fn.slider.settings={silent:!1,debug:!1,verbose:!1,performance:!0,name:"Slider",namespace:"slider",error:{method:"The method you called is not defined.",notrange:"This slider is not a range slider"},metadata:{thumbVal:"thumbVal",secondThumbVal:"secondThumbVal"},min:0,max:20,step:1,start:0,end:20,labelType:"number",showLabelTicks:!1,smooth:!1,autoAdjustLabels:!0,labelDistance:100,preventCrossover:!0,fireOnInit:!1,interpretLabel:!1,decimalPlaces:2,pageMultiplier:2,selector:{},className:{reversed:"reversed",disabled:"disabled",labeled:"labeled",ticked:"ticked",vertical:"vertical",range:"range",smooth:"smooth"},keys:{pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},labelTypes:{number:"number",letter:"letter"},onChange:function(e,t,n){},onMove:function(e,t,n){}}}(jQuery,window,document),function(k,e,t,T){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.rating=function(g){var p,h=k(this),v=h.selector||"",b=(new Date).getTime(),y=[],x=g,C="string"==typeof x,w=[].slice.call(arguments,1);return h.each(function(){var e,a,r=k.isPlainObject(g)?k.extend(!0,{},k.fn.rating.settings,g):k.extend({},k.fn.rating.settings),t=r.namespace,s=r.className,n=r.metadata,i=r.selector,l=r.cssVars,o="."+t,c="module-"+t,u=this,d=k(this).data(c),f=k(this),m=f.find(i.icon);a={initialize:function(){a.verbose("Initializing rating module",r),0===m.length&&a.setup.layout(),r.interactive&&!a.is.disabled()?a.enable():a.disable(),a.set.initialLoad(),a.set.rating(a.get.initialRating()),a.remove.initialLoad(),a.instantiate()},instantiate:function(){a.verbose("Instantiating module",r),d=a,f.data(c,a)},destroy:function(){a.verbose("Destroying previous instance",d),a.remove.events(),f.removeData(c)},refresh:function(){m=f.find(i.icon)},setup:{layout:function(){var e=a.get.maxRating(),t=a.get.icon(),n=k.fn.rating.settings.templates.icon(e,t);a.debug("Generating icon html dynamically"),f.html(n),a.refresh()}},event:{mouseenter:function(){var e=k(this);e.nextAll().removeClass(s.selected),f.addClass(s.selected),e.addClass(s.selected).prevAll().addClass(s.selected)},mouseleave:function(){f.removeClass(s.selected),m.removeClass(s.selected)},click:function(){var e=k(this),t=a.get.rating(),n=m.index(e)+1;("auto"==r.clearable?1===m.length:r.clearable)&&t==n?a.clearRating():a.set.rating(n)}},clearRating:function(){a.debug("Clearing current rating"),a.set.rating(0)},bind:{events:function(){a.verbose("Binding events"),f.on("mouseenter"+o,i.icon,a.event.mouseenter).on("mouseleave"+o,i.icon,a.event.mouseleave).on("click"+o,i.icon,a.event.click)}},remove:{events:function(){a.verbose("Removing events"),f.off(o)},initialLoad:function(){e=!1}},enable:function(){a.debug("Setting rating to interactive mode"),a.bind.events(),f.removeClass(s.disabled)},disable:function(){a.debug("Setting rating to read-only mode"),a.remove.events(),f.addClass(s.disabled)},is:{initialLoad:function(){return e},disabled:function(){return f.hasClass(s.disabled)}},get:{icon:function(){var e=f.data(n.icon);return e&&f.removeData(n.icon),e||r.icon},initialRating:function(){return f.data(n.rating)!==T?(f.removeData(n.rating),f.data(n.rating)):r.initialRating},maxRating:function(){return f.data(n.maxRating)!==T?(f.removeData(n.maxRating),f.data(n.maxRating)):r.maxRating},rating:function(){var e=m.filter("."+s.active).length;return a.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=Math.floor(0<=e-1?e-1:0),n=m.eq(t),i=e<=1?n:n.next(),o=e%1*100;f.removeClass(s.selected),m.removeClass(s.selected).removeClass(s.active).removeClass(s.partiallyActive),0<e&&(a.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(s.active),n.next()&&e%1!=0&&(i.addClass(s.partiallyActive).addClass(s.active),i.css(l.filledCustomPropName,o+"%"),"transparent"===i.css("backgroundColor")&&i.removeClass(s.partiallyActive).removeClass(s.active))),a.is.initialLoad()||r.onRate.call(u,e)},initialLoad:function(){e=!0}},setting:function(e,t){if(a.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===T)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,a,e);else{if(t===T)return a[e];a[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,r.name+":"),a.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),a.verbose.apply(console,arguments)))},error:function(){r.silent||(a.error=Function.prototype.bind.call(console.error,console,r.name+":"),a.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:u,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(a.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",v&&(e+=" '"+v+"'"),1<h.length&&(e+=" ("+h.length+")"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=d;return e=e||w,t=u||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==T&&(a=r[t]),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(p)?p.push(n):p!==T?p=[p,n]:n!==T&&(p=n),a}},C?(d===T&&a.initialize(),a.invoke(x)):(d!==T&&d.invoke("destroy"),a.initialize())}),p!==T?p:this},k.fn.rating.settings={name:"Rating",namespace:"rating",icon:"star",silent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating",icon:"icon"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading",partiallyActive:"partial"},cssVars:{filledCustomPropName:"--full"},selector:{icon:".icon"},templates:{icon:function(e,t){for(var n=1,i="";n<=e;)i+='<i class="'+t+' icon"></i>',n++;return i}}}}(jQuery,window,document),function(F,P,O,R){"use strict";F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},P=void 0!==P&&P.Math==Math?P:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.search=function(x){var C,w=F(this),k=w.selector||"",T=(new Date).getTime(),S=[],D=x,A="string"==typeof D,E=[].slice.call(arguments,1);return F(this).each(function(){var f,u=F.isPlainObject(x)?F.extend(!0,{},F.fn.search.settings,x):F.extend({},F.fn.search.settings),m=u.className,c=u.metadata,i=u.regExp,a=u.fields,g=u.selector,d=u.error,e=u.namespace,o="."+e,t=e+"-module",p=F(this),h=p.find(g.prompt),n=p.find(g.searchButton),r=p.find(g.results),s=p.find(g.result),v=(p.find(g.category),this),l=p.data(t),b=!1,y=!1;f={initialize:function(){f.verbose("Initializing module"),f.get.settings(),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),l=f,p.data(t,f)},destroy:function(){f.verbose("Destroying instance"),p.off(o).removeData(t)},refresh:function(){f.debug("Refreshing selector cache"),h=p.find(g.prompt),n=p.find(g.searchButton),p.find(g.category),r=p.find(g.results),s=p.find(g.result)},refreshResults:function(){r=p.find(g.results),s=p.find(g.result)},bind:{events:function(){f.verbose("Binding events to search"),u.automatic&&(p.on(f.get.inputEvent()+o,g.prompt,f.event.input),h.attr("autocomplete","off")),p.on("focus"+o,g.prompt,f.event.focus).on("blur"+o,g.prompt,f.event.blur).on("keydown"+o,g.prompt,f.handleKeyboard).on("click"+o,g.searchButton,f.query).on("mousedown"+o,g.results,f.event.result.mousedown).on("mouseup"+o,g.results,f.event.result.mouseup).on("click"+o,g.result,f.event.result.click)}},determine:{searchFields:function(){x&&x.searchFields!==R&&(u.searchFields=x.searchFields)}},event:{input:function(){u.searchDelay?(clearTimeout(f.timer),f.timer=setTimeout(function(){f.is.focused()&&f.query()},u.searchDelay)):f.query()},focus:function(){f.set.focus(),u.searchOnFocus&&f.has.minimumCharacters()&&f.query(function(){f.can.show()&&f.showResults()})},blur:function(e){function t(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,u.hideDelay)}var n=O.activeElement===this;n||(y=!1,f.resultsClicked?(f.debug("Determining if user action caused search to close"),p.one("click.close"+o,g.results,function(e){f.is.inMessage(e)||b?h.focus():(b=!1,f.is.animating()||f.is.hidden()||t())})):(f.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(e){f.debug("Search result selected");var t=F(this),n=t.find(g.title).eq(0),i=t.is("a[href]")?t:t.find("a[href]").eq(0),o=i.attr("href")||!1,a=i.attr("target")||!1,r=0<n.length&&n.text(),s=f.get.results(),l=t.data(c.result)||f.get.result(r,s);if(r&&f.set.value(r),F.isFunction(u.onSelect)&&!1===u.onSelect.call(v,l,s))return f.debug("Custom onSelect callback cancelled default select action"),void(b=!0);f.hideResults(),o&&(e.preventDefault(),f.verbose("Opening search link found in result",i),"_blank"==a||e.ctrlKey?P.open(o):P.location.href=o)}}},ensureVisible:function(e){var t,n,i,o;n=(t=e.position().top)+e.outerHeight(!0),i=r.scrollTop(),o=r.height(),parseInt(r.css("paddingTop"),0),parseInt(r.css("paddingBottom"),0),t<0?r.scrollTop(i+t):o<n&&r.scrollTop(i+(n-o))},handleKeyboard:function(e){var t,n=p.find(g.result),i=p.find(g.category),o=n.filter("."+m.active),a=n.index(o),r=n.length,s=0<o.length,l=e.which,c=13,u=38,d=40;if(l==27&&(f.verbose("Escape key pressed, blurring search field"),f.hideResults(),y=!0),f.is.visible())if(l==c){if(f.verbose("Enter key pressed, selecting active result"),0<n.filter("."+m.active).length)return f.event.result.click.call(n.filter("."+m.active),e),e.preventDefault(),!1}else l==u&&s?(f.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),f.ensureVisible(n.eq(t)),e.preventDefault()):l==d&&(f.verbose("Down key pressed, changing active result"),t=r<=a+1?a:a+1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),f.ensureVisible(n.eq(t)),e.preventDefault());else l==c&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),h.one("keyup",f.remove.buttonFocus))},setup:{api:function(t,n){var e={debug:u.debug,on:!1,cache:u.cache,action:"search",urlData:{query:t},onSuccess:function(e){f.parse.response.call(v,e,t),n()},onFailure:function(){f.displayMessage(d.serverError),n()},onAbort:function(e){},onError:f.error};F.extend(!0,e,u.apiSettings),f.verbose("Setting up API request",e),p.api(e)}},can:{useAPI:function(){return F.fn.api!==R},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return u.transition&&F.fn.transition!==R&&p.transition("is supported")}},is:{animating:function(){return r.hasClass(m.animating)},hidden:function(){return r.hasClass(m.hidden)},inMessage:function(e){if(e.target){var t=F(e.target);return F.contains(O.documentElement,e.target)&&0<t.closest(g.message).length}},empty:function(){return""===r.html()},visible:function(){return 0<r.filter(":visible").length},focused:function(){return 0<h.filter(":focus").length}},get:{settings:function(){F.isPlainObject(x)&&x.searchFullText&&(u.fullTextSearch=x.searchFullText,f.error(u.error.oldSearchSyntax,v)),u.ignoreDiacritics&&!String.prototype.normalize&&(u.ignoreDiacritics=!1,f.error(d.noNormalize,v))},inputEvent:function(){var e=h[0];return e!==R&&e.oninput!==R?"input":e!==R&&e.onpropertychange!==R?"propertychange":"keyup"},value:function(){return h.val()},results:function(){return p.data(c.results)},result:function(n,e){var i=!1;return n=n!==R?n:f.get.value(),e=e!==R?e:f.get.results(),"category"===u.type?(f.debug("Finding result that matches",n),F.each(e,function(e,t){if(Array.isArray(t.results)&&(i=f.search.object(n,t.results)[0]))return!1})):(f.debug("Finding result in results object",n),i=f.search.object(n,e)[0]),i||!1}},select:{firstResult:function(){f.verbose("Selecting first result"),s.first().addClass(m.active)}},set:{focus:function(){p.addClass(m.focus)},loading:function(){p.addClass(m.loading)},value:function(e){f.verbose("Setting search input value",e),h.val(e)},type:function(e){e=e||u.type,"category"==u.type&&p.addClass(u.type)},buttonPressed:function(){n.addClass(m.pressed)}},remove:{loading:function(){p.removeClass(m.loading)},focus:function(){p.removeClass(m.focus)},buttonPressed:function(){n.removeClass(m.pressed)},diacritics:function(e){return u.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},query:function(e){e=F.isFunction(e)?e:function(){};var t=f.get.value(),n=f.read.cache(t);e=e||function(){},f.has.minimumCharacters()?(n?(f.debug("Reading result from cache",t),f.save.results(n.results),f.addResults(n.html),f.inject.id(n.results),e()):(f.debug("Querying for",t),F.isPlainObject(u.source)||Array.isArray(u.source)?(f.search.local(t),e()):f.can.useAPI()?f.search.remote(t,e):(f.error(d.source),e())),u.onSearchQuery.call(v,t)):f.hideResults()},search:{local:function(e){var t,n=f.search.object(e,u.source);f.set.loading(),f.save.results(n),f.debug("Returned full local search results",n),0<u.maxResults&&(f.debug("Using specified max results",n),n=n.slice(0,u.maxResults)),"category"==u.type&&(n=f.create.categoryResults(n)),t=f.generateResults({results:n}),f.remove.loading(),f.addResults(t),f.inject.id(n),f.write.cache(e,{html:t,results:n})},remote:function(e,t){t=F.isFunction(t)?t:function(){},p.api("is loading")&&p.api("abort"),f.setup.api(e,t),p.api("query")},object:function(o,t,e){o=f.remove.diacritics(String(o));function a(e,t){var n=-1==F.inArray(t,r),i=-1==F.inArray(t,l),o=-1==F.inArray(t,s);n&&i&&o&&e.push(t)}var r=[],s=[],l=[],n=o.replace(i.escape,"\\$&"),c=new RegExp(i.beginsWith+n,"i");return t=t||u.source,e=e!==R?e:u.searchFields,Array.isArray(e)||(e=[e]),t===R||!1===t?(f.error(d.source),[]):(F.each(e,function(e,i){F.each(t,function(e,t){var n;"string"!=typeof t[i]&&"number"!=typeof t[i]||(-1!==(n="string"==typeof t[i]?f.remove.diacritics(t[i]):t[i].toString()).search(c)?a(r,t):"exact"===u.fullTextSearch&&f.exactSearch(o,n)?a(s,t):1==u.fullTextSearch&&f.fuzzySearch(o,n)&&a(l,t))})}),F.merge(s,l),F.merge(r,s),r)}},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){if(Array.isArray(e)){var n={};n[a.results]=e,e=n}var i=f.generateResults(e);f.verbose("Parsing server response",e),e!==R&&t!==R&&e[a.results]!==R&&(f.addResults(i),f.inject.id(e[a.results]),f.write.cache(t,{html:i,results:e[a.results]}),f.save.results(e[a.results]))}},cancel:{query:function(){f.can.useAPI()&&p.api("abort")}},has:{minimumCharacters:function(){return f.get.value().length>=u.minCharacters},results:function(){return 0!==r.length&&""!=r.html()}},clear:{cache:function(e){var t=p.data(c.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],p.data(c.cache,t)):(f.debug("Clearing cache",e),p.removeData(c.cache))}},read:{cache:function(e){var t=p.data(c.cache);return!!u.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==R&&t[e])}},create:{categoryResults:function(e){var n={};return F.each(e,function(e,t){t.category&&(n[t.category]===R?(f.verbose("Creating new category of results",t.category),n[t.category]={name:t.category,results:[t]}):n[t.category].results.push(t))}),n},id:function(e,t){var n,i=e+1;return t!==R?(n=String.fromCharCode(97+t)+i,f.verbose("Creating category result id",n)):(n=i,f.verbose("Creating result id",n)),n},results:function(){0===r.length&&(r=F("<div />").addClass(m.results).appendTo(p))}},inject:{result:function(e,t,n){f.verbose("Injecting result into results");var i=n!==R?r.children().eq(n).children(g.results).first().children(g.result).eq(t):r.children(g.result).eq(t);f.verbose("Injecting results metadata",i),i.data(c.result,e)},id:function(e){f.debug("Injecting unique ids into results");var n=0,i=0;return"category"===u.type?F.each(e,function(e,t){0<t.results.length&&(i=0,F.each(t.results,function(e,t){t.id===R&&(t.id=f.create.id(i,n)),f.inject.result(t,i,n),i++}),n++)}):F.each(e,function(e,t){t.id===R&&(t.id=f.create.id(i)),f.inject.result(t,i),i++}),e}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),p.data(c.results,e)}},write:{cache:function(e,t){var n=p.data(c.cache)!==R?p.data(c.cache):{};u.cache&&(f.verbose("Writing generated html to cache",e,t),n[e]=t,p.data(c.cache,n))}},addResults:function(e){if(F.isFunction(u.onResultsAdd)&&!1===u.onResultsAdd.call(r,e))return f.debug("onResultsAdd callback cancelled default action"),!1;e?(r.html(e),f.refreshResults(),u.selectFirstResult&&f.select.firstResult(),f.showResults()):f.hideResults(function(){r.empty()})},showResults:function(e){e=F.isFunction(e)?e:function(){},y||!f.is.visible()&&f.has.results()&&(f.can.transition()?(f.debug("Showing results with css animations"),r.transition({animation:u.transition+" in",debug:u.debug,verbose:u.verbose,duration:u.duration,onShow:function(){var e=p.find(g.result).eq(0);0<e.length&&f.ensureVisible(e)},onComplete:function(){e()},queue:!0})):(f.debug("Showing results with javascript"),r.stop().fadeIn(u.duration,u.easing)),u.onResultsOpen.call(r))},hideResults:function(e){e=F.isFunction(e)?e:function(){},f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),r.transition({animation:u.transition+" out",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Hiding results with javascript"),r.stop().fadeOut(u.duration,u.easing)),u.onResultsClose.call(r))},generateResults:function(e){f.debug("Generating html from response",e);var t=u.templates[u.type],n=F.isPlainObject(e[a.results])&&!F.isEmptyObject(e[a.results]),i=Array.isArray(e[a.results])&&0<e[a.results].length,o="";return n||i?(0<u.maxResults&&(n?"standard"==u.type&&f.error(d.maxResults):e[a.results]=e[a.results].slice(0,u.maxResults)),F.isFunction(t)?o=t(e,a,u.preserveHTML):f.error(d.noTemplate,!1)):u.showNoResults&&(o=f.displayMessage(d.noResults,"empty",d.noResultsHeader)),u.onResults.call(v,e),o},displayMessage:function(e,t,n){return t=t||"standard",f.debug("Displaying message",e,t,n),f.addResults(u.templates.message(e,t,n)),u.templates.message(e,t,n)},setting:function(e,t){if(F.isPlainObject(e))F.extend(!0,u,e);else{if(t===R)return u[e];u[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,f,e);else{if(t===R)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;T=!1,clearTimeout(f.performance.timer),F.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==R||console.table!==R)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):F.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=v||t,"string"==typeof i&&r!==R&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==R)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==R&&(a=r[t]),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==R&&(n=a),Array.isArray(C)?C.push(n):C!==R?C=[C,n]:n!==R&&(C=n),a}},A?(l===R&&f.initialize(),f.invoke(D)):(l!==R&&l.invoke("destroy"),f.initialize())}),C!==R?C:this},F.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["id","title","description"],displayField:"",fullTextSearch:"exact",ignoreDiacritics:!1,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,preserveHTML:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResultsHeader:"No Results",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",oldSearchSyntax:"searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined.",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},message:function(e,t,n){var i="";return e!==R&&t!==R&&(i+='<div class="message '+t+'">',n&&(i+='<div class="header">'+n+"</div>"),i+=' <div class="description">'+e+"</div>",i+="</div>"),i},category:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.categoryResults]!==R&&(F.each(e[n.categoryResults],function(e,t){t[n.results]!==R&&0<t.results.length&&(o+='<div class="category">',t[n.categoryName]!==R&&(o+='<div class="name">'+a(t[n.categoryName],i)+"</div>"),o+='<div class="results">',F.each(t.results,function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==R&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==R&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==R&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==R&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),o+="</div>",o+="</div>")}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)},standard:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.results]!==R&&(F.each(e[n.results],function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==R&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==R&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==R&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==R&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)}}}}(jQuery,window,document),function(A,e,E,F){"use strict";A.isFunction=A.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A.fn.shape=function(b){var y,x=A(this),C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)};return x.each(function(){var i,o,r,t=x.selector||"",s=A.isPlainObject(b)?A.extend(!0,{},A.fn.shape.settings,b):A.extend({},A.fn.shape.settings),e=s.namespace,l=s.selector,n=s.error,c=s.className,a="."+e,u="module-"+e,d=A(this),f=d.find(">"+l.sides),m=f.find(">"+l.side),g=!1,p=this,h=d.data(u);if(r={initialize:function(){r.verbose("Initializing module for",p),r.set.defaultSide(),r.instantiate()},instantiate:function(){r.verbose("Storing instance of module",r),h=r,d.data(u,h)},destroy:function(){r.verbose("Destroying previous module for",p),d.removeData(u).off(a)},refresh:function(){r.verbose("Refreshing selector cache for",p),d=A(p),f=A(this).find(l.sides),m=A(this).find(l.side)},repaint:function(){r.verbose("Forcing repaint event");(f[0]||E.createElement("div")).offsetWidth},animate:function(e,t){r.verbose("Animating box with properties",e),t=t||function(e){r.verbose("Executing animation callback"),e!==F&&e.stopPropagation(),r.reset(),r.set.active()},s.beforeChange.call(o[0]),r.get.transitionEvent()?(r.verbose("Starting CSS animation"),d.addClass(c.animating),f.css(e).one(r.get.transitionEvent(),t),r.set.duration(s.duration),D(function(){d.addClass(c.animating),i.addClass(c.hidden)})):t()},queue:function(e){r.debug("Queueing animation of",e),f.one(r.get.transitionEvent(),function(){r.debug("Executing queued animation"),setTimeout(function(){d.shape(e)},0)})},reset:function(){r.verbose("Animating states reset"),d.removeClass(c.animating).attr("style","").removeAttr("style"),f.attr("style","").removeAttr("style"),m.attr("style","").removeAttr("style").removeClass(c.hidden),o.removeClass(c.animating).attr("style","").removeAttr("style")},is:{complete:function(){return m.filter("."+c.active)[0]==o[0]},animating:function(){return d.hasClass(c.animating)},hidden:function(){return 0<d.closest(":hidden").length}},set:{defaultSide:function(){i=m.filter("."+s.className.active),o=0<i.next(l.side).length?i.next(l.side):m.first(),g=!1,r.verbose("Active side set to",i),r.verbose("Next side set to",o)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,r.verbose("Setting animation duration",e),!s.duration&&0!==s.duration||f.add(m).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=m.filter("."+s.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);d.css({width:t,height:n})},stageSize:function(){var e=d.clone().addClass(c.loading),t=e.find(">"+l.sides+">"+l.side),n=t.filter("."+s.className.active),i=g?t.eq(g):0<n.next(l.side).length?n.next(l.side):t.first(),o="next"===s.width?i.outerWidth(!0):"initial"===s.width?d.width():s.width,a="next"===s.height?i.outerHeight(!0):"initial"===s.height?d.height():s.height;n.removeClass(c.active),i.addClass(c.active),e.insertAfter(d),e.remove(),"auto"!==s.width&&(d.css("width",o+s.jitter),r.verbose("Specifying width during animation",o)),"auto"!==s.height&&(d.css("height",a+s.jitter),r.verbose("Specifying height during animation",a))},nextSide:function(e){g=e,o=m.filter(e),g=m.index(o),0===o.length&&(r.set.defaultSide(),r.error(n.side)),r.verbose("Next side manually set to",o)},active:function(){r.verbose("Setting new side to active",o),m.removeClass(c.active),o.addClass(c.active),s.onChange.call(o[0]),r.set.defaultSide()}},flip:{to:function(e,t){if(r.is.hidden())r.debug("Module not visible",o);else if(!r.is.complete()||r.is.animating()||s.allowRepeats){var n=r.get.transform[e]();r.is.animating()?r.queue("flip "+e):(r.debug("Flipping "+e,o),r.set.stageSize(),r.stage[t](),r.animate(n))}else r.debug("Side already visible",o)},up:function(){r.flip.to("up","above")},down:function(){r.flip.to("down","below")},left:function(){r.flip.to("left","left")},right:function(){r.flip.to("right","right")},over:function(){r.flip.to("over","behind")},back:function(){r.flip.to("back","behind")}},get:{transform:{up:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY("+(o.outerHeight(!0)-e)+"px) translateZ(-"+e+"px) rotateX(-90deg)"}},down:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY(-"+e+"px) translateZ(-"+e+"px) rotateX(90deg)"}},left:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX("+(o.outerWidth(!0)-e)+"px) translateZ(-"+e+"px) rotateY(90deg)"}},right:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX(-"+e+"px) translateZ(-"+e+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=E.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==F)return n[e]},nextSide:function(){return 0<i.next(l.side).length?i.next(l.side):m.first()}},stage:{above:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as above",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px) translateY(-"+e.depth.active+"px)"})},below:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as below",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px) translateY("+e.depth.active+"px)"})},left:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as left",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px) translateX(-"+n.depth.active+"px)"})},right:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as right",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px) translateX("+n.depth.active+"px)"})},behind:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as behind",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(r.debug("Changing setting",e,t),A.isPlainObject(e))A.extend(!0,s,e);else{if(t===F)return s[e];A.isPlainObject(s[e])?A.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(A.isPlainObject(e))A.extend(!0,r,e);else{if(t===F)return r[e];r[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?r.performance.log(arguments):(r.debug=Function.prototype.bind.call(console.info,console,s.name+":"),r.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?r.performance.log(arguments):(r.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),r.verbose.apply(console,arguments)))},error:function(){s.silent||(r.error=Function.prototype.bind.call(console.error,console,s.name+":"),r.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(r.performance.timer),r.performance.timer=setTimeout(r.performance.display,500)},display:function(){var e=s.name+":",n=0;C=!1,clearTimeout(r.performance.timer),A.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",t&&(e+=" '"+t+"'"),1<x.length&&(e+=" ("+x.length+")"),(console.group!==F||console.table!==F)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):A.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||S,t=p||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,A.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(A.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!A.isPlainObject(r[t])||e==o)return r[t]!==F&&(a=r[t]),!1;r=r[t]}})),A.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),Array.isArray(y)?y.push(n):y!==F?y=[y,n]:n!==F&&(y=n),a}},T){h===F&&r.initialize();var v=d.find("input");0<v.length?(v.blur(),setTimeout(function(){r.invoke(k)},150)):r.invoke(k)}else h!==F&&h.invoke("destroy"),r.initialize()}),y!==F?y:this},A.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(M,I,j,L){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.sidebar=function(x){var C,e=M(this),w=M(I),k=M(j),T=M("html"),S=M("head"),D=e.selector||"",A=(new Date).getTime(),E=[],F=x,P="string"==typeof F,O=[].slice.call(arguments,1),R=I.requestAnimationFrame||I.mozRequestAnimationFrame||I.webkitRequestAnimationFrame||I.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var r,s,e,t,l,c,u=M.isPlainObject(x)?M.extend(!0,{},M.fn.sidebar.settings,x):M.extend({},M.fn.sidebar.settings),n=u.selector,a=u.className,i=u.namespace,o=u.regExp,d=u.error,f="."+i,m="module-"+i,g=M(this),p=M(u.context),h=g.children(n.sidebar),v=(p.children(n.fixed),p.children(n.pusher)),b=this,y=g.data(m);c={initialize:function(){c.debug("Initializing sidebar",x),c.create.id(),l=c.get.transitionEvent(),u.delaySetup?R(c.setup.layout):c.setup.layout(),R(function(){c.setup.cache()}),c.instantiate()},instantiate:function(){c.verbose("Storing instance of module",c),y=c,g.data(m,c)},create:{id:function(){e=(Math.random().toString(16)+"000000000").substr(2,8),s="."+e,c.verbose("Creating unique id for element",e)}},destroy:function(){c.verbose("Destroying previous module for",g),g.off(f).removeData(m),c.is.ios()&&c.remove.ios(),p.off(s),w.off(s),k.off(s)},event:{clickaway:function(e){if(u.closable){var t=0<v.find(e.target).length||v.is(e.target),n=p.is(e.target);t&&(c.verbose("User clicked on dimmed page"),c.hide()),n&&(c.verbose("User clicked on dimmable context (scaled out page)"),c.hide())}},touch:function(e){},containScroll:function(e){b.scrollTop<=0&&(b.scrollTop=1),b.scrollTop+b.offsetHeight>=b.scrollHeight&&(b.scrollTop=b.scrollHeight-b.offsetHeight-1)},scroll:function(e){0===M(e.target).closest(n.sidebar).length&&e.preventDefault()}},bind:{clickaway:function(){c.verbose("Adding clickaway events to context",p),p.on("click"+s,c.event.clickaway).on("touchend"+s,c.event.clickaway)},scrollLock:function(){u.scrollLock&&(c.debug("Disabling page scroll"),w.on("DOMMouseScroll"+s,c.event.scroll)),c.verbose("Adding events to contain sidebar scroll"),k.on("touchmove"+s,c.event.touch),g.on("scroll"+f,c.event.containScroll)}},unbind:{clickaway:function(){c.verbose("Removing clickaway events from context",p),p.off(s)},scrollLock:function(){c.verbose("Removing scroll lock from page"),k.off(s),w.off(s),g.off("scroll"+f)}},add:{inlineCSS:function(){var e,t=c.cache.width||g.outerWidth(),n=c.cache.height||g.outerHeight(),i=c.is.rtl(),o=c.get.direction(),a={left:t,right:-t,top:n,bottom:-n};i&&(c.verbose("RTL detected, flipping widths"),a.left=-t,a.right=t),e="<style>","left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),c.is.ie()&&("left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),e+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"),r=M(e+="</style>").appendTo(S),c.debug("Adding sizing css to head",r)}},refresh:function(){c.verbose("Refreshing selector cache"),p=M(u.context),h=p.children(n.sidebar),v=p.children(n.pusher),p.children(n.fixed),c.clear.cache()},refreshSidebars:function(){c.verbose("Refreshing other sidebars"),h=p.children(n.sidebar)},repaint:function(){c.verbose("Forcing repaint event"),b.style.display="none";b.offsetHeight;b.scrollTop=b.scrollTop,b.style.display=""},setup:{cache:function(){c.cache={width:g.outerWidth(),height:g.outerHeight()}},layout:function(){0===p.children(n.pusher).length&&(c.debug("Adding wrapper element for sidebar"),c.error(d.pusher),v=M('<div class="pusher" />'),p.children().not(n.omitted).not(h).wrapAll(v),c.refresh()),0!==g.nextAll(n.pusher).length&&g.nextAll(n.pusher)[0]===v[0]||(c.debug("Moved sidebar to correct parent element"),c.error(d.movedSidebar,b),g.detach().prependTo(p),c.refresh()),c.clear.cache(),c.set.pushable(),c.set.direction()}},attachEvents:function(e,t){var n=M(e);t=M.isFunction(c[t])?c[t]:c.toggle,0<n.length?(c.debug("Attaching sidebar events to element",e,t),n.on("click"+f,t)):c.error(d.notFound,e)},show:function(e){if(e=M.isFunction(e)?e:function(){},c.is.hidden()){if(c.refreshSidebars(),u.overlay&&(c.error(d.overlay),u.transition="overlay"),c.refresh(),c.othersActive())if(c.debug("Other sidebars currently visible"),u.exclusive){if("overlay"!=u.transition)return void c.hideOthers(c.show);c.hideOthers()}else u.transition="overlay";c.pushPage(function(){e.call(b),u.onShow.call(b)}),u.onChange.call(b),u.onVisible.call(b)}else c.debug("Sidebar is already visible")},hide:function(e){e=M.isFunction(e)?e:function(){},(c.is.visible()||c.is.animating())&&(c.debug("Hiding sidebar",e),c.refreshSidebars(),c.pullPage(function(){e.call(b),u.onHidden.call(b)}),u.onChange.call(b),u.onHide.call(b))},othersAnimating:function(){return 0<h.not(g).filter("."+a.animating).length},othersVisible:function(){return 0<h.not(g).filter("."+a.visible).length},othersActive:function(){return c.othersVisible()||c.othersAnimating()},hideOthers:function(e){var t=h.not(g).filter("."+a.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){c.verbose("Determining toggled direction"),c.is.hidden()?c.show():c.hide()},pushPage:function(t){var e,n,i,o=c.get.transition(),a="overlay"===o||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},"scale down"==u.transition&&c.scrollToTop(),c.set.transition(o),c.repaint(),e=function(){c.bind.clickaway(),c.add.inlineCSS(),c.set.animating(),c.set.visible()},n=function(){c.set.dimmed()},i=function(e){e.target==a[0]&&(a.off(l+s,i),c.remove.animating(),c.bind.scrollLock(),t.call(b))},a.off(l+s),a.on(l+s,i),R(e),u.dimPage&&!c.othersVisible()&&R(n)},pullPage:function(t){var e,n,i=c.get.transition(),o="overlay"==i||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},c.verbose("Removing context push state",c.get.direction()),c.unbind.clickaway(),c.unbind.scrollLock(),e=function(){c.set.transition(i),c.set.animating(),c.remove.visible(),u.dimPage&&!c.othersVisible()&&v.removeClass(a.dimmed)},n=function(e){e.target==o[0]&&(o.off(l+s,n),c.remove.animating(),c.remove.transition(),c.remove.inlineCSS(),("scale down"==i||u.returnScroll&&c.is.mobile())&&c.scrollBack(),t.call(b))},o.off(l+s),o.on(l+s,n),R(e)},scrollToTop:function(){c.verbose("Scrolling to top of page to avoid animation issues"),t=M(I).scrollTop(),g.scrollTop(0),I.scrollTo(0,0)},scrollBack:function(){c.verbose("Scrolling back to original page position"),I.scrollTo(0,t)},clear:{cache:function(){c.verbose("Clearing cached dimensions"),c.cache={}}},set:{ios:function(){T.addClass(a.ios)},pushed:function(){p.addClass(a.pushed)},pushable:function(){p.addClass(a.pushable)},dimmed:function(){v.addClass(a.dimmed)},active:function(){g.addClass(a.active)},animating:function(){g.addClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.addClass(e)},direction:function(e){e=e||c.get.direction(),g.addClass(a[e])},visible:function(){g.addClass(a.visible)},overlay:function(){g.addClass(a.overlay)}},remove:{inlineCSS:function(){c.debug("Removing inline css styles",r),r&&0<r.length&&r.remove()},ios:function(){T.removeClass(a.ios)},pushed:function(){p.removeClass(a.pushed)},pushable:function(){p.removeClass(a.pushable)},active:function(){g.removeClass(a.active)},animating:function(){g.removeClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.removeClass(e)},direction:function(e){e=e||c.get.direction(),g.removeClass(a[e])},visible:function(){g.removeClass(a.visible)},overlay:function(){g.removeClass(a.overlay)}},get:{direction:function(){return g.hasClass(a.top)?a.top:g.hasClass(a.right)?a.right:g.hasClass(a.bottom)?a.bottom:a.left},transition:function(){var e,t=c.get.direction();return e=c.is.mobile()?"auto"==u.mobileTransition?u.defaultTransition.mobile[t]:u.mobileTransition:"auto"==u.transition?u.defaultTransition.computer[t]:u.transition,c.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=j.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==L)return n[e]}},is:{ie:function(){return!I.ActiveXObject&&"ActiveXObject"in I||"ActiveXObject"in I},ios:function(){var e=navigator.userAgent,t=e.match(o.ios),n=e.match(o.mobileChrome);return!(!t||n)&&(c.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(o.mobile)?(c.verbose("Browser was found to be mobile",e),!0):(c.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!c.is.visible()},visible:function(){return g.hasClass(a.visible)},open:function(){return c.is.visible()},closed:function(){return c.is.hidden()},vertical:function(){return g.hasClass(a.top)},animating:function(){return p.hasClass(a.animating)},rtl:function(){return c.cache.rtl===L&&(c.cache.rtl="rtl"===g.attr("dir")||"rtl"===g.css("direction")),c.cache.rtl}},setting:function(e,t){if(c.debug("Changing setting",e,t),M.isPlainObject(e))M.extend(!0,u,e);else{if(t===L)return u[e];M.isPlainObject(u[e])?M.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,c,e);else{if(t===L)return c[e];c[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;A=!1,clearTimeout(c.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),(console.group!==L||console.table!==L)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||O,t=b||t,"string"==typeof i&&r!==L&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==L)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==L?a=r[t]:c.error(d.method,i),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==L&&(n=a),Array.isArray(C)?C.push(n):C!==L?C=[C,n]:n!==L&&(C=n),a}},P?(y===L&&c.initialize(),c.invoke(F)):(y!==L&&c.invoke("destroy"),c.initialize())}),C!==L?C:this},M.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.sticky=function(v){var b,e=S(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var t,i,e,n,d,f=S.isPlainObject(v)?S.extend(!0,{},S.fn.sticky.settings,v):S.extend({},S.fn.sticky.settings),o=f.className,a=f.namespace,r=f.error,s="."+a,l="module-"+a,c=S(this),u=S(D),m=S(f.scrollContext),g=c.data(l),p=D.requestAnimationFrame||D.mozRequestAnimationFrame||D.webkitRequestAnimationFrame||D.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this;d={initialize:function(){d.determineContainer(),d.determineContext(),d.verbose("Initializing sticky",f,t),d.save.positions(),d.checkErrors(),d.bind.events(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),g=d,c.data(l,d)},destroy:function(){d.verbose("Destroying previous instance"),d.reset(),e&&e.disconnect(),n&&n.disconnect(),u.off("load"+s,d.event.load).off("resize"+s,d.event.resize),m.off("scrollchange"+s,d.event.scrollchange),c.removeData(l)},observeChanges:function(){"MutationObserver"in D&&(e=new MutationObserver(d.event.documentChanged),n=new MutationObserver(d.event.changed),e.observe(A,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),n.observe(i[0],{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",n))},determineContainer:function(){t=f.container?S(f.container):c.offsetParent()},determineContext:function(){0!==(i=f.context?S(f.context):t).length||d.error(r.invalidContext,f.context,c)},checkErrors:function(){if(d.is.hidden()&&d.error(r.visible,c),d.cache.element.height>d.cache.context.height)return d.reset(),void d.error(r.elementSize,c)},bind:{events:function(){u.on("load"+s,d.event.load).on("resize"+s,d.event.resize),m.off("scroll"+s).on("scroll"+s,d.event.scroll).on("scrollchange"+s,d.event.scrollchange)}},event:{changed:function(e){clearTimeout(d.timer),d.timer=setTimeout(function(){d.verbose("DOM tree modified, updating sticky menu",e),d.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<S(e).find(h).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},load:function(){d.verbose("Page contents finished loading"),p(d.refresh)},resize:function(){d.verbose("Window resized"),p(d.refresh)},scroll:function(){p(function(){m.triggerHandler("scrollchange"+s,m.scrollTop())})},scrollchange:function(e,t){d.stick(t),f.onScroll.call(h)}},refresh:function(e){d.reset(),f.context||d.determineContext(),e&&d.determineContainer(),d.save.positions(),d.stick(),f.onReposition.call(h)},supports:{sticky:function(){var e=S("<div/>");return e.addClass(o.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){d.lastScroll=e},elementScroll:function(e){d.elementScroll=e},positions:function(){var e={height:m.height()},t={margin:{top:parseInt(c.css("margin-top"),10),bottom:parseInt(c.css("margin-bottom"),10)},offset:c.offset(),width:c.outerWidth(),height:c.outerHeight()},n={offset:i.offset(),height:i.outerHeight()};d.is.standardScroll()||(d.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=m.scrollTop(),e.left=m.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),d.cache={fits:t.height+f.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},d.set.containerSize(),d.stick(),d.debug("Caching element positions",d.cache)}},get:{direction:function(e){var t="down";return e=e||m.scrollTop(),d.lastScroll!==E&&(d.lastScroll<e?t="down":d.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||m.scrollTop(),d.lastScroll?e-d.lastScroll:0},currentElementScroll:function(){return d.elementScroll?d.elementScroll:d.is.top()?Math.abs(parseInt(c.css("top"),10))||0:Math.abs(parseInt(c.css("bottom"),10))||0},elementScroll:function(e){e=e||m.scrollTop();var t=d.cache.element,n=d.cache.scrollContext,i=d.get.scrollChange(e),o=t.height-n.height+f.offset,a=d.get.currentElementScroll(),r=a+i;return a=d.cache.fits||r<0?0:o<r?o:r}},remove:{lastScroll:function(){delete d.lastScroll},elementScroll:function(e){delete d.elementScroll},minimumSize:function(){t.css("min-height","")},offset:function(){c.css("margin-top","")}},set:{offset:function(){d.verbose("Setting offset on element",f.offset),c.css("margin-top",f.offset)},containerSize:function(){var e=t.get(0).tagName;"HTML"===e||"body"==e?d.determineContainer():Math.abs(t.outerHeight()-d.cache.context.height)>f.jitter&&(d.debug("Context has padding, specifying exact height for container",d.cache.context.height),t.css({height:d.cache.context.height}))},minimumSize:function(){var e=d.cache.element;t.css("min-height",e.height)},scroll:function(e){d.debug("Setting scroll on element",e),d.elementScroll!=e&&(d.is.top()&&c.css("bottom","").css("top",-e),d.is.bottom()&&c.css("top","").css("bottom",e))},size:function(){0!==d.cache.element.height&&0!==d.cache.element.width&&(h.style.setProperty("width",d.cache.element.width+"px","important"),h.style.setProperty("height",d.cache.element.height+"px","important"))}},is:{standardScroll:function(){return m[0]==D},top:function(){return c.hasClass(o.top)},bottom:function(){return c.hasClass(o.bottom)},initialPosition:function(){return!d.is.fixed()&&!d.is.bound()},hidden:function(){return!c.is(":visible")},bound:function(){return c.hasClass(o.bound)},fixed:function(){return c.hasClass(o.fixed)}},stick:function(e){var t=e||m.scrollTop(),n=d.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=d.is.bottom()&&f.pushing?f.bottomOffset:f.offset,c=(e={top:t+l,bottom:t+l+r.height},i?0:d.get.elementScroll(e.top)),u=!i;0===a.height||o||(d.is.initialPosition()?e.top>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):(d.debug("Initial element position is fixed"),d.fixTop())):d.is.fixed()?d.is.top()?e.top<=a.top?(d.debug("Fixed element reached top of container"),d.setInitialPosition()):a.height+e.top-c>=s.bottom?(d.debug("Fixed element reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c)):d.is.bottom()&&(e.bottom-a.height<=a.top?(d.debug("Bottom fixed rail has reached top of container"),d.setInitialPosition()):e.bottom>=s.bottom?(d.debug("Bottom fixed rail has reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c))):d.is.bottom()&&(e.top<=a.top?(d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),d.setInitialPosition()):f.pushing?d.is.bound()&&e.bottom<=s.bottom&&(d.debug("Fixing bottom attached element to bottom of browser."),d.fixBottom()):d.is.bound()&&e.top<=s.bottom-a.height&&(d.debug("Fixing bottom attached element to top of browser."),d.fixTop())))},bindTop:function(){d.debug("Binding element to top of parent container"),d.remove.offset(),c.css({left:"",top:"",marginBottom:""}).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top),f.onTop.call(h),f.onUnstick.call(h)},bindBottom:function(){d.debug("Binding element to bottom of parent container"),d.remove.offset(),c.css({left:"",top:""}).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom),f.onBottom.call(h),f.onUnstick.call(h)},setInitialPosition:function(){d.debug("Returning to initial position"),d.unfix(),d.unbind()},fixTop:function(){d.debug("Fixing element to top of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top),f.onStick.call(h)},fixBottom:function(){d.debug("Sticking element to bottom of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom),f.onStick.call(h)},unbind:function(){d.is.bound()&&(d.debug("Removing container bound position on element"),d.remove.offset(),c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))},unfix:function(){d.is.fixed()&&(d.debug("Removing fixed position on element"),d.remove.minimumSize(),d.remove.offset(),c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom),f.onUnstick.call(h))},reset:function(){d.debug("Resetting elements position"),d.unbind(),d.unfix(),d.resetCSS(),d.remove.offset(),d.remove.lastScroll()},resetCSS:function(){c.css({width:"",height:""}),t.css({height:""})},setting:function(e,t){if(S.isPlainObject(e))S.extend(!0,f,e);else{if(t===E)return f[e];f[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,d,e);else{if(t===E)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,0)},display:function(){var e=f.name+":",n=0;x=!1,clearTimeout(d.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||T,t=h||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E&&(a=r[t]),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(b)?b.push(n):b!==E?b=[b,n]:n!==E&&(b=n),a}},k?(g===E&&d.initialize(),d.invoke(w)):(g!==E&&g.invoke("destroy"),d.initialize())}),b!==E?b:this},S.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:D,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(P,O,R,M){"use strict";P.isWindow=P.isWindow||function(e){return null!=e&&e===e.window},P.isFunction=P.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},O=void 0!==O&&O.Math==Math?O:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.tab=function(c){var u,d=P.isFunction(this)?P(O):P(this),f=d.selector||"",m=(new Date).getTime(),g=[],D=c,A="string"==typeof D,E=[].slice.call(arguments,1),F=!1;return d.each(function(){var p,a,h,v,b,y,x=P.isPlainObject(c)?P.extend(!0,{},P.fn.tab.settings,c):P.extend({},P.fn.tab.settings),C=x.className,w=x.metadata,t=x.selector,k=x.error,n=x.regExp,e="."+x.namespace,i="module-"+x.namespace,T=P(this),o={},S=!0,r=0,s=this,l=T.data(i);b={initialize:function(){b.debug("Initializing tab menu item",T),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,a),x.auto&&b.set.auto(),b.bind.events(),x.history&&!F&&(b.initializeHistory(),F=!0),x.autoTabActivation&&l===M&&null==b.determine.activeTab()&&(b.debug("No active tab detected, setting first tab active",b.get.initialPath()),b.changeTab(!0===x.autoTabActivation?b.get.initialPath():x.autoTabActivation)),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),l=b,T.data(i,b)},destroy:function(){b.debug("Destroying tabs",T),T.removeData(i).off(e)},bind:{events:function(){P.isWindow(s)||(b.debug("Attaching tab activation events to element",T),T.on("click"+e,b.event.click))}},determineTabs:function(){var e;"parent"===x.context?(0<T.closest(t.ui).length?(e=T.closest(t.ui),b.verbose("Using closest UI element as parent",e)):e=T,p=e.parent(),b.verbose("Determined parent element for creating context",p)):x.context?(p=P(x.context),b.verbose("Using selector for tab context",x.context,p)):p=P("body"),x.childrenOnly?(a=p.children(t.tabs),b.debug("Searching tab context children for tabs",p,a)):(a=p.find(t.tabs),b.debug("Searching tab context for tabs",p,a))},fix:{callbacks:function(){P.isPlainObject(c)&&(c.onTabLoad||c.onTabInit)&&(c.onTabLoad&&(c.onLoad=c.onTabLoad,delete c.onTabLoad,b.error(k.legacyLoad,c.onLoad)),c.onTabInit&&(c.onFirstLoad=c.onTabInit,delete c.onTabInit,b.error(k.legacyInit,c.onFirstLoad)),x=P.extend(!0,{},P.fn.tab.settings,c))}},initializeHistory:function(){if(b.debug("Initializing page state"),P.address===M)return b.error(k.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),!1===x.path)return b.error(k.path),!1;P.address.history(!0).state(x.path)}P.address.bind("change",b.event.history.change)},event:{click:function(e){var t=P(this).data(w.tab);t!==M?(x.history?(b.verbose("Updating page state",e),P.address.value(t)):(b.verbose("Changing tab",e),b.changeTab(t)),e.preventDefault()):b.debug("No tab specified")},history:{change:function(e){var t=e.pathNames.join("/")||b.get.initialPath(),n=x.templates.determineTitle(t)||!1;b.performance.display(),b.debug("History change event",t,e),y=e,t!==M&&b.changeTab(t),n&&P.address.title(n)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==M&&o[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),o[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete o[e]}},escape:{string:function(e){return(e=String(e)).replace(n.escape,"\\$&")}},set:{auto:function(){var e="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",e),P.isPlainObject(x.apiSettings)?x.apiSettings.url=e:x.apiSettings={url:e}},loading:function(e){var t=b.get.tabElement(e);t.hasClass(C.loading)||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(a).removeClass(C.active+" "+C.loading),0<t.length&&x.onRequest.call(t[0],e))},state:function(e){P.address.value(e)}},changeTab:function(d){var f=O.history&&O.history.pushState&&x.ignoreFirstLoad&&S,m=x.auto||P.isPlainObject(x.apiSettings),g=m&&!f?b.utilities.pathToArray(d):b.get.defaultPathArray(d);d=b.utilities.arrayToPath(g),P.each(g,function(e,t){var n,i,o,a,r=g.slice(0,e+1),s=b.utilities.arrayToPath(r),l=b.is.tab(s),c=e+1==g.length,u=b.get.tabElement(s);if(b.verbose("Looking for tab",t),l){if(b.verbose("Tab was found",t),h=s,v=b.utilities.filterArray(g,r),c?a=!0:(i=g.slice(0,e+2),o=b.utilities.arrayToPath(i),(a=!b.is.tab(o))&&b.verbose("Tab parameters found",i)),a&&m)return f?(b.debug("Ignoring remote content on first tab load",s),S=!1,b.cache.add(d,u.html()),b.activate.all(s),x.onFirstLoad.call(u[0],s,v,y),x.onLoad.call(u[0],s,v,y)):(b.activate.navigation(s),b.fetch.content(s,d)),!1;b.debug("Opened local tab",s),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y)}else{if(-1!=d.search("/")||""===d)return b.error(k.missingTab,T,p,s),!1;if(d=b.escape.string(d),s=(n=P("#"+d+', a[name="'+d+'"]')).closest("[data-tab]").data(w.tab),u=b.get.tabElement(s),n&&0<n.length&&s)return b.debug("Anchor link used, opening parent tab",u,n),u.hasClass(C.active)||setTimeout(function(){b.scrollTo(n)},0),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y),!1}})},scrollTo:function(e){var t=!!(e&&0<e.length)&&e.offset().top;!1!==t&&(b.debug("Forcing scroll to an in-page link in a hidden tab",t,e),P(R).scrollTop(t))},update:{content:function(e,t,n){var i=b.get.tabElement(e),o=i[0];n=n!==M?n:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof t?i.empty().append(P(t).clone(!0)):n?(b.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(b.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,n){var e,i,o=b.get.tabElement(t),a={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(o[0],t,v,y),x.onLoad.call(o[0],t,v,y),x.loadOnce?b.cache.add(n,!0):"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&0<o.children().length?setTimeout(function(){var e=o.children().clone(!0);e=e.not("script"),b.cache.add(n,e)},0):b.cache.add(n,o.html())},urlData:{tab:n}},r=o.api("get request")||!1,s=r&&"pending"===r.state();n=n||t,i=b.cache.read(n),x.cache&&i?(b.activate.tab(t),b.debug("Adding cached content",n),x.loadOnce||("once"==x.evaluateScripts?b.update.content(t,i,!1):b.update.content(t,i)),x.onLoad.call(o[0],t,v,y)):s?(b.set.loading(t),b.debug("Content is already loading",n)):P.api!==M?(e=P.extend(!0,{},x.apiSettings,a),b.debug("Retrieving remote content",n,e),b.set.loading(t),o.api(e)):b.error(k.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(a):a.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),0<t.length&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(d):d.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){d.removeClass(C.active)},tabs:function(){a.removeClass(C.active+" "+C.loading)}},is:{tab:function(e){return e!==M&&0<b.get.tabElement(e).length}},get:{initialPath:function(){return d.eq(0).data(w.tab)||a.eq(0).data(w.tab)},path:function(){return P.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=d.filter("[data-"+w.tab+'^="'+b.escape.string(e)+'/"]').eq(0).data(w.tab)||!1;if(t){if(b.debug("Found default tab",t),r<x.maxDepth)return r++,b.get.defaultPath(t);b.error(k.recursion)}else b.debug("No default tabs found for",e,a);return r=0,e},navElement:function(e){return e=e||h,d.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=a.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]'),n=a.filter("[data-"+w.tab+'="'+b.escape.string(o)+'"]'),0<t.length?t:n},tab:function(){return h}},determine:{activeTab:function(){var i=null;return a.each(function(e,t){if(P(t).hasClass(C.active)){var n=P(this).data(w.tab);d.filter("[data-"+w.tab+'="'+b.escape.string(n)+'"]').hasClass(C.active)&&(i=n)}}),i}},utilities:{filterArray:function(e,t){return P.grep(e,function(e){return-1==P.inArray(e,t)})},last:function(e){return!!Array.isArray(e)&&e[e.length-1]},pathToArray:function(e){return e===M&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(e){return!!Array.isArray(e)&&e.join("/")}},setting:function(e,t){if(b.debug("Changing setting",e,t),P.isPlainObject(e))P.extend(!0,x,e);else{if(t===M)return x[e];P.isPlainObject(x[e])?P.extend(!0,x[e],t):x[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,b,e);else{if(t===M)return b[e];b[e]=t}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;x.performance&&(n=(t=(new Date).getTime())-(m||t),m=t,g.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:s,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=x.name+":",n=0;m=!1,clearTimeout(b.performance.timer),P.each(g,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==M||console.table!==M)&&0<g.length&&(console.groupCollapsed(e),console.table?console.table(g):P.each(g,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),g=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=s||t,"string"==typeof i&&r!==M&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==M)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==M?a=r[t]:b.error(k.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==M&&(n=a),Array.isArray(u)?u.push(n):u!==M?u=[u,n]:n!==M&&(u=n),a}},A?(l===M&&b.initialize(),b.invoke(D)):(l!==M&&l.invoke("destroy"),b.initialize())}),u!==M?u:this},P.tab=function(){P(O).tab.apply(this,arguments)},P.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",autoTabActivation:!0,onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(F,e,t,P){"use strict";F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.toast=function(C){var w,e=F(this),k=e.selector||"",T=(new Date).getTime(),S=[],D=C,A="string"==typeof D,E=[].slice.call(arguments,1);return e.each(function(){var i,o,a,r,s,l,c,u,d=F.isPlainObject(C)?F.extend(!0,{},F.fn.toast.settings,C):F.extend({},F.fn.toast.settings),f=d.className,e=d.selector,m=d.error,t=d.namespace,g=d.fields,n="."+t,p=t+"-module",h=F(this),v=d.context?F(d.context):F("body"),b=h.hasClass("toast")||h.hasClass("message")||h.hasClass("card"),y=this,x=b?h.data(p):P;u={initialize:function(){u.verbose("Initializing element"),u.has.container()||u.create.container(),(b||""!==d.message||""!==d.title||""!==u.get.iconClass()||d.showImage||u.has.configActions())&&("string"==typeof d.showProgress&&-1!==[f.top,f.bottom].indexOf(d.showProgress)||(d.showProgress=!1),u.create.toast(),d.closeOnClick&&(d.closeIcon||0<F(o).find(e.input).length||u.has.configActions())&&(d.closeOnClick=!1),d.closeOnClick||i.addClass(f.unclickable),u.bind.events()),u.instantiate(),i&&u.show()},instantiate:function(){u.verbose("Storing instance of toast"),x=u,h.data(p,x)},destroy:function(){i&&(u.debug("Removing toast",i),u.unbind.events(),i.remove(),l=o=i=P,d.onRemove.call(i,y),c=s=r=P),h.removeData(p)},show:function(e){e=e||function(){},u.debug("Showing toast"),!1!==d.onShow.call(i,y)?u.animate.show(e):u.debug("onShow callback returned false, cancelling toast animation")},close:function(e){e=e||function(){},u.remove.visible(),u.unbind.events(),u.animate.close(e)},create:{container:function(){u.verbose("Creating container"),v.append(F("<div/>",{class:d.position+" "+f.container}))},toast:function(){if(i=F("<div/>",{class:f.box}),b)o=d.cloneModule?h.clone().removeAttr("id"):h,c=o.find("> i"+u.helpers.toClass(f.close)),d.closeIcon=0<c.length;else{u.verbose("Creating toast"),o=F("<div/>");var e=F("<div/>",{class:f.content}),t=u.get.iconClass();""!==t&&o.append(F("<i/>",{class:t+" "+f.icon})),d.showImage&&o.append(F("<img>",{class:f.image+" "+d.classImage,src:d.showImage})),""!==d.title&&e.append(F("<div/>",{class:f.title,text:d.title})),e.append(F("<div/>",{html:u.helpers.escape(d.message,d.preserveHTML)})),o.addClass(d.class+" "+f.toast).append(e),o.css("opacity",d.opacity),d.closeIcon&&((c=F("<i/>",{class:f.close+" "+("string"==typeof d.closeIcon?d.closeIcon:"")})).hasClass(f.left)?o.prepend(c):o.append(c))}if(o.hasClass(f.compact)&&(d.compact=!0),o.hasClass("card")&&(d.compact=!1),a=o.find(".actions"),u.has.configActions()&&(0===a.length&&(a=F("<div/>",{class:f.actions+" "+(d.classActions||"")}).appendTo(o)),o.hasClass("card")&&!a.hasClass(f.attached)&&(a.addClass(f.extraContent),a.hasClass(f.vertical)&&(a.removeClass(f.vertical),u.error(m.verticalCard))),d.actions.forEach(function(e){var t=e[g.icon]?'<i class="'+u.helpers.deQuote(e[g.icon])+' icon"></i>':"",n=u.helpers.escape(e[g.text]||"",d.preserveHTML),i=u.helpers.deQuote(e[g.class]||""),o=e[g.click]&&F.isFunction(e[g.click])?e[g.click]:function(){};a.append(F("<button/>",{html:t+n,class:f.button+" "+i,click:function(){!1!==o.call(y,h)&&u.close()}}))})),a&&a.hasClass(f.vertical)&&o.addClass(f.vertical),0<a.length&&!a.hasClass(f.attached)&&(!a||a.hasClass(f.basic)&&!a.hasClass(f.left)||o.addClass(f.actions)),"auto"===d.displayTime&&(d.displayTime=Math.max(d.minDisplayTime,o.text().split(" ").length/d.wordsPerMinute*6e4)),i.append(o),0<a.length&&a.hasClass(f.attached)&&(a.addClass(f.buttons),a.detach(),o.addClass(f.attached),a.hasClass(f.vertical)?(o.wrap(F("<div/>",{class:f.vertical+" "+f.attached+" "+(d.compact?f.compact:"")})),a.hasClass(f.left)?o.addClass(f.left).parent().addClass(f.left).prepend(a):o.parent().append(a)):a.hasClass(f.top)?(i.prepend(a),o.addClass(f.bottom)):(i.append(a),o.addClass(f.top))),h!==o&&(y=(h=o)[0]),0<d.displayTime){var n=f.progressing+" "+(d.pauseOnHover?f.pausable:"");d.showProgress&&(r=F("<div/>",{class:f.progress+" "+(d.classProgress||d.class),"data-percent":""}),d.classProgress||(o.hasClass("toast")&&!o.hasClass(f.inverted)?r.addClass(f.inverted):r.removeClass(f.inverted)),s=F("<div/>",{class:"bar "+(d.progressUp?"up ":"down ")+n}),r.addClass(d.showProgress).append(s),r.hasClass(f.top)?i.prepend(r):i.append(r),s.css("animation-duration",d.displayTime/1e3+"s")),(l=F("<span/>",{class:"wait "+n})).css("animation-duration",d.displayTime/1e3+"s"),l.appendTo(o)}d.compact&&(i.addClass(f.compact),o.addClass(f.compact),r&&r.addClass(f.compact)),d.newestOnTop?i.prependTo(u.get.container()):i.appendTo(u.get.container())}},bind:{events:function(){u.debug("Binding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).on("click"+n,u.event.click),l&&l.on("animationend"+n,u.close),i.on("click"+n,e.approve,u.event.approve).on("click"+n,e.deny,u.event.deny)}},unbind:{events:function(){u.debug("Unbinding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).off("click"+n),l&&l.off("animationend"+n),i.off("click"+n)}},animate:{show:function(e){e=F.isFunction(e)?e:function(){},d.transition&&u.can.useElement("transition")&&h.transition("is supported")&&(u.set.visible(),i.transition({animation:d.transition.showMethod+" in",queue:!1,debug:d.debug,verbose:d.verbose,duration:d.transition.showDuration,onComplete:function(){e.call(i,y),d.onVisible.call(i,y)}}))},close:function(e){e=F.isFunction(e)?e:function(){},u.debug("Closing toast"),!1!==d.onHide.call(i,y)?d.transition&&F.fn.transition!==P&&h.transition("is supported")?i.transition({animation:d.transition.hideMethod+" out",queue:!1,duration:d.transition.hideDuration,debug:d.debug,verbose:d.verbose,interval:50,onBeforeHide:function(e){e=F.isFunction(e)?e:function(){},""!==d.transition.closeEasing?i&&(i.css("opacity",0),i.wrap("<div/>").parent().slideUp(500,d.transition.closeEasing,function(){i&&(i.parent().remove(),e.call(i))})):e.call(i)},onComplete:function(){e.call(i,y),d.onHidden.call(i,y),u.destroy()}}):u.error(m.noTransition):u.debug("onHide callback returned false, cancelling toast animation")},pause:function(){l.css("animationPlayState","paused"),s&&s.css("animationPlayState","paused")},continue:function(){l.css("animationPlayState","running"),s&&s.css("animationPlayState","running")}},has:{container:function(){return u.verbose("Determining if there is already a container"),0<v.find(u.helpers.toClass(d.position)+e.container).length},toast:function(){return!!u.get.toast()},toasts:function(){return 0<u.get.toasts().length},configActions:function(){return Array.isArray(d.actions)&&0<d.actions.length}},get:{container:function(){return v.find(u.helpers.toClass(d.position)+e.container)[0]},toastBox:function(){return i||null},toast:function(){return o||null},toasts:function(){return F(u.get.container()).find(e.box)},iconClass:function(){return"string"==typeof d.showIcon?d.showIcon:d.showIcon&&d.icons[d.class]?d.icons[d.class]:""},remainingTime:function(){return l?l.css("opacity")*d.displayTime:0}},set:{visible:function(){o.addClass(f.visible)}},remove:{visible:function(){o.removeClass(f.visible)}},event:{click:function(e){0===F(e.target).closest("a").length&&(d.onClick.call(i,y),u.close())},approve:function(){!1!==d.onApprove.call(y,h)?u.close():u.verbose("Approve callback returned false cancelling close")},deny:function(){!1!==d.onDeny.call(y,h)?u.close():u.verbose("Deny callback returned false cancelling close")}},helpers:{toClass:function(e){var t=e.split(" "),n="";return t.forEach(function(e){n+="."+e}),n},deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e}},can:{useElement:function(e){return F.fn[e]!==P||(u.error(m.noElement.replace("{element}",e)),!1)}},setting:function(e,t){if(u.debug("Changing setting",e,t),F.isPlainObject(e))F.extend(!0,d,e);else{if(t===P)return d[e];F.isPlainObject(d[e])?F.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,u,e);else{if(t===P)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:y,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;T=!1,clearTimeout(u.performance.timer),F.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),(console.group!==P||console.table!==P)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):F.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=x;return e=e||E,t=y||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:u.error(m.method,i),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(w)?w.push(n):w!==P?w=[w,n]:n!==P&&(w=n),a}},A?(x===P&&u.initialize(),u.invoke(D)):(x!==P&&x.invoke("destroy"),u.initialize(),w=h)}),w!==P?w:this},F.fn.toast.settings={name:"Toast",namespace:"toast",silent:!1,debug:!1,verbose:!1,performance:!0,context:"body",position:"top right",class:"neutral",classProgress:!1,classActions:!1,classImage:"mini",title:"",message:"",displayTime:3e3,minDisplayTime:1e3,wordsPerMinute:120,showIcon:!1,newestOnTop:!1,showProgress:!1,pauseOnHover:!0,progressUp:!1,opacity:1,compact:!0,closeIcon:!1,closeOnClick:!0,cloneModule:!0,actions:!1,preserveHTML:!0,showImage:!1,transition:{showMethod:"scale",showDuration:500,hideMethod:"scale",hideDuration:500,closeEasing:"easeOutCubic"},error:{method:"The method you called is not defined.",noElement:"This module requires ui {element}",verticalCard:"Vertical but not attached actions are not supported for card layout"},className:{container:"ui toast-container",box:"floating toast-box",progress:"ui attached active progress",toast:"ui toast",icon:"centered icon",visible:"visible",content:"content",title:"ui header",actions:"actions",extraContent:"extra content",button:"ui button",buttons:"ui buttons",close:"close icon",image:"ui image",vertical:"vertical",attached:"attached",inverted:"inverted",compact:"compact",pausable:"pausable",progressing:"progressing",top:"top",bottom:"bottom",left:"left",basic:"basic",unclickable:"unclickable"},icons:{info:"info",success:"checkmark",warning:"warning",error:"times"},selector:{container:".ui.toast-container",box:".toast-box",toast:".ui.toast",input:'input:not([type="hidden"]), textarea, select, button, .ui.button, ui.dropdown',approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel"},fields:{class:"class",text:"text",icon:"icon",click:"click"},onShow:function(){},onVisible:function(){},onClick:function(){},onHide:function(){},onHidden:function(){},onRemove:function(){},onApprove:function(){},onDeny:function(){}},F.extend(F.easing,{easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?i*(7.5625*t*t)+n:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeOutCubic:function(e){return--e*e*e+1}})}(jQuery,window,document),function(C,e,w,k){"use strict";C.isFunction=C.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var c,r=C(this),g=r.selector||"",p=(new Date).getTime(),h=[],v=arguments,b=v[0],y=[].slice.call(arguments,1),x="string"==typeof b;return r.each(function(i){var u,s,t,d,n,o,e,a,f,m=C(this),l=this;(f={initialize:function(){u=f.get.settings.apply(l,v),d=u.className,t=u.error,n=u.metadata,a="."+u.namespace,e="module-"+u.namespace,s=m.data(e)||f,o=f.get.animationEndEvent(),!1===(x=x&&f.invoke(b))&&(f.verbose("Converted arguments into settings object",u),u.interval?f.delay(u.animate):f.animate(),f.instantiate())},instantiate:function(){f.verbose("Storing instance of module",f),s=f,m.data(e,s)},destroy:function(){f.verbose("Destroying previous module for",l),m.removeData(e)},refresh:function(){f.verbose("Refreshing display type on next animation"),delete f.displayType},forceRepaint:function(){f.verbose("Forcing element repaint");var e=m.parent(),t=m.next();0===t.length?m.detach().appendTo(e):m.detach().insertBefore(t)},repaint:function(){f.verbose("Repainting element");l.offsetWidth},delay:function(e){var t,n=f.get.animationDirection();n=n||(f.can.transition()?f.get.direction():"static"),e=e!==k?e:u.interval,t="auto"==u.reverse&&n==d.outward||1==u.reverse?(r.length-i)*u.interval:i*u.interval,f.debug("Delaying animation by",t),setTimeout(f.animate,t)},animate:function(e){if(u=e||u,!f.is.supported())return f.error(t.support),!1;if(f.debug("Preparing animation",u.animation),f.is.animating()){if(u.queue)return!u.allowRepeats&&f.has.direction()&&f.is.occurring()&&!0!==f.queuing?f.debug("Animation is currently occurring, preventing queueing same animation",u.animation):f.queue(u.animation),!1;if(!u.allowRepeats&&f.is.occurring())return f.debug("Animation is already occurring, will not execute repeated animation",u.animation),!1;f.debug("New animation started, completing previous early",u.animation),s.complete()}f.can.animate()?f.set.animating(u.animation):f.error(t.noAnimation,u.animation,l)},reset:function(){f.debug("Resetting animation to beginning conditions"),f.remove.animationCallbacks(),f.restore.conditions(),f.remove.animating()},queue:function(e){f.debug("Queueing animation of",e),f.queuing=!0,m.one(o+".queue"+a,function(){f.queuing=!1,f.repaint(),f.animate.apply(this,u)})},complete:function(e){e&&e.target===l&&e.stopPropagation(),f.debug("Animation complete",u.animation),f.remove.completeCallback(),f.remove.failSafe(),f.is.looping()||(f.is.outward()?(f.verbose("Animation is outward, hiding element"),f.restore.conditions(),f.hide()):f.is.inward()?(f.verbose("Animation is outward, showing element"),f.restore.conditions(),f.show()):(f.verbose("Static animation completed"),f.restore.conditions(),u.onComplete.call(l)))},force:{visible:function(){var e=m.attr("style"),t=f.get.userStyle(e),n=f.get.displayType(),i=t+"display: "+n+" !important;",o=m[0].style.display;return!n||"none"===o&&u.skipInlineHidden||m[0].tagName.match(/(script|link|style)/i)?(f.remove.transition(),!1):(f.verbose("Overriding default display to show element",n),m.attr("style",i),!0)},hidden:function(){var e=m.attr("style"),t=m.css("display"),n=e===k||""===e;"none"===t||f.is.hidden()?n&&m.removeAttr("style"):(f.verbose("Overriding default display to hide element"),m.css("display","none"))}},has:{direction:function(e){var n=!1;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t!==d.inward&&t!==d.outward||(n=!0)})),n},inlineDisplay:function(){var e=m.attr("style")||"";return Array.isArray(e.match(/display.*?;/,""))}},set:{animating:function(e){f.remove.completeCallback(),e=e||u.animation;var t=f.get.animationClass(e);f.save.animation(t),f.force.visible()&&(f.remove.hidden(),f.remove.direction(),f.start.animation(t))},duration:function(e,t){!(t="number"==typeof(t=t||u.duration)?t+"ms":t)&&0!==t||(f.verbose("Setting animation duration",t),m.css({"animation-duration":t}))},direction:function(e){(e=e||f.get.direction())==d.inward?f.set.inward():f.set.outward()},looping:function(){f.debug("Transition set to loop"),m.addClass(d.looping)},hidden:function(){m.addClass(d.transition).addClass(d.hidden)},inward:function(){f.debug("Setting direction to inward"),m.removeClass(d.outward).addClass(d.inward)},outward:function(){f.debug("Setting direction to outward"),m.removeClass(d.inward).addClass(d.outward)},visible:function(){m.addClass(d.transition).addClass(d.visible)}},start:{animation:function(e){e=e||f.get.animationClass(),f.debug("Starting tween",e),m.addClass(e).one(o+".complete"+a,f.complete),u.useFailSafe&&f.add.failSafe(),f.set.duration(u.duration),u.onStart.call(l)}},save:{animation:function(e){f.cache||(f.cache={}),f.cache.animation=e},displayType:function(e){"none"!==e&&m.data(n.displayType,e)},transitionExists:function(e,t){C.fn.transition.exists[e]=t,f.verbose("Saving existence of transition",e,t)}},restore:{conditions:function(){var e=f.get.currentAnimation();e&&(m.removeClass(e),f.verbose("Removing animation class",f.cache)),f.remove.duration()}},add:{failSafe:function(){var e=f.get.duration();f.timer=setTimeout(function(){m.triggerHandler(o)},e+u.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},remove:{animating:function(){m.removeClass(d.animating)},animationCallbacks:function(){f.remove.queueCallback(),f.remove.completeCallback()},queueCallback:function(){m.off(".queue"+a)},completeCallback:function(){m.off(".complete"+a)},display:function(){m.css("display","")},direction:function(){m.removeClass(d.inward).removeClass(d.outward)},duration:function(){m.css("animation-duration","")},failSafe:function(){f.verbose("Removing fail safe timer",f.timer),f.timer&&clearTimeout(f.timer)},hidden:function(){m.removeClass(d.hidden)},visible:function(){m.removeClass(d.visible)},looping:function(){f.debug("Transitions are no longer looping"),f.is.looping()&&(f.reset(),m.removeClass(d.looping))},transition:function(){m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)}},get:{settings:function(e,t,n){return"object"==typeof e?C.extend(!0,{},C.fn.transition.settings,e):"function"==typeof n?C.extend({},C.fn.transition.settings,{animation:e,onComplete:n,duration:t}):"string"==typeof t||"number"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,duration:t}):"object"==typeof t?C.extend({},C.fn.transition.settings,t,{animation:e}):"function"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,onComplete:t}):C.extend({},C.fn.transition.settings,{animation:e})},animationClass:function(e){var t=e||u.animation,n=f.can.transition()&&!f.has.direction()?f.get.direction()+" ":"";return d.animating+" "+d.transition+" "+n+t},currentAnimation:function(){return!(!f.cache||f.cache.animation===k)&&f.cache.animation},currentDirection:function(){return f.is.inward()?d.inward:d.outward},direction:function(){return f.is.hidden()||!f.is.visible()?d.inward:d.outward},animationDirection:function(e){var n;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t===d.inward?n=d.inward:t===d.outward&&(n=d.outward)})),n||!1},duration:function(e){return!1===(e=e||u.duration)&&(e=m.css("animation-duration")||0),"string"==typeof e?-1<e.indexOf("ms")?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){if(e=e===k||e,u.displayType)return u.displayType;if(e&&m.data(n.displayType)===k){var t=m.css("display");""===t||"none"===t?f.can.transition(!0):f.save.displayType(t)}return m.data(n.displayType)},userStyle:function(e){return(e=e||m.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(e){return C.fn.transition.exists[e]},animationStartEvent:function(){var e,t=w.createElement("div"),n={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in n)if(t.style[e]!==k)return n[e];return!1},animationEndEvent:function(){var e,t=w.createElement("div"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(t.style[e]!==k)return n[e];return!1}},can:{transition:function(e){var t,n,i,o,a,r,s=u.animation,l=f.get.transitionExists(s),c=f.get.displayType(!1);if(l===k||e){if(f.verbose("Determining whether animation exists"),t=m.attr("class"),n=m.prop("tagName"),o=(i=C("<"+n+" />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"),a=i.addClass(d.inward).css("animationName"),c||(c=i.attr("class",t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"),f.verbose("Determining final display state",c),f.save.displayType(c)),i.remove(),o!=a)f.debug("Direction exists for animation",s),r=!0;else{if("none"==o||!o)return void f.debug("No animation defined in css",s);f.debug("Static animation found",s,c),r=!1}f.save.transitionExists(s,r)}return l!==k?l:r},animate:function(){return f.can.transition()!==k}},is:{animating:function(){return m.hasClass(d.animating)},inward:function(){return m.hasClass(d.inward)},outward:function(){return m.hasClass(d.outward)},looping:function(){return m.hasClass(d.looping)},occurring:function(e){return e="."+(e=e||u.animation).replace(" ","."),0<m.filter(e).length},visible:function(){return m.is(":visible")},hidden:function(){return"hidden"===m.css("visibility")},supported:function(){return!1!==o}},hide:function(){f.verbose("Hiding element"),f.is.animating()&&f.reset(),l.blur(),f.remove.display(),f.remove.visible(),C.isFunction(u.onBeforeHide)?u.onBeforeHide.call(l,function(){f.hideNow()}):f.hideNow()},hideNow:function(){f.set.hidden(),f.force.hidden(),u.onHide.call(l),u.onComplete.call(l)},show:function(e){f.verbose("Showing element",e),f.force.visible()&&(f.remove.hidden(),f.set.visible(),u.onShow.call(l),u.onComplete.call(l))},toggle:function(){f.is.visible()?f.hide():f.show()},stop:function(){f.debug("Stopping current animation"),m.triggerHandler(o)},stopAll:function(){f.debug("Stopping all animation"),f.remove.queueCallback(),m.triggerHandler(o)},clear:{queue:function(){f.debug("Clearing animation queue"),f.remove.queueCallback()}},enable:function(){f.verbose("Starting animation"),m.removeClass(d.disabled)},disable:function(){f.debug("Stopping animation"),m.addClass(d.disabled)},setting:function(e,t){if(f.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,u,e);else{if(t===k)return u[e];C.isPlainObject(u[e])?C.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,f,e);else{if(t===k)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(p||t),p=t,h.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;p=!1,clearTimeout(f.performance.timer),C.each(h,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",g&&(e+=" '"+g+"'"),1<r.length&&(e+=" ("+r.length+")"),(console.group!==k||console.table!==k)&&0<h.length&&(console.groupCollapsed(e),console.table?console.table(h):C.each(h,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||y,t=l||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==k&&(a=r[t]),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(c)?c.push(n):c!==k?c=[c,n]:n!==k&&(c=n),a!==k&&a}}).initialize()}),c!==k?c:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,skipInlineHidden:!1,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(E,F,e,P){"use strict";E.isWindow=E.isWindow||function(e){return null!=e&&e===e.window},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.api=E.fn.api=function(x){var C,e=E.isFunction(this)?E(F):E(this),w=e.selector||"",k=(new Date).getTime(),T=[],S=x,D="string"==typeof S,A=[].slice.call(arguments,1);return e.each(function(){var a,r,n,e,s,l,c=E.isPlainObject(x)?E.extend(!0,{},E.fn.api.settings,x):E.extend({},E.fn.api.settings),t=c.namespace,i=c.metadata,o=c.selector,u=c.error,d=c.className,f="."+t,m="module-"+t,g=E(this),p=g.closest(o.form),h=c.stateContext?E(c.stateContext):g,v=this,b=h[0],y=g.data(m);l={initialize:function(){D||l.bind.events(),l.instantiate()},instantiate:function(){l.verbose("Storing instance of module",l),y=l,g.data(m,y)},destroy:function(){l.verbose("Destroying previous module for",v),g.removeData(m).off(f)},bind:{events:function(){var e=l.get.event();e?(l.verbose("Attaching API events to element",e),g.on(e+f,l.event.trigger)):"now"==c.on&&(l.debug("Querying API endpoint immediately"),l.query())}},decode:{json:function(e){if(e!==P&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var t;if(F.Storage!==P)return t=sessionStorage.getItem(e),l.debug("Using cached response",e,t),t=l.decode.json(t);l.error(u.noStorage)}},write:{cachedResponse:function(e,t){t&&""===t?l.debug("Response empty, not caching",t):F.Storage!==P?(E.isPlainObject(t)&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t),l.verbose("Storing cached response for url",e,t)):l.error(u.noStorage)}},query:function(){if(l.is.disabled())l.debug("Element is disabled API request aborted");else{if(l.is.loading()){if(!c.interruptRequests)return void l.debug("Cancelling request, previous request is still pending");l.debug("Interrupting previous request"),l.abort()}if(c.defaultData&&E.extend(!0,c.urlData,l.get.defaultData()),c.serializeForm&&(c.data=l.add.formData(c.data)),!1===(r=l.get.settings()))return l.cancelled=!0,void l.error(u.beforeSend);if(l.cancelled=!1,(n=l.get.templatedURL())||l.is.mocked()){if((n=l.add.urlData(n))||l.is.mocked()){if(r.url=c.base+n,a=E.extend(!0,{},c,{type:c.method||c.type,data:e,url:c.base+n,beforeSend:c.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),l.debug("Querying URL",a.url),l.verbose("Using AJAX settings",a),"local"===c.cache&&l.read.cachedResponse(n))return l.debug("Response returned from local cache"),l.request=l.create.request(),void l.request.resolveWith(b,[l.read.cachedResponse(n)]);c.throttle?c.throttleFirstRequest||l.timer?(l.debug("Throttling request",c.throttle),clearTimeout(l.timer),l.timer=setTimeout(function(){l.timer&&delete l.timer,l.debug("Sending throttled request",e,a.method),l.send.request()},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request(),l.timer=setTimeout(function(){},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request())}}else l.error(u.missingURL)}},should:{removeError:function(){return!0===c.hideError||"auto"===c.hideError&&!l.is.form()}},is:{disabled:function(){return 0<g.filter(o.disabled).length},expectingJSON:function(){return"json"===c.dataType||"jsonp"===c.dataType},form:function(){return g.is("form")||h.is("form")},mocked:function(){return c.mockResponse||c.mockResponseAsync||c.response||c.responseAsync},input:function(){return g.is("input")},loading:function(){return!!l.request&&"pending"==l.request.state()},abortedRequest:function(e){return e&&e.readyState!==P&&0===e.readyState?(l.verbose("XHR request determined to be aborted"),!0):(l.verbose("XHR request was not aborted"),!1)},validResponse:function(e){return l.is.expectingJSON()&&E.isFunction(c.successTest)?(l.debug("Checking JSON returned success",c.successTest,e),c.successTest(e)?(l.debug("Response passed success test",e),!0):(l.debug("Response failed success test",e),!1)):(l.verbose("Response is not JSON, skipping validation",c.successTest,e),!0)}},was:{cancelled:function(){return l.cancelled||!1},succesful:function(){return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'),l.was.successful()},successful:function(){return l.request&&"resolved"==l.request.state()},failure:function(){return l.request&&"rejected"==l.request.state()},complete:function(){return l.request&&("resolved"==l.request.state()||"rejected"==l.request.state())}},add:{urlData:function(o,a){var e,t;return o&&(e=o.match(c.regExp.required),t=o.match(c.regExp.optional),a=a||c.urlData,e&&(l.debug("Looking for required URL variables",e),E.each(e,function(e,t){var n=-1!==t.indexOf("$")?t.substr(2,t.length-3):t.substr(1,t.length-2),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];if(i===P)return l.error(u.requiredParameter,n,o),o=!1;l.verbose("Found required variable",n,i),i=c.encodeParameters?l.get.urlEncodedValue(i):i,o=o.replace(t,i)})),t&&(l.debug("Looking for optional URL variables",e),E.each(t,function(e,t){var n=-1!==t.indexOf("$")?t.substr(3,t.length-4):t.substr(2,t.length-3),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];o=i!==P?(l.verbose("Optional variable Found",n,i),o.replace(t,i)):(l.verbose("Optional variable not found",n),-1!==o.indexOf("/"+t)?o.replace("/"+t,""):o.replace(t,""))}))),o},formData:function(e){var t=E.fn.serializeObject!==P,n=t?p.serializeObject():p.serialize();return e=e||c.data,e=E.isPlainObject(e)?t?(l.debug("Extending existing data with form data",e,n),E.extend(!0,{},e,n)):(l.error(u.missingSerialize),l.debug("Cant extend data. Replacing data with form data",e,n),n):(l.debug("Adding form data",n),n)}},send:{request:function(){l.set.loading(),l.request=l.create.request(),l.is.mocked()?l.mockedXHR=l.create.mockedXHR():l.xhr=l.create.xhr(),c.onRequest.call(b,l.request,l.xhr)}},event:{trigger:function(e){l.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o,r=!!E.isFunction(c.onResponse)&&(l.is.expectingJSON()&&!c.rawResponse?c.onResponse.call(i,E.extend(!0,{},e)):c.onResponse.call(i,e));a=0<a?a:0,r&&(l.debug("Modified API response in onResponse callback",c.onResponse,r,e),e=r),0<a&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.validResponse(e)?l.request.resolveWith(i,[e,n]):l.request.rejectWith(i,[n,"invalid"])},a)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o;0<(a=0<a?a:0)&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.abortedRequest(e)?l.request.rejectWith(i,[e,"aborted",n]):l.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){l.debug("Successful API Response",e),"local"===c.cache&&n&&(l.write.cachedResponse(n,e),l.debug("Saving server response locally",l.cache)),c.onSuccess.call(b,e,g,t)},complete:function(e,t){var n,i;l.was.successful()?(i=e,n=t):(n=e,i=l.get.responseFromXHR(n)),l.remove.loading(),c.onComplete.call(b,i,g,n)},fail:function(e,t,n){var i=l.get.responseFromXHR(e),o=l.get.errorFromRequest(i,t,n);if("aborted"==t)return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),c.onAbort.call(b,t,g,e),!0;"invalid"==t?l.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&e!==P&&(l.debug("XHR produced a server error",t,n),(e.status<200||300<=e.status)&&n!==P&&""!==n&&l.error(u.statusMessage+n,a.url),c.onError.call(b,o,g,e)),c.errorDuration&&"aborted"!==t&&(l.debug("Adding error state"),l.set.error(),l.should.removeError()&&setTimeout(l.remove.error,c.errorDuration)),l.debug("API Request failed",o,e),c.onFailure.call(b,i,g,e)}}},create:{request:function(){return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)},mockedXHR:function(){var e,t,n,i=c.mockResponse||c.response,o=c.mockResponseAsync||c.responseAsync;return n=E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail),i?(t=E.isFunction(i)?(l.debug("Using specified synchronous callback",i),i.call(b,r)):(l.debug("Using settings specified response",i),i),n.resolveWith(b,[t,!1,{responseText:t}])):E.isFunction(o)&&(e=function(e){l.debug("Async callback returned response",e),e?n.resolveWith(b,[e,!1,{responseText:e}]):n.rejectWith(b,[{responseText:e},!1,!1])},l.debug("Using specified async response callback",o),o.call(b,r,e)),n},xhr:function(){var e;return e=E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail),l.verbose("Created server request",e,a),e}},set:{error:function(){l.verbose("Adding error state to element",h),h.addClass(d.error)},loading:function(){l.verbose("Adding loading state to element",h),h.addClass(d.loading),s=(new Date).getTime()}},remove:{error:function(){l.verbose("Removing error state from element",h),h.removeClass(d.error)},loading:function(){l.verbose("Removing loading state from element",h),h.removeClass(d.loading)}},get:{responseFromXHR:function(e){return!!E.isPlainObject(e)&&(l.is.expectingJSON()?l.decode.json(e.responseText):e.responseText)},errorFromRequest:function(e,t,n){return E.isPlainObject(e)&&e.error!==P?e.error:c.error[t]!==P?c.error[t]:n},request:function(){return l.request||!1},xhr:function(){return l.xhr||!1},settings:function(){var e;return(e=c.beforeSend.call(g,c))&&(e.success!==P&&(l.debug("Legacy success callback detected",e),l.error(u.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==P&&(l.debug("Legacy failure callback detected",e),l.error(u.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==P&&(l.debug("Legacy complete callback detected",e),l.error(u.legacyParameters,e.complete),e.onComplete=e.complete)),e===P&&l.error(u.noReturnedValue),!1===e?e:e!==P?E.extend(!0,{},e):E.extend(!0,{},c)},urlEncodedValue:function(e){var t=F.decodeURIComponent(e),n=F.encodeURIComponent(e);return t!==e?(l.debug("URL value is already encoded, avoiding double encoding",e),e):(l.verbose("Encoding value using encodeURIComponent",e,n),n)},defaultData:function(){var e={};return E.isWindow(v)||(l.is.input()?e.value=g.val():l.is.form()||(e.text=g.text())),e},event:function(){return E.isWindow(v)||"now"==c.on?(l.debug("API called without element, no events attached"),!1):"auto"==c.on?g.is("input")?v.oninput!==P?"input":v.onpropertychange!==P?"propertychange":"keyup":g.is("form")?"submit":"click":c.on},templatedURL:function(e){if(e=e||g.data(i.action)||c.action||!1,n=g.data(i.url)||c.url||!1)return l.debug("Using specified url",n),n;if(e){if(l.debug("Looking up url for action",e,c.api),c.api[e]===P&&!l.is.mocked())return void l.error(u.missingAction,c.action,c.api);n=c.api[e]}else l.is.form()&&(n=g.attr("action")||h.attr("action")||!1,l.debug("No url or action specified, defaulting to form action",n));return n}},abort:function(){var e=l.get.xhr();e&&"resolved"!==e.state()&&(l.debug("Cancelling API request"),e.abort())},reset:function(){l.remove.error(),l.remove.loading()},setting:function(e,t){if(l.debug("Changing setting",e,t),E.isPlainObject(e))E.extend(!0,c,e);else{if(t===P)return c[e];E.isPlainObject(c[e])?E.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,l,e);else{if(t===P)return l[e];l[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?l.performance.log(arguments):(l.debug=Function.prototype.bind.call(console.info,console,c.name+":"),l.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?l.performance.log(arguments):(l.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),l.verbose.apply(console,arguments)))},error:function(){c.silent||(l.error=Function.prototype.bind.call(console.error,console,c.name+":"),l.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(l.performance.timer),l.performance.timer=setTimeout(l.performance.display,500)},display:function(){var e=c.name+":",n=0;k=!1,clearTimeout(l.performance.timer),E.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",w&&(e+=" '"+w+"'"),(console.group!==P||console.table!==P)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):E.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||A,t=v||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:l.error(u.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(C)?C.push(n):C!==P?C=[C,n]:n!==P&&(C=n),a}},D?(y===P&&l.initialize(),l.invoke(S)):(y!==P&&y.invoke("destroy"),l.initialize())}),C!==P?C:this},E.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,rawResponse:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(w,e,t,k){"use strict";w.isFunction=w.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w.fn.state=function(m){var g,p=w(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,C=[].slice.call(arguments,1);return p.each(function(){var s,o=w.isPlainObject(m)?w.extend(!0,{},w.fn.state.settings,m):w.extend({},w.fn.state.settings),l=o.error,n=o.metadata,t=o.className,e=o.namespace,i=o.states,a=o.text,r="."+e,c=e+"-module",u=w(this),d=this,f=u.data(c);s={initialize:function(){s.verbose("Initializing module"),o.automatic&&s.add.defaults(),o.context&&""!==h?w(o.context).on(h,"mouseenter"+r,s.change.text).on(h,"mouseleave"+r,s.reset.text).on(h,"click"+r,s.toggle.state):u.on("mouseenter"+r,s.change.text).on("mouseleave"+r,s.reset.text).on("click"+r,s.toggle.state),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),f=s,u.data(c,s)},destroy:function(){s.verbose("Destroying previous module",f),u.off(r).removeData(c)},refresh:function(){s.verbose("Refreshing selector cache"),u=w(d)},add:{defaults:function(){var n=m&&w.isPlainObject(m.states)?m.states:{};w.each(o.defaults,function(e,t){s.is[e]!==k&&s.is[e]()&&(s.verbose("Adding default states",e,d),w.extend(o.states,t,n))})}},is:{active:function(){return u.hasClass(t.active)},loading:function(){return u.hasClass(t.loading)},inactive:function(){return!u.hasClass(t.active)},state:function(e){return t[e]!==k&&u.hasClass(t[e])},enabled:function(){return!u.is(o.filter.active)},disabled:function(){return u.is(o.filter.active)},textEnabled:function(){return!u.is(o.filter.text)},button:function(){return u.is(".button:not(a, .submit)")},input:function(){return u.is("input")},progress:function(){return u.is(".ui.progress")}},allow:function(e){s.debug("Now allowing state",e),i[e]=!0},disallow:function(e){s.debug("No longer allowing",e),i[e]=!1},allows:function(e){return i[e]||!1},enable:function(){u.removeClass(t.disabled)},disable:function(){u.addClass(t.disabled)},setState:function(e){s.allows(e)&&u.addClass(t[e])},removeState:function(e){s.allows(e)&&u.removeClass(t[e])},toggle:{state:function(){var e;if(s.allows("active")&&s.is.enabled()){if(s.refresh(),w.fn.api!==k)if(e=u.api("get request"),u.api("was cancelled"))s.debug("API Request cancelled by beforesend"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1};else if(e)return void s.listenTo(e);s.change.state()}}},listenTo:function(e){s.debug("API request detected, waiting for state signal",e),e&&(a.loading&&s.update.text(a.loading),w.when(e).then(function(){"resolved"==e.state()?(s.debug("API request succeeded"),o.activateTest=function(){return!0},o.deactivateTest=function(){return!0}):(s.debug("API request failed"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1}),s.change.state()}))},change:{state:function(){s.debug("Determining state change direction"),s.is.inactive()?s.activate():s.deactivate(),o.sync&&s.sync(),o.onChange.call(d)},text:function(){s.is.textEnabled()&&(s.is.disabled()?(s.verbose("Changing text to disabled text",a.hover),s.update.text(a.disabled)):s.is.active()?a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.deactivate&&(s.verbose("Changing text to deactivating text",a.deactivate),s.update.text(a.deactivate)):a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.activate&&(s.verbose("Changing text to activating text",a.activate),s.update.text(a.activate)))}},activate:function(){o.activateTest.call(d)&&(s.debug("Setting state to active"),u.addClass(t.active),s.update.text(a.active),o.onActivate.call(d))},deactivate:function(){o.deactivateTest.call(d)&&(s.debug("Setting state to inactive"),u.removeClass(t.active),s.update.text(a.inactive),o.onDeactivate.call(d))},sync:function(){s.verbose("Syncing other buttons to current state"),s.is.active()?p.not(u).state("activate"):p.not(u).state("deactivate")},get:{text:function(){return o.selector.text?u.find(o.selector.text).text():u.html()},textFor:function(e){return a[e]||!1}},flash:{text:function(e,t,n){var i=s.get.text();s.debug("Flashing text message",e,t),e=e||o.text.flash,t=t||o.flashDuration,n=n||function(){},s.update.text(e),setTimeout(function(){s.update.text(i),n.call(d)},t)}},reset:{text:function(){var e=a.active||u.data(n.storedText),t=a.inactive||u.data(n.storedText);s.is.textEnabled()&&(s.is.active()&&e?(s.verbose("Resetting active text",e),s.update.text(e)):t&&(s.verbose("Resetting inactive text",e),s.update.text(t)))}},update:{text:function(e){var t=s.get.text();e&&e!==t?(s.debug("Updating text",e),o.selector.text?u.data(n.storedText,e).find(o.selector.text).text(e):u.data(n.storedText,e).html(e)):s.debug("Text is already set, ignoring update",e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),w.isPlainObject(e))w.extend(!0,o,e);else{if(t===k)return o[e];w.isPlainObject(o[e])?w.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(w.isPlainObject(e))w.extend(!0,s,e);else{if(t===k)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;v=!1,clearTimeout(s.performance.timer),w.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),(console.group!==k||console.table!==k)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):w.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=f;return e=e||C,t=d||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,w.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(w.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!w.isPlainObject(r[t])||e==o)return r[t]!==k?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),w.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(g)?g.push(n):g!==k?g=[g,n]:n!==k&&(g=n),a}},x?(f===k&&s.initialize(),s.invoke(y)):(f!==k&&f.invoke("destroy"),s.initialize())}),g!==k?g:this},w.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(E,F,P,O){"use strict";E.isFunction=E.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.visibility=function(b){var y,e=E(this),x=e.selector||"",C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.length,A=0;return e.each(function(){var e,t,n,s,o=E.isPlainObject(b)?E.extend(!0,{},E.fn.visibility.settings,b):E.extend({},E.fn.visibility.settings),i=o.className,a=o.namespace,l=o.error,r=o.metadata,c="."+a,u="module-"+a,d=E(F),f=E(this),m=E(o.context),g=f.data(u),p=F.requestAnimationFrame||F.mozRequestAnimationFrame||F.webkitRequestAnimationFrame||F.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this,v=!1;s={initialize:function(){s.debug("Initializing",o),s.setup.cache(),s.should.trackChanges()&&("image"==o.type&&s.setup.image(),"fixed"==o.type&&s.setup.fixed(),o.observeChanges&&s.observeChanges(),s.bind.events()),s.save.position(),s.is.visible()||s.error(l.visible,f),o.initialCheck&&s.checkVisibility(),s.instantiate()},instantiate:function(){s.debug("Storing instance",s),f.data(u,s),g=s},destroy:function(){s.verbose("Destroying previous module"),n&&n.disconnect(),t&&t.disconnect(),d.off("load"+c,s.event.load).off("resize"+c,s.event.resize),m.off("scroll"+c,s.event.scroll).off("scrollchange"+c,s.event.scrollchange),"fixed"==o.type&&(s.resetFixed(),s.remove.placeholder()),f.off(c).removeData(u)},observeChanges:function(){"MutationObserver"in F&&(t=new MutationObserver(s.event.contextChanged),n=new MutationObserver(s.event.changed),t.observe(P,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),s.debug("Setting up mutation observer",n))},bind:{events:function(){s.verbose("Binding visibility events to scroll and resize"),o.refreshOnLoad&&d.on("load"+c,s.event.load),d.on("resize"+c,s.event.resize),m.off("scroll"+c).on("scroll"+c,s.event.scroll).on("scrollchange"+c,s.event.scrollchange)}},event:{changed:function(e){s.verbose("DOM tree modified, updating visibility calculations"),s.timer=setTimeout(function(){s.verbose("DOM tree modified, updating sticky menu"),s.refresh()},100)},contextChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<E(e).find(h).length)&&(s.debug("Element removed from DOM, tearing down events"),s.destroy())})})},resize:function(){s.debug("Window resized"),o.refreshOnResize&&p(s.refresh)},load:function(){s.debug("Page finished loading"),p(s.refresh)},scroll:function(){o.throttle?(clearTimeout(s.timer),s.timer=setTimeout(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])},o.throttle)):p(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])})},scrollchange:function(e,t){s.checkVisibility(t)}},precache:function(e,t){e instanceof Array||(e=[e]);for(var n=e.length,i=0,o=[],a=P.createElement("img"),r=function(){++i>=e.length&&E.isFunction(t)&&t()};n--;)(a=P.createElement("img")).onload=r,a.onerror=r,a.src=e[n],o.push(a)},enableCallbacks:function(){s.debug("Allowing callbacks to occur"),v=!1},disableCallbacks:function(){s.debug("Disabling all callbacks temporarily"),v=!0},should:{trackChanges:function(){return T?(s.debug("One time query, no need to bind events"),!1):(s.debug("Callbacks being attached"),!0)}},setup:{cache:function(){s.cache={occurred:{},screen:{},element:{}}},image:function(){var e=f.data(r.src);e&&(s.verbose("Lazy loading image",e),o.once=!0,o.observeChanges=!1,o.onOnScreen=function(){s.debug("Image on screen",h),s.precache(e,function(){s.set.image(e,function(){++A==D&&o.onAllLoaded.call(this),o.onLoad.call(this)})})})},fixed:function(){s.debug("Setting up fixed"),o.once=!1,o.observeChanges=!1,o.initialCheck=!0,o.refreshOnLoad=!0,b.transition||(o.transition=!1),s.create.placeholder(),s.debug("Added placeholder",e),o.onTopPassed=function(){s.debug("Element passed, adding fixed position",f),s.show.placeholder(),s.set.fixed(),o.transition&&E.fn.transition!==O&&f.transition(o.transition,o.duration)},o.onTopPassedReverse=function(){s.debug("Element returned to position, removing fixed",f),s.hide.placeholder(),s.remove.fixed()}}},create:{placeholder:function(){s.verbose("Creating fixed position placeholder"),e=f.clone(!1).css("display","none").addClass(i.placeholder).insertAfter(f)}},show:{placeholder:function(){s.verbose("Showing placeholder"),e.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){s.verbose("Hiding placeholder"),e.css("display","none").css("visibility","")}},set:{fixed:function(){s.verbose("Setting element to fixed position"),f.addClass(i.fixed).css({position:"fixed",top:o.offset+"px",left:"auto",zIndex:o.zIndex}),o.onFixed.call(h)},image:function(e,t){if(f.attr("src",e),o.transition)if(E.fn.transition!==O){if(f.hasClass(i.visible))return void s.debug("Transition already occurred on this image, skipping animation");f.transition(o.transition,o.duration,t)}else f.fadeIn(o.duration,t);else f.show()}},is:{onScreen:function(){return s.get.elementCalculations().onScreen},offScreen:function(){return s.get.elementCalculations().offScreen},visible:function(){return!(!s.cache||!s.cache.element)&&!(0===s.cache.element.width&&0===s.cache.element.offset.top)},verticallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){s.debug("Refreshing constants (width/height)"),"fixed"==o.type&&s.resetFixed(),s.reset(),s.save.position(),o.checkOnRefresh&&s.checkVisibility(),o.onRefresh.call(h)},resetFixed:function(){s.remove.fixed(),s.remove.occurred()},reset:function(){s.verbose("Resetting all cached values"),E.isPlainObject(s.cache)&&(s.cache.screen={},s.cache.element={})},checkVisibility:function(e){s.verbose("Checking visibility of element",s.cache.element),!v&&s.is.visible()&&(s.save.scroll(e),s.save.calculations(),s.passed(),s.passingReverse(),s.topVisibleReverse(),s.bottomVisibleReverse(),s.topPassedReverse(),s.bottomPassedReverse(),s.onScreen(),s.offScreen(),s.passing(),s.topVisible(),s.bottomVisible(),s.topPassed(),s.bottomPassed(),o.onUpdate&&o.onUpdate.call(h,s.get.elementCalculations()))},passed:function(e,t){var n=s.get.elementCalculations();if(e&&t)o.onPassed[e]=t;else{if(e!==O)return s.get.pixelsPassed(e)>n.pixelsPassed;n.passing&&E.each(o.onPassed,function(e,t){n.bottomVisible||n.pixelsPassed>s.get.pixelsPassed(e)?s.execute(t,e):o.once||s.remove.occurred(t)})}},onScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOnScreen;if(e&&(s.debug("Adding callback for onScreen",e),o.onOnScreen=e),t.onScreen?s.execute(n,"onScreen"):o.once||s.remove.occurred("onScreen"),e!==O)return t.onOnScreen},offScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOffScreen;if(e&&(s.debug("Adding callback for offScreen",e),o.onOffScreen=e),t.offScreen?s.execute(n,"offScreen"):o.once||s.remove.occurred("offScreen"),e!==O)return t.onOffScreen},passing:function(e){var t=s.get.elementCalculations(),n=e||o.onPassing;if(e&&(s.debug("Adding callback for passing",e),o.onPassing=e),t.passing?s.execute(n,"passing"):o.once||s.remove.occurred("passing"),e!==O)return t.passing},topVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisible,i="topVisible";if(e&&(s.debug("Adding callback for top visible",e),o.onTopVisible=e),t.topVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.topVisible},bottomVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisible,i="bottomVisible";if(e&&(s.debug("Adding callback for bottom visible",e),o.onBottomVisible=e),t.bottomVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.bottomVisible},topPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassed;if(e&&(s.debug("Adding callback for top passed",e),o.onTopPassed=e),t.topPassed?s.execute(n,"topPassed"):o.once||s.remove.occurred("topPassed"),e===O)return t.topPassed},bottomPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassed,i="bottomPassed";if(e&&(s.debug("Adding callback for bottom passed",e),o.onBottomPassed=e),t.bottomPassed?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.bottomPassed},passingReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onPassingReverse,i="passingReverse";if(e&&(s.debug("Adding callback for passing reverse",e),o.onPassingReverse=e),t.passing?o.once||s.remove.occurred(i):s.get.occurred("passing")&&s.execute(n,i),e!==O)return!t.passing},topVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisibleReverse,i="topVisibleReverse";if(e&&(s.debug("Adding callback for top visible reverse",e),o.onTopVisibleReverse=e),t.topVisible?o.once||s.remove.occurred(i):s.get.occurred("topVisible")&&s.execute(n,i),e===O)return!t.topVisible},bottomVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(s.debug("Adding callback for bottom visible reverse",e),o.onBottomVisibleReverse=e),t.bottomVisible?o.once||s.remove.occurred(i):s.get.occurred("bottomVisible")&&s.execute(n,i),e===O)return!t.bottomVisible},topPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassedReverse,i="topPassedReverse";if(e&&(s.debug("Adding callback for top passed reverse",e),o.onTopPassedReverse=e),t.topPassed?o.once||s.remove.occurred(i):s.get.occurred("topPassed")&&s.execute(n,i),e===O)return!t.onTopPassed},bottomPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(s.debug("Adding callback for bottom passed reverse",e),o.onBottomPassedReverse=e),t.bottomPassed?o.once||s.remove.occurred(i):s.get.occurred("bottomPassed")&&s.execute(n,i),e===O)return!t.bottomPassed},execute:function(e,t){var n=s.get.elementCalculations(),i=s.get.screenCalculations();(e=e||!1)&&(o.continuous?(s.debug("Callback being called continuously",t,n),e.call(h,n,i)):s.get.occurred(t)||(s.debug("Conditions met",t,n),e.call(h,n,i))),s.save.occurred(t)},remove:{fixed:function(){s.debug("Removing fixed position"),f.removeClass(i.fixed).css({position:"",top:"",left:"",zIndex:""}),o.onUnfixed.call(h)},placeholder:function(){s.debug("Removing placeholder content"),e&&e.remove()},occurred:function(e){if(e){var t=s.cache.occurred;t[e]!==O&&!0===t[e]&&(s.debug("Callback can now be called again",e),s.cache.occurred[e]=!1)}else s.cache.occurred={}}},save:{calculations:function(){s.verbose("Saving all calculations necessary to determine positioning"),s.save.direction(),s.save.screenCalculations(),s.save.elementCalculations()},occurred:function(e){e&&(s.cache.occurred[e]!==O&&!0===s.cache.occurred[e]||(s.verbose("Saving callback occurred",e),s.cache.occurred[e]=!0))},scroll:function(e){e=e+o.offset||m.scrollTop()+o.offset,s.cache.scroll=e},direction:function(){var e,t=s.get.scroll(),n=s.get.lastScroll();return e=n<t&&n?"down":t<n&&n?"up":"static",s.cache.direction=e,s.cache.direction},elementPosition:function(){var e=s.cache.element,t=s.get.screenSize();return s.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=f.offset(),e.width=f.outerWidth(),e.height=f.outerHeight(),s.is.verticallyScrollableContext()&&(e.offset.top+=m.scrollTop()-m.offset().top),s.is.horizontallyScrollableContext()&&(e.offset.left+=m.scrollLeft()-m.offset().left),s.cache.element=e},elementCalculations:function(){var e=s.get.screenCalculations(),t=s.get.elementPosition();return o.includeMargin?(t.margin={},t.margin.top=parseInt(f.css("margin-top"),10),t.margin.bottom=parseInt(f.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.topPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.bottomPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=(t.topVisible||t.passing)&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),s.cache.element=t,s.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=s.get.scroll();return s.save.direction(),s.cache.screen.top=e,s.cache.screen.bottom=e+s.cache.screen.height,s.cache.screen},screenSize:function(){s.verbose("Saving window position"),s.cache.screen={height:m.height()}},position:function(){s.save.screenSize(),s.save.elementPosition()}},get:{pixelsPassed:function(e){var t=s.get.elementCalculations();return-1<e.search("%")?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return s.cache.occurred!==O&&s.cache.occurred[e]||!1},direction:function(){return s.cache.direction===O&&s.save.direction(),s.cache.direction},elementPosition:function(){return s.cache.element===O&&s.save.elementPosition(),s.cache.element},elementCalculations:function(){return s.cache.element===O&&s.save.elementCalculations(),s.cache.element},screenCalculations:function(){return s.cache.screen===O&&s.save.screenCalculations(),s.cache.screen},screenSize:function(){return s.cache.screen===O&&s.save.screenSize(),s.cache.screen},scroll:function(){return s.cache.scroll===O&&s.save.scroll(),s.cache.scroll},lastScroll:function(){return s.cache.screen===O?(s.debug("First scroll event, no last scroll could be found"),!1):s.cache.screen.top}},setting:function(e,t){if(E.isPlainObject(e))E.extend(!0,o,e);else{if(t===O)return o[e];o[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,s,e);else{if(t===O)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;C=!1,clearTimeout(s.performance.timer),E.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",x&&(e+=" '"+x+"'"),(console.group!==O||console.table!==O)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):E.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||S,t=h||t,"string"==typeof i&&r!==O&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==O)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==O?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==O&&(n=a),Array.isArray(y)?y.push(n):y!==O?y=[y,n]:n!==O&&(y=n),a}},T?(g===O&&s.initialize(),g.save.scroll(),g.save.calculations(),s.invoke(k)):(g!==O&&g.invoke("destroy"),s.initialize())}),y!==O?y:this},E.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:F,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"constraint",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.5.3 - built 2020-12-18
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2020 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
!function(b){"use strict";function t(t,s){this.elmt=t,this.settings=b.extend({},e,b.vegas.defaults,s),this.slide=this.settings.slide,this.total=this.settings.slides.length,this.noshow=this.total<2,this.paused=!this.settings.autoplay||this.noshow,this.ended=!1,this.$elmt=b(t),this.$timer=null,this.$overlay=null,this.$slide=null,this.timeout=null,this.first=!0,this.transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"],this.animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"],this.settings.transitionRegister instanceof Array||(this.settings.transitionRegister=[this.settings.transitionRegister]),this.settings.animationRegister instanceof Array||(this.settings.animationRegister=[this.settings.animationRegister]),this.transitions=this.transitions.concat(this.settings.transitionRegister),this.animations=this.animations.concat(this.settings.animationRegister),this.support={objectFit:"objectFit"in document.body.style,transition:"transition"in document.body.style||"WebkitTransition"in document.body.style,video:b.vegas.isVideoCompatible()},!0===this.settings.shuffle&&this.shuffle(),this._init()}var e={slide:0,delay:5e3,loop:!0,preload:!1,preloadImage:!1,preloadVideo:!1,timer:!0,overlay:!1,autoplay:!0,shuffle:!1,cover:!0,color:null,align:"center",valign:"center",firstTransition:null,firstTransitionDuration:null,transition:"fade",transitionDuration:1e3,transitionRegister:[],animation:null,animationDuration:"auto",animationRegister:[],slidesToKeep:1,init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]},n={};t.prototype={_init:function(){var t,s,i,e,n="BODY"===this.elmt.tagName,o=this.settings.timer,a=this.settings.overlay,r=this;this._preload(),n||(s=b('<div class="vegas-content-scrollable">'),t=b('<div class="vegas-content">').css("overflow",this.$elmt.css("overflow")).css("padding",this.$elmt.css("padding")),this.$elmt.css("padding")||t.css("padding-top",this.$elmt.css("padding-top")).css("padding-bottom",this.$elmt.css("padding-bottom")).css("padding-left",this.$elmt.css("padding-left")).css("padding-right",this.$elmt.css("padding-right")),this.$elmt.css("padding",0),this.$elmt.clone(!0).children().appendTo(t),this.elmt.innerHTML=""),o&&this.support.transition&&(e=b('<div class="vegas-timer"><div class="vegas-timer-progress">'),this.$timer=e,this.$elmt.prepend(e)),a&&(i=b('<div class="vegas-overlay">'),"string"==typeof a&&i.css("background-image","url("+a+")"),this.$overlay=i,this.$elmt.prepend(i)),this.$elmt.addClass("vegas-container"),n||(this.$elmt.append(s),s.append(t)),setTimeout(function(){r.trigger("init"),r._goto(r.slide),r.settings.autoplay&&r.trigger("play")},1)},_preload:function(){var t;for(t=0;t<this.settings.slides.length;t++)(this.settings.preload||this.settings.preloadImages)&&this.settings.slides[t].src&&((new Image).src=this.settings.slides[t].src),(this.settings.preload||this.settings.preloadVideos)&&this.support.video&&this.settings.slides[t].video&&(this.settings.slides[t].video instanceof Array?this._video(this.settings.slides[t].video):this._video(this.settings.slides[t].video.src))},_random:function(t){return t[Math.floor(Math.random()*t.length)]},_slideShow:function(){var t=this;1<this.total&&!this.ended&&!this.paused&&!this.noshow&&(this.timeout=setTimeout(function(){t.next()},this._options("delay")))},_timer:function(t){var s=this;clearTimeout(this.timeout),this.$timer&&(this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration","0ms"),this.ended||this.paused||this.noshow||t&&setTimeout(function(){s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration",s._options("delay")-100+"ms")},100))},_video:function(t){var s,i,e=t.toString();return n[e]?n[e]:(t instanceof Array||(t=[t]),(s=document.createElement("video")).preload=!0,t.forEach(function(t){(i=document.createElement("source")).src=t,s.appendChild(i)}),n[e]=s)},_fadeOutSound:function(t,s){var i=this,e=s/10,n=t.volume-.09;0<n?(t.volume=n,setTimeout(function(){i._fadeOutSound(t,s)},e)):t.pause()},_fadeInSound:function(t,s){var i=this,e=s/10,n=t.volume+.09;n<1&&(t.volume=n,setTimeout(function(){i._fadeInSound(t,s)},e))},_options:function(t,s){return void 0===s&&(s=this.slide),void 0!==this.settings.slides[s][t]?this.settings.slides[s][t]:this.settings[t]},_goto:function(t){void 0===this.settings.slides[t]&&(t=0),this.slide=t;var s,i,e,n,o,a=this.$elmt.children(".vegas-slide"),r=this.settings.slides[t].src,h=this.settings.slides[t].video,d=this._options("delay"),l=this._options("align"),g=this._options("valign"),u=this._options("cover"),c=this._options("color")||this.$elmt.css("background-color"),p=this,m=a.length,f=this._options("transition"),v=this._options("transitionDuration"),y=this._options("animation"),_=this._options("animationDuration");function w(){p._timer(!0),setTimeout(function(){f&&(p.support.transition?(a.css("transition","all "+v+"ms").addClass("vegas-transition-"+f+"-out"),a.each(function(){var t=a.find("video").get(0);t&&(t.volume=1,p._fadeOutSound(t,v))}),s.css("transition","all "+v+"ms").addClass("vegas-transition-"+f+"-in")):s.fadeIn(v));for(var t=0;t<a.length-p.settings.slidesToKeep;t++)a.eq(t).remove();p.trigger("walk"),p._slideShow()},100)}this.settings.firstTransition&&this.first&&(f=this.settings.firstTransition||f),this.settings.firstTransitionDuration&&this.first&&(v=this.settings.firstTransitionDuration||v),this.first&&(this.first=!1),"repeat"!==u&&(!0===u?u="cover":!1===u&&(u="contain")),("random"===f||f instanceof Array)&&(f=f instanceof Array?this._random(f):this._random(this.transitions)),("random"===y||y instanceof Array)&&(y=y instanceof Array?this._random(y):this._random(this.animations)),("auto"===v||d<v)&&(v=d),"auto"===_&&(_=d),s=b('<div class="vegas-slide"></div>'),this.support.transition&&f&&s.addClass("vegas-transition-"+f),this.support.video&&h?((n=h instanceof Array?this._video(h):this._video(h.src)).loop=void 0===h.loop||h.loop,n.muted=void 0===h.mute||h.mute,!1===n.muted?(n.volume=0,this._fadeInSound(n,v)):n.pause(),e=b(n).addClass("vegas-video").css("background-color",c),this.support.objectFit?e.css("object-position",l+" "+g).css("object-fit",u).css("width","100%").css("height","100%"):"contain"===u&&e.css("width","100%").css("height","100%"),s.append(e)):(o=new Image,i=b('<div class="vegas-slide-inner"></div>').css("background-image",'url("'+r+'")').css("background-color",c).css("background-position",l+" "+g),"repeat"===u?i.css("background-repeat","repeat"):i.css("background-size",u),this.support.transition&&y&&i.addClass("vegas-animation-"+y).css("animation-duration",_+"ms"),s.append(i)),this.support.transition||s.css("display","none"),m?a.eq(m-1).after(s):this.$elmt.prepend(s),a.css("transition","all 0ms").each(function(){this.className="vegas-slide","VIDEO"===this.tagName&&(this.className+=" vegas-video"),f&&(this.className+=" vegas-transition-"+f,this.className+=" vegas-transition-"+f+"-in")}),p._timer(!1),n?(4===n.readyState&&(n.currentTime=0),n.play(),w()):(o.src=r,o.complete?w():o.onload=w)},_end:function(){this.ended=!this.settings.autoplay,this._timer(!1),this.trigger("end")},shuffle:function(){for(var t,s,i=this.total-1;0<i;i--)s=Math.floor(Math.random()*(i+1)),t=this.settings.slides[i],this.settings.slides[i]=this.settings.slides[s],this.settings.slides[s]=t},play:function(){this.paused&&(this.paused=!1,this.next(),this.trigger("play"))},pause:function(){this._timer(!1),this.paused=!0,this.trigger("pause")},toggle:function(){this.paused?this.play():this.pause()},playing:function(){return!this.paused&&!this.noshow},current:function(t){return t?{slide:this.slide,data:this.settings.slides[this.slide]}:this.slide},jump:function(t){t<0||t>this.total-1||t===this.slide||(this.slide=t,this._goto(this.slide))},next:function(){if(this.slide++,this.slide>=this.total){if(!this.settings.loop)return this._end();this.slide=0}this._goto(this.slide)},previous:function(){if(this.slide--,this.slide<0){if(!this.settings.loop)return void this.slide++;this.slide=this.total-1}this._goto(this.slide)},trigger:function(t){var s=[];s="init"===t?[this.settings]:[this.slide,this.settings.slides[this.slide]],this.$elmt.trigger("vegas"+t,s),"function"==typeof this.settings[t]&&this.settings[t].apply(this.$elmt,s)},options:function(t,s){var i=this.settings.slides.slice();if("object"==typeof t)this.settings=b.extend({},e,b.vegas.defaults,t);else{if("string"!=typeof t)return this.settings;if(void 0===s)return this.settings[t];this.settings[t]=s}this.settings.slides!==i&&(this.total=this.settings.slides.length,this.noshow=this.total<2,this._preload())},destroy:function(){clearTimeout(this.timeout),this.$elmt.removeClass("vegas-container"),this.$elmt.find("> .vegas-slide").remove(),this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt),this.$elmt.find("> .vegas-wrapper").remove(),this.settings.timer&&this.$timer.remove(),this.settings.overlay&&this.$overlay.remove(),this.elmt._vegas=null}},b.fn.vegas=function(s){var i,e=arguments,n=!1;if(void 0===s||"object"==typeof s)return this.each(function(){this._vegas||(this._vegas=new t(this,s))});if("string"==typeof s){if(this.each(function(){var t=this._vegas;if(!t)throw new Error("No Vegas applied to this element.");"function"==typeof t[s]&&"_"!==s[0]?i=t[s].apply(t,[].slice.call(e,1)):n=!0}),n)throw new Error('No method "'+s+'" in Vegas.');return void 0!==i?i:this}},b.vegas={},b.vegas.defaults=e,b.vegas.isVideoCompatible=function(){return!/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)}}(window.jQuery||window.Zepto||window.m4q);
//# sourceMappingURL=vegas.min.js.map

// fix menu when passed
$(".following-menu-fix").visibility({
	once: false,
	onBottomPassed: function () {
		$(".fixed.menu").transition("fade in");
	},
	onBottomPassedReverse: function () {
		$(".fixed.menu").transition("fade out");
	}
});

$(".toc.item").on("click", function () {
	$(".ui.sidebar").sidebar("toggle");
});

$(".following-menu-fix").vegas({
	preload: true,
	delay:10000,
	slides: [
		{ src: "/assets/img/10.jpg" },
		{ src: "/assets/img/11.jpg" },
		{ src: "/assets/img/12.jpg" },
		{ src: "/assets/img/13.jpg" }
	]
});

$.vegas.isVideoCompatible = function () {
	var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
	return !devices.test(navigator.userAgent);
}