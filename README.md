# A simple IP logger which sends info by Telegram
A simple JavaScript logging of IP information, fingerprint, and the user agent. 

This uses fingerprintjs2, geoiplookup.io API, and a bot in telegram to send information through it.

## Installation

```bash
    git clone https://github.com/xaferima/loggerTelegram.git
```

## Usage
Use it in your web page:

```javascript
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="fingerprintjs2/fingerprint2.js"></script>
  <script src="logger.js"></script>
  <script> sendIpsTelegram(TOKEN_TELEGRAM,CHAT_ID); </script>
```
Add your TOKEN_TELEGRAM and CHAT_ID

## Payload structure

Results of sendIpsTelegram():
```json
    {"IP":
      {
        "ip":"45.130.85.5",
        "isp":"PVDataNet AB",
        "org":"",
        "hostname":"45.130.85.5",
        "latitude":45.4642,
        "longitude":9.18998,
        "postal_code":"20121",
        "city":"Milan",
        "country_code":"IT",
        "country_name":"Italy",
        "continent_code":"EU",
        "continent_name":"Europe",
        "region":"Lombardy",
        "district":"Milan",
        "timezone_name":"Europe/Rome",
        "connection_type":"Corporate",
        "asn_number":42201,
        "asn_org":"PVDataNet AB",
        "asn":"AS42201 - PVDataNet AB", 
        "currency_code":"EUR",
        "currency_name":"Euro",
        "success":true,"premium":false
      },
    "fingerprintHash":"97fb863976535554d32d14145a085bd2",
    "userAgent":"Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.70 Mobile Safari/537.36"
    }
```

