````markdown
# URL Shortener Service

A simple URL shortener built with Node.js and Express. Shortens long URLs and allows redirecting via short links.

---

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/url-shortener.git
````

2. Navigate to the project folder:

```bash
cd url-shortener
```

3. Install dependencies:

```bash
npm install
```

---

## Running the Server

Start the server with:

```bash
node index.js
```

Or use `nodemon` for auto-restart on changes:

```bash
npx nodemon index.js
```

The server runs on **port 3006** by default. Open in your browser or API client at:

```
http://localhost:3006
```

---

## Using the API in Postman

### 1. Shorten a URL

* **Method:** POST
* **URL:** `http://localhost:3006/api/shorten`
* **Body:** Select **raw → JSON** and send:

```json
{
  "originalUrl": "https://example.com"
}
```

* **Response:**

```json
{
  "status": "success",
  "shortUrl": "http://localhost:3006/abc123",
  "originalUrl": "https://example.com"
}
```

---

### 2. Access Shortened URL

* **Method:** GET
* **URL:** Use the `shortUrl` returned from the POST request, e.g.:

```
http://localhost:3006/abc123
```

* You will be redirected to the original URL.

---

### 3. Health Check

* **Met

