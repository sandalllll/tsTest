type UserId = string & { readonly __brand: unique symbol }

const isHex = (str: string) => /^[0-9A-F]+$/.test(str);
function isUserId(value: unknown): value is UserId
{
	if (typeof value !== "string")
		return false;
	const elms = value.split("-")
	if (elms.length != 5)
		return false;
	for (let i = 0; i < 5; i++)
	{
		if (!isHex(elms[i]))
			return false;
	}
	return true;
}

function getUser(userId: unknown): {name: string, id: UserId}
{
	if (!isUserId(userId))
		return { name: "", id: "0-0-0-0-0" as UserId };
	return { name: "Someone with id: " + (userId as string), id: userId };
}

console.log('getUser("8-4-4-4-12" as UserId)')
console.log(getUser("8-4-4-4-12" as UserId))
console.log('getUser("8-cat-4-dog" as UserId)')
console.log(getUser("8-cat-4-dog" as UserId))
console.log('getUser(4)')
console.log(getUser(4))