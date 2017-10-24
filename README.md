# react-native-openanything

Open anything in your react-native app. 

Supports call, email, text (sms), iMessage (iOS only), Map, PDF, etc.

## Installation

**React Native >= 0.49**

```bash
npm install react-native-openanything
```

---

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


## Example

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

