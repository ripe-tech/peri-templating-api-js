<h1><a href="https://tech.platforme.com"><img src="res/logo.svg" alt="PERI Templating API JS" height="60" style="height: 60px;"></a></h1>

The Javascript API client for PERI Templating.

## Initialization

```javascript
import { API as PeriTemplatingAPI } from "peri-templating-api";

const api = new PeriTemplatingAPI();
```

The initialization can be done by providing an `options` object such as:

```javascript
{
    baseUrl: "https://peri-templating.platforme.com/api/v1",
    token: "sd1029bfwef9adas+0feqefi"
}
```

## Configuration

| Name                         | Type  | Mandatory | Default                  | Description                                                      |
| ---------------------------- | ----- | --------- | ------------------------ | ---------------------------------------------------------------- |
| **PERI_TEMPLATING_BASE_URL** | `str` | false     | `http://localhost:3000/` | URL of the templating service.                                   |
| **PERI_TEMPLATING_TOKEN**    | `str` | false     | `null`                   | Authentication token to communicate with the templating service. |
 