# ms-teams-url-decoder
Decode and get valid URL of Microsoft team meeting in google calender

### Usage: 

##### With `node`
```cmd
node main.js "https://www.google.com/url?q=https://teams.microsoft.com/l/meetup-join/19%253ameeting_xxx%2540thread.v2/0?context%3Dxxxx&sa=X&source=calendar&ust=000&usg=xxx"
```

##### With `yarn`
```cmd
yarn decode "https://www.google.com/url?q=https://teams.microsoft.com/l/meetup-join/19%253ameeting_xxx%2540thread.v2/0?context%3Dxxxx&sa=X&source=calendar&ust=000&usg=xxx"
```

##### With `npm`
```cmd
npm run decode "https://www.google.com/url?q=https://teams.microsoft.com/l/meetup-join/19%253ameeting_xxx%2540thread.v2/0?context%3Dxxxx&sa=X&source=calendar&ust=000&usg=xxx"
```

### Output:
```
https://teams.microsoft.com/l/meetup-join/19%3ameeting_xxx%40thread.v2/0?context=xxxx

```
