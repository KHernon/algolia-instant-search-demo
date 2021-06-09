# Algolia InstantSearch e-commerce Demo
_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app)_

View at https://khernon.github.io/algolia-instant-search-demo/

# Notes
The goal of this project was to familiarize myself with the Algolia platform, and better understand search in general. While it was straightforward to set this up thanks to Algolia's documentation and InstantSearch libraries, it did reveal how complex search could be without a platform like this. Search data, once structured, is uploaded and available immediately. This initial data upload does not reveal the effort involved in setting up infrastructure to make the data available for search, however the docs do provide detail on the infrastructure for those interested. Where complexity does become clear is searching your data, which is immediately possible after uploading it. Does searching for a brand return results for that brand first, or is it picking up accessories for that brand because the name appears in the item description? What would a user want to see first? Questions I didn't consider until I was able to search the data and see the result order. In minutes I was not only able to surface these questions, but also take action to change the search result order. I can't imagine trying to develop a search solution from scratch. I have a much greater appreciation for the Algolia platform, and search in general, having gone through this exercise.

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
