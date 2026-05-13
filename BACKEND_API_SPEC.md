# DIS Backend API Specification

> **Django REST Framework** contract for the DIS corporate website frontend.  
> Send this file to your backend developer — it defines every endpoint, payload, and response the frontend expects.

---

## 🏗️ Architecture Overview

```
Frontend (Next.js)  ←→  Django REST API  ←→  PostgreSQL
                              ↓
                     WhatsApp Business API (future)
```

**Base URL:** `https://api.disservices.com/api/v1/`  
**Auth:** Token-based (`Authorization: Token <key>`) for admin endpoints  
**Public endpoints:** No auth required  
**Content-Type:** `application/json`

---

## 📦 1. Products API (Trading / E-Commerce)

> Currently hardcoded in the frontend. These endpoints will replace the static array when the Django backend is live.

### `GET /api/v1/products/`

Returns all active products for the trading storefront.

**Query Params:**
| Param | Type | Description |
|-------|------|-------------|
| `category` | string | Filter by category (e.g. `cosmetics`, `skincare`, `bodycare`) |
| `featured` | boolean | Only return featured products |
| `ordering` | string | Sort field (`-created_at`, `price`, `name`) |

**Response — 200 OK:**
```json
{
  "count": 4,
  "results": [
    {
      "id": 1,
      "name": "Exfoliating Radiance Body Scrub",
      "slug": "exfoliating-radiance-body-scrub",
      "description": "Deep skin renewal scrub targeting dead cells and restoring smooth natural brilliance.",
      "price_usd": "25.00",
      "price_fc": "50000",
      "category": "skincare",
      "tag": "Best Seller",
      "image": "https://api.disservices.com/media/products/scrub.jpg",
      "in_stock": true,
      "featured": true,
      "whatsapp_prefill": "Hi Okey, I am interested in ordering the Exfoliating Radiance Body Scrub listed on your catalog.",
      "created_at": "2026-01-15T10:00:00Z"
    }
  ]
}
```

### `GET /api/v1/products/{slug}/`

Returns a single product detail.

**Response — 200 OK:**
```json
{
  "id": 1,
  "name": "Exfoliating Radiance Body Scrub",
  "slug": "exfoliating-radiance-body-scrub",
  "description": "Deep skin renewal scrub...",
  "long_description": "Formulated with natural...",
  "price_usd": "25.00",
  "price_fc": "50000",
  "category": "skincare",
  "tag": "Best Seller",
  "images": [
    "https://api.disservices.com/media/products/scrub-1.jpg",
    "https://api.disservices.com/media/products/scrub-2.jpg"
  ],
  "in_stock": true,
  "featured": true,
  "related_products": [2, 3]
}
```

### Django Model Reference

```python
# products/models.py

class Product(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    long_description = models.TextField(blank=True)
    price_usd = models.DecimalField(max_digits=10, decimal_places=2)
    price_fc = models.CharField(max_length=50, help_text="Congolese Franc price display string")
    category = models.CharField(max_length=50, choices=[
        ('cosmetics', 'Cosmetics'),
        ('skincare', 'Skincare'),
        ('bodycare', 'Body Care'),
        ('haircare', 'Hair Care'),
    ])
    tag = models.CharField(max_length=50, blank=True, help_text="e.g. Best Seller, Featured, Popular")
    image = models.ImageField(upload_to='products/')
    in_stock = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-featured', '-created_at']

    def __str__(self):
        return self.name

    @property
    def whatsapp_prefill(self):
        return f"Hi Okey, I am interested in ordering the {self.name} listed on your catalog."
```

---

## 📬 2. Contact / Inquiry API

> Captures form submissions from the CTA section and service pages.

### `POST /api/v1/inquiries/`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Global Trade Corp",
  "service_interest": "logistics",
  "message": "We need cross-border freight management from Lagos to Lubumbashi.",
  "source_page": "/services/logistics",
  "locale": "en"
}
```

**Validation Rules:**
- `name` — required, max 100 chars
- `email` — required, valid email
- `phone` — optional
- `company` — optional
- `service_interest` — one of: `logistics`, `consulting`, `procurement`, `trading`, `general`
- `message` — required, max 2000 chars
- `source_page` — auto-populated by frontend
- `locale` — `en`, `fr`, or `es`

**Response — 201 Created:**
```json
{
  "id": 42,
  "status": "received",
  "message": "Thank you. We will contact you within 24 hours."
}
```

### Django Model Reference

```python
# inquiries/models.py

class Inquiry(models.Model):
    SERVICE_CHOICES = [
        ('logistics', 'Logistics'),
        ('consulting', 'Consulting'),
        ('procurement', 'Procurement'),
        ('trading', 'Trading'),
        ('general', 'General'),
    ]
    STATUS_CHOICES = [
        ('received', 'Received'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=150, blank=True)
    service_interest = models.CharField(max_length=20, choices=SERVICE_CHOICES, default='general')
    message = models.TextField(max_length=2000)
    source_page = models.CharField(max_length=100, blank=True)
    locale = models.CharField(max_length=5, default='en')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='received')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Inquiries'
```

---

## 💬 3. Testimonials API

> Manages partner testimonials displayed on the homepage carousel.

### `GET /api/v1/testimonials/`

**Response — 200 OK:**
```json
{
  "count": 3,
  "results": [
    {
      "id": 1,
      "quote": "DIS transformed our cross-border supply chain...",
      "author": "Amara Okafor",
      "role": "CEO, West Africa Trade Corp",
      "region": "Lagos, Nigeria",
      "rating": 5,
      "is_active": true,
      "order": 1
    }
  ]
}
```

### Django Model Reference

```python
# testimonials/models.py

class Testimonial(models.Model):
    quote = models.TextField(max_length=500)
    author = models.CharField(max_length=100)
    role = models.CharField(max_length=150)
    region = models.CharField(max_length=100)
    rating = models.PositiveIntegerField(default=5, validators=[MaxValueValidator(5)])
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
```

---

## 📊 4. Analytics / Page View Tracking

> Lightweight analytics for tracking page views and service interest.

### `POST /api/v1/analytics/pageview/`

**Request Body:**
```json
{
  "page": "/services/trading",
  "referrer": "https://google.com",
  "locale": "fr",
  "device": "mobile",
  "session_id": "abc123"
}
```

**Response — 201 Created:**
```json
{ "status": "tracked" }
```

---

## 🔐 5. Admin Authentication

> For the Django admin panel and protected management endpoints.

### `POST /api/v1/auth/login/`

**Request Body:**
```json
{
  "username": "admin",
  "password": "securepassword"
}
```

**Response — 200 OK:**
```json
{
  "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
  "user": {
    "id": 1,
    "username": "admin",
    "is_staff": true
  }
}
```

---

## ⚙️ 6. Site Configuration API

> Dynamic site settings managed from Django admin.

### `GET /api/v1/config/`

**Response — 200 OK:**
```json
{
  "company_name": "DIGITAL INTEGRATED SERVICES RDC",
  "ceo_name": "Okey Francis CHIBUEZE",
  "whatsapp_number": "+243978360413",
  "email": "okeycongo@gmail.com",
  "linkedin_url": "https://www.linkedin.com/in/okey-francis-chibueze-3b803063",
  "facebook_url": "https://www.facebook.com/DigitalRationalServicesLtd/",
  "address_congo": "32, Av. Sendwe / Des Usines, Lubumbashi, Haut-Katanga, DR Congo",
  "address_nigeria": "Nigeria Hub: Lagos",
  "rc_number": "1492798",
  "hero_video_url": "/assets/hero-video.mp4",
  "logo_url": "/assets/dis-logo.png"
}
```

---

## 🔗 Frontend Integration Points

Here is exactly where each API endpoint gets consumed in the Next.js frontend:

| Endpoint | Frontend File | Current State |
|----------|--------------|---------------|
| `GET /products/` | `src/app/services/[service]/page.tsx` | ⚠️ Hardcoded array `cosmeticProducts` |
| `POST /inquiries/` | `src/sections/FinalCTASection.tsx` | ⚠️ Direct WhatsApp link (no form yet) |
| `GET /testimonials/` | `src/sections/TestimonialsSection.tsx` | ⚠️ Hardcoded array `testimonials` |
| `POST /analytics/pageview/` | `src/app/layout.tsx` | ❌ Not implemented |
| `GET /config/` | `src/components/Footer.tsx`, `Navbar.tsx` | ⚠️ Hardcoded values |

---

## 🗄️ Django Project Setup Reference

```bash
# Create Django project
django-admin startproject dis_backend .

# Create apps
python manage.py startapp products
python manage.py startapp inquiries
python manage.py startapp testimonials
python manage.py startapp analytics
python manage.py startapp config

# Install dependencies
pip install djangorestframework django-cors-headers pillow gunicorn psycopg2-binary whitenoise

# settings.py additions
INSTALLED_APPS += [
    'rest_framework',
    'corsheaders',
    'products',
    'inquiries',
    'testimonials',
    'analytics',
    'config',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    'https://disservices.com',
    'https://www.disservices.com',
    'http://localhost:3000',
]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}
```

### URL Configuration

```python
# urls.py
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/products/', include('products.urls')),
    path('api/v1/inquiries/', include('inquiries.urls')),
    path('api/v1/testimonials/', include('testimonials.urls')),
    path('api/v1/analytics/', include('analytics.urls')),
    path('api/v1/config/', include('config.urls')),
    path('api/v1/auth/', include('rest_framework.urls')),
]
```

---

## 🚀 Deployment Checklist for Backend Dev

- [ ] Set up PostgreSQL database
- [ ] Configure `CORS_ALLOWED_ORIGINS` with production domain
- [ ] Set up media file storage (S3 or local)
- [ ] Create superuser for Django admin
- [ ] Seed initial products from the hardcoded array
- [ ] Configure WhatsApp Business API webhook (future phase)
- [ ] Set up SSL certificate
- [ ] Deploy to Railway / Render / DigitalOcean

---

**Questions? Contact the frontend developer or reach out to CEO Okey Francis CHIBUEZE directly on WhatsApp: +243 978 360 413**
