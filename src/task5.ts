function applyPipeline<T1, T2>(val0: T1, stage0: (val0: T1) => T2): T2;
function applyPipeline<T1, T2, T3>(val0: T1, stage0: (val0: T1) => T2, stage1: (val0: T2) => T3): T3;
function applyPipeline<T1, T2, T3, T4>(val0: T1, stage0: (val0: T1) => T2, stage1: (val0: T2) => T3, stage2: (val0: T3) => T4): T4;

function applyPipeline<T1, T2, T3, T4>(val0: T1, stage0: (val0: T1) => T2, stage1?: (val0: T2) => T3, stage2?: (val0: T3) => T4): T4 | T3 | T2
{
	if (stage2 !== undefined && stage1 !== undefined)
		return stage2(stage1(stage0(val0)));
	
	if (stage1 !== undefined)
		return stage1(stage0(val0));
	
	return stage0(val0);
}

function addOne(x: number): number
{
	return x + 1;
}

function divideByTwo(x: number): number
{
	return x / 2;
}

function addWord(x: number): string
{
	return x + "bob";
}

console.log('applyPipeline(3, addOne)');
console.log(applyPipeline(3, addOne));
console.log('applyPipeline(3, addOne, addWord)');
console.log(applyPipeline(3, addOne, addWord));
console.log('applyPipeline(3, addOne, divideByTwo, addWord)');
console.log(applyPipeline(3, addOne, divideByTwo, addWord));

//не скомпилируется из-за несовпадения типов у addWord выход - string, а у divideByTwo вход - number
//console.log(applyPipeline(3, addOne, addWord, divideByTwo));