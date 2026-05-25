# AW Website Builder

A website builder with **20 pre-built templates** (10 static + 10 dynamic) covering 10 industries. Templates are NOT AI-generated — AI is only used to fill content gaps when user data is missing.

## Architecture

```
src/
├── templates/
│   ├── static/          # 10 complete HTML templates (Handlebars)
│   └── dynamic/         # 10 React component templates (Next.js)
├── engine/              # Build engine (template selection + content injection)
├── ai/                  # Content filler (fills gaps ONLY)
├── assets/              # Hero image system (curated Unsplash images)
├── config/              # Industry definitions + template registry
└── app/                 # Next.js App Router (preview + API)
```

## Industries Covered

| Industry | Static Template | Dynamic Template | Hero Image |
|----------|----------------|------------------|------------|
| Restaurant & Food | ✅ | ✅ | Fine dining interior |
| Healthcare & Medical | ✅ | ✅ | Modern hospital |
| Real Estate | ✅ | ✅ | Luxury property |
| Education & Learning | ✅ | ✅ | Campus graduation |
| Fitness & Gym | ✅ | ✅ | Gym equipment |
| Technology & SaaS | ✅ | ✅ | Circuit board |
| Legal & Law Firm | ✅ | ✅ | Law library |
| Photography & Creative | ✅ | ✅ | Camera in action |
| Salon & Spa | ✅ | ✅ | Beauty salon |
| Construction & Building | ✅ | ✅ | Construction site |

## How It Works

1. **User selects industry** → Pre-built template is chosen (not generated)
2. **User provides content** → Business name, phone, email, etc.
3. **AI fills gaps** → ONLY missing fields are generated (optional)
4. **Template rendered** → Content injected into pre-built template

## Usage

### CLI (Static Generation)

```bash
# Generate a restaurant website
node src/engine/generate.js restaurant --name "Mario's Bistro"

# Generate with options
node src/engine/generate.js technology --type dynamic --name "CloudCo" --variant 2

# See all options
node src/engine/generate.js --help
```

### Next.js App (Dynamic Preview)

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### API

```bash
# Generate website content
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"industry": "restaurant", "content": {"businessName": "Mario Bistro"}}'
```

## AI Content Filler

AI is **optional** and only fills missing content:

- If `businessName` is empty → AI generates one
- If `heroTitle` is empty → AI generates one
- If no AI key → Deterministic fallback content is used

**AI does NOT:**
- Generate templates
- Modify template structure
- Choose layouts or designs
- Create new sections

## Hero Image System

Each industry has:
- 1 primary hero image
- 3 variant alternatives
- 4+ section-specific images
- Pre-configured overlay colors

All images are from Unsplash (free, high-quality, commercial-use).

## Environment Variables

```
OPENAI_API_KEY=sk-...  # Optional - for AI content filling only
```

## Tech Stack

- **Next.js 14** - App Router + API routes
- **React 18** - Dynamic template components
- **Tailwind CSS** - Dynamic template styling
- **Handlebars** - Static template variable injection
- **OpenAI** - Content gap filling (optional)
