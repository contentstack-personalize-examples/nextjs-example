# Personalize example - Next.js

NextJS web app to demo Personalize, intended to be hosted on Vercel.

## Setting up the stack

This project comes with an export of the CMS stack so that you can easily get started with it. Extract the archive `personalize-example-stack.zip` in the root folder of this repository, and then import it to your stack using the command line like so:

```bash
csdx cm:stacks:import -a token-alias -d "/path/to/export"
```

Checkout the [Contentstack CLI documentation](https://www.contentstack.com/docs/developers/cli/import-content-using-the-cli) for more details.

## Getting Started

First, add the environment variables by creating a `.env` file. You can copy the `.env.example` file to get a list of the expected environment variables.

If you're not working with the AWS NA production environment, you can set the following environment variables:

`CONTENTSTACK_DELIVERY_API_HOST`: Just the host of the target CMS delivery environment. For example, `eu-cdn.contentstack.com`
`CONTENTSTACK_PERSONALIZE_EDGE_API_URL`: The URL of the target personalize delivery environment. For example, `https://eu-personalize-edge.contentstack.com`.

The `NEXT_PUBLIC_CONTENTSTACK_HOMEPAGE_EXPERIENCES` environment variable is used to populate a list of Experience Short UIDs running on the home page for e.g. `a,b`. Impressions for these experiences are sent when visiting the home page.

For setting up NextAuth:

`NEXTAUTH_URL`={deployed domain} (should be http://localhost:3000 in case you're developing locally)
`NEXTAUTH_SECRET`={secret string} (use `openssl rand -base64 12` command to generate a random secret string)

For setting up GitHub auth:

Navigate to GitHub -> Profile Icon -> Settings -> Developer Settings. Here, create an OAuth app with the following details:
- Homepage URL: Same as `NEXTAUTH_URL`
- Authorization callback URL: Same as `NEXTAUTH_URL` + `/api/auth/callback/github`

After creating, you'll need to generate a new client secret. Once done, populate the following environment variables:

`GITHUB_ID`={Client ID}
`GITHUB_SECRET`={Client Secret}

Then, run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Personalize the content

Once the above is setup, personalizing the content is as easy as creating creating new experiences in your Personalize project. Create experiences, customize content for those experiences and watch it work out of the box without requiring any code changes.