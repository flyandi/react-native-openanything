# react-native-openanything

Open anything in your react-native app. 

Supports call, email, text (sms), iMessage (iOS only), Map, PDF, etc.

## Installation

**React Native >= 0.49**

```bash
npm install react-native-openanything
```

## General Guide

This library is promise based and each method returns a promise. 

```js
    import {Call} from 'react-native-openanything';

    Call('+155555555555').catch(err => console.error(err));
```


## Available Methods

Call a number from your app!

```js
Call(phone, prompt = false)
```
| Prop | Description | Default |
|---|---|---|
|**`phone`**|A string that represents the phone number to call.|Required|
|**`prompt`**|If set to true, it will ask the user for permission to call. `Only iOS`|`false`|


---

Send an email from your app!

```js
Email(to = false, subject = false, body = false, cc = false, bcc = false)
```
| Parameter | Description | Default |
|---|---|---|
|**`to`**|A value that indicates the recipient e-mail. Can either be `string` for single recipient or an `array` for multiple recipients.| `false` `optional`|
|**`subject`**|A string for the subject for the e-mail.|`false` `optional`|
|**`body`**|A string for the body message for the e-mail.|`false` `optional`|
|**`cc`**|Same as `to` however the recipient(s) will be designated for the `cc` field.|`false` `optional`|
|**`bcc`**|Same as `to` however the recipient(s) will be designated for the `bcc` field.|`false` `optional`|

Note: The default email application will be open even if no parameter is set.

---

Send an text (sms) from your app!

```js
Text(phone, message = false, autoEncode = true)
```
| Parameter | Description | Default |
|---|---|---|
|**`phone`**|A string that represents the phone number to call.| Required|
|**`message`**|A string for the message.|`false` `optional`|
|**`autoEncode`**|If set to true, the method will auto encode the message.|`true` `optional`|

By default this method tries to properly encode the message however in same cases that might not work. If you have trouble just set the `autoEncode` parameter to `false`.

Note: If `message` is not a string, this method will open the default text client regardless.

---

Open any URL from your app!

```js
Web(url)
```
| Parameter | Description | Default |
|---|---|---|
|**`url`**|A string that represents the url.| Required |

---

Displays a map from your app!

```js
Map(address)
```
| Parameter | Description | Default |
|---|---|---|
|**`address`**|A string that represents the address.| Required|

**Note**: You can either provide an `string` or an `array` with `latitude` and `longitude` to this method.

---

Opens a YouTube Video

```js
Youtube(video)
```
| Parameter | Description | Default |
|---|---|---|
|**`video`**|A string that contains the Youtube video id.| Required|

---

Opens Twitter

```js
Twitter(user)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Twitter User Id that should be open.| Required|

---

Opens Facebook

```js
Facebook(user)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Facebook User Id that should be open.| Required|

---

Opens Instagram User, Media, Camera, App, Location and Tag

```js
Instagram(user)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Instagram User Id that should be open.| Required|

```js
InstagramMedia(media)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Instagram Media Id that should be open.| Required|

```js
InstagramLocation(location)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Instagram Location Id that should be open.| Required|

```js
InstagramTag(tag)
```
| Parameter | Description | Default |
|---|---|---|
|**`user`**|A string that contains the Instagram Tag Id that should be open.| Required|

```js
InstagramApp()
```
Opens the Instagram App.

```js
InstagramCamera()
```
Opens the Instagram Camera.

---

`Only iOS`
Launch Facetime

```js
Facetime(target, audioOnly = false)
```
| Parameter | Description | Default |
|---|---|---|
|**`target`**|A string that representing a phone number or a username.| Required|
|**`audioOnly`**|A boolean value indicating if facetime is an audio call|`false` `optional`|

## Low level methods

**Note**: You should only use these methods if you know what you doing.

---

Supported - checks if a deep linking URL is supported on the current device.

```js
Supported(url)
```
| Parameter | Description | Default |
|---|---|---|
|**`url`**|The url to check.| Required|

---

Open - opens an deep linking URL.

```js
Open(url)
```
| Parameter | Description | Default |
|---|---|---|
|**`url`**|The url to open.| Required|

---

Launch - Combines `Supported` and `Open`

```js
Launch(url)
```
| Parameter | Description | Default |
|---|---|---|
|**`url`**|The url to verify and open.| Required|

---

## Issues and how to resolve them

### App is not allowed to query scheme

On iOS you might run into this issue. The reaon is that you have to explicit add the requesting query schemes into the pinfo.list variable `LSApplicationQueriesSchemes`.

e.g. for Facebook you would add `fb`. Please refer to the example list below for the correct query scheme string:

| Target | Query Scheme |
|---|---|
|**Facebook**|`fb`|
|**Instagram**|`instagram`|
|**Twitter**|`twitter`|
|**LinkedIn**|`linkedin`|
|**WhatsApp**|`whatsapp`|


## Examples

You can either import specific modules:

```js
import { Call, Text, Web, Map, EMail } from 'react-native-openanything';

...

render() {

	<View>
    	<Button onPress={() => Call('+12105551234')}>
        	<Text>Call</Text>
        </Button>
        <Button onPress={() => Text('+12105551234', 'Can you please call me!')}>
        	<Text>Text</Text>
        </Button>
    </View>
}


```

or import all modules as wildcard:

```js
import * as OpenAnything from 'react-native-openanything';

...

render() {

	<View>
    	<Button onPress={() => OpenAnything.Call('+12105551234')}>
        	<Text>Call</Text>
        </Button>
        <Button onPress={() => OpenAnything.Call('+12105551234', 'Can you please call me!')}>
        	<Text>Text</Text>
        </Button>
        <Button onPress={() => OpenAnything.Email('someone@google.com')}>
        	<Text>E-Mail</Text>
        </Button>
        <Button onPress={() => OpenAnything.Web('http://www.google.com')}>
        	<Text>Google Homepage</Text>
        </Button>
        <Button onPress={() => OpenAnything.Map('Google')}>
        	<Text>Google HQ</Text>
        </Button>
    </View>
}
```

