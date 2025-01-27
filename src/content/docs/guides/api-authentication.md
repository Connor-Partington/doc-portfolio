---
title: API Authentication Guide
description: An example guide on how to authenticate with an API.
---

While working at [Wazoku](https://support.wazoku.com), I wrote this guide to help developers and partners understand how to authenticate with the Wazoku Platform API. The Wazoku Platform is a Software-as-a-Service (SaaS) Idea Management platform that provides organizations with a structured method to capture, evaluate, prioritize, select, and implement ideas to address business problems.

**Tools used: Markdown**

# Authentication 

Before you can make requests to the [Wazoku API](https://public-api.wazoku.com/v4 "Go to Wazoku Public API"), you'll need to authenticate with the API.

You can authenticate with our API by obtaining either an API token or OAuth2 access token.

> **Note**: Your access token carries many privileges, so be sure to keep it secure! Do not share your access token in a publicly accessible area such as GitHub, client-side code, and so forth. It's only intended for secure server-to-server communication.

**Table of contents**
* [Generate a public API token](#generating-a-public-api-token)
* [Get OAuth 2.0 access token](#get-oauth-2.0-access-token)
* [OAuth 2.0 via authorization/login endpoint](#oauth-2.0-via-authorization/login-endpoint)
* [Service accounts](#service-accounts)
* [Endpoint ordering and filtering](#endpoint-ordering-and-filtering)

## <a id="generating-a-public-api-token"></a>Generate a public API token

If you're a site admin, you can generate one or more API tokens for yourself or another user. The token gives you unlimited access to the API endpoints on behalf of the user that's visiting the site.

1. Log in to your platform site as a site Admin.

2. Select **Settings** > **Admin Panel** > **Integrations** > **Public API Tokens**.

3. Enter a user's email address and a memorable name for the API token.

4. Click **Generate**.

You will receive an email with a link to your API token.

> **Note**: It’s recommended that you copy the API token, as once you've viewed your API token, you won’t be able to see it again on the access page.

Here's an example request you can make using curl:

    curl 'https://public-api.wazoku.com/api/v4/challenges' -H 'Authorization: Token <token_value>'

## <a id="get-oauth-2.0-access-token"></a>Get OAuth 2.0 access token

### 1. <a id="register-a-new-application"></a>Register a new application

Before you can get your access token, you'll need to register your app.

The registration endpoint is `https://<platform_site_domain>/oauth2/applications/register/`

1. Log in to your platform site as a site Admin.

2. Register your application at `https://<platform_site_domain>/oauth2/applications/register/`

3. Specify the below parameters on the application form:

    * Name: App name
    * Client type: Confidential
    * Authorization grant type: Authorization code
    * Redirect URI: Where to redirect and send your temporary authorization code afterward.

4. Click **Save**.

> **Note**: The `client_id` and `client_secret` are automatically generated, and the registered app will be linked to the platform site domain used to create the app.

> **Tip**: The `redirect_uri` you specify should have a way to display the code passed down with the URL, so it's parsed correctly, and it becomes easier for you to quickly use it in your operations.

### 2. Generate temporary authorization code

The authorization endpoint is `https://<platform_site_domain>/oauth2/authorize/`

1. Submit a GET request to the authorization endpoint `https://<platform_site_domain>/oauth2/authorize/?client_id=<client_id>&response_type=code&redirect_uri=<redirect_uri>`

2. When prompted in the browser, click **Authorize**.

The OAuth 2.0 dialog will redirect the user's browser via HTTP 302 to the redirect_uri with an authorization code appended: http://[:redirect_uri]?code=[:code].

### 3. Exchange code for an access token

The token endpoint is `https://<platform_site_domain>/oauth2/token/`

1. Submit a POST request to the token endpoint `https://<platform_site_domain>/oauth2/token/`

2. Specify the below parameters in the request body:

    * client_id: `<client_id>`
    * client_secret: `<client_secret>`
    * redirect_uri: `<oauth_client_redirect_uri>`
    * grant_type: authorization_code
    * code: `<code>`

An access token will be returned, which can be used to make further requests to the [Wazoku API](https://public-api.wazoku.com/v4 "Go to Wazoku Public API").

### 4. Test your access token

Once you have your access token, you can test it by sending a test request to:

    curl 'https://public-api.wazoku.com/api/v4/challenges?access_token=<access_token>'

## <a id="oauth-2.0-via-authorization/login-endpoint"></a>OAuth 2.0 via authorization/login endpoint

You can also get an access token by logging in to your platform site using the login endpoint `https://<platform_site_domain>/api/v4/authorization/login`

1. [Register your application](#register-a-new-application).

2. Submit a POST request to the login endpoint `https://<platform_site_domain>/api/v4/authorization/login/`

3. Specify the below parameters:

    * domain: `<platform_site_domain>`
    * oauth2_app_id: `<client_id>`
    * password: `<your_password>`
    * username: `<your_username>`

An access token will be returned as part of the response.

## <a id="service-accounts"></a>Service accounts

Service accounts are a special Wazoku user account that can access the public API and have permission to read/write content on behalf of other users.

If you would like a user account created, please contact our support team at [support@wazoku.com](mailto:support@wazoku.com).

Once you have a service account, you can make requests on behalf of another user in a couple of ways:

### HTTP header

To indicate which user your request should be made on behalf of, you can add the following header and identifiers to your request:

* `SA-USER-ID: email:other_user@wazoku.com`
* `SA-USER-ID: external-id:1A2B3C4D`

Here's an example request using curl:

    curl 'https://public-api.wazoku.com/api/v4/challenges' -H 'SA-USER-ID: email:other_user@wazoku.com'

### Query parameter

For GET requests, you can add a query string parameter and the same identifiers to indicate which account to use:

    curl 'https://public-api.wazoku.com/api/v4/challenges?SA-USER-ID=email:other_user@wazoku.com'

## <a id="endpoint-ordering-and-filtering"></a>Endpoint ordering and filtering

Most of our listing endpoints allow you to order and filter the results.

For ordering, use `order` parameter. It usually accepts at least `created` and `modified`. To reverse the order, just put `-` before it (e.g. `-created`).

For filtering, lots of options are available. For example, to filter ideas by number of comments, use `num_comments` parameter. Its format: `[min_value]..[max_value]`, either minimal or maximal value can be omitted.


