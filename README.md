# genderapi.io
genderapi.io - Gender finder API

About
------------

Homepage: <https://genderapi.io>

API Docs: <https://genderapi.io/api-docs>

Contact: <https://genderapi.io/contact>

Installation
------------

```
project$ composer require genderapi.io
```

API Key
-----------
Get a API key here: <https://genderapi.io/account>

Simple Usage
---------

```php
use GenderAPI\GenderAPI;
$genderAPI = new GenderAPI('Your API Key');
$data = $genderAPI->find('mahmut');
if ($data->gender) {
    echo $data->gender; // will return "male"
}
```
