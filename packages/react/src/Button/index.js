import Button from './Button'

// allows for an import * and import "default"
// src/index.js does an import *, but manual tree shaking imports "default"
export { Button }
export default Button
