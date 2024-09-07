import { EventEmitter as VanillaEventEmitter } from 'events'

export type EventMap = Record<string, unknown[]>
export type EventMapKeys<T extends EventMap> = keyof T & string
export type EventMapArgs<T extends EventMap, K extends EventMapKeys<T>> = T[K]

export class EventEmitter<ListenEvents extends EventMap = EventMap, EmitEvents extends EventMap = ListenEvents> extends VanillaEventEmitter {
  emit<EventName extends EventMapKeys<EmitEvents>, EventArgs extends EventMapArgs<EmitEvents, EventName>>(eventName: EventName, ...eventArg: EventArgs) {
    return super.emit(
      eventName,
      ...eventArg
    )
  }

  addListener<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(
    eventName: EventName,
    handler: (...eventArg: EventArgs) => void
  ) {
    return super.addListener(
      eventName,
      handler
    )
  }

  on<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(eventName: EventName, handler: (...eventArg: EventArgs) => void) {
    return super.on(
      eventName,
      handler
    )
  }

  once<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(eventName: EventName, handler: (...eventArg: EventArgs) => void) {
    return super.once(
      eventName,
      handler
    )
  }

  prependListener<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(
    eventName: EventName,
    handler: (...eventArg: EventArgs) => void
  ) {
    return super.prependListener(
      eventName,
      handler
    )
  }

  prependOnceListener<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(
    eventName: EventName,
    handler: (...eventArg: EventArgs) => void
  ) {
    return super.prependOnceListener(
      eventName,
      handler
    )
  }

  removeListener<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(
    eventName: EventName,
    handler: (...eventArg: EventArgs) => void
  ) {
    return super.removeListener(
      eventName,
      handler
    )
  }

  off<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(eventName: EventName, handler: (...eventArg: EventArgs) => void) {
    return super.off(
      eventName,
      handler
    )
  }

  removeAllListeners<EventName extends EventMapKeys<ListenEvents>>(eventName?: EventName) {
    return super.removeAllListeners(eventName)
  }

  listeners<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(eventName: EventName) {
    return super.listeners(eventName) as ((...eventArg: EventArgs) => void)[]
  }

  listenerCount<EventName extends EventMapKeys<ListenEvents>>(eventName: EventName) {
    return super.listenerCount(eventName)
  }

  rawListeners<EventName extends EventMapKeys<ListenEvents>, EventArgs extends EventMapArgs<ListenEvents, EventName>>(eventName: EventName) {
    return super.rawListeners(eventName) as ((...eventArg: EventArgs) => void)[]
  }

  eventNames(): (EventMapKeys<ListenEvents> | symbol)[] {
    return super.eventNames()
  }

  getMaxListeners(): number {
    return super.getMaxListeners()
  }

  setMaxListeners(n: number): this {
    return super.setMaxListeners(n)
  }
}
