import { describe } from 'vitest'
import { EventEmitter } from '../src/index'

type EventMap = {
  foo: [string]
  bar: [number]
}

describe(
  'EventEmitter TypeScript',
  (it) => {
    it(
      'should work',
      ({ expect }) => {
        const sut = new EventEmitter<EventMap>()
        sut.once(
          'foo',
          (arg) => {
            expect(arg).toBe('hello')
          }
        )
        sut.emit(
          'foo',
          'hello'
        )
      }
    )
  }
)
