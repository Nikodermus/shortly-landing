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

## Styling

This project uses a set of utilities to create a [CSS Variables Design System](https://www.infoq.com/news/2020/06/css-variables-design-systems/), using as source `src/constants/styled.ts`, use your browser to see all the generated variables.

```typescript
const StyledP = styled.p`
  // 🔴 Avoid using random measures
  padding: 20px;

  // ✅ Use the system
  padding: var(--sizing-MD);
`;
```

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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), see it [live](https://shortly-landing.vercel.app/)

You can also run a production version inside your local machine with:

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
