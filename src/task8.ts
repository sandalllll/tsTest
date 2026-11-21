interface Repository<T extends {id: string}>
{
	create(item: T): T;
	findById(id: string): T | undefined;
	update(id: string, changes: Partial<Omit<T, "id">>): T | undefined;
	delete(id: string): boolean;
}

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

class MemoryRepository<T extends {id: string}> implements Repository<T>
{
	lst: T[];
	constructor()
	{
		this.lst = ([] as T[]);
	}
	
	create(item: T): T
	{
		for (let i = 0; i < this.lst.length; i++)
		{
			if (this.lst[i].id == item.id)
				throw Error("Non-unique item id: " + item.id);
		}
		this.lst.push(item);
		return item;
	}
	
	findById(id: string): T | undefined
	{
		for (let i = 0; i < this.lst.length; i++)
		{
			if (this.lst[i].id == id)
				return this.lst[i];
		}
		return undefined;
	}
	
	update(id: string, changes: Partial<Omit<T, "id">>): T | undefined
	{
		for (let i = 0; i < this.lst.length; i++)
		{
			if (this.lst[i].id == id)
			{
				this.lst[i] = { ...(this.lst[i]), ...changes }
				return this.lst[i];
			}
		}
		return undefined;
	}
	
	delete(id: string): boolean
	{
		for (let i = 0; i < this.lst.length; i++)
		{
			if (this.lst[i].id == id)
			{
				this.lst.splice(i, 1);
				return true;
			}
		}
		return false;
	}
}

type Book = {id: string, name: string}

console.log(    "const mr = new MemoryRepository<Book>();")
console.log(""); const mr = new MemoryRepository<Book>();

console.log('mr.create({id:"1E5F", name: "The Stanley Parable"} as Book)')
console.log( mr.create({id:"1E5F", name: "The Stanley Parable"} as Book) )
console.log('mr.create({id:"1E5F", name: "The Narrator Parable"} as Book)')
try
{
	console.log( mr.create({id:"1E5F", name: "The Narrator Parable"} as Book) )
}
catch (e)
{
    console.log(e)
}

console.log('mr.findById("1E5F")')
console.log( mr.findById("1E5F") )
console.log('mr.findById("1E6F")')
console.log( mr.findById("1E6F") )

console.log('mr.update("1E5F", {name: "Manual 1"})')
console.log( mr.update("1E5F", {name: "Manual 1"}) )
console.log('mr.update("1E6F", {name: "Manual 2"})')
console.log( mr.update("1E6F", {name: "Manual 2"}) )

console.log('mr.delete("1E5F")')
console.log( mr.delete("1E5F") )
console.log('mr.delete("1E6F")')
console.log( mr.delete("1E6F") )