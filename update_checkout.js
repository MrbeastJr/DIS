const fs = require('fs');

let content = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

// Imports
content = content.replace(
  /import { API_BASE_URL } from "@\/lib\/api";/,
  `import { API_BASE_URL } from "@/lib/api";\nimport { useLanguage } from "@/context/LanguageContext";\nimport { toast } from "react-hot-toast";`
);

// inside component
content = content.replace(
  /const \[error, setError\] = useState\(\"\"\);/,
  `const [error, setError] = useState("");\n  const { t, locale } = useLanguage();`
);

// payload
content = content.replace(
  /const payload = { \.\.\.formData, items };/,
  `const payload = { ...formData, items, locale };`
);

// toast success
content = content.replace(
  /window.open\(\`https:\/\/wa\.me\/243990301518\?text=\$\{whatsappMsg\}\`, '_blank'\);/,
  `toast.success(t.spamWarning, { duration: 8000, style: { background: '#1A1210', color: '#fff', borderRadius: '12px' } });\n      setTimeout(() => {\n        window.open(\`https://wa.me/243990301518?text=\$\{whatsappMsg\}\`, '_blank');\n      }, 3000);`
);

fs.writeFileSync('src/components/CheckoutModal.tsx', content, 'utf8');
console.log('CheckoutModal updated.');
