function addTag(tape: readonly string[], tag: string): string[]
{
	let r: string[] = [tag];
	for (let i = 0; i < tape.length; i++)
	{
		if (tape[i] != tag)
			r.push(tape[i]);
	}
	return r;
}

function removeTag(tape: readonly string[], tag: string): string[]
{
	let r: string[] = [];
	for (let i = 0; i < tape.length; i++)
	{
		if (tape[i] != tag)
			r.push(tape[i]);
	}
	return r;
}

function mergeTags(tape1: readonly string[], tape2: readonly string[]): string[]
{
	let r: string[] = [];
	for (let i = 0; i < tape1.length; i++)
		r.push(tape1[i]);
	for (let i = 0; i < tape2.length; i++)
	{
		let flag = true;
		for (let j = 0; j < tape1.length; j++)
		{
			if (tape2[i] == tape1[j])
			{
				flag = false;
				break;
			}
		}
		if (flag)
			r.push(tape2[i]);
	}
	return r;
}

console.log('let tape1 = ["bob", "rob", "not", "rgb"]')
console.log(''); let tape1 = ["bob", "rob", "not", "rgb"]
console.log('let tape2 = ["rob", "rgb", "sop", "cat"]')
console.log(''); let tape2 = ["rob", "rgb", "sop", "cat"]

console.log('addTag(tape1, "mop")')
console.log(addTag(tape1, "mop"))
console.log('addTag(tape1, "not")')
console.log(addTag(tape1, "not"))

console.log('removeTag(tape1, "mop")')
console.log(removeTag(tape1, "mop"))
console.log('removeTag(tape1, "not")')
console.log(removeTag(tape1, "not"))

console.log('mergeTags(tape1, tape2)')
console.log(mergeTags(tape1, tape2))
console.log('mergeTags(tape1, tape2)')
console.log(mergeTags(tape1, tape2))

console.log('...tape1')
console.log(...tape1)
console.log('...tape2')
console.log(...tape2)