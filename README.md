# Poli Coffee

Poli Coffee e-commerce website with Nextjs for Frontend subject at Politecnico Grancolombiano University.

## Requirements

- nodejs
- pmpn

## Getting Started

Install dependencies:

```bash
pnpm i
```

Build:

```bash
pnpm build
```

Local development:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Workflow: Git strategy and deployment

Steps:

- make sure you are in main branch

```bash
git checkout main
```

- pull from main branch

```bash
git pull origin main
```

- create branch and work locally

```bash
git checkout -b <branch-name>
```

- commit your changes and push

```bash
git add .
git commit -m "commit description about code changes"
git push origin <branch-name>
```

- create a Pull Request and wait for approval
- once approved, merge it to main, it will trigger the deployment to Vercel
