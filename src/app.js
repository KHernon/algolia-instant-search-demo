/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'NIA4DDPYYW',
  'ced8d7abd5fea868e08c2808c08355dc'
);

const search = instantsearch({
  indexName: 'test_ecommerce',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
    }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.refinementList({
    container: '#category-list',
    attribute: 'categories',
  }),
  instantsearch.widgets.refinementList({
    container: '#rating-list',
    attribute: 'rating',
    sortBy: ['name:desc'],
  }),
    instantsearch.widgets.refinementList({
    container: '#free-shipping-list',
    attribute: 'free_shipping',
    sortBy: ['name:desc'],

  }),

  instantsearch.widgets.configure({
    hitsPerPage: 20
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">\${{price}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
