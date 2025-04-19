# Magento Cypress Automation

## 📋 Description
This project automates the Magento demo website using Cypress, applying Page Object Model, external data files, reporting with Mochawesome, and environment variables.

## 🚀 Setup Instructions

### 1. Clone the Repo
```bash
git clone <your-repo-url>
cd bamboo-qa-assignment/Task 1-UIAutomationWithCypress
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
Run without reports:
```bash
npm run test
```

Run with Mochawesome report:
```bash
npm run test:report
```

### 4. View Reports
Open HTML reports from:
```
/mochawesome-report/
```

### 5. Environment Variables (Optional)
You can pass in data via environment variables using:
```bash
CYPRESS_MAGENTO_EMAIL=test@example.com CYPRESS_MAGENTO_PASSWORD=1234 npm run test
```

---

## ✅ Test Cases Covered
- Registration Flow with Login Validation
- Place Order with Multiple Products
- Wishlist Add and Checkout
- Product Search and Result Validation

---

## 📁 Folder Structure

- `cypress/pages` – Page Objects
- `cypress/e2e` – Test cases
- `cypress/fixtures` – Test data
- `mochawesome-report` – Test reports
