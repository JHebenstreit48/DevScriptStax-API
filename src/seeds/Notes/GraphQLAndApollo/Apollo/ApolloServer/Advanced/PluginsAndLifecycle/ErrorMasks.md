## Error Masks and Safer Errors

---

### Overview

GraphQL errors should be useful to clients while avoiding leaking sensitive internal details.

Error masking is the practice of controlling what the client sees versus what is logged internally.

---

### Logging Errors (High-Level)

Recommended goals:

- Log detailed errors internally for debugging
- Return safe, consistent errors to the client
- Avoid leaking stack traces, secrets, or internal implementation details

---

### Handling GraphQL Validation Errors (High-Level)

Validation errors occur when a request does not match the schema.

Common approaches include:

- Returning a clear client-facing error message
- Logging the operation and relevant metadata for investigation
