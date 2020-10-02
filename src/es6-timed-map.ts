/**
 * @name Es6TimedMap
 * An es6-map-like utility class
 */
export default class Es6TimedMap<K, V, E> {
  constructor(private _entries?: readonly [K, V, E] | null) {}

  public get size(): number {
    return this.entries?.length || 0;
  }

  public clear(): void {
    // TODO:
  }

  public delete(key: K): boolean {
    // TODO:
    return false;
  }

  public forEach(
    callback: (value: V, key: K, timedMap: Es6TimedMap<K, V, E>) => void,
    thisArg?: any
  ): void {
    // TODO:
  }

  public get(key: K): V | undefined {
    // TODO:
    return;
  }

  public has(key: K): boolean {
    // TODO:
    return true;
  }

  public set(
    key: K,
    value: V,
    expirationTime: number,
    expirationCallback?: any
  ) {
    return;
  }

  public entries(): Iterator<[K, V], any> {
    // TODO:
    return undefined as any;
  }

  public keys(): Array<K> {
    // TODO:
    return [];
  }

  public values(): Array<V> {
    // TODO:
    return [];
  }
}
