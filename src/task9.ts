type DeepReadonly<T> = T extends (...args: unknown[]) => unknown
  ? T
  : T extends readonly (infer U)[]
    ? readonly DeepReadonly<U>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;

function deepFreeze<T>(obj: T): DeepReadonly<T>
{
	if (obj === null || typeof obj !== 'object')
	{
		return obj as DeepReadonly<T>;
	}
	Object.freeze(obj);
	Object.keys(obj).forEach
	((key) =>{
		const value = (obj as Record<string, unknown>)[key];
		if (value !== null && typeof value === 'object' && !Object.isFrozen(value))
		{
			deepFreeze(value);
		}
	});
	return obj as DeepReadonly<T>;
}

console.log('const obj = deepFreeze({bob:"q", not:[1, 2, "d"], rot: {lot:"w"}})')
console.log(''); const obj = deepFreeze({bob:"q", not:[1, 2, "d"], rot: {lot:"w"}})
console.log('Object.isFrozen(obj.bob)')
console.log(Object.isFrozen(obj.bob))
console.log('Object.isFrozen(obj.not)')
console.log(Object.isFrozen(obj.not))
console.log('Object.isFrozen(obj.not[1])')
console.log(Object.isFrozen(obj.not[1]))
console.log('Object.isFrozen(obj.not[2])')
console.log(Object.isFrozen(obj.not[2]))
console.log('Object.isFrozen(obj.rot)')
console.log(Object.isFrozen(obj.rot))
console.log('Object.isFrozen(obj.rot.lot)')
console.log(Object.isFrozen(obj.rot.lot))



//obj.bob = "s" //err: readonly
//obj.not = [3, 2, 1] //err: readonly
//obj.not[1] = 5 //err: readonly
//obj.not[2] = 5 //err: readonly
//obj.rot = {cat: "orange"} //err: readonly
//obj.rot.lot = "orange" //err: readonly