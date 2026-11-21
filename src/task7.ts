function chunkArray<T>(items: readonly T[], chunkSize: number): T[][]
{
	if (!(Number.isInteger(chunkSize) && (chunkSize > 0)))
		throw RangeError("chunkSize is incorrect (" + chunkSize + ")");
	const r: T[][] = [];
	let crs = 0;
	if (items.length > 0)
		r.push([] as (T[]));
	for (let i = 0; i < items.length; i++)
	{
		if (r[crs].length == chunkSize)
		{
			r.push([] as (T[]));
			crs++
		}
		r[crs].push(items[i]);
	}
	return r;
}

console.log(    'const thingsILikeTape = ["oranges", "cats", "milk", "C Language", "Russian Empire"] as (string[]);')
console.log(''); const thingsILikeTape = ["oranges", "cats", "milk", "C Language", "Russian Empire"] as (string[]);
console.log(    'const emptyTape = [] as (string[]);')
console.log(''); const emptyTape = [] as (string[]);
console.log(    'const numbersTape = [ 3, 5, 8, 13, 21 ] as (number[]);')
console.log(''); const numbersTape = [ 3, 5, 8, 13, 21 ] as (number[]);

console.log('chunkArray(thingsILikeTape, 2)')
console.log( chunkArray(thingsILikeTape, 2))
console.log('chunkArray(emptyTape, 2)')
console.log( chunkArray(emptyTape, 2))
console.log('chunkArray(numbersTape, 2)')
console.log( chunkArray(numbersTape, 2))

console.log('chunkArray(emptyTape, 2.4)')
try
{
	console.log( chunkArray(emptyTape, 2.4))
}
catch (e)
{
    console.log(e)
}

console.log('thingsILikeTape')
console.log(thingsILikeTape)
console.log('emptyTape')
console.log(emptyTape)
console.log('numbersTape')
console.log(numbersTape)