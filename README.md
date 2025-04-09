# 📱 Rosolve Taxi App

## 🚀 Getting Started

Follow these steps to get the app running on your machine.

## ✅ Prerequisites

- Node.js (Recommended: version 18 LTS)
- npm (comes with Node.js)
- Git

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/denisbajgora5/rosolve-mobile-app.git

# 2. Navigate into the project
cd rosolve-mobile-app

# 3. Install frontend/client dependencies
cd client
npm install

# 4. To start the client (make sure you are in the client directory):
npx expo start

# 5. Install backend/server dependencies
cd ../server
npm install

# To start the server run (make sure you are in the server directory):
npm run dev
```
## ⚙️ Environment Configuration

Create a .env file in the project root with the following contents:

EXPRESS_SERVER_IP=<YOUR_LOCAL_IP_ADDRESS>
EXPRESS_SERVER_PORT=<YOUR_PORT_NUMBER>

    🔐 Note:
    Replace <YOUR_LOCAL_IP_ADDRESS> with your machine’s private IP (e.g., 192.168.1.10).
    Replace <YOUR_PORT_NUMBER> with your desired server port (e.g., 5000).

    To find your local IP:

        Windows: ipconfig

        macOS/Linux: ifconfig