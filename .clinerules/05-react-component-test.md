# React Component Test Rules

These rules define best practices and conventions for unit testing React components using Vitest and React Testing Library in this project. These rules are mandatory for all unit tests in this repository.

## 1. Testing Library Best Practices

- **Query Prioritization**: Use queries in this order:
  1. `getByRole` (most accessible)
  2. `getByLabelText`
  3. `getByPlaceholderText`
  4. `getByText`
  5. `getByDisplayValue`
  6. `getByAltText`
  7. `getByTitle`
  8. `getByTestId` (last resort)
- **User-Centric Testing**: Prefer `@testing-library/user-event` over `fireEvent`
- **Accessibility**: Verify DOM roles and ARIA attributes where applicable

## 2. Component Rendering

- Test both presentational and behavioral aspects:
  - Rendering with different props
  - User interactions (clicks, inputs, etc.)
  - Conditional rendering
- Mock external dependencies using `vi.fn()` and `vi.mock()`

## 3. Test Data Management

- Create reusable test data factories
- Keep test data within the test file unless shared across multiple tests

## 4. Performance Optimization

- Use `vi.spyOn()` instead of full module mocks when possible
- Clean up resources after tests using `afterEach(cleanup)`
- Use `vi.resetAllMocks()` in `afterEach` to avoid test pollution

## 5. Assertion Guidelines

- Focus on observable behavior rather than implementation details
- Verify DOM changes rather than state changes
- Use meaningful custom error messages in assertions

## 6. Test File Organization

- Place test files alongside components.
- Name test files with `.test.tsx` extension: `Component.tsx` → `Component.test.tsx`
