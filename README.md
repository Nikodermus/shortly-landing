# Shortly Landing

> More than just shorter links

This is a [Next.js](https://nextjs.org/) project, written with [Styled Components](https://styled-components.com/) and strict [TypeScript](https://www.typescriptlang.org/)

## 🐎 Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

---

## 🧪 Testing

This project uses `jest` as test runner and `react-testing-library` to mount React components and do component testing.

```bash
# Run all .spec and .test files inside test/
yarn test
```

To run a specific test or set of tests use `yarn test -t someName`, where someName is in the text of the tests. Tests, linting and formatting are running before each commit with [husky](https://www.npmjs.com/package/husky) so you don't commit broken tests or builds.

---

## 💫 Production

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

You can also run a production version inside your local machine with:

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
