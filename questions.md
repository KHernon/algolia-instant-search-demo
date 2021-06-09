Question 1:
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George

Answer 1:

Hi George,

I'd be happy to provide this information! 

A record (or object) is a set of key-value pairs called attributes. The data in a record represents one result in the search results displayed. 

An index is a collection of records. You would configure search and relevance settings for a given index, such as searchable fields and sort order of the records.

Depending on how you display search results, you may have only one index, or more than one. This will depend on the data and search offered (for example movie records may be searched entirely separate than actor records, so you may have a different index for movie records and actor records so you can configure the searchable fields and sort order separately). More information on making that decision can be found here:

https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/prepare-data-in-depth/

Custom Ranking is how you can incorporate business relevance into the the search result order. Algolia uses a default ranking criteria to ensure users find what they're looking for. Custom ranking helps you increase visibility for some of your most essential products. You can use business metrics such as popularity or rating so your best products appear higher in search results. Another example metric is availability, so in stock items would appear first. More information on Custom Ranking can be found here:

https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/

Please let me know if you have any additional questions.

Thanks,
Kurt






Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt

Answer 2:

Hi Matt,

I really appreciate you taking the time to provide this feedback. This is exactly the type of feedback that will help us deliver a better experience for you. I'm sorry to hear that recent changes have made interacting with the dashboard more time consuming, rather than making it easier to accomplish the tasks you do most frequently. I'll pass this feedback on to our product team and try to get more information on the process that went into these design changes. If you have some availability this week, I'd also like to schedule some time with you to get a better understanding of how you're using the dashboard and iterating, as well as confirm I have the correct understanding of the challenges introduced by the new dashboard design.

Thanks,
Kurt

Question 3:
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

Answer 3:

Hi Leo,

The high level process can be broken into four steps:

Indexing data
Configuring relevance
Building the search user interface
Iterating using Algolia Analytics

In terms of development work, the Algolia platform takes on the work that isn't core to your website. The development work for you would include structuring your data so it can be uploaded to our platform, and focusing on your user interface. We have numerous API clients, front-end libraries, integrations for frameworks and extensions for platforms like Shopify to assist with this. Details can be found here:

https://www.algolia.com/doc/guides/getting-started/how-algolia-works/#the-full-ecosystem

When it comes to configuring relevance, this can be easily accomplished via the UI, where you can also search your data and review search results based on any changes you've made immediately, all in one place. I've included a link to an overview of these steps, and would be happy to setup some time to discuss what the implementation might look like for your website specifically.

https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/

Thanks,
Kurt

