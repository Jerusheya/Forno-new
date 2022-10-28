'use strict';

define("forno/tests/acceptance/forno-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | forno', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('nav').exists();
      assert.dom('h2').hasText('Welcometo FORNO');
      assert.dom('.main-div-text button.read-more-btn').hasText('Read more');
      await (0, _testHelpers.click)('.main-div-text button.read-more-btn');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('visiting /about', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      assert.dom('p').hasText('Riyas');
    });
    (0, _qunit.test)('navigating using the nav-bar', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('nav').exists();
      assert.dom('.logo .web-logo').exists();
      assert.dom('#ul-2 a.home').hasText('Home');
      assert.dom('#ul-2 a.about').hasText('About');
      assert.dom('#ul-2 a.contact').hasText('Contact');
      await (0, _testHelpers.click)('nav #ul-2 a.about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      await (0, _testHelpers.click)('nav #ul-2 a.contact');
      assert.equal((0, _testHelpers.currentURL)(), '/contact');
      await (0, _testHelpers.click)('nav #ul-2 a.home');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("forno/tests/integration/components/cakes-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | cakes', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders information about a rental property', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Cakes />
      */
      {
        "id": "bljVuMRW",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"cakes\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('article').hasClass('cakes');
      assert.dom('article h3').hasText('Birthday Cake');
      assert.dom('.bakery').hasText('Bakery : Forno');
      assert.dom('.bakery-location').hasText('Chennai');
      assert.dom('.cake-price').hasText('Rs.2000');
    });
  });
});
define("forno/tests/integration/components/cakes/detailed-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | cakes/detailed', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Cakes::Detailed />
      */
      {
        "id": "YInlFlxY",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"cakes/detailed\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Cakes::Detailed>
              template block text
            </Cakes::Detailed>
          
      */
      {
        "id": "+gcKrFnQ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"cakes/detailed\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("forno/tests/integration/components/cakes/image-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | cakes/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given image', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Cakes :: Image
              src="assets/images/chocolate-birthday-cake.jpg"
              alt="main-img"
            />
          
      */
      {
        "id": "txYwHhuI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"::\",\"\"],[24,\"Image\",\"\"],[24,\"src\",\"assets/images/chocolate-birthday-cake.jpg\"],[24,\"alt\",\"main-img\"]],null,null],[1,\"\\n    \"]],[],false,[\"cakes\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.image img').exists().hasAttribute('src', 'https://www.fnp.com/images/pr/l/v20200707214916/chocolate-caramel-fudge-cake_1.jpg').hasAttribute('alt', 'image of birthday cake');
    });
    (0, _qunit.test)('clicking on the component toggles its size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
          <Cakes :: Image
            src="assets/images/chocolate-birthday-cake.jpg"
            alt="main-img"
          />
        
      */
      {
        "id": "iZ8nZUHb",
        "block": "[[[1,\"\\n    \"],[8,[39,0],[[24,\"::\",\"\"],[24,\"Image\",\"\"],[24,\"src\",\"assets/images/chocolate-birthday-cake.jpg\"],[24,\"alt\",\"main-img\"]],null,null],[1,\"\\n  \"]],[],false,[\"cakes\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('button.image').exists();
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').hasClass('large');
      assert.dom('.image small').hasText('View Smaller');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
    });
  });
});
define("forno/tests/integration/components/index-main-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | index-main', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('test index main component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <IndexMain></IndexMain>
      */
      {
        "id": "PrH1HnWk",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[],[]]]]]],[],false,[\"index-main\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.main-div').exists();
      assert.dom('.main-div-img').exists();
      assert.dom('#main-img').exists();
      assert.dom('.main-div-text').exists();
      assert.dom('h2').hasText('Welcometo FORNO');
      assert.dom('p').hasText('Love At First Bite');
      assert.dom('.read-more-btn').exists();
    });
  });
});
define("forno/tests/integration/components/map-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | map', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map />
      */
      {
        "id": "FZvfDrOZ",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"map\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Map>
              template block text
            </Map>
          
      */
      {
        "id": "pG9iAcg5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"map\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("forno/tests/integration/components/navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
  });
});
define("forno/tests/test-helper", ["forno/app", "forno/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('forno/config/environment', [], function() {
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

require('forno/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
