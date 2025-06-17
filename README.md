# Chat-Room

A chat room allows users chat online.

## 🗺️ Site Map - NanoChat Messaging System

### ✅ Main Pages

- `/login` - Login Page

  - Input: username & password
  - Login button
  - Link to register → `/register`
  - Redirects back to previous target (e.g., `/chat/:id`) upon successful login

- `/register` - Registration Page

  - Input: username & password
  - Optional: invite code (autofilled from shared link)
  - Automatically logs in & redirects after success

- `/invite` - Invitation Landing Page

  - URL format: `/invite?room=abc123&code=6G4df2Kp`
  - Checks login status (redirects to `/login` if not logged in)
  - Validates invite code
  - If valid → joins the chat room and redirects to `/chat/abc123`

- `/home` - Post-login Welcome Page

  - Displays username (“Welcome back”)
  - “Continue Chat” button → opens last active chat
  - “Start New Chat” button → POST `/chat/start` → redirect to `/chat/:id`
  - “Log Out” button

- `/chat/:chatId` - Chat Room Page

  - Header Bar:
    - Room title
    - Back button → `/home`
    - Share button (copy invite link)
  - Scrollable message area:
    - Each message includes: user name, timestamp, content
  - Message input field + send button
  - Optional: member list / online users indicator

- `/404` or `/*` - Not Found / Fallback Page
  - Displays “Page not found”
  - Offers redirect to `/home` or `/login`

---

### 🔐 Authentication Logic

- Unauthenticated access to `/chat/:id`, `/home`, `/invite` → auto-redirects to `/login`
- Persistent login using `localStorage + React Context`
- Successful login restores intended navigation path