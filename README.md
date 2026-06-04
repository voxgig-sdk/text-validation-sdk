# TextValidation SDK

Check whether a text query parameter is present, using a tiny endpoint from the Abhi-API collection

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Text Validation API

Text Validation API is a single endpoint from the broader [Abhi-API](https://abhi-api.vercel.app) collection of free public APIs maintained by Abhishek Suresh. The Abhi-API project bundles many small utility endpoints (translation, text-to-speech, image generators, etc.) under one Vercel-hosted host, and this SDK exposes only the text-validation slice.

What you get from the API:

- A single GET endpoint that accepts a `text` query parameter and returns an error message when the parameter is missing or empty.
- Useful as a minimal example of input-validation behaviour, or as a smoke-test target.

Operational notes:

- Server: `https://abhi-api.vercel.app`.
- No authentication is documented.
- CORS is reported as disabled on the freepublicapis.com catalogue listing, so browser-side calls from other origins may be blocked.
- No rate limits are published; the catalogue lists the endpoint as healthy and frequently checked.

## Try it

**TypeScript**
```bash
npm install text-validation
```

**Python**
```bash
pip install text-validation-sdk
```

**PHP**
```bash
composer require voxgig/text-validation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/text-validation-sdk/go
```

**Ruby**
```bash
gem install text-validation-sdk
```

**Lua**
```bash
luarocks install text-validation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TextValidationSDK } from 'text-validation'

const client = new TextValidationSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o text-validation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "text-validation": {
      "command": "/abs/path/to/text-validation-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Validation** | Text-presence validation calls against the Abhi-API host; the catalogued endpoint is `GET /api/search/ringtone?text=` which returns an error when the `text` parameter is absent or empty. | `/api/search/ringtone` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from textvalidation_sdk import TextValidationSDK

client = TextValidationSDK({})


# Load a specific validation
validation, err = client.Validation(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'textvalidation_sdk.php';

$client = new TextValidationSDK([]);


// Load a specific validation
[$validation, $err] = $client->Validation(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/text-validation-sdk/go"

client := sdk.NewTextValidationSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TextValidation_sdk"

client = TextValidationSDK.new({})


# Load a specific validation
validation, err = client.Validation(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("text-validation_sdk")

local client = sdk.new({})


-- Load a specific validation
local validation, err = client:Validation(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TextValidationSDK.test()
const result = await client.Validation().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TextValidationSDK.test(None, None)
result, err = client.Validation(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TextValidationSDK::test(null, null);
[$result, $err] = $client->Validation(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Validation(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TextValidationSDK.test(nil, nil)
result, err = client.Validation(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Validation(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Text Validation API

- Upstream: [https://abhi-api.vercel.app](https://abhi-api.vercel.app)
- API docs: [https://freepublicapis.com/text-validation-api](https://freepublicapis.com/text-validation-api)

- No licence is published on the API homepage or the freepublicapis.com catalogue page.
- The service is a personal/hobby project by Abhishek Suresh ([AbhishekSuresh2](https://github.com/AbhishekSuresh2)); contact the author before relying on it.
- No terms of service, attribution, or rate-limit policy are documented.
- Treat availability as best-effort: the endpoint runs on Vercel and may change or disappear without notice.

---

Generated from the Text Validation API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
