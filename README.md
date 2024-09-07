# @jvddavid/ts-events

This is a module where I added the EventMap type to the events library

## Install

```bash
npm install @jvddavid/ts-events
```

## Example

```typescript
import { EventEmitter } from '@jvddavid/ts-events'

type TestEventMap = {
  test: [message: string]
}

const emitter = new EventEmitter<TestEventMap>()

emitter.on('test', (message) => {
  console.log(message)
})

```
