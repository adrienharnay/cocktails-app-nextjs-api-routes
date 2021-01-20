# Cocktails app: Next.js API routes

This app is an example of how you can use Next.js API Routes as a back-end to your Next.js application.

Note: It is meant to be a reference project for my tests with other back-end solutions. Implementation is naive and shouldn't be replicated in real apps.

## Introduction

I want to try and list the differences between major back-end solutions and how well they integrate with Next.js, to help fellow front-end developers choose the solution that best fits their next project. To do so, I will build a Cocktails app with different back-end solutions, and compare them all at the end.

For the test to be relevant, the app should support the following features:

- Authentication features (content will be protected behind authentication)
- List of cocktails (list querying)
- Search for cocktails by ingredient (querying with search)
- See a cocktail details (item querying)
- Like cocktails (simple write)
- Get a cocktail at random (custom logic)

The tools I am interested in testing should support all these use cases, and also:

- a GraphQL interface (ideally)
- and/or type generation from the database model

Let's get to it!

## Prior configuration

Let's assume we have a Next.js project and all of the front-end bits are finished, as we are only interested in integrating the back-end. For this project, this step is [this commit](https://github.com/adrienharnay/cocktails-app-nextjs-api-routes/commit/5e66f5a4787d61f84fed6d54552539f8e157ce58).

We will also assume prior knowledge of Express APIs, particularly how to handle requests.

We will use [Next.js API routes](https://nextjs.org/docs/api-routes/introduction), which are a built-in feature of Next.js projects, so we don't have anything more to configure.

## Integration

Documentation: [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)

This API will be REST as it is only a reference for our future tests.

Steps:

- Create a `/pages/api` folder
- For each request, create a `[requestName].ts` file in the `pages/api` folder
- Implement logic as you would in a regular Express app (examples [here]())
- Call the routes you have created in your React code, pointing to `/api/[requestName]` (example [here]())

That's it, you have your back-end!
