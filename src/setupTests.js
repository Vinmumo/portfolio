import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which framer-motion's
// whileInView relies on.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = MockIntersectionObserver;
