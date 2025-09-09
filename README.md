

````markdown
# URL Shortener Service

A simple URL shortener built with Node.js and Express.

---

## Installation & Running

```bash
# 1. Navigate to project folder
cd your-project-folder

# 2. Install dependencies
npm install

# 3. Run the server
node index.js
````

* Server runs on **[http://localhost:3006](http://localhost:3006)**

---

## Using Postman

### 1. Shorten a URL

* **Method:** POST
* **URL:** `http://localhost:3006/api/shorten`
* **Body:** Select **raw → JSON**:

```json
{
  "originalUrl": "https://example.com"
}
```

* **Response Example:**

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
* **URL:** Use the `shortUrl` from the previous response, e.g.:

```
http://localhost:3006/abc123
```

* You will be redirected to the original URL.

---

### 3. Health Check

* **Method:** GET
* **URL:** `http://localhost:3006/`
* Returns:

```
URL Shortener service is operational.
```

```

If you want, I can also make an **even shorter version** with just commands and Postman examples so it’s 100% paste-ready. Do you want me to do that?
```
