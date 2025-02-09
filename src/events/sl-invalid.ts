type SlInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-invalid': SlInvalidEvent;
  }
}

export default SlInvalidEvent;
