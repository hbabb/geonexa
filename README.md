# Geonexa Website Revamp

This project involves converting the existing Geonexa WordPress website into a modern, scalable, and feature-rich web application using the Next.js framework. The revamped site will include light and dark modes, an employee/admin section, and integrations for ticketing, project management, blogging, and CRM systems.

---

## **Tech Stack**

- **Frameworks/Libraries:** Next.js v15+, React v19+, TypeScript v5+, Tailwind v3+
- **UI Components:** Shadcn UI
- **Database & ORM:** Xata (Postgres), Drizzle ORM
- **Authentication:** Clerk
- **Form Handling:** React-Hook-Form, Zod (data validation)
- **Error Tracking:** Sentry
- **Server Actions:** next-safe-action
- **Data Display:** Tanstack Table
- **Linting/Formatting:** Biome
- **Database Migrations:** Drizzle-Kit
- **Environment Variable Safety:** T3Env
- **Commit Linting:** Commitlint
- **CI/CD:** GitHub workflows
- **Deployment:** Vercel

---

## **Features**

### **User-Facing Features**

1. Blog section with light/dark mode support:
   - Users can view and comment on blog posts (authorization required).
2. Contact/quote request forms.

### **Employee Features**

1. Login to access client and ticket databases (restricted access).
2. Create, view, and edit client profiles and project tickets.
3. Manage projects and tasks:
   - Create, view, and edit projects and tasks.
   - Mark tasks as completed (completed tasks are archived).

### **Admin Features**

1. Full client, ticket, project, and task management (view, create, edit, archive).
2. Employee account management:
   - Create, suspend, and manage employee accounts.
3. CRM integration for managing client relationships.

---

## **Project Structure**

```tree
├── LICENSE
├── README.md
├── biome.json
├── commitlint.config.cjs
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── project
│   └── TechStack.md
├── public
│   ├── videos/
│   └── images/
├── src
│   ├── app
│   │   ├── actions/
│   │   ├── api/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   │   ├── fonts/
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── videos/
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── config/
│   ├── constants/
│   ├── db/
│   ├── env/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/
│       ├── query/
│       ├── schema/
│       └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Build the project:

   ```bash
   pnpm build
   ```

6. Start the production server:

   ```bash
   pnpm start
   ```

## Testing and Linting

- Run tests:

  ```bash
  pnpm test
  ```

- Run linting and formatting:

  ```bash
  pnpm lint
  pnpm format
  ```

## Deployment

- Deployment is configured for Vercel. Push changes to the `main` branch to deploy.

## License

This project is licensed under two licenses:

- Codebase: [Apache License 2.0](https://github.com/your-username/your-repo/blob/main/LICENSE)
- Blog Content: [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Xata](https://xata.io/)
- [Drizzle](https://drizzle-orm.org/)
- [Clerk](https://clerk.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Sentry](https://sentry.io/)
- [Tanstack Table](https://tanstack.com/table/v8/)
- [Biome](https://biomejs.dev/)

## Contact

If you have any questions or feedback, please don't hesitate to reach out to me. You can find me on [GitHub](https://github.com/hbabb) or on my [website](https://heath-babb.tech).

Thank you for your interest in my project!
