type Invoice = { id: string; amount: number; status: "paid" | "free" }

function sumByStatus(invoices: readonly Invoice[]): { paid: number, free: number }
{
	return invoices.reduce(
		(acc, curr) => { acc[curr.status] += curr.amount; return acc },
		{ paid: 0, free: 0 }
	)
}

console.log(    'let tapeMixed = [ {id: "orange cat", amount:1, status: "paid"}, {id: "25c coin", amount:2, status: "paid"}, {id: "wheat seed", amount:15, status: "free"} ] as (Invoice[]);')
console.log(''); let tapeMixed = [ {id: "orange cat", amount:1, status: "paid"}, {id: "25c coin", amount:2, status: "paid"}, {id: "wheat seed", amount:15, status: "free"} ] as (Invoice[]);

console.log(    'let tapeEmpty = [] as (Invoice[]);')
console.log(''); let tapeEmpty = [] as (Invoice[]);

console.log('sumByStatus(tapeMixed)');
console.log(sumByStatus(tapeMixed));

console.log('sumByStatus(tapeEmpty)');
console.log(sumByStatus(tapeEmpty));

console.log('tapeMixed');
console.log(tapeMixed);

console.log('tapeEmpty');
console.log(tapeEmpty);