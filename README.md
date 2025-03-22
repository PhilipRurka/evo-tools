# Evo Tools
**Evo Tools** is a lightweight integration that syncs Evo schedules with your Google Calendar.

Keep in mind. This is a MVP version. MVP meaning Minimum Viable Product, meaning simplest version of a product.

## Upcoming features and releases

- **Prevent Duplicate Events**  
  Avoid re-adding the same shift to Google Calendar.

- **Persistent Event IDs**  
  Store event IDs in a database to enable deletion and tracking of previously added shifts.

- **Group ID Shortcuts**  
  Allow users to save and label frequently used Group IDs for quick access via dropdown.  
  Optionally: auto-populate available Group IDs based on user data.

- **Better Policy Compliance & Transparency**  
  Ensure clear communication and alignment with Google integration policies and permissions.

- **Coworker Awareness**  
  Add coworkers assigned to the same sub-location to the event description for easy coordination.

- **Event Customization**  
  Let users choose event colors, tweak timing, and use a date picker for scheduling.

- **Improved Error Handling**  
  Provide clear and actionable error messages when issues arise.

- **Weekly Hour Overview**  
  Display total hours scheduled across a given week for easier planning.
  
- **Helpful Copy & Docs**  
  Include tooltips, instructions, and transparent messaging inside the app and here in the README.

- **Multi-Job Support**  
  Enable all features to work across multiple jobs or positions.


## How to get started
### Step 1
**Custom Script Injector**  
Installed [Custom Script Injector](https://chromewebstore.google.com/detail/eibkcfjfggmbejlllbfbjefcfaimpkcn?utm_source=item-share-cb) as a Chrome Extension.  
I am the author of this Chrome Extension, it is safe to use. And yes, I know, it is very ugly haha. This a MVP version.  
What this extension does it it allows the user to inject scripts into the console of web applications. In easy terms, this allows you to modify websites. This modification only applies to your local version of the website, which means no hacking is involved.

Once indtalled, open it up and input inside the Url Pattern: `https://console.evolia.com`.  
Then input the following in the Script section:
```js
Object.entries(localStorage).forEach(([key, value]) => {
  if (key === 'VOILA.ACTIVE_GROUP_ID') {
    console.log(
      `%cGroup Id: %c${value.replaceAll('"', '')}`,
      'font-weight: bold; font-size: 20px',
      'color: #bada55; font-size: 20px',
    );
  } else if (key === 'VOILA.AUTH_TOKENS') {
    const formatedValue = value.replaceAll('{"accessToken":"', '').split('","refreshToken":"')[0];

    console.log(
      `%cAccess Token: %c${formatedValue}`,
      'font-weight: bold; font-size: 20px',
      'color: #bada55; font-size: 20px',
    );
  }
});

```

Don't forget to `Save Script`.

What this does is grabs important values and displays them in the console for you to then grab and use in the evo-tools web application.

### Step 2
1. Log into Evo (if not already)
2. Refresh the page.  
3. Right click on the page and click on `Inspect`  
4. Navigate to the console tab
5. Copy both the Group Id and Access Token, both in green.
6. Paste these values in the Evo-tools application.
7. Trigger the `Create events` button

## Important Notes
### Caution Sharing your Access Token
The Access Token is not something you want to tipically copy past anywhere. This gives who ever who has it access to make api calls on your behalf. As an extra layer of security, these Access Token contain an expiration date on them. This is why we want to refresh our Evo page before copy pasting it, as a newer Access Token may be available.

Considering this is a safe web application and no abuse will take place, you can past in your Access Token with ease of mind.

**Do Not Share This Access Token With Anyone Else!**

### Careful with that loaded `Create event` button
Careful not to trigger the `Create event` button multiple times. It will recreate the same event and, well, it means you may need/want to manually delete the duplicate ones. A safeguard is in the works.

### Solves for only the happy path
Currently, this only works for those who only have a single job. Enabling for multiple jobs is a Work in progress.