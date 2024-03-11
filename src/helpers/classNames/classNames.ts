// Record - специальный ts тип который означает что в обьекте ключ будет строкой, а значение булевым либо строкой (если в значение положить число будет ошибка)
type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    // Object.entries это - obj = { foo: "bar", baz: 42 }; => Object.entries(obj) = [ ['foo', 'bar'], ['baz', 42] ]
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
