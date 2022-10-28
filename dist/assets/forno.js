'use strict';



;define("forno/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("forno/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "forno/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("forno/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("forno/components/cakes", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <article class="cakes">
      <div class="details">
          {{!-- template-lint-disable no-invalid-interactive --}}
          <div class="cake-img {{if this.isLarge "large"}}" {{on "click" this.toggleSize}}>
              <Cakes::Image
                  src={{@cakes.image}}
                  alt="Image Of {{@cakes.Cake_Name}}"
              />
          </div>
          <div class="cake-details">
              <h3>
                  <LinkTo @route="cakes" @model={{@cakes}}>
                      Cake Name: {{@cakes.title}}
                  </LinkTo>
              </h3>
              <div class="bakery">
                  <p>Bakery : {{@cakes.Bakery}}</p>
              </div>
              <div class="bakery-location">
                  <p>Location : {{@cakes.City}}</p>
              </div>
              <div class="cake-price">
                  <p>Price : &#8377; {{@cakes.Price}}</p>
              </div>
              <Map
                  @lat= {{@cakes.Location.lat}}
                  @lng= {{@cakes.Location.lng}}
                  @zoom="11"
                  @width="150"
                  @height="150"
                  alt="A map of Bakery"
              />
          </div>
      </div>
  </article>
  */
  {
    "id": "2clQVhjA",
    "block": "[[[10,\"article\"],[14,0,\"cakes\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n\"],[1,\"        \"],[11,0],[16,0,[29,[\"cake-img \",[52,[30,0,[\"isLarge\"]],\"large\"]]]],[4,[38,1],[\"click\",[30,0,[\"toggleSize\"]]],null],[12],[1,\"\\n            \"],[8,[39,2],[[16,\"src\",[30,1,[\"image\"]]],[16,\"alt\",[29,[\"Image Of \",[30,1,[\"Cake_Name\"]]]]]],null,null],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"cake-details\"],[12],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n                \"],[8,[39,3],null,[[\"@route\",\"@model\"],[\"cakes\",[30,1]]],[[\"default\"],[[[[1,\"\\n                    Cake Name: \"],[1,[30,1,[\"title\"]]],[1,\"\\n                \"]],[]]]]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"bakery\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Bakery : \"],[1,[30,1,[\"Bakery\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"bakery-location\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Location : \"],[1,[30,1,[\"City\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"cake-price\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Price : ₹ \"],[1,[30,1,[\"Price\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[8,[39,4],[[24,\"alt\",\"A map of Bakery\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[[30,1,[\"Location\",\"lat\"]],[30,1,[\"Location\",\"lng\"]],\"11\",\"150\",\"150\"]],null],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@cakes\"],false,[\"if\",\"on\",\"cakes/image\",\"link-to\",\"map\"]]",
    "moduleName": "forno/components/cakes.hbs",
    "isStrictMode": false
  });

  let CakesComponent = (_class = class CakesComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "isLarge", _descriptor, this);
    }

    toggleSize() {
      this.isLarge = !this.isLarge;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLarge", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSize"), _class.prototype)), _class);
  _exports.default = CakesComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CakesComponent);
});
;define("forno/components/cakes/detailed", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <article class="cakes">
      <div class="details">
          {{!-- template-lint-disable no-invalid-interactive --}}
          <div class="cake-img {{if this.isLarge "large"}}" {{on "click" this.toggleSize}}>
              <Cakes::Image
                  src={{@cakes.image}}
                  alt="Image Of {{@cakes.Cake_Name}}"
              />
          </div>
          <div class="cake-details">
              <h3>
                  Cake Name: {{@cakes.title}}
              </h3>
              <div class="bakery">
                  <p>Bakery : {{@cakes.Bakery}}</p>
              </div>
              <div class="bakery-location">
                  <p>Location : {{@cakes.City}}</p>
              </div>
              <div class="cake-price">
                  <p>Price : &#8377; {{@cakes.Price}}</p>
              </div>
              <Map
                  @lat= {{@cakes.Location.lat}}
                  @lng= {{@cakes.Location.lng}}
                  @zoom="11"
                  @width="150"
                  @height="150"
                  alt="A map of Bakery"
              />
          </div>
      </div>
  </article>
  */
  {
    "id": "Yu6+rCzT",
    "block": "[[[10,\"article\"],[14,0,\"cakes\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n\"],[1,\"        \"],[11,0],[16,0,[29,[\"cake-img \",[52,[30,0,[\"isLarge\"]],\"large\"]]]],[4,[38,1],[\"click\",[30,0,[\"toggleSize\"]]],null],[12],[1,\"\\n            \"],[8,[39,2],[[16,\"src\",[30,1,[\"image\"]]],[16,\"alt\",[29,[\"Image Of \",[30,1,[\"Cake_Name\"]]]]]],null,null],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"cake-details\"],[12],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n                Cake Name: \"],[1,[30,1,[\"title\"]]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"bakery\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Bakery : \"],[1,[30,1,[\"Bakery\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"bakery-location\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Location : \"],[1,[30,1,[\"City\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"cake-price\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Price : ₹ \"],[1,[30,1,[\"Price\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[8,[39,3],[[24,\"alt\",\"A map of Bakery\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[[30,1,[\"Location\",\"lat\"]],[30,1,[\"Location\",\"lng\"]],\"11\",\"150\",\"150\"]],null],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@cakes\"],false,[\"if\",\"on\",\"cakes/image\",\"map\"]]",
    "moduleName": "forno/components/cakes/detailed.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("forno/components/cakes/image", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <button type="button" class="image">
      <img ...attributes>
      {{!-- {{#if this.isLarge}}
          <small>View Smaller</small>
      {{else}}
          <small>View Larger</small>
      {{/if}} --}}
  </button>
  */
  {
    "id": "wpFiIDim",
    "block": "[[[10,\"button\"],[14,0,\"image\"],[14,4,\"button\"],[12],[1,\"\\n    \"],[11,\"img\"],[17,1],[12],[13],[1,\"\\n\"],[13]],[\"&attrs\"],false,[]]",
    "moduleName": "forno/components/cakes/image.hbs",
    "isStrictMode": false
  });

  let CakesImageComponent = (_class = class CakesImageComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "isLarge", _descriptor, this);
    }

    toggleSize() {
      this.isLarge = !this.isLarge;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLarge", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSize"), _class.prototype)), _class);
  _exports.default = CakesImageComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CakesImageComponent);
});
;define("forno/components/index-main", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="main-div">
      <div class="main-div-img">
          <img src="assets/images/chocolate-birthday-cake.jpg" alt="main-img" id="main-img">
      </div>
      <div class="main-div-text">
          <h2 id="welcome-msg"><span>Welcome</span><br>to FORNO</h2>
          <p id="tagline">Love At First Bite</p>
          <LinkTo @route="about"><button type="submit" class="read-more-btn">Read more</button></LinkTo>
      </div>
  </div>
  */
  {
    "id": "If6Q/nxf",
    "block": "[[[10,0],[14,0,\"main-div\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"main-div-img\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"assets/images/chocolate-birthday-cake.jpg\"],[14,\"alt\",\"main-img\"],[14,1,\"main-img\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"main-div-text\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,1,\"welcome-msg\"],[12],[10,1],[12],[1,\"Welcome\"],[13],[10,\"br\"],[12],[13],[1,\"to FORNO\"],[13],[1,\"\\n        \"],[10,2],[14,1,\"tagline\"],[12],[1,\"Love At First Bite\"],[13],[1,\"\\n        \"],[8,[39,0],null,[[\"@route\"],[\"about\"]],[[\"default\"],[[[[10,\"button\"],[14,0,\"read-more-btn\"],[14,4,\"submit\"],[12],[1,\"Read more\"],[13]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "forno/components/index-main.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("forno/components/map", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "forno/config/environment"], function (_exports, _component, _templateFactory, _component2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="map">
      <img
          alt="Map image at coordinates {{@lat}},{{@lng}}"
          ...attributes
          src={{this.src}}
          width={{@width}} height={{@height}}
      >
  </div>
  */
  {
    "id": "VHps+LBQ",
    "block": "[[[10,0],[14,0,\"map\"],[12],[1,\"\\n    \"],[11,\"img\"],[16,\"alt\",[29,[\"Map image at coordinates \",[30,1],\",\",[30,2]]]],[17,3],[16,\"src\",[30,0,[\"src\"]]],[16,\"width\",[30,4]],[16,\"height\",[30,5]],[12],[13],[1,\"\\n\"],[13]],[\"@lat\",\"@lng\",\"&attrs\",\"@width\",\"@height\"],false,[]]",
    "moduleName": "forno/components/map.hbs",
    "isStrictMode": false
  });

  const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

  class MapComponent extends _component2.default {
    get src() {
      let {
        lng,
        lat,
        width,
        height,
        zoom
      } = this.args;
      let coordinates = `${lng},${lat},${zoom}`;
      let dimensions = `${width}x${height}`;
      let accessToken = `access_token=${this.token}`;
      return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
    }

    get token() {
      return encodeURIComponent(_environment.default.MAPBOX_ACCESS_TOKEN);
    }

  }

  _exports.default = MapComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MapComponent);
});
;define("forno/components/navbar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav>
      <div class="logo">
          <img src="assets/images/Minimal Modern Bakery Shop Logo.png" alt="web-logo" class="web-logo">
      </div>
      <ul id="ul-2">
          <li>
              <LinkTo @route="index" class="home">Home</LinkTo>
          </li>
          <li>
              <LinkTo @route="about" class="about">About</LinkTo>
          </li>
          <li>
              <LinkTo @route="contact" class="contact">Contact</LinkTo>
          </li>
      </ul>
  </nav>
  */
  {
    "id": "xCoD+hL2",
    "block": "[[[10,\"nav\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"logo\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"assets/images/Minimal Modern Bakery Shop Logo.png\"],[14,\"alt\",\"web-logo\"],[14,0,\"web-logo\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"ul\"],[14,1,\"ul-2\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,0],[[24,0,\"home\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,0],[[24,0,\"about\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"About\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,0],[[24,0,\"contact\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "forno/components/navbar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("forno/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("forno/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("forno/helpers/app-version", ["exports", "@ember/component/helper", "forno/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("forno/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("forno/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("forno/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("forno/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("forno/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "forno/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("forno/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("forno/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("forno/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("forno/initializers/export-application-global", ["exports", "ember", "forno/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("forno/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("forno/router", ["exports", "@ember/routing/router", "forno/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('cakes', {
      path: '/cakes/:cake_id'
    });
  });
});
;define("forno/routes/cakes", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

  class RentalRoute extends _route.default {
    async model(params) {
      let response = await fetch(`/api/rentals/${params.cake_id}.json`);
      let {
        data
      } = await response.json();
      let {
        id,
        attributes
      } = data;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return {
        id,
        type,
        ...attributes
      };
    }

  }

  _exports.default = RentalRoute;
});
;define("forno/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

  class IndexRoute extends _route.default {
    async model() {
      let response = await fetch('/api/cakes.json');
      let {
        data
      } = await response.json();
      return data.map(model => {
        let {
          id,
          attributes
        } = model;
        let type;

        if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
          type = 'Community';
        } else {
          type = 'Standalone';
        }

        return {
          id,
          type,
          ...attributes
        };
      });
    }

  }

  _exports.default = IndexRoute;
});
;define("forno/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("forno/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("forno/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("forno/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("forno/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("forno/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("forno/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("forno/templates/about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "furbPbdR",
    "block": "[[[10,2],[12],[1,\"Riyas\"],[13]],[],false,[]]",
    "moduleName": "forno/templates/about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("forno/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "LnIov8Ox",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[8,[39,0],null,null,null],[1,\"\\n    \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n        \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"navbar\",\"component\",\"-outlet\"]]",
    "moduleName": "forno/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("forno/templates/cakes", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "rSyRN5La",
    "block": "[[[8,[39,0],null,[[\"@cakes\"],[[30,1]]],null]],[\"@model\"],false,[\"cakes/detailed\"]]",
    "moduleName": "forno/templates/cakes.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("forno/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "yNmB7LAN",
    "block": "[[[10,2],[12],[1,\"Contact\"],[13]],[],false,[]]",
    "moduleName": "forno/templates/contact.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("forno/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "49M1nFot",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[10,0],[14,0,\"cake-gallery\"],[12],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"            \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@cakes\"],[[30,2]]],null],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"@model\",\"rental\"],false,[\"index-main\",\"each\",\"-track-array\",\"cakes\"]]",
    "moduleName": "forno/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("forno/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("forno/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("forno/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("forno/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('forno/config/environment', [], function() {
  var prefix = 'forno';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("forno/app")["default"].create({"name":"forno","version":"0.0.0+cfcc057c"});
          }
        
//# sourceMappingURL=forno.map
