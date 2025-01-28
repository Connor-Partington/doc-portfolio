---
title: Tutorial
description: An example of a tutorial for a software product.
---

While working at [Wazoku](https://support.wazoku.com/), I wrote this tutorial to help users integrate Microsoft Teams with the Wazoku Platform. The Wazoku Platform is a Software-as-a-Service (SaaS) Idea Management platform that provides organizations with a structured method to capture, evaluate, prioritize, select, and implement ideas to address business problems.

**Tools used: Markdown, HubSpot, Jira**

# Connect Microsoft Teams to your platform

Seamlessly interact with the Discover page, Challenges, Idea Spaces, and Conversations directly in Microsoft Teams.

> **Who can do this?** Platform site [Admins](https://support.wazoku.com/types-of-user-roles#admin).

> **Note**: Your Innovation Consultant must enable the Microsoft Teams integration feature flag and you need to be a platform admin to configure it.

## Why connect Microsoft Teams?

* The Microsoft 365 Single Sign On (SSO) brings users into the platform without them having to sign in to a separate system.
* Challenge Managers and Admins can promote engagement by pinning Challenges and Communities to team channels.
* Users can add new ideas and suggestions, as well as comment, vote, or develop existing content.
* Users can access the Wazoku platform from a Personal app to interact with the main Discover page all within Microsoft Teams.

> **Tip**: If you would like a detailed description of the design and architecture of the Microsoft Teams integration for the Wazoku Platform, please see our [System Design Document](https://info.wazoku.com/hubfs/System%20Design%20Document%20for%20Microsoft%20Teams%20integration%20on%20the%20Wazoku%20Platform.pdf?).

## Connect Microsoft Teams to your platform 

You'll need to connect the Wazoku platform to your Microsoft Teams account using your Microsoft [Tenant ID](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id), so Microsoft Teams and the Wazoku platform can communicate with each other.

1. Open **Microsoft Teams**.
2. Go to a Team channel and click the **Three dots** to the right of the team name.
3. Select **Get link to channel**.
4. Copy the [Tenant ID](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id) displayed within the link after tenantId=. 
5. Open your Wazoku platform site in a browser.
6. Go to **Settings** > **Admin Panel** > **Integrations** > **Microsoft Teams**.
7. Click **Add a new Teams tenant ID**.
8. Paste the Tenant ID you copied, and then click **Save**.

> **Note**: You can add multiple Microsoft Teams tenants to a single platform, however, only one platform can be displayed at a time on Microsoft Teams. If a [Tenant ID](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id) is already connected to another platform, you’ll receive an error message when trying to add it. 

## Add the Wazoku app to Microsoft Teams

Once connected you can add the Wazoku app to Microsoft Teams.

1. Open **Microsoft Teams**. 
2. In the left-hand menu, open **Apps**. 
3. Search for the "Wazoku" app.
4. Select the app and then click **Add**. 

If you open the app, you should now see the Discover page, Idea Spaces, Challenges, and Ideas.

> **Note**: Co-creation Communities are not available in the main app but can be displayed when you [add the Wazoku app to a team channel](https://support.wazoku.com/microsoft-teams-integration#Add-the-Wazoku-app-to-a-channel).

> **Tip**: You can [pin and auto-install the app](https://learn.microsoft.com/en-us/microsoftteams/teams-app-setup-policies) to increase the visibility for your users and [customize the app](https://learn.microsoft.com/en-us/microsoftteams/customize-apps) to match your branding. If you use a [custom app icon](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/apps-package), it should be 192x192 and the outline icon should be 32x32.

## Add the Wazoku app to a team channel

You can also add the Wazoku app to a team channel and display specific platform content.

1. Open **Microsoft Teams** and a team channel. 
2. Next to the channel tabs, click the '**+**' icon. 
3. Search for the “Wazoku” app, and then click it to add it as a tab. 
4. Select the content you want to display:
    * Challenge 
    * Idea 
    * Idea Space or Co-creation Community 
5. Then click **Save**. 

Once saved you should now see a new tab on the team channel.

> **Note**: The Microsoft Teams integration uses the Office 365 Single Sign-On (SSO) to automatically sign in users who access the platform tab via Teams. However, if a user is signed in to Teams with a different email address than the email associated with their Wazoku platform account, a new account will be created.  

## Receive notifications from the Wazoku Platform on Microsoft Teams

If you want to get notified about activities on the Wazoku platform and comment or vote on Ideas, you can sign in to our Microsoft Teams bot.

1. Open **Microsoft Teams** and the "Wazoku" app.
2. Select the **Chat** tab.
3. On the welcome message, select **Sign In**.
4. Next to **We need to ask for additional permissions**, select **Continue**.
5. Read and accept the permissions request.

Once you’re signed in, you can receive notifications from the Wazoku platform.

> **Note**: If you cancel the permissions request prompt, you need to wait around 15 minutes and then restart Microsoft Teams to receive the prompt again. You can also clear your browser cache before you try to sign in again.

> **Tip**: You can type “Help” into the chat to display the built-in help menu for the MS Teams bot, and for the best experience, we recommend using the Microsoft Teams bot on the desktop or browser version of Microsoft Teams.

> **Note**: If you experience other issues when trying to sign in, try to sign in via a web browser, and if you continue to run into trouble, please contact our support team at [support@wazoku.com](mailto:support@wazoku.com)

### Configure your notification for the Microsoft Teams bot
You’ll want to go ahead and configure which notifications you want to receive on the Microsoft Teams bot.

1. Select the **Chat** tab.
2. Type “Notification settings“ into the chat.
3. Select **Notifications Settings** from the help menu.
4. Configure your notification preferences.
5. Click **Save**.

### Comment on an Idea from the Microsoft Teams bot

1. Select the **Chat** tab.
2. Find a notification with the “Comment” option.
3. Click **Comment** and type your comment.
4. Click **Submit**.

> **Tip**: You can also reply to a comment by clicking Reply instead of Comment.

### Vote on an Idea from the Microsoft Teams bot

1. Select the **Chat** tab.
2. Find a notification with the “Vote on Idea” option.
3. Click **Vote on Idea** and select your vote.
4. Click **Submit**.

## See also

* [Configure social logins](https://support.wazoku.com/configure-social-logins)
* [Configure storage solutions](https://support.wazoku.com/configure-storage-solutions)
* [Connect Jira to your platform](https://support.wazoku.com/connect-jira-to-your-platform)